import sanityClient from '@sanity/client';

import {
	SANITY_API_VERSION,
	SANITY_DATASET,
	SANITY_PROJECT_ID,
	SANITY_TOKEN
} from '$env/static/private';
import type { Volunteer } from './types';

const client = sanityClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: SANITY_API_VERSION,
	token: SANITY_TOKEN,
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
	return await client.fetch(`*[_type == "post"] | order(publishDate desc)`);
};

export const saveVolunteer = async (data: Volunteer) => {
	await client.create({
		_type: 'volunteer',
		firstName: data.firstName,
		lastName: data.lastName,
		email: data.email,
		phone: data.phone,
		shirtSize: data.shirtSize
	});
};
