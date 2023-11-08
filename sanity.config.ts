import {defineConfig} from 'sanity'
import { deskTool } from 'sanity/desk'
import project from './sanity/schemas/project-schema'
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'prdl2xxv',
    dataset: 'production',
    title: 'racing',
    apiVersion: '2023-11-03',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas},
    // useCdn: true,
})

export default config