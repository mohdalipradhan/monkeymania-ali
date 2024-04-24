import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import bgImage from "../Images/bgImage.png"
import bigMonkey from "../Images/monkeybig.png"
import cloud from "../Images/cloud.svg"
import start from "../Images/start.svg"
import banana from "../Images/banana.svg"
import backspacebtn from "../Images/backspacebtn.svg"
import yayok from "../Images/yayok.png"
import finalmonkey from "../Images/finalmonkey.png"
import earnedbmonkey from "../Images/earned7banana.png"




import { useNavigate } from 'react-router-dom'



const GameWonHurray = () => {

    const navigate = useNavigate();

    return (
        <Flex padding={0} margin={0}>
            <Box
                bgImage={bgImage}
                bgSize="cover"
                bgPosition="center"
                h="100vh"
                w="100vw"


            >


                <Flex pos="relative" width="100%" height="100%" justify="center" align="center" >

                    <Stack pos="relative" borderRadius="20px" bg="#FFF5D1" width="462px" height="465px">
                        <Flex pos="relative" >
                            <Image pos="absolute" bottom="-90px" src={earnedbmonkey} />
                        </Flex>
                        <Flex width='100%' height="100%" justify="center" alignItems="center">
                            <Image src={finalmonkey} />
                        </Flex>
                        <Flex cursor="pointer" width="100%" height="40px" align="flex-end" justify="center">
                            <Image onClick={()=>{navigate("/")}} height="50px" width="300px" src={yayok} />
                        </Flex>
                    </Stack>

                    <Flex onClick={() => navigate("/introscreentwo")} cursor="pointer" pos="absolute" right={2} bottom={6}>
                    </Flex>
                    <Flex onClick={() => navigate("/")} cursor="pointer" pos="absolute" left={2} top={6}>
                        <Image width="130px" src={backspacebtn} />
                    </Flex>
                </Flex>




            </Box>
        </Flex>
    )
}

export default GameWonHurray
