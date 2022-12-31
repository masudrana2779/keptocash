import Head from "next/head";
import { FC, ReactElement } from "react";
import FooterComponent from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children?: ReactElement;
  title?: string;
  tags?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
};

const Layout: FC<LayoutProps> = ({
  children,
  title,
  tags,
  description,
  imageUrl,
  url,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "keptocash"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="keptocash" />
        <meta name="description" content={description || "keptocash"} />
        <meta name="keywords" content={tags || "keptocash,"} />
        <meta name="subtitle" content="keptocash" />

        <meta name="og:title" content={title || "keptocash"} />
        <meta name="og:type" content="admin" />
        <meta name="og:url" content={url || "https://keptocash.com/"} />
        <meta
          property="og:image"
          content={imageUrl || "/assets/img/share_Banner.png"}
        />
        <meta name="og:description" content={description || "keptocash"} />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/img/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/img/favicon.png"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        {children}
        <FooterComponent />
      </>
    </>
  );
};

export default Layout;
