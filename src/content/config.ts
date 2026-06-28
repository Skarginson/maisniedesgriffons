import { defineCollection, z } from 'astro:content';

const membres = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    role: z.string(),
    photo: z.string(),
    photoAlt: z.string(),
  }),
});

const animations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    thumbnail: z.string(),
    thumbnailAlt: z.string(),
    photos: z.array(z.object({
      image: z.string(),
      alt: z.string(),
    })).default([]),
  }),
});

const sorties = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    order: z.number(),
    lieu: z.string().optional(),
    thumbnail: z.string(),
    thumbnailAlt: z.string(),
    showOnHome: z.boolean().default(true),
    photos: z.array(z.object({
      image: z.string(),
      alt: z.string(),
    })).default([]),
  }),
});

export const collections = { membres, animations, sorties };
