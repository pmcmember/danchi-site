# danchi-site
DANCHi 公式サイト

## 参考資料
- プロジェクトにて使用するlib / FW一覧

    | lib / FW / ツール | 説明                                               | 参考          |
    | ----------------- | ------------------------------------------------- | ------------- |
    | yarn              | パッケージマネージャ                               | ・https://qiita.com/akitxxx/items/c97ff951ca31298f3f24          |
    | TypeScript        | 型定義できるJavaScript。AltJS                      | ・https://qiita.com/EBIHARA_kenji/items/4de2a1ee6e2a541246f6   |
    | React.js          | 宣言的なViewをコンポーネントベースで作成できるJavaScriptライブラリ | ・https://ja.reactjs.org/ |
    | Next.js           | Reactベースのフレームワーク(静的サイトジェネレータ)。 | Next.jsについて<br>・https://qiita.com/Yuki_Oshima/items/5c0dfd8f7af8fb76af8f<br>・https://nextjs-ja-translation-docs.vercel.app/<br><br>静的サイトジェネレータについて<br>・https://www.science.co.jp/document_jamstack_blog/27767/   |
    | aspida            | APIデータの型定義                                   | ・https://zenn.dev/solufa/articles/getting-started-with-aspida    |
    | tailwindcss       | cssライブラリ。HTMLにcssクラスを挿入するのみでcssが充てられる。 | tailwindcssについて<br>・https://tailwindcss.jp/<br><br>チートシート<br>・https://nerdcave.com/tailwind-cheat-sheet   |


- サイト内コンテンツ管理(CMS)はMicroCMSにて行っています。
    - https://microcms.io/


## 初期構築
- yarnコマンドがインストールされていない場合は、下記コマンドを実行し、yarnコマンドをインストールしてください。
    ```bash
    $ npm install -g yarn
    $ yarn --version
        ⇒バージョンが表示されること
    ```

- プロジェクトのトップディレクトリで、下記コマンドを実行し、必要パッケージをインストールしてください。
    ```bash
    $ yarn install(初回のみ)
    ```

## ローカルでの実行方法
プロジェクトのトップディレクトリに移動し、下記コマンドを実行してください。
```bash
$ yarn run dev
```

ブラウザから http://localhost:3000 にアクセスし、DANCHiのサイトが表示出来たら成功


## Next.js 
## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
