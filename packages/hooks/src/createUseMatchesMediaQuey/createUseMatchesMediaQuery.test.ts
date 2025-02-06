
import { composeStory } from '@storybook/react'
import {
  describe,
  it
} from 'vitest'
import meta, {IsMobile} from './createUseIsMatchMedia.stories'

describe("createUseMatchesMediaQuery", () => {
  it("when mobile, renders Mobile text", composeStory(IsMobile, meta).run)
})
