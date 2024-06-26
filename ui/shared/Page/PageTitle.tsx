import { Heading, Flex, Tooltip, Icon, Link, chakra, Skeleton, useDisclosure } from '@chakra-ui/react';
import _debounce from 'lodash/debounce';
import React from 'react';

import eastArrowIcon from 'icons/arrows/east.svg';
import useIsMobile from 'lib/hooks/useIsMobile';
import TextAd from 'ui/shared/ad/TextAd';
import LinkInternal from 'ui/shared/LinkInternal';

type BackLinkProp = { label: string; url: string } | { label: string; onClick: () => void };

type Props = {
  title: string;
  className?: string;
  backLink?: BackLinkProp;
  beforeTitle?: React.ReactNode;
  afterTitle?: React.ReactNode;
  contentAfter?: React.ReactNode;
  isLoading?: boolean;
  withTextAd?: boolean;
}

const TEXT_MAX_LINES = 1;

const BackLink = (props: BackLinkProp & { isLoading?: boolean }) => {
  if (!props) {
    return null;
  }

  if (props.isLoading) {
    return <Skeleton boxSize={ 6 } display="inline-block" borderRadius="base" mr={ 3 } my={ 2 } verticalAlign="text-bottom" isLoaded={ !props.isLoading }/>;
  }

  const icon = <Icon as={ eastArrowIcon } boxSize={ 6 } transform="rotate(180deg)" margin="auto"/>;

  if ('url' in props) {
    return (
      <Tooltip label={ props.label } bgColor="bg_base" color="text" borderWidth="1px" borderColor="divider">
        <LinkInternal display="inline-flex" href={ props.url } h="40px" mr={ 3 }>
          { icon }
        </LinkInternal>
      </Tooltip>
    );
  }

  return (
    <Tooltip label={ props.label } bgColor="bg_base" color="text" borderWidth="1px" borderColor="divider">
      <Link display="inline-flex" onClick={ props.onClick } h="40px" mr={ 3 }>
        { icon }
      </Link>
    </Tooltip>
  );
};

const PageTitle = ({ title, contentAfter, withTextAd, backLink, className, isLoading, afterTitle, beforeTitle }: Props) => {
  const tooltip = useDisclosure();
  const isMobile = useIsMobile();
  const [ isTextTruncated, setIsTextTruncated ] = React.useState(false);

  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const textRef = React.useRef<HTMLSpanElement>(null);

  const updatedTruncateState = React.useCallback(() => {
    if (!headingRef.current || !textRef.current) {
      return;
    }

    const headingRect = headingRef.current.getBoundingClientRect();
    const textRect = textRef.current.getBoundingClientRect();
    if ((TEXT_MAX_LINES + 1) * headingRect.height <= textRect.height) {
      setIsTextTruncated(true);
    } else {
      setIsTextTruncated(false);
    }
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      updatedTruncateState();
    }
  }, [ isLoading, updatedTruncateState ]);

  React.useEffect(() => {
    const handleResize = _debounce(updatedTruncateState, 1000);
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, [ updatedTruncateState ]);

  return (
    <Flex
      className={ className }
      mb={ 6 }
      flexDir="row"
      flexWrap="wrap"
      rowGap={ 3 }
      columnGap={ 3 }
      alignItems="center"
    >
      <Flex h={{ base: 'auto', lg: isLoading ? 10 : 'auto' }} maxW="100%" alignItems="center">
        { backLink && <BackLink { ...backLink } isLoading={ isLoading }/> }
        { beforeTitle }
        <Skeleton
          isLoaded={ !isLoading }
          overflow="hidden"
        >
          <Tooltip
            label={ title }
            isOpen={ tooltip.isOpen }
            bgColor="bg_base" color="text" borderWidth="1px" borderColor="divider"
            onClose={ tooltip.onClose }
            maxW={{ base: 'calc(100vw - 32px)', lg: '500px' }}
            closeOnScroll={ isMobile ? true : false }
            isDisabled={ !isTextTruncated }
          >
            <Heading
              ref={ headingRef }
              as="h1"
              size="lg"
              whiteSpace="normal"
              wordBreak="break-all"
              style={{
                WebkitLineClamp: TEXT_MAX_LINES,
                WebkitBoxOrient: 'vertical',
                display: '-webkit-box',
              }}
              overflow="hidden"
              textOverflow="ellipsis"
              onMouseEnter={ tooltip.onOpen }
              onMouseLeave={ tooltip.onClose }
              onClick={ isMobile ? tooltip.onToggle : undefined }
            >
              <span ref={ textRef }>
                { title }
              </span>
            </Heading>
          </Tooltip>
        </Skeleton>
        { afterTitle }
      </Flex>
      { contentAfter }
      { withTextAd && <TextAd order={{ base: -1, lg: 100 }} mb={{ base: 6, lg: 0 }} ml="auto" w={{ base: '100%', lg: 'auto' }}/> }
    </Flex>
  );
};

export default chakra(PageTitle);
