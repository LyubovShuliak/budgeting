import { ShoppingListTable } from './components/ShoppingListTable';

export const ShoppingList = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      {/* right side section */}

      <div className="col-span-2 h-full w-full rounded-xl 2xl:col-span-2">
        <ShoppingListTable />
      </div>
    </div>
  );
};
