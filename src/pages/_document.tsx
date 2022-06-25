import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ja">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/favicons/site.webmanifest"
          crossOrigin="use-credentials"
        />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#cf980a"
        />
        {/* インデックス 登録のリクエスト処理 */}
        <meta
          name="google-site-verification"
          content="b8bHgMnOcmFYxe-Nz8dhHx0AKW5h8BgWvAWKWreYUbQ"
        />
        <meta name="msapplication-TileColor" content="#cf980a" />
        <meta name="theme-color" content="#f7ecd2" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@yokoiwasaki6" />
        <meta
          name="twitter:url"
          content="https://nextjs-bulletin-board-app.vercel.app/favicons/icon-512x512.png"
        />
        <meta name="twitter:title" content="ブレインストームアプリ作りました" />
      </Head>
      <body className="antialiased text-black bg-white">
        <Main />
        <div id="root"></div>
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
