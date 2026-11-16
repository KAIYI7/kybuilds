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
    // Optional preview. Paths are under public/, e.g. /projects/kaipay/dashboard.jpg
    // Use a list of portrait screenshots to show phone screens side by side.
    cover: z.union([z.string(), z.array(z.string())]).optional(),
    coverAlt: z.string().optional(),
    // Captions describe only what the screenshot shows: a short label, then one sentence.
    coverLabel: z.string().optional(),
    coverCaption: z.string().optional(),
    // Extra screenshots shown at the end of the project page.
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          label: z.string().optional(),
          caption: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { projects };
