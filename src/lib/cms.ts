import sanityClient from '@sanity/client';

import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID } from '$env/static/private';

const client = sanityClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: SANITY_API_VERSION,
	useCdn: false
});

export const getMenu = async () => {
	return await client.fetch(`{ 'menu': *[_type == "page"] | order(menuOrder) { title, slug } }`);
};

export const getPage = async (slug: string) => {
	return await client.fetch(
		`*[_type == "page" && slug == $slug] {
			mainImage {
				'url': asset->url
			},
			content[] {
				...,
				_type == "image" => {
					'url': asset->url
				}
			} 
		}[0]`,
		{
			slug: slug || null
		}
	);
};

export const getPosts = async () => {
	return await client.fetch(
		`*[_type == "post"] | order(publishDate)`
	)
}
