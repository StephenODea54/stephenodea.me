import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        description: z.string(),
        lastModifiedDate: z.string().date(),
        title: z.string(),
        url: z.string(),
    }),
});

export const collections = {
    notes: notesCollection,
};
