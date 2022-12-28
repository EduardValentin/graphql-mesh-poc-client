import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: {
		"github:EduardValentin/graphql-mesh-poc#main:mesh/.mesh/schema.graphql": {
			// @ts-ignore
			token: process.env.POC_GRAPHQL_MESH_ACCESS_TOKEN,
		},
	},
	//   documents: ['src/**/*.tsx'],
	generates: {
		"./src/__generated__/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				gqlTagName: "gql",
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;
