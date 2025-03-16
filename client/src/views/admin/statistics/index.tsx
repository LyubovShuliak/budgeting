import React from 'react';

import { ShoppingListTable } from './components/ShoppingListTable';

export const Statistics = () => {
  return (
    <div className="mt-3  h-full  gap-5 w-full">
      {/* right side section */}

      <div className="h-full w-full rounded-xl 2xl:col-span-2">
        <ShoppingListTable />
      </div>
    </div>
  );
};
