import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};


export const AsRadio: Story = {
  args : {
    type: 'radio'
  }
};