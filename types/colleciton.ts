
export interface Post {
    id: string;
    title: string;
    description: string;
    category: Category;
    author: Author;
    slug: String;
    image: String;
    body: String;
    date_created: String;
    date_updated: String;
}

export interface Category {
    id: string;
    title: String;
    slug?: String;
    description?: String;
}

export interface Author{
    id: string;
    first_name: String;
    last_name: String;
}