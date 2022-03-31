import Document, { Html, Head, Main, NextScript } from "next/document";

class DazakiDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <body className="bg-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DazakiDocument;
