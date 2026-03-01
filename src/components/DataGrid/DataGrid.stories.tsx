import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from './DataGrid';
import type { GridColDef } from './DataGrid';

const sampleColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'quantity', headerName: 'Quantity', type: 'number', width: 100 },
  { field: 'price', headerName: 'Price', type: 'number', width: 120 },
];

const sampleRows = [
  { id: 1, name: 'Widget A', quantity: 150, price: 12.99 },
  { id: 2, name: 'Widget B', quantity: 230, price: 24.5 },
  { id: 3, name: 'Gadget X', quantity: 80, price: 45.0 },
  { id: 4, name: 'Gadget Y', quantity: 42, price: 89.99 },
  { id: 5, name: 'Component Z', quantity: 500, price: 3.25 },
];

const meta = {
  title: 'Components/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  argTypes: {
    checkboxSelection: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    density: {
      control: 'select',
      options: ['compact', 'standard', 'comfortable'],
    },
  },
  args: {
    columns: sampleColumns,
    rows: sampleRows,
  },
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCheckboxSelection: Story = {
  args: {
    checkboxSelection: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Compact: Story = {
  args: {
    density: 'compact',
  },
};

export const Empty: Story = {
  args: {
    rows: [],
  },
};
