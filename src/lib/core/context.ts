import type { NotionThemeStyle } from '$lib/types';
import { getContext, hasContext, setContext } from 'svelte/internal';
import type { NotionComponentProvider } from './NotionComponentProvider';

export const NOTION_PAGE_INFO_KEY = 'notion_page_info';
const NOTION_COMPONENT_PROVIDER_KEY = 'notion_component_provider';
const NOTION_THEME_KEY = 'notion_theme';

export const notionThemeContext = {
	get() {
		return getContext<NotionThemeStyle>(NOTION_THEME_KEY);
	},
	set(themeStyle: NotionThemeStyle) {
		return setContext(NOTION_THEME_KEY, themeStyle);
	},
	exist() {
		return hasContext(NOTION_THEME_KEY);
	}
};

export const notionComponentProvierContext = {
	get() {
		return getContext<NotionComponentProvider>(NOTION_COMPONENT_PROVIDER_KEY);
	},
	exist() {
		return hasContext(NOTION_COMPONENT_PROVIDER_KEY);
	},
	set(provider: NotionComponentProvider) {
		return setContext(NOTION_COMPONENT_PROVIDER_KEY, provider);
	}
};