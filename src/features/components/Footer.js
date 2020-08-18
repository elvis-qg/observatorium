import React from "react"
import { Flex, Link } from "@chakra-ui/core";
import styled from "@emotion/styled";

function Footer() {

  const FooterContainer = styled.footer`
    justify-self: flex-end;
    padding: 5px 16px;
    background-color: #bbbbbb;
    height: 40px;
  `;

  return(
    <FooterContainer>
      <Flex justifyContent="space-around" w="100%" h="100%" alignItems="center" fontSize="10px">
        <Link href="/" isExternal fontSize="16px">FAQ</Link>
        <p>Nota: Esta página utiliza datos brindados por el Ministerio de Salud del Perú.</p>
        <Link href="https://github.com/elvis-qg/observatorium" fontSize="20px" isExternal>
          <i className="fa fa-github" />
        </Link>
      </Flex>
    </FooterContainer>
  );
}

export default Footer;