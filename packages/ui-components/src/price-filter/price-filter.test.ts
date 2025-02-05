import { composeStory } from "@storybook/react";
import { describe, it } from "vitest";
import meta, { Onchange } from "./price-filter.stories";
import { pricingElements } from "./constants";


describe('PriceFilter', ()=>{

  const cases = pricingElements.map(({id, label, range})=>({
    labelText: label,
    expected: {
      range,
      id
    }
  }))

  it.each(cases)('when clicked a checkbox with label $labelText calls on change with $expected', async (parameters)=>{
    await composeStory(Onchange, meta).run({
      parameters
    })
  })

})