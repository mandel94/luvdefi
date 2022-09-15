import Button from '../components/Button'
import ConnectCard from '../components/ConnectCard'
import Home from '../components/Home'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Intro from '../components/Intro';

// Global values
import {
  CONNECT_BUTTON_LOGO_WIDTH,
  CONNECT_BUTTON_LOGO_HEIGHT,
} from '../constants';

export default function App() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <Home>
        <Intro>
          LUVDEFI
        </Intro>
        <ConnectCard className='card'>
          <Button>
            Connect to MetaMask!
            <Image src='/Metamask-icon.svg'
              className='connect-logo'
              width={CONNECT_BUTTON_LOGO_WIDTH}
              height={CONNECT_BUTTON_LOGO_HEIGHT}
              alt='The Metamask icon' />
          </Button>
        </ConnectCard>
      </Home>
    </>
  )
}

