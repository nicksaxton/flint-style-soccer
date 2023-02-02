import { client } from '$lib/cms';
import type { Page } from '$lib/types';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const data = await client.fetch(`*[_type == "page"] | order(menuOrder) { title, path }`);

	if (data) {
		const pages = (data as Page[]).map((page) => ({
			title: page.title,
			path: page.path
		}));

		return { pages };
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
