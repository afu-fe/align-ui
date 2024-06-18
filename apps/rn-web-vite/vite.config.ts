import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { qrcode } from 'vite-plugin-qrcode'
import tsconfigPaths from 'vite-tsconfig-paths'
// import { esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

// https://github.com/necolas/react-native-web/discussions/2201
// https://stereobooster.com/posts/react-native-web-with-vite/
// https://github.com/stereobooster/vite-rnw

const extensions = [
  ".web.tsx",
  ".tsx",
  ".web.ts",
  ".ts",
  ".web.jsx",
  ".jsx",
  ".web.js",
  ".js",
  ".css",
  ".json",
  ".mjs",
];

const development = process.env.NODE_ENV === "development";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qrcode(), tsconfigPaths()],
  define: {
    global: "window",
    __DEV__: JSON.stringify(development),
    DEV: JSON.stringify(development),
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  resolve: {
    extensions,
    alias: {
      "react-native": "react-native-web",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
      loader: { ".js": "jsx" },
      jsx: "automatic",
      // plugins: [
      //   esbuildFlowPlugin(/\.(flow|jsx?)$/, (path) =>
      //     /\.jsx$/.test(path) ? "jsx" : "jsx"
      //   ),
      // ],
    }
  },
})
