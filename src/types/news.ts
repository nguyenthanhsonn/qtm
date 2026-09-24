export type NewsCategory =
  | "Tất cả"
  | "Xu hướng Event 2026"
  | "Công nghệ & AI Sự kiện"
  | "Quản trị & Vận hành"
  | "Truyền thông & Branding"
  | "Chuyên sâu & Case Study";

export interface NewsAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  publishedAt: string;
  readTime: string;
  views: number;
  author: NewsAuthor;
  coverImage: string;
  featured?: boolean;
  tags: string[];
  highlights?: string[];
  relatedSlugs?: string[];
}
