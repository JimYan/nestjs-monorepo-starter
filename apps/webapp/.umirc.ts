import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/webapp/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  publicPath: '/webapp/',
  runtimePublicPath: true,
});
