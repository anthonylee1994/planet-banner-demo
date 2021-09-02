import React from 'react';
import {
  Icon,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Link,
} from '@chakra-ui/react';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import {
  closeLoginDrawerAtom,
  loginDrawerVisibleAtom,
} from '../../atoms/loginDrawerAtoms';
import { LoginButton } from '../LoginButton';
import { FaUser, FaLock } from 'react-icons/fa';

export const LoginDrawer = React.memo(() => {
  const loginDrawerVisible = useAtomValue(loginDrawerVisibleAtom);
  const closeLoginDrawer = useUpdateAtom(closeLoginDrawerAtom);

  return (
    <Drawer
      isOpen={loginDrawerVisible}
      placement="right"
      onClose={closeLoginDrawer}
    >
      <DrawerOverlay />
      <DrawerContent bgColor="gray.700">
        <LoginButton alwaysShow />

        <DrawerHeader borderBottomWidth="1px">User Login</DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px" mt={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon color="gray.300" as={FaUser} />}
              />
              <Input placeholder="Username" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon color="gray.300" as={FaLock} />}
              />
              <Input type="password" placeholder="Password" />
            </InputGroup>

            <Link>Lost Password</Link>

            <Button>Login</Button>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
