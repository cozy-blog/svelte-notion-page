export function getColorCss(color: string) {
	switch (color) {
		case 'red':
			return 'notion-red';
		case 'pink':
			return 'notion-pink';
		case 'blue':
			return 'notion-blue';
		case 'purple':
			return 'notion-purple';
		case 'teal':
			return 'notion-teal';
		default:
			return 'notion-default';
	}
}
