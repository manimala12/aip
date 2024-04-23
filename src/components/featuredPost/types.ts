export interface FeaturedPostProps {
  post: Post;
}

export interface Post {
  date: string;
  description: string;
  image: string;
  imageLabel: string;
  title: string;
}
