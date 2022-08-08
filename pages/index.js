import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import Section from "../components/section";
import PopIn from "../components/popin";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container m="auto" maxW="container.lg">
      <Section>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          fontSize="lg"
          fontWeight="bold"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a Computer Science student from Singapore!
        </Box>
      </Section>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ezra Tio
          </Heading>
          <p>Student at the National University of Singapore</p>
        </Box>
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="100px"
          h="100px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          {/* <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            /> */}
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="500px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            {/* <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            /> */}
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Ezra is adaptable and can quickly grasp new concepts and data
          structures. He loves a new challenge, and is always pushing to improve
          his skills to create new works or to polish his old projects. He is
          valuable in group projects and often contribute by generating ideas or
          providing leadership. When not online, he loves playing the Piano and
          watching football. Currently, he is studying for a Bachelor&apos;s
          degree in Computer Science at{" "}
          <NextLink href="https://www.nus.edu.sg/" passHref scroll={false}>
            <Link target="_blank" rel="noopener noreferrer">
              NUS
            </Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <motion.div
              style={{ display: "inline-block" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </motion.div>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>Born in Singapore.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear> Enrolled in NUS to study for a Bachelor&apos;s
          degree in Computing.
        </BioSection>
        <BioSection>
          <BioYear>2022+</BioYear>
          Studying!
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music,{" "}
          <Link href="https://ai-image-gallery.vercel.app/" target="_blank">
            Generating Art with AI
          </Link>
          , Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/e1010101" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @e1010101
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/ezra-tio-52a4a5142"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Ezra Tio
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/ezra.a.a.a.a/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ezra.a.a.a.a
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}

export { getServerSideProps } from "../components/chakra";
