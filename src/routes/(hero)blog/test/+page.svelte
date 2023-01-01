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




  <Equation block={true} katexString="asdfasdf
asadf
asdf" /><Equation block={true} katexString="이것은 인용입니다
???? 
인용문은 글자 색을 못바꾸나
??
f(n) = x^2+ss" /><Callout emoji="undefined">asdf<span slot="children"><Equation block={true} katexString="ㅇ리ㅣ" /></span></Callout><Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"0383b0f8-57ff-4a2d-a570-72ea7324c363","created_time":"2023-01-01T04:52:00.000Z","last_edited_time":"2023-01-01T05:58:00.000Z"}}>
zxcv
</Paragraph>
<Equation block={true} katexString="asdf" /><Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"db5dbf18-b8ae-44dc-8b34-7a567d7b0997","created_time":"2023-01-01T04:52:00.000Z","last_edited_time":"2023-01-01T05:58:00.000Z"}}>
???asdf
</Paragraph>
<Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"cacf20bc-6144-49d0-b386-b631472a7f5e","created_time":"2023-01-01T05:58:00.000Z","last_edited_time":"2023-01-01T06:00:00.000Z"}}>
asdfs
</Paragraph>
<ColumnList cols={2}><Column><Callout emoji="undefined"></Callout><Callout emoji="💡">asdf</Callout></Column><Column><Callout emoji="💡"></Callout><Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"e43d2834-ebf6-425c-bd71-22ca200f9a18","created_time":"2023-01-01T04:52:00.000Z","last_edited_time":"2023-01-01T04:52:00.000Z"}}>

</Paragraph>
</Column></ColumnList><Callout emoji="💡">하이<span slot="children"><Paragraph blockProps={{"pageId":"591d29d3cb194273bb3a82644ed4faa4","id":"9834bd2c-f640-40bc-bc48-5ee23ca3db26","created_time":"2023-01-01T04:31:00.000Z","last_edited_time":"2023-01-01T04:32:00.000Z"}}>
ㅋㅋ
</Paragraph>
</span></Callout><Callout emoji="💡">asdf???</Callout>
  