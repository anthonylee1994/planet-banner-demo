import React from 'react';
import Shit from './assets/shit.svg';
import { Stack, Image, Text } from '@chakra-ui/react';

export const Logo = React.memo(() => {
  return (
    <Stack alignItems="center">
      <Image
        src={Shit}
        height={{ base: 48, md: 32 }}
        width={{ base: 48, md: 32 }}
      />
      <Text
        fontSize={{ base: '4xl', md: '3xl' }}
        fontWeight="bold"
        color="gray.600"
      >
        DEMO
      </Text>
    </Stack>
  );
});
