import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Banner } from './components/Banner';
import { LoginButton } from './components/LoginButton';
import { LoginDrawer } from './components/LoginDrawer';

export const App = React.memo(() => {
  return (
    <Flex flexDirection="column">
      <Banner />
      <LoginButton />
      <LoginDrawer />
    </Flex>
  );
});
