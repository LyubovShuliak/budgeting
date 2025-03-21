import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/popover';
import React from 'react';
const PopoverHorizon = (props: {
  trigger: JSX.Element;
  extra?: string;
  content: JSX.Element;
}) => {
  const { extra, trigger, content } = props;
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        className={`w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none ${extra}`}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverHorizon;
