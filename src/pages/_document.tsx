import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  const image =
    "https://nextjs-bulletin-board-app.vercel.app/favicons/twitter.webp";
  const url = "https://nextjs-bulletin-board-app.vercel.app/";
  const content = "ブレインストームアプリ";
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
        <meta name="description" content={content} />
        <meta property="og:title" content={content} />
        <meta property="og:description" content={content} />
        <meta name="keywords" content="プログラミング, Web制作" />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={content} />
        <meta name="twitter:card" content={content} />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@yokoiwasaki6" />
        <meta name="twitter:url" content={image} />
        <meta name="twitter:title" content={content} />
        <meta name="twitter:description" content={content} />
        <meta name="twitter:image" content={image} />
        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href={"/favicon.png"} />
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
