import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

import { setForm } from '../../../../app/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/store';
import InputField from '../../../../components/fields/InputField';
import { TagSelector } from './TagSelector';

const Form = () => {
  const dispatch = useAppDispatch();

  const formData = useAppSelector((state) => state.user.form);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatch(setForm({ [id]: value }));
  };

  return (
    <form className="grid grid-cols-2 gap-2 items-center justify-center ">
      <div className={'col-span-2 flex gap-2'}>
        {formData.tag.map((tagName) => {
          return (
            <div
              key={tagName}
              className={
                'text-sm bg-blue-600/70  w-fit p-2 rounded-3xl flex gap-1 text-white'
              }
            >
              <button
                onClick={() =>
                  dispatch(
                    setForm({
                      tag: formData.tag.filter((el) => el !== tagName),
                    }),
                  )
                }
              >
                <TiDeleteOutline className="h-4 w-4" />
              </button>
              <p className={'cursor-default'}> {tagName}</p>
            </div>
          );
        })}
      </div>
      <InputField
        id="name"
        label="Item Name"
        extra="w-full"
        placeholder="Enter item name"
        variant="auth"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        id="price"
        label="Price"
        extra="w-full"
        placeholder="Enter price"
        variant="auth"
        value={formData.price}
        onChange={handleChange}
      />
      <InputField
        id="measurement"
        label="Measurement"
        extra="w-full"
        placeholder="Enter measurement unit"
        variant="auth"
        value={formData.measurement}
        onChange={handleChange}
      />
      <InputField
        id="total"
        label="Total"
        extra="w-full"
        placeholder="Enter total"
        variant="auth"
        value={formData.total}
        onChange={handleChange}
      />
      <InputField
        id="date"
        label="Date"
        extra="w-full"
        placeholder="Enter date"
        variant="auth"
        value={formData.date}
        onChange={handleChange}
        type="date"
      />

      <InputField
        id="quantity"
        label="Quantity"
        extra="w-full"
        placeholder="Enter quantity"
        variant="auth"
        value={formData.quantity.toString()}
        onChange={handleChange}
        type="number"
      />
      <TagSelector
        value={formData.tag}
        onChange={(value) => {
          dispatch(setForm({ tag: [...formData.tag, value] }));
        }}
      />
    </form>
  );
};

export default Form;
