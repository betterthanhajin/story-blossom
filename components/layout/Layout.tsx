import { ReactNode, useEffect } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { authActions } from "../../lib/state/auth";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = "StoryBlossom - Interactive Storytelling",
  description = "Create and explore branching narrative stories with StoryBlossom",
}: LayoutProps) => {
  useEffect(() => {
    // Initialize auth state on component mount
    authActions.initialize();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
