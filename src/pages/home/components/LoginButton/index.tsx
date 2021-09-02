import React from 'react';
import { IconButton, Icon } from '@chakra-ui/react';
import { FaUnlockAlt } from 'react-icons/fa';
import {
  loginDrawerVisibleAtom,
  toggleLoginDrawerAtom,
} from '../../atoms/loginDrawerAtoms';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';

interface Props {
  alwaysShow?: boolean;
}

export const LoginButton = React.memo(({ alwaysShow }: Props) => {
  const loginDrawerVisible = useAtomValue(loginDrawerVisibleAtom);
  const toggleLoginDrawer = useUpdateAtom(toggleLoginDrawerAtom);

  return (
    <IconButton
      onClick={toggleLoginDrawer}
      position="absolute"
      aria-label="login"
      icon={<Icon as={FaUnlockAlt} />}
      bgColor="gray.700"
      color="white"
      size="lg"
      right={0}
      top="20vh"
      zIndex={9999}
      transition="all 300ms"
      _hover={{ bgColor: 'gray.500' }}
      _active={{ bgColor: 'gray.500' }}
      borderTopRightRadius={0}
      borderBottomRightRadius={0}
      display={alwaysShow || !loginDrawerVisible ? 'block' : 'none'}
      transform={alwaysShow ? 'translateX(-320px)' : undefined}
    />
  );
});
