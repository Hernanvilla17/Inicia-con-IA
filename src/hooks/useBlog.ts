"use client";

import { useState, useEffect } from 'react';
// import { supabase } from '@/lib/supabase';
// import type { DbBlogPost, DbAuthor } from '@/lib/database.types';

// Por ahora usa datos locales, preparado para migrar a Supabase
import { blogPosts as localBlogPosts, type BlogPost } from '@/data/blog';

interface UseBlogPostsOptions {
  category?: string;
  featured?: boolean;
  limit?: number;
}

export function useBlogPosts(options: UseBlogPostsOptions = {}) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);

        // TODO: Descomentar cuando Supabase este configurado
        // let query = supabase
        //   .from('blog_posts')
        //   .select('*, author:authors(*)')
        //   .order('published_at', { ascending: false });
        //
        // if (options.category && options.category !== 'todos') {
        //   query = query.eq('category', options.category);
        // }
        // if (options.featured !== undefined) {
        //   query = query.eq('featured', options.featured);
        // }
        // if (options.limit) {
        //   query = query.limit(options.limit);
        // }
        //
        // const { data, error } = await query;
        // if (error) throw error;
        // setPosts(data);

        // Usar datos locales temporalmente
        let filteredPosts = [...localBlogPosts];

        if (options.category && options.category !== 'todos') {
          filteredPosts = filteredPosts.filter(p => p.category === options.category);
        }
        if (options.featured !== undefined) {
          filteredPosts = filteredPosts.filter(p => p.featured === options.featured);
        }
        if (options.limit) {
          filteredPosts = filteredPosts.slice(0, options.limit);
        }

        await new Promise(resolve => setTimeout(resolve, 100));
        setPosts(filteredPosts);

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [options.category, options.featured, options.limit]);

  return { posts, loading, error };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);

        // TODO: Descomentar cuando Supabase este configurado
        // const { data, error } = await supabase
        //   .from('blog_posts')
        //   .select('*, author:authors(*)')
        //   .eq('slug', slug)
        //   .single();
        // if (error) throw error;
        // setPost(data);

        // Usar datos locales temporalmente
        const localPost = localBlogPosts.find(p => p.slug === slug);
        await new Promise(resolve => setTimeout(resolve, 100));
        setPost(localPost ?? null);

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchPost();
  }, [slug]);

  return { post, loading, error };
}
