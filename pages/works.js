import NextLink from "next/link";
import {
    Container,
    Heading,
    Link,
    SimpleGrid,
    Divider,
    useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbDinosaur from "../public/images/works/dinosaurDetectorThumbnail.webp";
import thumbGallery from "../public/images/works/galleryThumbnail.webp";
import thumbChess from "../public/images/works/chessappThumbnail.webp";
import thumbPasword from "../public/images/works/passwordGeneratorThumbnail.webp";
import thumbDataAnalysis1 from "../public/images/works/dataAnalysis1Thumbnail.webp";
import thumbStableDiffusion from "../public/images/works/stableDiffusionThumbnail.webp";
import thumbComputerVision from "../public/images/works/computerVisionThumbnail.webp";

const Works = () => (
    <Layout title="Works">
        <Container
            m="auto"
            maxW="container.lg"
            textAlign="center"
            background={useColorModeValue("#F7F9F7", "#210124")}
            borderBottomRadius="xl"
            p="10"
        >
            <Heading as="h2" fontSize={40} mt={4} mb={4}>
                My Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="dinosaurDetector"
                        title="Dinosaur Detector"
                        thumbnail={thumbDinosaur}
                        link="https://dinosaur-detector.netlify.app/"
                    >
                        A simple custom-trained image recognition model. Users
                        can upload an image and the model will classify it as a
                        dinosaur or not. The model was trained with images of
                        dinosaurs, humans, landscapes, animals and vehicles.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="aiGallery"
                        title="AI Image Gallery"
                        thumbnail={thumbGallery}
                        link="https://ai-image-gallery.vercel.app/"
                    >
                        A gallery of AI-created artworks, generated from
                        diffusive models such as DALL-E 2, Midjourney and Stable
                        Diffusion, stored in a dynamic gallery with some cool
                        features.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="passwordGenerator"
                        title="Password Generator"
                        thumbnail={thumbPasword}
                        link="https://ezra-password-generator.vercel.app/"
                    >
                        A random password generator with options for uppercase,
                        numeric and symbolic options.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="dataAnalysis1"
                        title="911 Call Dataset Analysis"
                        thumbnail={thumbDataAnalysis1}
                        link="https://colab.research.google.com/drive/18I39pqDRmLb5SqvSZUI4D7iPe1pSjP1N?usp=sharing"
                    >
                        Exploratory data analysis conducted on a 911 call
                        dataset from{" "}
                        <NextLink
                            href="https://www.kaggle.com/datasets/mchirico/montcoalert"
                            passHref
                            scroll={false}
                        >
                            <Link target="_blank" rel="noopener noreferrer">
                                Kaggle
                            </Link>
                        </NextLink>
                        . Analysis and data visualisation is conducted with
                        pandas and seaborn.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="stableDiffusionImplementation"
                        title="Stable Diffusion Implementation"
                        thumbnail={thumbStableDiffusion}
                        link="https://colab.research.google.com/drive/1PBoeSd1Nr1CxRUPEOJ-Hu9GeWV4tKWm-?usp=sharing"
                    >
                        A implementation of a diffusion-based inferential
                        pipeline, allowing a user to generate images from a text
                        prompt. A prompt is encoded to a text embedding, which
                        is used to guide the generation process in latent space.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="computerVisionExploration"
                        title="Computer Vision Exploration"
                        thumbnail={thumbComputerVision}
                        link="https://colab.research.google.com/drive/1EyTuHpyjTNeaCx1Ix6Yc51jSgNMFRPCs?usp=sharing"
                    >
                        A notebook exploring fundemental computer vision
                        techniques such as image annotation, image alignment,
                        image enhancement and HDR.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h2" fontSize={40} mt={4} mb={4}>
                    Collaborations
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem
                        id="chessApp"
                        title="BetterChess"
                        thumbnail={thumbChess}
                        link="https://orbital-fried-liver.web.app/"
                    >
                        A website to play Chess with an emphasis on user
                        engagement and community building.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
