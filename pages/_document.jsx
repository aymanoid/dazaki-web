import Document, { Html, Head, Main, NextScript } from "next/document";

class DazakiDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DazakiDocument;
