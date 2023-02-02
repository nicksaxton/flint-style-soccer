import { client } from '$lib/cms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data = await client.fetch(`*[_type == "page" && slug == $slug] { content }[0]`, {
		slug: params.slug || null
	});

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
