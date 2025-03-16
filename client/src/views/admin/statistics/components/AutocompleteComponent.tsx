import React, { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ItemName, Tag } from '../../../../app/api/types';

export const AutocompleteComponent: FC<{
  clear: () => void;
  currentValue?: Tag;
  inputValue: string;
  onInputChange: (value: string) => void;
  options: Tag[];
  onValueChange: (value: string) => void;
  selected: string[];
}> = ({
  options,
  currentValue,
  inputValue,
  onInputChange,
  clear,
  onValueChange,
  selected,
}) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const dropREf = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        event.target instanceof Element &&
        ref.current &&
        dropREf.current &&
        !ref.current.contains(event.target) &&
        !dropREf.current.contains(event.target)
      ) {
        setShow(false);
      }
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className={'relative  h-fit w-fit'} ref={ref}>
      <div className={'flex gap-2 items-center '}>
        <button
          type={'button'}
          className={'bg-blue-600 p-1 w-28 rounded-md h-12 text-sm text-white'}
          onClick={() => onValueChange(inputValue)}
        >
          Add tag
        </button>
        <input
          onChange={({ target: { value } }) => onInputChange(value)}
          type={'text'}
          id={'tag'}
          value={inputValue}
          onFocus={() => setShow(true)}
          // onBlur={() => setShow(false)}
          placeholder={'groceries'}
          className={` flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white`}
        />
      </div>

      {show
        ? createPortal(
            <div
              style={{
                top: ref.current?.getBoundingClientRect().bottom || 0,
                left: ref.current?.getBoundingClientRect().left || 0,
                width: ref.current?.offsetWidth || 'auto',
              }}
              className={`bg-white shadow-lg rounded-md z-50 max-h-48 overflow-scroll absolute `}
            >
              <div className={' w-full'} ref={dropREf}>
                {options
                  .filter(
                    (el) =>
                      !selected.includes(el.name) &&
                      el.name.includes(inputValue),
                  )
                  .map((item) => {
                    return (
                      <p
                        className={'p-2'}
                        key={item.id}
                        onClick={() => {
                          onValueChange(item.name);
                        }}
                      >
                        {item.name}
                      </p>
                    );
                  })}
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
};
