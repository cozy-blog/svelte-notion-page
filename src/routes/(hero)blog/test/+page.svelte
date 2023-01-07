<svelte:head>
  <title>테스트 paragrap</title>
</svelte:head>
      <script>
        import Error from "$lib/notion2svelte/Error.svelte";
        import Cover from "$lib/notion2svelte/Cover.svelte"
        import Title from "$lib/notion2svelte/Title.svelte"
        import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte"
        import Callout from "$lib/notion2svelte/Callout.svelte"
        import ChildPage from "$lib/notion2svelte/ChildPage.svelte"
        import Code from "$lib/notion2svelte/Code.svelte"
        import ColumnList from "$lib/notion2svelte/ColumnList.svelte"
        import Column from "$lib/notion2svelte/Column.svelte"
        import Divider from "$lib/notion2svelte/Divider.svelte"
        import Embed from "$lib/notion2svelte/Embed.svelte"
        import Header from "$lib/notion2svelte/Header.svelte"
        import Image from "$lib/notion2svelte/Image.svelte"
        import IndentGroup from "$lib/notion2svelte/IndentGroup.svelte"
        import Underline from "$lib/notion2svelte/Underline.svelte"
        import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
        import InlineColor from "$lib/notion2svelte/InlineColor.svelte"
        import Equation from "$lib/notion2svelte/Equation.svelte"
        import Link from "$lib/notion2svelte/Link.svelte"
        import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte"
        import Paragraph from "$lib/notion2svelte/Paragraph.svelte"
        import Quote from "$lib/notion2svelte/Quote.svelte"
        import TodoItem from "$lib/notion2svelte/TodoItem.svelte"
        import Toggle from "$lib/notion2svelte/Toggle.svelte"
        import { setContext } from 'svelte';

        setContext('pageStuff', {
  "pageId": "591d29d3cb194273bb3a82644ed4faa4",
  "title": "테스트 paragrap"
});
      </script>
      

  <Cover coverURL={"/assets/test/cover.png"} iconEmojiOrURL={"undefined"} />

  <Title>테스트 paragrap</Title>




  <Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"06d7c6ab-cb38-4039-bde8-fec3b85ea728","created_time":"2023-01-07T04:10:00.000Z","last_edited_time":"2023-01-07T04:38:00.000Z"}}>

</Paragraph>
<Toggle>it’s toggle
<span slot="children"><Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"595469e2-7685-40e3-9e0e-6155111ba39b","created_time":"2023-01-07T04:41:00.000Z","last_edited_time":"2023-01-07T04:41:00.000Z"}}>
toggle body
</Paragraph>
<Toggle>toggle in toggle
<span slot="children"></span></Toggle></span></Toggle><Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"e77001a4-9b1b-40ea-9349-a73d022e7d87","created_time":"2023-01-07T03:39:00.000Z","last_edited_time":"2023-01-07T04:42:00.000Z"}}>

</Paragraph>
<Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"f938d548-9cdb-4250-8f51-2b49af2598f8","created_time":"2023-01-07T04:08:00.000Z","last_edited_time":"2023-01-07T04:41:00.000Z"}}>

</Paragraph>
<IndentGroup>
  <Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"4f450777-4131-4750-ae22-fa36f3bd7169","created_time":"2023-01-07T03:39:00.000Z","last_edited_time":"2023-01-07T04:40:00.000Z"}}>
nest paragraph
</Paragraph>
<Toggle>it’s toggle
<span slot="children"></span></Toggle>
</IndentGroup>
<Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"a199ef95-dd63-4812-a43c-1f8a84ac6fd3","created_time":"2023-01-07T04:37:00.000Z","last_edited_time":"2023-01-07T04:37:00.000Z"}}>

</Paragraph>
<Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"23d49ee9-d260-4b92-9ba8-999570eb91ee","created_time":"2023-01-07T04:30:00.000Z","last_edited_time":"2023-01-07T04:30:00.000Z"}}>

</Paragraph>

  