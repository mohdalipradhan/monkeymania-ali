import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import IntroScreen from './pages/IntroScreen';
import IntroScreenTwo from './pages/IntroScreenTwo';
import InstructionScreen from './pages/InstructionScreen';
import Game from './pages/Game';
import GameWonHurray from './pages/GameWonHurray';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introscreen' element={<IntroScreen/>} />
        <Route path='/introscreentwo' element={<IntroScreenTwo/>} />
        <Route path='/instructionscreen' element={<InstructionScreen/>} />
        <Route path='livegame' element={<Game />} />
        <Route path='gamewonhurray' element={<GameWonHurray  />} />


      </Routes>
    </ChakraProvider>
  )
}

export default App;