import NextLink from "next/link";
import {
    Box,
    Container,
    Heading,
    Link,
    SimpleGrid,
    Divider,
    useColorModeValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbDinosaur from "../public/images/works/dinosaurDetectorThumbnail.webp";
import thumbGenerator from "../public/images/works/generatorThumbnail.webp";
import thumbChess from "../public/images/works/chessappThumbnail.webp";
import thumbPasword from "../public/images/works/passwordGeneratorThumbnail.webp";
import thumbDataAnalysis1 from "../public/images/works/dataAnalysis1Thumbnail.webp";
import thumbStableDiffusion from "../public/images/works/stableDiffusionThumbnail.webp";
import thumbComputerVision from "../public/images/works/computerVisionThumbnail.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ChevronLeftIcon
        className={className}
        style={{ ...style, display: "block", left: "-50px" }}
        onClick={onClick}
        boxSize={12}
        cursor="pointer"
      />
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <ChevronRightIcon
        className={className}
        style={{ ...style, display: "block", right: "-50px" }}
        onClick={onClick}
        boxSize={12}
        cursor="pointer"
        />
    );
};
  
  
const Works = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    

  return (
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

        <Box maxW="600px" mx="auto" position="relative" px={16}>
            <Slider {...settings}>
                <div>
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
                </div>
                <div>
                    <WorkGridItem
                    id="aiImageGenerator"
                    title="AI Image Generator"
                    thumbnail={thumbGenerator}
                    link="https://image-generation-app-one.vercel.app/"
                    >
                    A fully-functional image generator utilizing Stable Diffusion.
                    Requests are handled via Cloudflare Workers.
                    </WorkGridItem>
                </div>
                <div>
                    <WorkGridItem
                        id="passwordGenerator"
                        title="Password Generator"
                        thumbnail={thumbPasword}
                        link="https://ezra-password-generator.vercel.app/"
                    >
                        A random password generator with options for uppercase,
                        numeric and symbolic options.
                    </WorkGridItem>
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                {/* Add other WorkGridItems here, each wrapped in a <div> */}
            </Slider>

        </Box>

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
};

export default Works;
export { getServerSideProps } from "../components/chakra";


// const Works = () => (
//     <Layout title="Works">
//         <Container
//             m="auto"
//             maxW="container.lg"
//             textAlign="center"
//             background={useColorModeValue("#F7F9F7", "#210124")}
//             borderBottomRadius="xl"
//             p="10"
//         >
//             <Heading as="h2" fontSize={40} mt={4} mb={4}>
//                 My Works
//             </Heading>

//             <SimpleGrid columns={[1, 1, 2]} gap={6} minChildWidth="300px" autoRows="1fr">
                // <Section>
                // <Section>
                //     <WorkGridItem
                //         id="passwordGenerator"
                //         title="Password Generator"
                //         thumbnail={thumbPasword}
                //         link="https://ezra-password-generator.vercel.app/"
                //     >
                //         A random password generator with options for uppercase,
                //         numeric and symbolic options.
                //     </WorkGridItem>
                // </Section>
                // <Section>
                //     <WorkGridItem
                //         id="dataAnalysis1"
                //         title="911 Call Dataset Analysis"
                //         thumbnail={thumbDataAnalysis1}
                //         link="https://colab.research.google.com/drive/18I39pqDRmLb5SqvSZUI4D7iPe1pSjP1N?usp=sharing"
                //     >
                //         Exploratory data analysis conducted on a 911 call
                //         dataset from{" "}
                //         <NextLink
                //             href="https://www.kaggle.com/datasets/mchirico/montcoalert"
                //             passHref
                //             scroll={false}
                //         >
                //             <Link target="_blank" rel="noopener noreferrer">
                //                 Kaggle
                //             </Link>
                //         </NextLink>
                //         . Analysis and data visualisation is conducted with
                //         pandas and seaborn.
                //     </WorkGridItem>
                // </Section>
                // <Section>
                //     <WorkGridItem
                //         id="stableDiffusionImplementation"
                //         title="Stable Diffusion Implementation"
                //         thumbnail={thumbStableDiffusion}
                //         link="https://colab.research.google.com/drive/1PBoeSd1Nr1CxRUPEOJ-Hu9GeWV4tKWm-?usp=sharing"
                //     >
                //         A implementation of a diffusion-based inferential
                //         pipeline, allowing a user to generate images from a text
                //         prompt. A prompt is encoded to a text embedding, which
                //         is used to guide the generation process in latent space.
                //     </WorkGridItem>
                // </Section>
                // <Section>
                //     <WorkGridItem
                //         id="computerVisionExploration"
                //         title="Computer Vision Exploration"
                //         thumbnail={thumbComputerVision}
                //         link="https://colab.research.google.com/drive/1EyTuHpyjTNeaCx1Ix6Yc51jSgNMFRPCs?usp=sharing"
                //     >
                //         A notebook exploring fundemental computer vision
                //         techniques such as image annotation, image alignment,
                //         image enhancement and HDR.
                //     </WorkGridItem>
                // </Section>
//             </SimpleGrid>

//             <Section delay={0.2}>
//                 <Divider my={6} />

//                 <Heading as="h2" fontSize={40} mt={4} mb={4}>
//                     Collaborations
//                 </Heading>
//             </Section>

//             <SimpleGrid columns={[1, 1, 2]} gap={6}>
//                 <Section delay={0.3}>
//                     <WorkGridItem
//                         id="chessApp"
//                         title="BetterChess"
//                         thumbnail={thumbChess}
//                         link="https://orbital-fried-liver.web.app/"
//                     >
//                         A website to play Chess with an emphasis on user
//                         engagement and community building.
//                     </WorkGridItem>
//                 </Section>
//             </SimpleGrid>
//         </Container>
//     </Layout>
// );

// export default Works;
// export { getServerSideProps } from "../components/chakra";
