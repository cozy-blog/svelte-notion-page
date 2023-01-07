export default async function (page, scenario, vp) {
	await import('./loadCookies')(page, scenario);
}
