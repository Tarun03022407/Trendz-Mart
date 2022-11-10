import {  Stack} from "@chakra-ui/react"
// import {ChevronDownIcon} from "@chakra-ui/icons"
import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Button
  } from '@chakra-ui/react'
function CustomerCare(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const btnRef = React.useRef(null)
    return(
        <>
        <Stack  >
        <Button  display= "inline-block"
    maxWidth=" 108px"
    whiteSpace= "nowrap"
    overflow= "hidden" fontWeight={"bold"}   _hover={{ bg: "blue.500", color: " white"  }}   textOverflow= "ellipsis"  fontSize="12px" background="white" width={"100px"} size={2} mt={3} ref={btnRef} onClick={onOpen}> <u >Customer Care</u>
   
      </Button>


      <Modal
      size={"md"}
    
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent colorScheme='brand'>
          <ModalHeader colorScheme='brand'>SHOP IN   <p style={{fontSize:"10px"}}>By changing the location, delivery options of that location will apply and all items will be removed from your Shopping Bag.</p></ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",cursor:"pointer"}} >
        s
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Stack>
      <Text margin="auto" marginTop="10px" fontSize='xs'> FREE STANDARD SHIPPING ON ORDERS OVER $250</Text>
        </>
    )
}
export default CustomerCare