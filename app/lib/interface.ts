export interface Post {
    [x: string]: any;
    title: String,
    overview: String,
    _id: String,
    slug: {
        current: String
    },
    _createdAt: String,
    // content: String 
}