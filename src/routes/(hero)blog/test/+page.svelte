<svelte:head>
  <title>테스트 paragrap </title>
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
  "title": "테스트 paragrap "
});
      </script>
      

  <Cover coverURL={"/assets/test/cover.png"} iconEmojiOrURL={"undefined"} />

  <Title>테스트 paragrap </Title>




  <TodoItem checked={true}>할 일 있습니다</TodoItem>
<IndentGroup>
  <TodoItem checked={true}>뎁스 추가</TodoItem>
<TodoItem checked={false}>체크 여부는?</TodoItem>

</IndentGroup>
<Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"9d9bb2f7-c222-42ee-8e97-ba6e9135a998","created_time":"2022-12-31T14:27:00.000Z","last_edited_time":"2022-12-31T15:40:00.000Z"}}>
하이
</Paragraph>
<IndentGroup>
  <Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"4899ca16-d429-41ea-adf2-74d4035f0414","created_time":"2022-12-31T15:40:00.000Z","last_edited_time":"2022-12-31T15:40:00.000Z"}}>
??
</Paragraph>

</IndentGroup>
<TodoItem checked={false}></TodoItem>

  