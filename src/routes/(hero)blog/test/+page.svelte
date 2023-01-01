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




  <Quote>이것은 인용입니다
<br />
???? 
<br />
인용문은 글자 색을 못바꾸나?
<br />
</Quote><ColumnList cols={2}><Column><Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"981c553e-d2f2-4eba-978b-ba90367aaa4c","created_time":"2023-01-01T04:26:00.000Z","last_edited_time":"2023-01-01T04:44:00.000Z"}}>

</Paragraph>
<Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"14e01917-e41c-4fb4-ba2f-0b27ba572356","created_time":"2023-01-01T04:26:00.000Z","last_edited_time":"2023-01-01T04:45:00.000Z"}}>
asdf
</Paragraph>
</Column><Column><Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"0ada6b31-1d63-4f94-8b9f-b3c846d91115","created_time":"2023-01-01T04:26:00.000Z","last_edited_time":"2023-01-01T04:43:00.000Z"}}>

</Paragraph>
</Column></ColumnList><Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"22d88673-a74a-4899-aea2-67eee33965ff","created_time":"2023-01-01T04:23:00.000Z","last_edited_time":"2023-01-01T04:31:00.000Z"}}>
asdf
</Paragraph>
<IndentGroup>
  <Quote>함ㅇ림ㄴㅇ리ㅣ</Quote>
</IndentGroup>
<Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"80559768-90f6-4e98-bb6b-87c042028d19","created_time":"2023-01-01T04:23:00.000Z","last_edited_time":"2023-01-01T04:47:00.000Z"}}>
하이
</Paragraph>
<IndentGroup>
  <Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"9834bd2c-f640-40bc-bc48-5ee23ca3db26","created_time":"2023-01-01T04:31:00.000Z","last_edited_time":"2023-01-01T04:32:00.000Z"}}>
ㅋㅋ
</Paragraph>

</IndentGroup>
<Quote>asdf???</Quote>
  