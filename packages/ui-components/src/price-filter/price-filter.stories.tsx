import type { Meta, StoryObj } from '@storybook/react';
import PriceFilter from '.';
import { pricingElements } from './constants';
import { cleanup, within } from '@testing-library/react';
import { expect, fn, userEvent } from '@storybook/test';
import { useState } from 'react';

const mockOnChange = fn()

const meta = {
  title: 'Example/PriceFilter',
  component: PriceFilter,
  beforeEach: [cleanup],
  parameters: {
    layout: 'centered',
  },
  args : {
    pricingElements,
    onChange: mockOnChange
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PriceFilter>;

export default meta;
type Story = StoryObj<typeof meta>;



// when clicked a checkbox onChange function is called
// with first as min max values
export const Onchange: Story = {
  parameters: {
    labelText: 'All Price',
    expected: {
      range : {
        max: Infinity,
        min: 0
      },
      id: '1'
    }
  },
  async play({canvasElement,parameters}){
    const canvas =  within(canvasElement)

    const label = canvas.getByLabelText(parameters.labelText);

    await userEvent.click(label)

    expect(mockOnChange).toHaveBeenCalledWith(parameters.expected, expect.anything())
  },
};

// when multi prop is false clicking a diffrent checkbox makes first 
// to be deselected
export const AsRadio: Story = {
  args : {
    
  }
};

// when used a default init value its relative checkbox is checked by default