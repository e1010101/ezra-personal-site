import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbGallery from "../public/images/works/galleryThumbnail.png";
import thumbChess from "../public/images/works/chessappThumbnail.png";
import thumbMargelo from "../public/images/works/margelo_eyecatch.png";

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.lg" textAlign="center">
      <Heading as="h2" fontSize={40} mt={4} mb={4}>
        My Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="aiGallery"
            title="AI Image Gallery"
            thumbnail={thumbGallery}
            link="https://ai-image-gallery.vercel.app/"
          >
            A gallery of AI-created artworks, generated from diffusive models
            such as DALL-E 2, Midjourney and Stable Diffusion.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="chessApp"
            title="BetterChess"
            thumbnail={thumbChess}
            link="https://orbital-fried-liver.web.app/"
          >
            A website to play Chess with an emphasis on user engagement and
            community building.
          </WorkGridItem>
        </Section>
        {/* <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h2" fontSize={40} mt={4} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
