import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // Block dangerouslySetInnerHTML: the most common way XSS gets into a
      // React app. Compensating control for 'unsafe-inline' in our CSP.
      "react/no-danger": "error",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
