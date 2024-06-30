import type { AstroIntegration, AstroIntegrationLogger } from 'astro';

const INTEGRATION_NAME = 'astro-ai-frontmatter';

interface Options {}

const plugin = (options: Options): AstroIntegration => {
	return {
		name: INTEGRATION_NAME,
		hooks: {
			'astro:build:setup': async ({ pages, logger }) => {
				logger.info('[astro-ai-frontmatter] Starting...');
			},
		},
	};
};

export default plugin;
