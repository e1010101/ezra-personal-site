import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "../navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main" border="1px" borderColor="red" pb={8}>
      <Head>
        <title>Ezra Tio - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ezra's Personal Site" />
        <meta name="author" content="Ezra Tio" />
        <meta property="og:site_name" content="Ezra Tio" />
        <meta name="og:title" content="Ezra Tio" />
        <meta property="og:description" content="Ezra's Website" />
        <meta property="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.xl" pt={14} border="1px" borderColor="green">
        {children}
      </Container>
    </Box>
  );
};

export default Main;