import { composeStory } from "@storybook/react"
import meta, { Primary } from "./ProductCompleteFilter.stories"

describe("ProductCompleteFilter", () => {
  it("renders info from backend", composeStory(meta, Primary).run)
})