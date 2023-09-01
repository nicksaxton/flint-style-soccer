import { getSponsors } from '$lib/cms';

export const load = async () => {
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
