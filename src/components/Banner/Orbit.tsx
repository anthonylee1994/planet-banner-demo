import React from 'react';
import Fly from './assets/fly.svg';
import { motion } from 'framer-motion';
import { Circle, Image } from '@chakra-ui/react';

interface Props {
  radius: number;
}

const MotionCircle = motion(Circle);
const MotionImage = motion(Image);

export const Orbit = React.memo(({ radius }: Props) => {
  const initialPosition = React.useMemo(() => Math.random() * 360, []);

  return (
    <MotionCircle
      position="absolute"
      width={radius}
      height={radius}
      bgColor="transparent"
      borderStyle="solid"
      borderWidth={2}
      borderColor="gray.200"
      animate={{ rotate: initialPosition + 360 }}
      transition={{
        ease: 'linear',
        duration: 20 + Math.random() * 30,
        repeat: Infinity,
      }}
    >
      <MotionImage
        src={Fly}
        width={16}
        position="absolute"
        transformOrigin="center"
        initial={{
          rotate: initialPosition,
          x: radius / 2,
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          rotate: [initialPosition, initialPosition + 360],
          opacity: [0, 1, 0],
        }}
        transition={{
          ease: 'linear',
          duration: 10 + Math.random() * 5,
          repeat: Infinity,
        }}
      />
      <MotionImage
        src={Fly}
        width={16}
        position="absolute"
        transformOrigin="center"
        initial={{
          rotate: initialPosition,
          x: -radius / 2,
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          rotate: [initialPosition, initialPosition + 360],
          opacity: [0, 1, 0],
        }}
        transition={{
          ease: 'linear',
          duration: 10 + Math.random() * 5,
          repeat: Infinity,
        }}
      />
    </MotionCircle>
  );
});
