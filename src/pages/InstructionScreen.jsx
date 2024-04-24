import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import bgImage from "../Images/bgImage.png"
import bigMonkey from "../Images/monkeybig.png"
import cloud from "../Images/cloud.svg"
import start from "../Images/start.svg"
import banana from "../Images/banana.svg"
import backspacebtn from "../Images/backspacebtn.svg"
import yes from "../Images/yes.svg"


import { useNavigate } from 'react-router-dom'
import instructiondata from '../data/instructiondata'



const InstructionScreen = () => {

    const [expdata, setExpData] = useState(instructiondata);

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


                    <Flex gap="100px" >
                        {
                            expdata.map((item, index) => (
                                <Stack pos="relative" borderRadius="69px" bg="#FFFFFF" width="280px" height="400px" >
                                    <Flex pos="absolute" justify="center" align="center" width="40px" bg={item.divcolor} height="40px" left={0} bottom="104px" borderRightRadius={10}>
                                        <Text fontSize="20px" fontWeight={600} color="white">0{index + 1}</Text>
                                    </Flex>

                                    <Flex pos="relative" justify="center" flex="1" align="flex-end">
                                        {item.imga && <Image width={index === 2 ? "400px" : "auto"} pos="absolute" right={index === 0 ? "70px" : "0"} top={index === 0 ? "10px" : "0"} src={item.imga} />}
                                        {item.img && <Image width={index === 2 ? "400px" : "auto"} pos="absolute" top={index === 2 ? "30px" : "0"} src={item.img} />}
                                    </Flex>
                                    <Flex justify="center" flex="1">
                                        <Stack justify="center" textAlign="center" width="200px">
                                            {item.smalltitlea && <Heading color="#A6C930" as="h3" size="sm">{item.smalltitlea}</Heading>}
                                            <Heading color="#11AEC6" as="h3" size="lg">{item.title}</Heading>
                                            <Heading color="#A6C930" as="h3" size="sm">{item.smalltitle}</Heading>
                                        </Stack>
                                    </Flex>
                                </Stack>
                            ))
                        }
                    </Flex>

                    <Flex onClick={() => navigate("/livegame")} cursor="pointer" pos="absolute" right={2} bottom={6}>
                        <Image width="250px" src={yes} />
                    </Flex>
                    <Flex onClick={() => navigate("/introscreentwo")} cursor="pointer" pos="absolute" left={2} top={6}>
                        <Image width="130px" src={backspacebtn} />
                    </Flex>
                </Flex>




            </Box>
        </Flex>
    )
}

export default InstructionScreen;
