// example 1 START
interface Product {
  doStuff()
}

class ConcreteProductA implements Product {
  doStuff() {
    return 'Concrete product a'
  }
}

class ConcreteProductB implements Product {
  doStuff() {
    return 'Concrete product b'
  }
}

abstract class Creator {

  public abstract createProduct(): Product;
  public someOperation(): string {
    const product = this.createProduct()
    return 'This is a ' + product.doStuff()
  }
}

class ConcreteCreatorA extends Creator {
  public createProduct(): Product {
    return new ConcreteProductA()
  }
}

class ConcreteCreatorB extends Creator {
  public createProduct(): Product {
    return new ConcreteProductB()
  }
}

function clientCode(creator: Creator) {
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.')
  console.log(creator.someOperation())
}

// main
console.log('App: Launched with the ConcreteCreatorA.')
clientCode(new ConcreteCreatorA())
console.log('')
console.log('App: Launched with the ConcreteCreatorB.')
clientCode(new ConcreteCreatorB())