import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3 Writer" key="title" />
        <meta property="og:description" content="Techo" key="description" />
        <meta property="og:image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
