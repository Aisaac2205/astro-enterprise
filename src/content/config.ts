import { defineCollection, z } from 'astro:content';

const teamCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        avatarUrl: z.string(), // Puede ser URL o iniciales
        bio: z.string().max(180),
        social: z.array(z.object({
            platform: z.enum(['linkedin', 'twitter', 'github', 'email']),
            url: z.string().url()
        })).optional(),
    }),
});

const servicesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.enum([
            'Bot',
            'Box',
            'Cloud',
            'Cpu',
            'FileCheck',
            'Github',
            'Linkedin',
            'Mail',
            'Map',
            'MapPin',
            'PenTool',
            'Phone',
            'Scan',
            'Share2',
            'ShieldCheck',
            'Twitter',
            'Vault',
            'Workflow',
            'Zap',
            'ShoppingCart',
            'Globe'
        ]), // Icon names must match the curated Lucide subset
        features: z.array(z.string()),
        pricing: z.object({
            amount: z.string(),
            period: z.string(),
        }).optional(),
    }),
});

const architectureCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imageUrl: z.string().url().optional(), // Made optional as we might use CSS diagrams
        diagramType: z.enum(['cloud', 'flowchart', 'security', 'sequence', 'er']),
        specs: z.array(z.object({
            label: z.string(),
            value: z.string(),
        })).optional(),
    }),
});

export const collections = {
    'team': teamCollection,
    'services': servicesCollection,
    'architecture': architectureCollection,
};
