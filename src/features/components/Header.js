import React from "react"
import { Heading, Box, Flex } from "@chakra-ui/core"
import styled from "@emotion/styled";
import { Link } from "@chakra-ui/core";

function Header() {

  const HeaderContainer = styled.header`
    padding: 5px 40px;
    margin-bottom: auto;
    background-color: #00bbd3;
    height: 45px;
    display: flex;
    color: #f7f7f7;
    align-items: center;
    justify-content: space-between;
  `;

  return(
    <HeaderContainer>
      <Heading as="h5" size="sm">Observatorium</Heading>
      <Flex justifySelf="rigth" fontSize="14px">
        <Link href="#" pr="35px">Crear una cuenta</Link>
        <Link href="#">Ingresar</Link>
      </Flex>
    </HeaderContainer>
  );
}

export default Header;