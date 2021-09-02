import React from 'react';
import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { Orbit } from './Orbit';
import Wave from 'react-wavify';

export const Banner = React.memo(() => {
  const amplitude = useBreakpointValue({ base: 0.5, md: 1 });

  return (
    <Flex
      position="relative"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height={{ base: 500, md: 800 }}
      bgColor="gray.100"
      overflow="hidden"
    >
      <Flex
        position="relative"
        transform={{ base: 'scale(0.5)', md: 'scale(1)' }}
        transformOrigin="center"
        justifyContent="center"
        alignItems="center"
      >
        <Logo />
        <Orbit radius={512 * 1} />
        <Orbit radius={512 * 1.5} />
        <Orbit radius={512 * 2} />
      </Flex>

      <Flex position="absolute" bottom={0} width="100%">
        <Wave
          fill="#bf593a"
          paused={false}
          options={{
            height: 20,
            amplitude: 20 * (amplitude || 1),
            speed: 0.15,
            points: 20 * (amplitude || 1),
          }}
        />
      </Flex>
      <Flex position="absolute" bottom={0} width="100%">
        <Wave
          fill="#7b341e"
          paused={false}
          options={{
            height: 50,
            amplitude: 20 * (amplitude || 1),
            speed: 0.3,
            points: 20 * (amplitude || 1),
          }}
        />
      </Flex>
    </Flex>
  );
});
