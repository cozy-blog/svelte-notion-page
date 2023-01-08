import { Client } from "@notionhq/client"
import type { ClientOptions } from "@notionhq/client/build/src/Client"
import type {
  BlockObjectResponse,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints"

export default class NotionClient extends Client {
  constructor(options: ClientOptions = {}) {
    super(options)
  }

  async fetchBlocks(parentId: string): Promise<Block[]> {
    const rawBlocks = await this.blocks.children.list({
      block_id: parentId,
      page_size: 100,
    })
    let blocks = rawBlocks.results

    if (rawBlocks.has_more) {
      let cursor = rawBlocks.next_cursor
      do {
        const additional = await this.blocks.children.list({
          block_id: parentId,
          page_size: 100,
          start_cursor: cursor ?? undefined,
        })
        blocks = [...blocks, ...additional.results]
        cursor = additional.next_cursor
      } while (cursor)
    }

    const result = (await Promise.all(
      blocks.map(async (block) => {
        if ((block as BlockObjectResponse)?.has_children) {
          const response = await this.fetchBlocks(block.id)
          return { ...block, blocks: response }
        }
        return Promise.resolve({ ...block, blocks: [] })
      })
    )) as Block[]

    return result
  }

  async fetchFullPage(pageId: string): Promise<ContentfulPage> {
    const [page, blocks] = await Promise.all([
      this.pages.retrieve({ page_id: pageId }),
      this.fetchBlocks(pageId),
    ])

    return { ...page, blocks }
  }
}

export type Block = BlockObjectResponse & { blocks: Block[] }
export type ContentfulPage = GetPageResponse & { blocks: Block[] }
export { ClientOptions }
