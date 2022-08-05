import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const PopIn = ({ children, delay = 0 }) => (
  <motion.h2 animate={{ fontSize: [50, 0] }}>{children}</motion.h2>
);

export default PopIn;
