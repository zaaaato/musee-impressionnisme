import { defineConfig } from 'astro/config';

// GitHub Pages 用: リポジトリ名に合わせて site と base を変更してください
// 例: リポジトリ名が "musee-impressionnisme" の場合
//   site: 'https://あなたのユーザー名.github.io'
//   base: '/musee-impressionnisme'
export default defineConfig({
  site: 'https://example.github.io',
  base: '/musee-impressionnisme',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
