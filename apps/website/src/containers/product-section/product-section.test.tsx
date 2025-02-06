import { composeStory } from "@storybook/react";
import { PricingOptions } from "ui-components/src/price-filter/types"

import meta, { ValidateFilterOptions } from "./product-section.stories";

const originalFetch = global.fetch

afterEach(() => {
  global.fetch = originalFetch;
  jest.clearAllMocks()
})

describe('PriceFilter', () => {

  it("when load price filter show price options", async () => {

    console.log('Running test from product-section.test.tsx')

    //@ts-expect-error
    global.fetch = jest.fn((url: string) => {
      if (url.includes("filters")) {
        console.log("Fetching")
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

      return Promise.resolve([])
    })

    await composeStory(ValidateFilterOptions, meta).run()
  })

})


