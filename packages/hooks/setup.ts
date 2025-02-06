import { vi } from 'vitest'

global.matchMedia = vi.fn((matchQuery: string)=>{
  return {
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    get matches(){
      return true
    },
    dispatchEvent: vi.fn(),
    media: matchQuery,
    onchange: vi.fn()
  }
})