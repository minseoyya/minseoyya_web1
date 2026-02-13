export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  media: MediaItem[];
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  alt?: string;
}
