import { describe, it } from 'vitest'
import { Container, decorate, inject, injectable } from 'inversify'

describe('Inversify', () => {
  it('should work', () => {
    const container = new Container({
      defaultScope: 'Request'
    })

    class Blade {
      hello(){
        console.log("from blade")
      }
    }

    decorate(injectable(), Blade)

    container.bind<Blade>(Blade).toSelf()

    class Warrior {
      constructor(public blade: Blade) {}
      getBlade() {
        console.log("Hello")
        return this.blade
      }
    }
    
    decorate(injectable(), Warrior)
    decorate(inject(Blade), Warrior, 0)

    container.bind<Warrior>(Warrior).toSelf()

    container.get(Warrior).getBlade().hello()
  })
})