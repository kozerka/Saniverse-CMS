// ./sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { codeInput } from '@sanity/code-input';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    plugins: [structureTool(), codeInput()],
    schema,
});
