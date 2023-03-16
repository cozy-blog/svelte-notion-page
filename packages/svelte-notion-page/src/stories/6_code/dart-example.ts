import { dedent } from 'ts-dedent';
const dartCode = dedent`// asdflkn it's javascript code block
  function sum(n) {
    if(n == 1) return 1;
    if(n % 2 == 1) return n + sum(n-1)
    return Math.pow(n/2, 2) + 2 * sum(n / 2)
  }
`;

export const dartJson = {
	object: 'page',
	blocks: [
		{
			object: 'block',
			type: 'code',
			code: {
				caption: [],
				language: 'javascript',
				rich_text: [
					{
						type: 'text',
						text: {
							content: dartCode,
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: dartCode,
						href: null
					}
				]
			}
		}
	]
};
