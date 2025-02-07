import { composeStory } from "@storybook/react";
import { PricingOptions } from "ui-components/src/price-filter/types"

import meta, { ValidateFilterOptions, FilterProducts } from "./product-section.stories";

const originalFetch = global.fetch


const mockFetch = () => {
  //@ts-expect-error
  global.fetch = jest.fn((url: string) => {
    if (url.includes("filters")) {
      return Promise.resolve(
        {
          json: jest.fn(() =>
            Promise.resolve<PricingOptions[]>([{
              id: '1',
              label: 'All Price',
              range: {
                max: Infinity,
                min: 0
              }
            }])
          )
        } as any
      )
    }

    if (url.includes("products")) {
      return Promise.resolve({
        json: jest.fn(() => Promise.resolve([
          {
            id: '1',
            name: 'Product 1',
            price: 10,
            description: 'Description 1'
          }
        ]))
      } as any)
    }

    return Promise.resolve([])
  });
};


describe('PriceFilter', () => {
  beforeEach(() => {
    mockFetch()
  })

  afterEach(() => {
    global.fetch = originalFetch;
    jest.clearAllMocks()
  })

  it("when load price filter show price options", async () => {
    await composeStory(ValidateFilterOptions, meta).run()
  })

  it("when click on price filter show products", async () => {
    await composeStory(FilterProducts, meta).run()
  })
})


