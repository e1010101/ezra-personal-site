import Link from "next/link";
import Image from "next/image";
import { Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const footPrintImg = `/images/home${useColorModeValue("", "-dark")}.png`;

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox pb={1}>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            pl={1}
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            letterSpacing="wide"
            fontWeight="bold"
          >
            Home
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
