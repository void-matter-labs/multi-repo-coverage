import { composeStory } from "@storybook/react"
import meta, { IsMobile } from "./createUseIsMatchMedia.stories"
import { renderHook } from "@testing-library/react"
import createUseIsMatchMedia from "./createUseIsMatchMedia"

describe("createUseIsMatchMedia", () => {
  it("when mobile renders Mobile text", ()=>{
    const { result } = renderHook(createUseIsMatchMedia("(max-width: 400px)"))

    expect(result.current).toBe(true)
  })
})