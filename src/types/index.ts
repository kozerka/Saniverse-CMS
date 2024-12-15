export type Category = {
    title: string;
    slug?: string;
};

export type Post = {
    title: string;
    slug: string;
    excerpt?: string;
    author?: Author;
    publishedAt?: string;
    mainImage?: { asset?: { url?: string }; alt?: string };
    tags?: string[];
    categories?: Category[];
};

export type Props = {
    posts: Post[];
    totalPages: number;
    currentPage: number;
    selectedCategory?: string;
    selectedTag?: string;
};
export type Author = {
    name: string;
    slug?: string;
    image?: { asset?: { url?: string }; alt?: string };
};
