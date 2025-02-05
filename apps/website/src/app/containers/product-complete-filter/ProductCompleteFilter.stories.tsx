import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductCompleteFilter from '.';

const meta = {
  title: 'Example/ProductCompleteFilter',
  component: ProductCompleteFilter,
  decorators: [(Story)=><QueryClientProvider client={new QueryClient()}>
    <Story />
  </QueryClientProvider>],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ProductCompleteFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play(){
    expect(true).toBe(true)
  }
};

