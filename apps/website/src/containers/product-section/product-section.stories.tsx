import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, waitFor, userEvent, expect } from '@storybook/test';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductSection from '.';


const meta = {
  title: 'Example/ProductSection',
  component: ProductSection,
  decorators: [(Story) => <QueryClientProvider client={new QueryClient()}>
    <Story />
  </QueryClientProvider>],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ProductSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Validate filter options
export const ValidateFilterOptions: Story = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement)

    await waitFor(() => {
      const filterOptions = canvas.getByLabelText('All Price')

      expect(filterOptions).toBeInTheDocument()
    })
  }
};

export const FilterProducts: Story = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement)

    await waitFor(async () => {
      await userEvent.click(canvas.getByLabelText('All Price'))
    })

    await waitFor(() => {
      const product = canvas.getByText('Product 1')

      expect(product).toBeInTheDocument()
    })
  }
}


export const Primary: Story = {}