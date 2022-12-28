import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: {
		"github:EduardValentin/graphql-mesh-poc#main:mesh/.mesh/schema.graphql": {
			// @ts-ignore
			token: "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",
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
