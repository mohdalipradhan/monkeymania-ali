import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import bgImage from "../Images/bgImage.png"
import bigMonkey from "../Images/monkeybig.png"
import cloud from "../Images/cloud.svg"
import start from "../Images/start.svg"
import banana from "../Images/banana.svg"
import backspacebtn from "../Images/backspacebtn.svg"
import yes from "../Images/yes.svg"


import { useNavigate } from 'react-router-dom'



const IntroScreenTwo = () => {

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
                <Flex pos="relative" width="100%" height="100%" justify="center" align="flex-end" >
                    <Image mb={4} width="500px" height="500px" src={bigMonkey} />
                    <Flex
                        bgImage={cloud}
                        bgSize="cover"
                        bgPosition="center"
                        h="200px"
                        w="400px"
                        pos="absolute"
                        right="300px"
                        bottom="400px"
                        justify="center"
                        align="center"
                    >
                        <Text display="flex" width="300px" color="#11AEC6" fontSize="30px" fontWeight={700} mb={10}>
                            Can you help me get some ? 🤔
                        </Text>
                    </Flex>

                    <Flex onClick={() => navigate("/instructionscreen")} cursor="pointer" pos="absolute" right={2} bottom={6}>
                        <Image width="250px" src={yes} />
                    </Flex>
                    <Flex onClick={() => navigate("/introscreen")} cursor="pointer" pos="absolute" left={2} top={6}>
                        <Image width="130px" src={backspacebtn} />
                    </Flex>
                </Flex>




            </Box>
        </Flex>
    )
}

export default IntroScreenTwo
