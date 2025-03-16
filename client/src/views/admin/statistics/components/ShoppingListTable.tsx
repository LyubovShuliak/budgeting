import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import Card from 'components/card';
import CardMenu from 'components/card/CardMenu';
import moment from 'moment';
import React, { useEffect } from 'react';

import { useGetAllItemsQuery } from '../../../../app/api/shopping-history-api';
import { ShoppingItem } from '../../../../app/api/types';
import Form from './Form';
type RowObj = {
  name: string;
  price: string;
  measurement: string;
  total: string;
  date: string;
  tag: { name: string; id: number; color: string | null }[];
  quantity: number;
};

export const ShoppingListTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info: any) => (
        <div className="flex items-center">
          <p className="ml-3 text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor('price', {
      id: 'price',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">PRICE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('measurement', {
      id: 'measurement',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          MEASUREMENT
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('quantity', {
      id: 'quantity',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          QUANTITY
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('total', {
      id: 'total',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">TOTAL</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {moment(new Date(Number(info.getValue()))).format('DD-MM-YYYY')}
        </p>
      ),
    }),
    columnHelper.accessor('tag', {
      id: 'tag',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">TAG</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue().map((tagName) => (
            <span key={tagName.id}> {tagName.name} </span>
          ))}
        </p>
      ),
    }),
  ];
  const { data, isLoading } = useGetAllItemsQuery();
  const [colData, setColData] = React.useState<ShoppingItem[]>([]);
  useEffect(() => {
    console.log(data);
    if (!isLoading) {
      console.log(data);
      setColData(data);
    }
  }, [data]);
  useEffect(() => {
    console.log(data);
    if (!isLoading) {
      console.log(data);
    }
  }, [data, isLoading]);

  const table = useReactTable({
    data: colData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Card extra={'w-full h-full sm:overflow-auto px-6'} id={'statistics'}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Shopping List
        </div>

        <CardMenu />
      </header>
      <Form />
      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: '',
                          desc: '',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className="min-w-[150px] border-white/0 py-3  pr-4"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

const columnHelper = createColumnHelper<RowObj>();
