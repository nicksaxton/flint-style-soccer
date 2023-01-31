import { client } from '$lib/cms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const data = await client.fetch(`*[_type == "page" && path == $path]{ content }`, {
		path: url.pathname
	});

	if (data) {
		return {
			page: data[0]
		};
	} else {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}
};
