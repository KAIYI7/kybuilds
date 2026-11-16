import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    date: z.string(),
    order: z.number(),
    stack: z.array(z.string()),
    repo: z.string().url(),
    summary: z.string(),
    // Optional preview image: a path under public/, e.g. /projects/kaipay.png
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { projects };
