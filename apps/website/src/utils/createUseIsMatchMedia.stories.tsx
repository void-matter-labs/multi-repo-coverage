import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import createUseIsMatchMedia from './createUseIsMatchMedia';

const useIsMobile = createUseIsMatchMedia("(max-width: 400px)")

const Wrapper= ()=>{

  const isMobile = useIsMobile();

  return <div>
    {isMobile ? "Mobile" : "Desktop"}
  </div>
}

const meta = {
  title: 'Example/createUseIsMatchMedia',
  component: Wrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Validate filter options
export const IsMobile: Story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone5',
    },
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement)
 
    const mobileText = canvas.getByText('Mobile')
    expect(mobileText.innerHTML).toContain('Mobile')
  }
};
