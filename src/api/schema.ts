import { makeSchema} from 'nexus';
import {join} from 'path';
export const schema = makeSchema({
    types:[],
    outputs: {
        typegen: join(__dirname, 'graphql','nexus.d.ts'),
        schema: join(__dirname, 'graphql','schema.graphql')
    },
    contextType:{
        module: join(__dirname, './context.ts'),
        export: 'Context'
    }
})