export default {
  input: 'dist/libs/http/src/index.js',
  output: {
    file: 'dist/libs/http/plugin.js',
    format: 'iife',
    name: 'capacitorCommunityHttp',
    globals: {
      '@capacitor/core': 'capacitorExports',
    },
    sourcemap: true,
    inlineDynamicImports: true,
  },
  external: ['@capacitor/core'],
};
