"use client";

import { useState, useEffect } from 'react';
// import { supabase } from '@/lib/supabase';
// import type { DbGuide } from '@/lib/database.types';

// Por ahora usa datos locales, preparado para migrar a Supabase
import { guides as localGuides, type Guide } from '@/data/guides';

interface UseGuidesOptions {
  category?: string;
  featured?: boolean;
  limit?: number;
}

export function useGuides(options: UseGuidesOptions = {}) {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchGuides() {
      try {
        setLoading(true);

        // TODO: Descomentar cuando Supabase este configurado
        // let query = supabase.from('guides').select('*');
        //
        // if (options.category && options.category !== 'todas') {
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
        // setGuides(data);

        // Usar datos locales temporalmente
        let filteredGuides = [...localGuides];

        if (options.category && options.category !== 'todas') {
          filteredGuides = filteredGuides.filter(g => g.category === options.category);
        }
        if (options.featured !== undefined) {
          filteredGuides = filteredGuides.filter(g => g.featured === options.featured);
        }
        if (options.limit) {
          filteredGuides = filteredGuides.slice(0, options.limit);
        }

        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 100));
        setGuides(filteredGuides);

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchGuides();
  }, [options.category, options.featured, options.limit]);

  return { guides, loading, error };
}

export function useGuide(slug: string) {
  const [guide, setGuide] = useState<Guide | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchGuide() {
      try {
        setLoading(true);

        // TODO: Descomentar cuando Supabase este configurado
        // const { data, error } = await supabase
        //   .from('guides')
        //   .select('*')
        //   .eq('slug', slug)
        //   .single();
        // if (error) throw error;
        // setGuide(data);

        // Usar datos locales temporalmente
        const localGuide = localGuides.find(g => g.id === slug);
        await new Promise(resolve => setTimeout(resolve, 100));
        setGuide(localGuide ?? null);

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchGuide();
  }, [slug]);

  return { guide, loading, error };
}
