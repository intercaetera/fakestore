import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginCypress from 'eslint-plugin-cypress/flat';
import xo from 'eslint-config-xo/browser';

export default [
	...xo,
	{files: ['**/*.{js,mjs,cjs,jsx}']},
	{languageOptions: {globals: {...globals.browser, ...globals.node}}},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginCypress.configs.recommended,
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'cypress/unsafe-to-chain-command': 'off',
		},
	},
];
