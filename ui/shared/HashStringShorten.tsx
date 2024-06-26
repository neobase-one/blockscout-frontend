import { Tooltip } from '@chakra-ui/react';
import React from 'react';

import shortenString from 'lib/shortenString';

interface Props {
  hash: string;
  isTooltipDisabled?: boolean;
}

const HashStringShorten = ({ hash, isTooltipDisabled }: Props) => {
  if (hash.length <= 8) {
    return <span>{ hash }</span>;
  }

  return (
    <Tooltip label={ hash } isDisabled={ isTooltipDisabled } bgColor="bg_base" color="text" borderWidth="1px" borderColor="divider">
      { shortenString(hash) }
    </Tooltip>
  );
};

export default HashStringShorten;
