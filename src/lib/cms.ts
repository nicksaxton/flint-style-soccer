import sanityClient from '@sanity/client';

import {
	PUBLIC_SANITY_API_VERSION,
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_PROJECT_ID
} from '$env/static/public';

export const client = sanityClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: PUBLIC_SANITY_API_VERSION,
	useCdn: false
});
