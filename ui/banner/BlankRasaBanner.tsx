import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useColorModeValue,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';

type IsCardProp = {
  isCard?: boolean;
};

const BlankRasaBanner = ({ isCard = false }: IsCardProp) => {
  const bgColor = useColorModeValue('light', '#171717');
  const textColor = useColorModeValue('#616B74', 'gray.200');
  const btnColor = useColorModeValue('white', '#171717');
  const bgBoxShadowDesktop = useColorModeValue(
    '0px 8px 16px -5px rgba(0, 0, 0, 0.10)',
    '0px 8px 16px -5px rgba(6, 252, 153, 0.10)',
  );
  const imgInvertFilter = useColorModeValue('invert(0)', 'invert(1)');

  return (
    <Box
      p={ 5 }
      h={ !isCard ? '' : '100%' }
      w={ [ 'full', !isCard ? '100%' : '40%' ] }
      bg={ bgColor }
      boxShadow={ bgBoxShadowDesktop }
      borderRadius="md"
      display="flex"
      alignItems={ [ '', !isCard ? 'center' : '' ] }
      justifyContent="space-between"
      flexDirection={ [ 'column', !isCard ? 'row' : 'column' ] }
    >
      <Flex
        flexDirection={ [ 'column', !isCard ? 'row' : 'column' ] }
        alignItems={ [ '', !isCard ? 'center' : '' ] }
        gap={ !isCard ? 5 : 2 }
      >
        <Image
          src="/static/bank-rasa-logo.png"
          w={ [ '90px', !isCard ? '100px' : '90px' ] }
          h={ [ '90px', !isCard ? '100px' : '90px' ] }
          alt="blank-rasa-logo-loading..."
          filter={ imgInvertFilter }
        />
        <Box w={ [ '100%', !isCard ? '50%' : '100%' ] }>
          <Heading as="h2" size="md" mt={ 2 } mb={ 2 } fontWeight="bold">
            Blank Rasa
          </Heading>
          <Text fontSize="sm" color={ textColor }>
            A platform for discovering and trading NFTs on Canto. Features
            collections such as CantoLongneck, Shnoises and more
          </Text>
        </Box>
      </Flex>
      <Link href="https://www.blankrasa.com" isExternal>
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
          width={ [ '100%', !isCard ? '270px' : '100%' ] }
          fontSize="sm"
          variant="outline"
          borderWidth="1.5px"
        >
          Explore More
        </Button>
      </Link>
    </Box>
  );
};

export default BlankRasaBanner;
