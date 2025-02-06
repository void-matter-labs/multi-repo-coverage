import '@testing-library/jest-dom'

global.matchMedia = jest.fn((matchQuery: string)=>{
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    get matches(){
      return true
    },
    dispatchEvent: jest.fn(),
    media: matchQuery,
    onchange: jest.fn()
  }
})