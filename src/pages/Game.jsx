import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import bgImage from "../Images/bgImage.png"
import bigMonkey from "../Images/monkeybig.png"
import cloud from "../Images/cloud.svg"
import start from "../Images/start.svg"
import banana from "../Images/banana.svg"
import backspacebtn from "../Images/backspacebtn.svg"
import yes from "../Images/yes.svg"
import cardbackground from "../Images/Background.png"
import cardbackground2 from "../Images/Background (1).png"
import next from "../Images/next.svg"
import { Progress } from '@chakra-ui/react'


import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'



import { useNavigate } from 'react-router-dom'
import fruitsimages from '../data/fruitsimages'
import fruitswithfirstword from '../data/fruitswithfirstword'
import ReturnFocus from './Modal'



const Game = () => {

    const [value, setValue] = useState(0);

    const [closed, setIsclosed] = useState(false)


    const [button1Clicked, setButton1Clicked] = useState(false);
    const [button2Clicked, setButton2Clicked] = useState(false);

    const [tracker, setTracker] = useState(0);

    const [cardFlipped, setCardFlipped] = useState(null);
    const [cardFlipped2, setCardFlipped2] = useState(null);


    const [fruitsimg, setfruitimg] = useState(fruitsimages);
    const [frutswords, setFruitswords] = useState(fruitswithfirstword);


    const [singleItema, setSingleItema] = useState();
    const [singleItemb, setSingleItemb] = useState();

    const [modal, setModal] = useState(false);


    const [gameWon, setGameWon] = useState(false)


    useEffect(() => {
        shuffleArrays();
    }, []);


    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const shuffleArrays = () => {
        const shuffledImages = shuffleArray(fruitsimages);
        const shuffledFirstWords = shuffleArray(fruitswithfirstword);
        setfruitimg(shuffledImages);
        setFruitswords(shuffledFirstWords);
    };




    const navigate = useNavigate();

    const handleimages = (item) => {
        setButton1Clicked(true);
        setSingleItema(item);
        setCardFlipped(item.fruit);

        setTimeout(() => {
            setCardFlipped(null);
        }, 2000);
    }


    const handleAlphabets = (item) => {
        setButton2Clicked(true);
        setSingleItemb(item);
        setCardFlipped2(item.fruit);
        setTimeout(() => {
            setCardFlipped2(null);
        }, 2000);
    }



    const handleCombinedClicked = (item) => {
        if (button1Clicked && button2Clicked) {
            console.log(singleItema, singleItemb);

            if (singleItema.fruit === singleItemb.fruit) {

                console.log("found")
                setIsclosed(true)
                setTracker(tracker + 1);
                shuffleArrays()
            } else {
                console.log("yet to find");
            }
        }
    }

    useEffect(() => {
        if (button1Clicked && button2Clicked) {
            handleCombinedClicked();
            setButton1Clicked(false);
            setButton2Clicked(false);
        }
    }, [button1Clicked, button2Clicked])

    useEffect(() => {
        if (tracker === 3) {
            setGameWon(true)
            setTracker(0)
        }
    }, [tracker])


    useEffect(() => {
        if (tracker === 1) {
            setValue(33)
        } else if (tracker === 2) {
            setValue(66)
        } else if (tracker === 3) {
            setValue(100)
        }
    }, [tracker])

    return (
        <Flex padding={0} margin={0}>

            <Box
                bgImage={bgImage}
                bgSize="cover"
                bgPosition="center"
                h="100vh"
                w="100vw"
                pos="relative"


            >
                <Flex zIndex={7} pos="absolute" right={4} top={3}>
                    <Popover>
                        <PopoverTrigger>
                            <Button>Find rules</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Read Once!</PopoverHeader>
                            <PopoverBody>
                                <Stack>
                                    <Text>After the match, the entire list will be swapped.
                                    </Text>

                                    <Text>Once you win the match, the next option will become visible to you
                                    </Text>

                                    <Text>On the left side, there are images, and on the right side, there are alphabets representing the fruits
                                    </Text>
                                    <Text>The card will flip after every event for 2000 milliseconds due to the click event
                                    </Text>
                                    <Text>Enjoy the game
                                    </Text>
                                   
                                </Stack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
                <Stack width="100%" justify="center" spacing={5}>

                    <Progress borderRadius="3px" top="2px" pos="absolute" width="1000px" colorScheme='yellow' background="white" height='40px' left="200px" value={value} />
                </Stack>

                <Flex pos="relative" width="100%" height="100%" justify="center" align="center" >




                    <Flex mb={7} flexWrap="wrap" gap="100px" width="1300px" height="auto">

                        <Flex justify="center" gap={4} flexWrap="wrap" flex={1}>
                            {fruitsimg.map((item, index) => (
                                <Flex cursor="pointer" pos="relative" key={index} onClick={() => handleimages(item)} border="7px solid white" width="230px" height="260px">
                                    {cardFlipped === item.fruit ? <Flex width="100%"><Image src={cardbackground} width="100%" height="100%" />
                                        <Image pos="absolute" width="80px" top="50%" left="40%" src={item.image} /></Flex> : <Image src={cardbackground} width="100%" height="100%" />}                                </Flex>
                            ))}
                        </Flex>
                        <Flex justify="center" gap={4} flexWrap="wrap" flex={1}>
                            {frutswords.map((item, index) => (
                                <Flex cursor="pointer" pos="relative" key={index} border="7px solid white" onClick={() => handleAlphabets(item)} width="230px" height="260px">
                                    {cardFlipped2 === item.fruit ? <Flex width="100%"><Image src={cardbackground2} width="100%" height="100%" />
                                        <Text mt="-60px" textAlign="center" border="2px solid white" fontSize="70px" pos="absolute" width="80px" top="50%" left="30%" >{item.firstWord}</Text></Flex> : <Image src={cardbackground2} width="100%" height="100%" />}

                                </Flex>
                            ))}
                        </Flex>


                    </Flex>

                    <Flex onClick={() => navigate("/gamewonhurray")} cursor="pointer" pos="absolute" right={2} bottom={2}>
                        {gameWon ? <Image width="250px" src={next} /> : null}
                    </Flex>
                    <Flex onClick={() => navigate("/instructionscreen")} cursor="pointer" pos="absolute" left={2} top={6}>
                        <Image width="130px" src={backspacebtn} />

                    </Flex>
                </Flex>

                <ReturnFocus closed={closed} setIsclosed={setIsclosed} setSingleItema={setSingleItema} singleItema={singleItema} />




            </Box>
        </Flex>
    )
}

export default Game;