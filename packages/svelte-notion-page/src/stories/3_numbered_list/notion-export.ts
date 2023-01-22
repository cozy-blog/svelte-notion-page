export const json = {
	object: 'page',
	id: '591d29d3-cb19-4273-bb3a-82644ed4faa4',
	created_time: '2022-12-28T23:30:00.000Z',
	last_edited_time: '2023-01-07T04:04:00.000Z',
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
			rich_rich_text: [
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
			rich_rich_text: []
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
			last_edited_time: '2023-01-07T04:02:00.000Z',
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
			id: 'd50ebfb1-0348-45de-b7f6-f46d88e28c9c',
			parent: {
				type: 'page_id',
				page_id: '591d29d3-cb19-4273-bb3a-82644ed4faa4'
			},
			created_time: '2023-01-07T03:50:00.000Z',
			last_edited_time: '2023-01-07T04:04:00.000Z',
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
			type: 'numbered_list_item',
			numbered_list_item: {
				color: 'blue_background',
				rich_text: [
					{
						type: 'text',
						text: {
							content: 'one',
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
						plain_text: 'one',
						href: null
					}
				]
			}
		},
		{
			object: 'block',
			id: 'fc1392ce-f19c-4c41-a826-e5fb994c785c',
			parent: {
				type: 'page_id',
				page_id: '591d29d3-cb19-4273-bb3a-82644ed4faa4'
			},
			created_time: '2023-01-07T04:02:00.000Z',
			last_edited_time: '2023-01-07T04:02:00.000Z',
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
			type: 'numbered_list_item',
			numbered_list_item: {
				color: 'default',
				rich_text: [
					{
						type: 'text',
						text: {
							content: 'two',
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
						plain_text: 'two',
						href: null
					}
				]
			},
			blocks: [
				{
					object: 'block',
					id: '45ab7612-44b8-40b0-9ee3-e19276213ed1',
					parent: {
						type: 'block_id',
						block_id: 'fc1392ce-f19c-4c41-a826-e5fb994c785c'
					},
					created_time: '2023-01-07T04:02:00.000Z',
					last_edited_time: '2023-01-07T04:02:00.000Z',
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
						color: 'green_background',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'nest paragraph',
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
								plain_text: 'nest paragraph',
								href: null
							}
						]
					}
				}
			]
		},
		{
			object: 'block',
			id: '08846ebb-712f-4441-a068-fd38b909617c',
			parent: {
				type: 'page_id',
				page_id: '591d29d3-cb19-4273-bb3a-82644ed4faa4'
			},
			created_time: '2023-01-07T04:02:00.000Z',
			last_edited_time: '2023-01-07T04:03:00.000Z',
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
			type: 'numbered_list_item',
			numbered_list_item: {
				color: 'default',
				rich_text: [
					{
						type: 'text',
						text: {
							content: 'three',
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
						plain_text: 'three',
						href: null
					}
				]
			},
			blocks: [
				{
					object: 'block',
					id: '40202f86-5b59-40a1-a94c-c8e7fee7c8fc',
					parent: {
						type: 'block_id',
						block_id: '08846ebb-712f-4441-a068-fd38b909617c'
					},
					created_time: '2023-01-07T04:02:00.000Z',
					last_edited_time: '2023-01-07T04:02:00.000Z',
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
					type: 'numbered_list_item',
					numbered_list_item: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'one',
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
								plain_text: 'one',
								href: null
							}
						]
					}
				},
				{
					object: 'block',
					id: 'd5b6a3f7-f9ea-434d-9e3b-41185fbcf17e',
					parent: {
						type: 'block_id',
						block_id: '08846ebb-712f-4441-a068-fd38b909617c'
					},
					created_time: '2023-01-07T04:02:00.000Z',
					last_edited_time: '2023-01-07T04:03:00.000Z',
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
					type: 'numbered_list_item',
					numbered_list_item: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'two',
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
								plain_text: 'two',
								href: null
							}
						]
					},
					blocks: [
						{
							object: 'block',
							id: 'e537e1e9-a609-42ee-b20d-8b89dc7d0453',
							parent: {
								type: 'block_id',
								block_id: 'd5b6a3f7-f9ea-434d-9e3b-41185fbcf17e'
							},
							created_time: '2023-01-07T04:03:00.000Z',
							last_edited_time: '2023-01-07T04:03:00.000Z',
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
								color: 'green_background',
								rich_text: [
									{
										type: 'text',
										text: {
											content: 'nest paragraph',
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
										plain_text: 'nest paragraph',
										href: null
									}
								]
							}
						}
					]
				},
				{
					object: 'block',
					id: '11d67279-49d5-4afa-b45e-4a7fa31291e9',
					parent: {
						type: 'block_id',
						block_id: '08846ebb-712f-4441-a068-fd38b909617c'
					},
					created_time: '2023-01-07T04:02:00.000Z',
					last_edited_time: '2023-01-07T04:03:00.000Z',
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
					type: 'numbered_list_item',
					numbered_list_item: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: 'three',
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
								plain_text: 'three',
								href: null
							}
						]
					},
					blocks: [
						{
							object: 'block',
							id: '0da28021-1eec-4b7c-892c-bc3da1b486a7',
							parent: {
								type: 'block_id',
								block_id: '11d67279-49d5-4afa-b45e-4a7fa31291e9'
							},
							created_time: '2023-01-07T04:02:00.000Z',
							last_edited_time: '2023-01-07T04:02:00.000Z',
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
							type: 'numbered_list_item',
							numbered_list_item: {
								color: 'default',
								rich_text: [
									{
										type: 'text',
										text: {
											content: 'one',
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
										plain_text: 'one',
										href: null
									}
								]
							}
						},
						{
							object: 'block',
							id: '83e33617-aed3-4ab5-b581-ce3cceeeb778',
							parent: {
								type: 'block_id',
								block_id: '11d67279-49d5-4afa-b45e-4a7fa31291e9'
							},
							created_time: '2023-01-07T04:02:00.000Z',
							last_edited_time: '2023-01-07T04:03:00.000Z',
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
							type: 'numbered_list_item',
							numbered_list_item: {
								color: 'default',
								rich_text: [
									{
										type: 'text',
										text: {
											content: 'two',
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
										plain_text: 'two',
										href: null
									}
								]
							},
							blocks: [
								{
									object: 'block',
									id: 'a74d376a-ec45-47e2-aff2-8165e23ad705',
									parent: {
										type: 'block_id',
										block_id: '83e33617-aed3-4ab5-b581-ce3cceeeb778'
									},
									created_time: '2023-01-07T04:03:00.000Z',
									last_edited_time: '2023-01-07T04:03:00.000Z',
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
										color: 'green_background',
										rich_text: [
											{
												type: 'text',
												text: {
													content: 'nest paragraph',
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
												plain_text: 'nest paragraph',
												href: null
											}
										]
									}
								}
							]
						},
						{
							object: 'block',
							id: '61fd2e57-e1e7-477a-b21d-69b3fa5f9779',
							parent: {
								type: 'block_id',
								block_id: '11d67279-49d5-4afa-b45e-4a7fa31291e9'
							},
							created_time: '2023-01-07T04:02:00.000Z',
							last_edited_time: '2023-01-07T04:04:00.000Z',
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
							type: 'numbered_list_item',
							numbered_list_item: {
								color: 'blue_background',
								rich_text: [
									{
										type: 'text',
										text: {
											content: 'three',
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
										plain_text: 'three',
										href: null
									}
								]
							}
						}
					]
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
			last_edited_time: '2023-01-07T04:04:00.000Z',
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
