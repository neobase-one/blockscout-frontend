import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const BlankRasaBanner1 = () => {
  const bg = useColorModeValue('light', '#171717');
  const pColor = useColorModeValue('#616B74', 'gray.200');
  const btnColor = useColorModeValue('white', '#171717');
  const imgColor = useColorModeValue('invert(0)', 'invert(1)');
  const bgBoxShadowDesktop = useColorModeValue(
    '0px 8px 16px -5px rgba(0, 0, 0, 0.10)',
    '0px 8px 16px -5px rgba(6, 252, 153, 0.10)',
  );

  return (
    <Box
      bg={ bg }
      boxShadow={ bgBoxShadowDesktop }
      borderRadius="md"
      pt={ 5 }
      px={ 5 }
      pb={ 7 }
      mt={ 8 }
      w={ [ 'full', '40%' ] }
    >
      <Image
        src="/static/logo2.png"
        w={ [ '100px' ] } // Responsive image size
        h={ [ '100px' ] }
        filter={ imgColor }
        alt="logo2"
      />
      <Box>
        <Heading as="h2" size="md" mt={ 3 } mb={ 2 } fontWeight="bold">
          Blank Rasa
        </Heading>
        <Text fontSize="sm" color={ pColor }>
          A platform for discovering and trading NFTs on Canto. Features
          collections such as CantoLongneck, Shnoises and more
        </Text>
      </Box>

      <a
        href="https://www.blankrasa.com"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <Button
          bg="transparent"
          color="green.500"
          _hover={{
            bg: 'green.500',
            color: btnColor,
          }}
          fontWeight="medium"
          colorScheme="green.500"
          p={ 4 }
          mt={ [ 3 ] }
          width="100%"
          fontSize="sm"
          variant="outline"
          borderWidth="1.5px"
        >
          Explore More
        </Button>
      </a>
    </Box>
  );
};

export default BlankRasaBanner1;
