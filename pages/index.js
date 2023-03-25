import NextLink from "next/link";
import { useState } from "react";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaKaggle } from "react-icons/fa";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { motion } from "framer-motion";
import { ProfileThing } from "../components/ProfileThing";

export default function Home() {
  const [isActive, setIsActive] = useState(0);

  const handleClick = (back) => {
    setIsActive(back);
  };

  return (
    <Container
      m="auto"
      maxW="container.lg"
      background={useColorModeValue("#F7F9F7", "#120013")}
      borderBottomRadius="xl"
      p="10"
    >
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

      <Box
        display={{ sm: "flex", md: "flex" }}
        justifyContent={{ sm: "center", md: "center" }}
        alignItems={{ sm: "center", md: "center" }}
      >
        <Box mr={20}>
          <Heading as="h2" variant="page-title">
            Ezra Tio
          </Heading>
          <p>Student at the National University of Singapore</p>
        </Box>
        <ProfileThing profile="/images/selfie.jpg" />
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
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
          Music, Generating Art with AI, Machine Learning, Drinking Coffee
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
                _hover={useColorModeValue(
                  { backgroundColor: "black", color: "white" },
                  { backgroundColor: "white", color: "black" }
                )}
              >
                @e1010101
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.kaggle.com/e1010101" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaKaggle />}
                _hover={useColorModeValue(
                  { backgroundColor: "black", color: "white" },
                  { backgroundColor: "white", color: "black" }
                )}
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
                _hover={useColorModeValue(
                  { backgroundColor: "black", color: "white" },
                  { backgroundColor: "white", color: "black" }
                )}
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
                _hover={useColorModeValue(
                  { backgroundColor: "black", color: "white" },
                  { backgroundColor: "white", color: "black" }
                )}
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
