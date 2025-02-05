import { composeStory } from "@storybook/react"
import meta, { Primary } from "./ProductCompleteFilter.stories"
import { PricingOptions } from "ui-components/src/price-filter/types"

const fakeFetch: any = ()=>{}

const originalFetch = global.fetch

afterEach(()=>{
  global.fetch = originalFetch;
  jest.clearAllMocks()
})


describe("ProductCompleteFilter", () => {
  it("renders info from backend", async ()=>{
    //@ts-expect-error
    global.fetch = jest.fn((url: string)=> {
        if(url.includes("filters")){
          console.log("Fetching")
          return {
            json: jest.fn(()=>Promise.resolve<PricingOptions[]>([{
              id: '1',
              label: '1',
              range: {
                max: 1,
                min: 0  
              }
            }]))
          }
        }

        return Promise.resolve([])
      }
    )
  
    await composeStory(Primary, meta).run()
  })
  
})