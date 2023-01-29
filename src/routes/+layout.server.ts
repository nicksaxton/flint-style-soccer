import sanityClient from '@sanity/client';

import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID } from '$env/static/private';

import type { Page } from '$lib/types';
import type { LayoutServerLoad } from './$types';

const client = sanityClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: SANITY_API_VERSION,
	useCdn: false
});

export const load: LayoutServerLoad = async () => {
	const data = await client.fetch(`*[_type == "page"]`);

	if (data) {
		const pages = (data as Page[])
			.sort((a, b) => a.order - b.order)
			.map((page) => ({
				title: page.title,
				order: page.order,
				path: page.path
			}));
		return {
			pages
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
