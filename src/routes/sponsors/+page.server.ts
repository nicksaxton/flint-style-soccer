import { getSponsors } from '$lib/cms';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = await getSponsors();

	if (data) {
		return {
			sponsors: data
		};
	} else {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}
};
