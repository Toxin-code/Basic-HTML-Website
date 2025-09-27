export type Project = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
};

export const projects: Project[] = [
    {
        id: 'e-commerce-store',
        title: 'E-commerce Store',
        description: 'A fully functional online store built with React and Redux.',
        imageUrl: '/path/to/e-commerce-image.jpg',
        technologies: ['React', 'TypeScript', 'Redux', 'Antd'],
    },
    {
        id: 'portfolio-site',
        title: 'Portfolio Website',
        description: 'The very site you are looking at right now, built to showcase my skills.',
        imageUrl: '/path/to/portfolio-image.jpg',
        technologies: ['React', 'TypeScript', 'TanStack Router', 'CSS'],
    },
];