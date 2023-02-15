<script lang="ts">
	import type { BookmarkProps } from '$lib/types';
	import RichText from './base/richtext/RichText.svelte';
	export let props: BookmarkProps;
	const {
		bookmark: { url, caption }
	} = props;
	export let depth: number;
	export let getMeta = (url: string) => {
		return {
			title: '',
			description: '',
			image: 'https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk.jpg',
			icon: 'https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk.jpg'
		};
	};
	$: ({ title, description, image, icon } = getMeta(url));
</script>

<div class="notion-block notion-bookmark">
	<a target="_blank" rel="noopener noreferrer" href={url} class="notion-bookmark-content">
		<div class="notion-bookmark-details">
			<h3 class="notion-bookmark-title">{title}</h3>
			<p class="notion-bookmark-description">{description}</p>
			<div class="notion-bookmark-link">
				<div class="notion-bookmark-link-icon">
					<img src={icon} alt="favicon" />
				</div>
				<p class="notion-bookmark-link-text">{url}</p>
			</div>
		</div>
		<div class="notion-bookmark-image">
			<img src={image} alt="thumbnail" />
		</div>
	</a>
	{#if caption.length !== 0}
		<div class="notion-asset-caption">
			<RichText props={caption} />
		</div>
	{/if}
</div>

<style>
	.notion-bookmark {
		margin-top: 2px;
		margin-bottom: 2px;
	}

	.notion-bookmark-content {
		height: 106px;
		cursor: pointer;
		display: flex;
		overflow: hidden;
		border: 1px solid var(--fg-color-1);
		border-radius: 3px;
		box-sizing: border-box;
		user-select: none;
		text-decoration: none;
	}

	.notion-bookmark-content:hover {
		background-color: rgb(245, 245, 245);
	}

	.notion-bookmark-image {
		flex: 1 1 180px;
		width: 0px;
		background-color: rgb(243 244 246);
		position: relative;
	}

	.notion-bookmark-image > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.notion-bookmark-details {
		padding: 12px 14px 14px 14px;
		flex: 4 1 180px;
		width: 0px;
		color: var(--fg-color);
	}

	.notion-bookmark-title {
		width: 100%;
		font-size: 14px;
		line-height: 20px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		min-height: 24px;
		margin-bottom: 2px;
	}

	.notion-bookmark-link {
		width: 100%;
		margin-top: 6px;
		display: flex;
		height: 20px;
		align-items: center;
	}
	.notion-bookmark-link-text {
		font-size: 12px;
		line-height: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.notion-bookmark-link-icon {
		width: 16px;
		height: 16px;
		background-color: rgb(243 244 246);
		min-width: 16px;
		margin-right: 6px;
	}

	.notion-bookmark-link-icon > img {
		width: 100%;
		height: 100%;
		display: block;
	}

	.notion-bookmark-description {
		font-size: 12px;
		line-height: 16px;
		opacity: 0.8;
		height: 32px;
		overflow: hidden;
		display: -webkit-box !important;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		white-space: normal;
	}
</style>