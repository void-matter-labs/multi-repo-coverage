import { ChangeEvent, ReactNode } from "react";

export interface PricingRange {
  max: number;
  min: number;
}

export interface PricingOptions<T extends string = string> {
  range: PricingRange;
  id: T;
  label: ReactNode
}

export type OnChangeValue = Omit<PricingOptions, 'label'> 

export interface PriceFilterProps<T extends string = string>  {
  onChange?(value: OnChangeValue, event: ChangeEvent<HTMLInputElement>): void;
  multi?: boolean;
  initialDefaultCheckedId?: T;
  pricingElements: PricingOptions[]
}