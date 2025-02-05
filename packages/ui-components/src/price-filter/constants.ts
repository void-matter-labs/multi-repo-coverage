import { PricingOptions } from "./types";

type PricingIds = '1' | '2'

export const pricingElements: PricingOptions<PricingIds>[] = [
  {
    id: '1', 
    label: 'All Price', 
    range : {
      max: Infinity,
      min: 0
    }
  },
  {
    id: '2',
    label: '$0.00 - 99.99',
    range: {
      max: 100,
      min: 0
    }
  }
]