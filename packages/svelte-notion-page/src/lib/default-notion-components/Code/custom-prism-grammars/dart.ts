export const dart = {
	comment: [
		// ...
	],
	string: {
		pattern: /(["'])(?:(?!\1)[^\\\n]|\\[\s\S])*\1/,
		greedy: true
	},
	keyword: [
		// ...
	],
	function: {
		pattern: /(\w+)(\s+)(\w+)(\s*)(\()/g,
		matches: {
			1: 'keyword',
			2: null,
			3: 'function',
			4: null,
			5: 'operator punctuation'
		}
	}
	// ...
}

export default dart