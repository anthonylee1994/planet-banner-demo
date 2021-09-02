import React from 'react';
import LogoImage from './assets/logo.png';
import { Stack, Image } from '@chakra-ui/react';

export const Logo = React.memo(() => {
  return (
    <Stack alignItems="center">
      <Image src={LogoImage} width="100%" maxWidth={488} />
    </Stack>
  );
});
