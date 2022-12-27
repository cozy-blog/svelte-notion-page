# svelte-notion-page

> This library is an experimental state. It would be changed rapidly.

`svetle-notion-page` is component who render page using a notion. see [example](/src/routes/+page.svelte).

## Using a customized provider

```sveltehtml

<script lang="ts">
    import {defaultComponents, NotionPage, NotionComponentProvider} from 'cozylog/svelte-notion-page';
    import {json} from './post.js'; // notion page blocks
    import {setContext} from 'svelte';
    import {PROVIDER_KEY} from '$lib/context';

    const provider = new NotionComponentProvider({
        ...defaultComponents,
    });

    // Set a customized provider in Context("notion_component_provider").
    setContext(PROVIDER_KEY, provider);
</script>

<NotionPage content={json}/>
```