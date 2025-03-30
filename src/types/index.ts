export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  role: string;
  description: string;
  imageUrl: string;
}

export interface RoadmapItem {
  date: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
} 