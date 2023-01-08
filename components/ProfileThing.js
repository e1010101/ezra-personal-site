import { Box, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export const ProfileThing = ({ profile }) => {
  return (
    <Box
      w={["4rem", "5rem", "6rem"]}
      h={["4rem", "5rem", "6rem"]}
      display="inline-block"
      borderRadius="full"
      overflow="hidden"
    >
      <motion.div style={{ display: "inline-block", textAlign: "center" }}>
        <ProfileImage
          src={profile}
          alt="Profile image"
          width="100%"
          height="100%"
          borderRadius="full"
        />
      </motion.div>
    </Box>
  );
};
