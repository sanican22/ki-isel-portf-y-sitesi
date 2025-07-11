
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface Skill {
    name: string;
    icon: React.ReactNode;
}
