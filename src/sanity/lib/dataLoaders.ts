import { loadQuery } from './load-query';
import type { Post } from '@/types';

export async function loadCategories() {
    return loadQuery<{ title: string; slug: { current: string } }[]>({
        query: `*[_type == "category"]{title, slug}`,
    });
}

export async function loadPosts(
    categoryParam: string,
    offset: number,
    postsPerPage: number
) {
    const categoryFilter =
        categoryParam !== 'all'
            ? `&& $catSlug in categories[]->slug.current`
            : '';
    return loadQuery<Post[]>({
        query: `*[_type == "post" ${categoryFilter}]| order(publishedAt desc)[$start...$end]{
            title,
            "slug": slug.current,
            excerpt,
            publishedAt,
            mainImage{
                asset->{
                    url
                },
                alt
            },
            "author": author->{
                name
            },
            categories[]->{
                title,
                "slug": slug.current
            },
            tags
        }`,
        params: {
            catSlug: categoryParam,
            start: offset,
            end: offset + postsPerPage,
        },
    });
}

export async function countPosts(categoryParam: string) {
    const categoryFilter =
        categoryParam !== 'all'
            ? `&& $catSlug in categories[]->slug.current`
            : '';
    return loadQuery<number>({
        query: `count(*[_type == "post" ${categoryFilter}])`,
        params: { catSlug: categoryParam },
    });
}

export async function loadFeaturedPosts() {
    return loadQuery({
        query: `*[_type == "post" && featured == true]{
            title,
            "slug": slug.current,
            excerpt,
            publishedAt,
            "author": author->{
                name
            },
            mainImage{
                asset->{
                    url
                },
                alt
            },
            tags,
            categories[]->{
                title,
                "slug": slug.current
            }
        }`,
    });
}

export async function loadAuthors() {
    return loadQuery({
        query: `*[_type == "author"]{name,slug,image{asset->{url}}}`,
    });
}

export async function loadTags() {
    return loadQuery<string[]>({
        query: `array::unique(*[_type == "post"].tags[])`,
    });
}

export async function loadPostsByTag(
    tagSlug: string | null,
    offset: number,
    postsPerPage: number
) {
    const tagFilter = tagSlug ? `&& $tagSlug in tags` : '';
    return loadQuery<Post[]>({
        query: `*[_type == "post" ${tagFilter}]| order(publishedAt desc)[$start...$end]{
            title,
            "slug": slug.current,
            excerpt,
            publishedAt,
            mainImage{
                asset->{
                    url
                },
                alt
            },
            "author": author->{
                name
            },
            categories[]->{
                title,
                "slug": slug.current
            },
            tags
        }`,
        params: {
            start: offset,
            end: offset + postsPerPage,
            ...(tagSlug && { tagSlug }),
        },
    });
}

export async function countPostsByTag(tagSlug: string | null) {
    const tagFilter = tagSlug ? `&& $tagSlug in tags` : '';
    return loadQuery<number>({
        query: `count(*[_type == "post" ${tagFilter}])`,
        params: {
            ...(tagSlug && { tagSlug }),
        },
    });
}
