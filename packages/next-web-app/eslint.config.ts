import baseConfig from '../../eslint.config';
import { flatConfig as nextPlugin } from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';


const eslintConfig = defineConfig([
  baseConfig,
  // @ts-expect-error types are wrong, these work
  nextPlugin.recommended,
  // @ts-expect-error types are wrong, these work
  nextPlugin.coreWebVitals,
  {
    ignores: [
      '**/node_modules/',
      'out/',
      '.next',
      'next-env.d.ts'
    ]
  }
])
 
export default eslintConfig;