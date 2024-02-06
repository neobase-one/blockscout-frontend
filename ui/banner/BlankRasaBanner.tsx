import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import React from 'react';

const BlankRasaBanner = ({ orientation }: {orientation: string}) => {
  const bg = useColorModeValue('light', '#171717');
  const pColor = useColorModeValue('#616B74', 'gray.200');
  const btnColor = useColorModeValue('white', '#171717');
  const bgBoxShadowDesktop = useColorModeValue(
    '0px 8px 16px -5px rgba(0, 0, 0, 0.10)',
    '0px 8px 16px -5px rgba(6, 252, 153, 0.10)',
  );
  const imgColor = useColorModeValue('invert(0)', 'invert(1)');

  const landscape = orientation === 'landscape';
  const potrait = orientation === 'potrait';
  const landscapeOrientationCondition = landscape && !potrait;

  return (
    <Box
      pt={ 5 }
      px={ 5 }
      pb={ 7 }
      h="100%"
      w={ [ 'full', landscapeOrientationCondition ? '100%' : '40%' ] }
      bg={ bg }
      boxShadow={ bgBoxShadowDesktop }
      borderRadius="md"
      display="flex"
      alignItems={ [ '', landscapeOrientationCondition ? 'center' : '' ] }
      justifyContent="space-between"
      flexDirection={ [ 'column', landscapeOrientationCondition ? 'row' : 'column' ] }
    >
      <Flex
        flexDirection={ [ 'column', landscapeOrientationCondition ? 'row' : 'column' ] }
        alignItems={ [ '', landscapeOrientationCondition ? 'center' : '' ] }
        gap={ landscapeOrientationCondition ? 5 : 2 }
      >
        <Image
          src="/static/bank-rasa-logo.png"
          w={ [ '90px', landscapeOrientationCondition ? '100px' : '90px' ] }
          h={ [ '90px', landscapeOrientationCondition ? '100px' : '90px' ] }
          alt="blank-rasa-logo-loading..."
          filter={ imgColor }
        />
        <Box w={ [ '100%', landscapeOrientationCondition ? '50%' : '100%' ] }>
          <Heading as="h2" size="md" mt={ 3 } mb={ 2 } fontWeight="bold">
            Blank Rasa
          </Heading>
          <Text fontSize="sm" color={ pColor }>
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
          mt={ 3 }
          width={ [ '100%', landscapeOrientationCondition ? '270px' : '100%' ] }
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

export default BlankRasaBanner;
