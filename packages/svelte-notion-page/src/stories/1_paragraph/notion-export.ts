export const json = {
	object: 'page',
	id: '591d29d3-cb19-4273-bb3a-82644ed4faa4',
	created_time: '2022-12-28T23:30:00.000Z',
	last_edited_time: '2023-01-07T03:43:00.000Z',
	created_by: {
		object: 'user',
		id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
	},
	last_edited_by: {
		object: 'user',
		id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
	},
	cover: {
		type: 'external',
		external: {
			url: 'https://www.notion.so/images/page-cover/solid_beige.png'
		}
	},
	icon: null,
	parent: {
		type: 'database_id',
		database_id: 'be65d799-9e98-4426-86a6-72072991e27b'
	},
	archived: false,
	properties: {
		HashTags: {
			id: 'Hhkx',
			type: 'multi_select',
			multi_select: []
		},
		'생성 일시': {
			id: 'J%7C%3BZ',
			type: 'created_time',
			created_time: '2022-12-28T23:30:00.000Z'
		},
		Slug: {
			id: 'S%3A%7B%3E',
			type: 'rich_text',
			rich_text: [
				{
					type: 'text',
					text: {
						content: 'test',
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
					plain_text: 'test',
					href: null
				}
			]
		},
		Description: {
			id: 'qTV%3E',
			type: 'rich_text',
			rich_text: []
		},
		Status: {
			id: 'vu%7C%3B',
			type: 'select',
			select: {
				id: '|QrX',
				name: 'Publishable',
				color: 'green'
			}
		},
		Name: {
			id: 'title',
			type: 'title',
			title: [
				{
					type: 'text',
					text: {
						content: '테스트 paragrap',
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
					plain_text: '테스트 paragrap',
					href: null
				}
			]
		}
	},
	url: 'https://www.notion.so/paragrap-591d29d3cb194273bb3a82644ed4faa4',
	blocks: [
		{
			object: 'block',
			id: 'e77001a4-9b1b-40ea-9349-a73d022e7d87',
			parent: {
				type: 'page_id',
				page_id: '591d29d3-cb19-4273-bb3a-82644ed4faa4'
			},
			created_time: '2023-01-07T03:39:00.000Z',
			last_edited_time: '2023-01-07T03:40:00.000Z',
			created_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			last_edited_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			has_children: false,
			archived: false,
			type: 'paragraph',
			paragraph: {
				color: 'gray_background',
				rich_text: []
			}
		},
		{
			object: 'block',
			id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d',
			parent: {
				type: 'page_id',
				page_id: '591d29d3-cb19-4273-bb3a-82644ed4faa4'
			},
			created_time: '2023-01-07T03:39:00.000Z',
			last_edited_time: '2023-01-07T03:42:00.000Z',
			created_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			last_edited_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			has_children: true,
			archived: false,
			type: 'paragraph',
			paragraph: {
				color: 'gray_background',
				rich_text: [
					{
						type: 'text',
						text: {
							content: 'it’s text paragraph',
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
						plain_text: 'it’s text paragraph',
						href: null
					}
				]
			},
			blocks: [
				{
					object: 'block',
					id: '3f6e7d4c-8e2f-48c6-b481-04083f30f0b0',
					parent: {
						type: 'block_id',
						block_id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d'
					},
					created_time: '2023-01-07T03:40:00.000Z',
					last_edited_time: '2023-01-07T03:40:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'bold',
									link: null
								},
								annotations: {
									bold: true,
									italic: false,
									strikethrough: false,
									underline: false,
									code: false,
									color: 'default'
								},
								plain_text: 'bold',
								href: null
							}
						]
					}
				},
				{
					object: 'block',
					id: '2cf72f66-6095-49e7-a6f5-d61a691fc7e5',
					parent: {
						type: 'block_id',
						block_id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d'
					},
					created_time: '2023-01-07T03:40:00.000Z',
					last_edited_time: '2023-01-07T03:41:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'inclined',
									link: null
								},
								annotations: {
									bold: false,
									italic: true,
									strikethrough: false,
									underline: false,
									code: false,
									color: 'default'
								},
								plain_text: 'inclined',
								href: null
							}
						]
					}
				},
				{
					object: 'block',
					id: '83d607da-3cba-4e2b-90fb-57aba2c04100',
					parent: {
						type: 'block_id',
						block_id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d'
					},
					created_time: '2023-01-07T03:41:00.000Z',
					last_edited_time: '2023-01-07T03:41:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'underlined',
									link: null
								},
								annotations: {
									bold: false,
									italic: false,
									strikethrough: false,
									underline: true,
									code: false,
									color: 'default'
								},
								plain_text: 'underlined',
								href: null
							}
						]
					}
				},
				{
					object: 'block',
					id: '2599abe4-d04a-496a-98fd-47ddd4332e15',
					parent: {
						type: 'block_id',
						block_id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d'
					},
					created_time: '2023-01-07T03:41:00.000Z',
					last_edited_time: '2023-01-07T03:41:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'stroke-through',
									link: null
								},
								annotations: {
									bold: false,
									italic: false,
									strikethrough: true,
									underline: false,
									code: false,
									color: 'default'
								},
								plain_text: 'stroke-through',
								href: null
							}
						]
					}
				},
				{
					object: 'block',
					id: '743d5d1b-fbc4-4781-a822-3ddfde2c7e43',
					parent: {
						type: 'block_id',
						block_id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d'
					},
					created_time: '2023-01-07T03:41:00.000Z',
					last_edited_time: '2023-01-07T03:41:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'code',
									link: null
								},
								annotations: {
									bold: false,
									italic: false,
									strikethrough: false,
									underline: false,
									code: true,
									color: 'default'
								},
								plain_text: 'code',
								href: null
							}
						]
					}
				},
				{
					object: 'block',
					id: '06e4c770-1901-41d7-a9b5-3117059130c8',
					parent: {
						type: 'block_id',
						block_id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d'
					},
					created_time: '2023-01-07T03:41:00.000Z',
					last_edited_time: '2023-01-07T03:42:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'equation',
								equation: {
									expression: 'E=mc^2'
								},
								annotations: {
									bold: false,
									italic: false,
									strikethrough: false,
									underline: false,
									code: false,
									color: 'default'
								},
								plain_text: 'E=mc^2',
								href: null
							}
						]
					}
				},
				{
					object: 'block',
					id: '6429479a-bc08-4d5d-8a0a-7556c7bd3434',
					parent: {
						type: 'block_id',
						block_id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d'
					},
					created_time: '2023-01-07T03:42:00.000Z',
					last_edited_time: '2023-01-07T03:42:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'blue',
									link: null
								},
								annotations: {
									bold: false,
									italic: false,
									strikethrough: false,
									underline: false,
									code: false,
									color: 'blue'
								},
								plain_text: 'blue',
								href: null
							}
						]
					}
				},
				{
					object: 'block',
					id: 'd798d451-268d-46b0-9a6b-93ef14b5f4a0',
					parent: {
						type: 'block_id',
						block_id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d'
					},
					created_time: '2023-01-07T03:42:00.000Z',
					last_edited_time: '2023-01-07T03:43:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'mixed',
									link: null
								},
								annotations: {
									bold: true,
									italic: true,
									strikethrough: true,
									underline: true,
									code: true,
									color: 'green'
								},
								plain_text: 'mixed',
								href: null
							}
						]
					}
				},
				{
					object: 'block',
					id: 'd798d451-268d-46b0-9a6b-93ef14b5f4a0',
					parent: {
						type: 'block_id',
						block_id: '11fa13e3-3efd-4b8e-825d-1c0dd09d811d'
					},
					created_time: '2023-01-07T03:42:00.000Z',
					last_edited_time: '2023-01-07T03:43:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: '<div>hi</div>',
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
								plain_text: '<div>hi</div>',
								href: null
							}
						]
					}
				}
			]
		},
		{
			object: 'block',
			id: '5c21c2a7-e2ce-4e2d-9c5a-3c1f37ab67d5',
			parent: {
				type: 'page_id',
				page_id: '591d29d3-cb19-4273-bb3a-82644ed4faa4'
			},
			created_time: '2023-01-07T03:39:00.000Z',
			last_edited_time: '2023-01-07T03:40:00.000Z',
			created_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			last_edited_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			has_children: false,
			archived: false,
			type: 'paragraph',
			paragraph: {
				color: 'gray_background',
				rich_text: []
			}
		}
	]
};
