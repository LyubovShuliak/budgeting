import React, { useState } from 'react';
import { FC, useEffect } from 'react';

import { useGetAllTagsQuery } from '../../../../app/api/shopping-history-api';
import { Tag } from '../../../../app/api/types';
import InputField from '../../../../components/fields/InputField';
import { AutocompleteComponent } from './AutocompleteComponent';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const TagSelector: FC<{
  value: string[];
  onChange: (value: string) => void;
}> = ({ onChange, value }) => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const { data, isLoading } = useGetAllTagsQuery();

  const [tag, setTags] = React.useState<Tag[]>([]);
  useEffect(() => {
    if (data?.length && !isLoading) {
      setTags(data);
    }
  }, [data]);

  const [newTag, setNewTag] = useState('');
  const [selectedTag, setSelectedTag] = useState<Tag[]>([]);

  const [show, setShow] = useState(false);
  return (
    <div
      className={
        'w-full relative row-span-2 flex justify-between flex-col h-full col-span-2 gap-2'
      }
    >
      <label
        className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium
            `}
      >
        Tags
      </label>
      <AutocompleteComponent
        selected={value}
        clear={() => setNewTag('')}
        inputValue={newTag}
        onInputChange={(value) => setNewTag(value)}
        options={tag}
        currentValue={tag.find((elem) => elem.name === newTag)}
        onValueChange={onChange}
      />

      {/*<div className={'flex flex-row  items-center gap-2  '}>*/}
      {/*  <button*/}
      {/*    type="button"*/}
      {/*    className={*/}
      {/*      'w-20 text-sm bg-blue-600 rounded-lg p-2 text-white h-12 mt-2 box-border'*/}
      {/*    }*/}
      {/*    onClick={(event) => {*/}
      {/*      event.nativeEvent.stopPropagation();*/}
      {/*      setShow(true);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Add tag{' '}*/}
      {/*  </button>*/}
      {/*  <InputField*/}
      {/*    id="name"*/}
      {/*    extra={`w-full`}*/}
      {/*    placeholder="Enter tag"*/}
      {/*    variant="auth"*/}
      {/*    onChange={handleChange}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
};
