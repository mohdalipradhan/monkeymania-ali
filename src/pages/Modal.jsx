import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import modalba from "../Images/modalback.png"
import modalblue from "../Images/modalblue.png"




function ReturnFocus({ closed, setIsclosed, setSingleItema, singleItema }) {

  console.log(singleItema);


  return (
    <>
      <Modal isOpen={closed} onClose={() => setIsclosed(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader  textAlign="center">Cards Matched</ModalHeader>
          <ModalCloseButton onClose={() => setIsclosed(false)} />
          <ModalBody
            display="flex"
            
            flexDirection="column"
            alignItems="center"
            justifyContent="center" >

            <Flex direction="column"
              align="center"
              justify="center"
              width="70%"
            >



            </Flex>
            <Flex gap="20px">

              <Flex pos={"relative"} width="200px" height="300px" >
                <Image src={modalba} />
                <Image width="90px" bottom="60px" left="40px" pos="absolute" src={singleItema?.image} />
              </Flex>
              <Flex pos="relative" justify="center" align="center" width="200px" height="300px" >
                <Image src={modalblue} />
                <Text pos="absolute"  fontSize="50px">{singleItema?.fruit}</Text>
              </Flex>
            </Flex>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ReturnFocus