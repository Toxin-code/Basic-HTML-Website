export type Article = {
    id: string;
    title: string;
    publishDate: string;
    content: string;
};

export const articles: Article[] = [
    {
        id: 'how-to-use-react',
        title: 'How to Use React Effectively',
        publishDate: 'September 26, 2025',
        content: 'This is the full text of the article about React. It can be very long and include many paragraphs.',
    },
    {
        id: 'css-tricks-for-beginners',
        title: 'CSS Tricks for Beginners',
        publishDate: 'September 20, 2025',
        content: 'Here we discuss some cool CSS tricks that every new developer should know.',
    },
];