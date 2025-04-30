export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
}

export interface SkillGroup {
    category: string;
    technologies: string[];
}
export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}