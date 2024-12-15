export type Post = {
    title: string;
    slug: string;
    excerpt?: string;
    publishedAt?: string;
    mainImage?: { asset?: { url: string }; alt?: string };
    author?: { name: string };
    categories?: { title: string; slug?: string }[];
    tags?: string[];
};

export type Props = {
    posts: Post[];
    totalPages: number;
    currentPage: number;
    selectedCategory?: string | undefined;
    selectedTag?: string | undefined;
};
