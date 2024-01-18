export interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
  categories: string[];
}

export interface ArticleWithSlug extends Article {
  slug: string;
}
