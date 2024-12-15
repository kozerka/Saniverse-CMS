import { defineField, defineType } from 'sanity';

export const authorType = defineType({
    name: 'author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'profession',
            type: 'string',
            title: 'Profession',
            description: 'Short title or profession of the author',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
            ],
        }),
        defineField({
            name: 'bio',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
        defineField({
            name: 'socials',
            type: 'array',
            title: 'Social Links',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'network',
                            type: 'string',
                            title: 'Network',
                            options: {
                                list: [
                                    { title: 'X (Twitter)', value: 'twitter' },
                                    { title: 'Threads', value: 'threads' },
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'Discord', value: 'discord' },
                                ],
                            },
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                        },
                        {
                            name: 'url',
                            type: 'url',
                            title: 'URL',
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
});
