import { getPage } from '$lib/cms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data = await getPage(params.slug);

	if (data) {
		return {
			page: data
		};
	} else {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}
};
