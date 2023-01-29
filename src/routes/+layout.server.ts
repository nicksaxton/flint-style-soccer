import { client } from '$lib/cms';
import type { Page } from '$lib/types';
import type { LayoutServerLoad } from './$types';

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
