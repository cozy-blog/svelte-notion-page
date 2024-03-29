export function getCodeExampleJson(code: string, language: string) {
	return {
		object: 'page',
		blocks: [
			{
				object: 'block',
				type: 'code',
				code: {
					caption: [],
					language: language,
					rich_text: [
						{
							type: 'text',
							text: {
								content: code,
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
							plain_text: code,
							href: null
						}
					]
				}
			}
		]
	};
}
