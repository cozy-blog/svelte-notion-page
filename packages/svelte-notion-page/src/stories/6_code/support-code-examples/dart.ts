import { dedent } from 'ts-dedent';
export const dart = dedent`
function sum(n) {
	if(n == 1) return 1;
	if(n % 2 == 1) return n + sum(n-1)
	return Math.pow(n/2, 2) + 2 * sum(n / 2)
}
`;
