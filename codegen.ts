import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from'dotenv'
dotenv.config();
const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_ENDPOINT,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/Graphql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;