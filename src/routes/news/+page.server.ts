import { getPosts } from '$lib/cms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const data = await getPosts();

  if (data) {
    return {
      posts: data
    };
  } else {
    return {
      status: 500,
      body: new Error('Internal Server Error')
    };
  }
};
