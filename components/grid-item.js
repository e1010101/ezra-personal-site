import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { motion } from "framer-motion";

const hoverVariants = {
  hoverDark: {
    scale: 1.05,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
    },
  },
  hoverLight: {
    scale: 1.05,
    textShadow: "0px 0px 8px rgb(0, 0, 0)",
    boxShadow: "0px 0px 8px rgb(0, 0, 0)",
    transition: {
      duration: 0.3,
    },
  },
};

export const WorkGridItem = ({ children, id, title, thumbnail, link }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`${link}`} scroll={false}>
      <LinkBox cursor="pointer">
        <motion.div
          variants={hoverVariants}
          whileHover={useColorModeValue("hoverLight", "hoverDark")}
        >
          <Image src={thumbnail} alt={title} placeholder="blur" />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14} ml={4} mr={4}>
            {children}
          </Text>
        </motion.div>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
