import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default /** @type {import('rollup').RollupOptions} */ ({
  input: "./index.mjs",

  output: {
    file: `dist/index.min.mjs`,
    format: "es",
    sourcemap: true,
  },

  plugins: [
    nodeResolve(),
    terser({
      compress: {
        passes: 6,
      },
    }),
  ],
});
