export interface Posts {
    data: Post[];
}

export interface Post {
    id:         number;
    attributes: PostAttributes;
}

export interface PostAttributes {
    title:       string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    locale:      string;
    content:     string;
    category:    string;
}