import { Box, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export const ProfileThing = ({ profile, onClick, id }) => {
  return (
    <Box
      w="100px"
      h="100px"
      display="inline-block"
      borderRadius="full"
      overflow="hidden"
      cursor="pointer"
      onClick={() => onClick(id)}
    >
      <motion.div
        style={{ display: "inline-block", textAlign: "center" }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
      >
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
