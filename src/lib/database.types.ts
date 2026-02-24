export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      guides: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string;
          category: 'chatgpt' | 'imagen' | 'productividad' | 'automatizacion';
          image_url: string | null;
          video_url: string | null;
          featured: boolean;
          reading_time: string;
          content: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          category: 'chatgpt' | 'imagen' | 'productividad' | 'automatizacion';
          image_url?: string | null;
          video_url?: string | null;
          featured?: boolean;
          reading_time: string;
          content: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string;
          category?: 'chatgpt' | 'imagen' | 'productividad' | 'automatizacion';
          image_url?: string | null;
          video_url?: string | null;
          featured?: boolean;
          reading_time?: string;
          content?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          category: 'tutoriales' | 'noticias' | 'tips' | 'herramientas';
          image_url: string | null;
          featured: boolean;
          reading_time: string | null;
          author_id: string;
          created_at: string;
          published_at: string | null;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          category: 'tutoriales' | 'noticias' | 'tips' | 'herramientas';
          image_url?: string | null;
          featured?: boolean;
          reading_time?: string | null;
          author_id: string;
          created_at?: string;
          published_at?: string | null;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          category?: 'tutoriales' | 'noticias' | 'tips' | 'herramientas';
          image_url?: string | null;
          featured?: boolean;
          reading_time?: string | null;
          author_id?: string;
          created_at?: string;
          published_at?: string | null;
        };
      };
      authors: {
        Row: {
          id: string;
          name: string;
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
        };
      };
    };
  };
}

// Tipos de conveniencia
export type DbGuide = Database['public']['Tables']['guides']['Row'];
export type DbBlogPost = Database['public']['Tables']['blog_posts']['Row'];
export type DbAuthor = Database['public']['Tables']['authors']['Row'];
