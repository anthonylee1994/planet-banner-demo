import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Banner } from '../../components/Banner';

export const App = React.memo(() => {
  return (
    <Flex flexDirection="column">
      <Banner />
      <Flex
        flexDirection="column"
        bg="#e1eefe"
        padding="0 40px 60px"
        d="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Text
          fontSize={{ base: '3xl', md: '4xl' }}
          textAlign="center"
          mt={-8}
          zIndex={2}
          mb={8}
          color="blue.700"
        >
          What We Do
        </Text>
        <Text fontSize="md" textAlign="center" color="blue.700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem natus
          magnam culpa repudiandae placeat. Quisquam nisi exercitationem esse,
          voluptatem accusamus ipsa eligendi quae inventore sed expedita id
          necessitatibus laudantium blanditiis rem eum mollitia quo quasi
          dolorum molestias laboriosam soluta officiis ad minus. Iste officiis
          est totam, quod tenetur veritatis id sapiente natus, blanditiis minus
          recusandae error sed corporis voluptatum non omnis, laborum itaque ut?
          Amet voluptas beatae debitis nisi quaerat repudiandae sapiente dolor
          porro, aliquid minima nobis voluptatibus quis, provident ut non
          consequuntur culpa? Similique fugiat ad a ducimus reprehenderit libero
          doloribus itaque non ipsum! Asperiores inventore reprehenderit non
          excepturi.
        </Text>
      </Flex>
    </Flex>
  );
});
