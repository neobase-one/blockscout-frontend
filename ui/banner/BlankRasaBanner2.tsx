import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const BlankRasaBanner2 = () => {
  const bg = useColorModeValue('light', '#171717');
  const pColor = useColorModeValue('#616B74', 'gray.200');
  const btnColor = useColorModeValue('white', '#171717');
  const bgBoxShadowDesktop = useColorModeValue(
    '0px 8px 16px -5px rgba(0, 0, 0, 0.10)',
    '0px 8px 16px -5px rgba(6, 252, 153, 0.10)',
  );
  const imgColor = useColorModeValue('invert(0)', 'invert(1)');

  return (
    <Box
      bg={ bg }
      boxShadow={ bgBoxShadowDesktop }
      borderRadius="md"
      p={ 5 }
      display="flex"
      alignItems={ [ '', 'center' ] }
      justifyContent="space-between"
      flexDirection={ [ 'column', 'row' ] }
    >
      <Flex
        flexDirection={ [ 'column', 'row' ] }
        alignItems={ [ '', 'center' ] }
        gap={ 5 }
      >
        <Image
          src="/static/logo2.png"
          w={ [ '90px', '100px' ] }
          h={ [ '90px', '100px' ] }
          alt="logo2"
          filter={ imgColor }
        />
        <Box w={ [ '100%', '50%' ] }>
          { /* <Heading as="h2" size="md" mb={ 2 } fontWeight="bold">
            Blank Rasa
          </Heading> */ }
          <Text fontSize="20px" fontWeight="bold" mb={ 2 }>
            Blank Rasa
          </Text>
          <Text fontSize="14px" color={ pColor }>
            A platform for discovering and trading NFTs on Canto. Features
            collections such as CantoLongneck, Shnoises and more
          </Text>
        </Box>
      </Flex>
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
          width={ [ '100%', '270px' ] }
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

export default BlankRasaBanner2;
