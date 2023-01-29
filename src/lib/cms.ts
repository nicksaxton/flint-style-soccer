import sanityClient from '@sanity/client';

import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID } from '$env/static/private';

export const client = sanityClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: SANITY_API_VERSION,
	useCdn: false
});
