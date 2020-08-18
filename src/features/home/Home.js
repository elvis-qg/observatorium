import React, {useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDisclosure } from "@chakra-ui/core";
import { Flex, Button } from "@chakra-ui/core";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/core";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(initialize,[]);

  function initialize() {
    localStorage.clear();
    onOpen();
  }

  function handleAcceptModalButton() {
    onClose();
    getLocation();
  }
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLocation)
    }
  }

  function setLocation(pos) {
    console.log(pos.coords);
    const coordinatesObject = { latitude: pos.coords.latitude, longitude: pos.coords.longitude } 
    localStorage.setItem("coordinates", JSON.stringify(coordinatesObject));
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="19px">Ubicación</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="15px">
          Para poder realizar una búsqueda personalizada, utilizaremos su ubiciación ¿Quisiera compartirla?
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} fontSize="14px" onClick={handleAcceptModalButton}>
              Estoy de Acuerdo
            </Button>
            <Button variantColor="blue" variant="outline" onClick={onClose} fontSize="14px">
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex bg="#f7f7f7" height="100%" flexDirection="column">
        <Header />
        <Footer />
      </Flex>
    </div>
  );
}

export default Home;