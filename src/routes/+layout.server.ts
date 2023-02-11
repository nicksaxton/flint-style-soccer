import { getMenu } from '$lib/cms';
import type { MenuItem } from '$lib/types';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const data = await getMenu();

	if (data?.menu) {
		const menu = (data.menu as MenuItem[]).map((page) => ({
			title: page.title,
			slug: page.slug || ''
		}));

		return { menu };
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
