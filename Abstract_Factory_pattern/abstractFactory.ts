interface Toy {
  play()
}

interface CarToy extends Toy {
  play()
}

interface DollToy extends Toy {
  play()
}

class TescoCarToy implements CarToy {
  play() {
    return 'wroom tesco'
  }
}

class TescoDollToy implements DollToy {
  play() {
    return 'blush tesco'
  }
}

class AldiCarToy implements CarToy {
  play() {
    return 'wroom aldi'
  }
}

class AldiDollToy implements DollToy {
  play() {
    return 'blush aldi'
  }
}

class ZabkaCarToy implements CarToy {
  play() {
    return 'wroom zabka'
  }
}

class ZabkaDollToy implements DollToy {
  play() {
    return 'blush zabka'
  }
}

interface AbstractToyFactory {
  createCarToy(): CarToy
  createDollToy(): DollToy
}

class TescoToyFactory implements AbstractToyFactory {
  createCarToy(): TescoCarToy {
    return new TescoCarToy()
  }
  createDollToy(): TescoDollToy {
    return new TescoDollToy()
  }
}

class AldiToyFactory implements AbstractToyFactory {
  createCarToy(): AldiCarToy {
    return new AldiCarToy()
  }
  createDollToy(): AldiDollToy {
    return new AldiDollToy()
  }
}

class ZabkaToyFactory implements AbstractToyFactory {
  createCarToy(): ZabkaCarToy {
    return new ZabkaCarToy()
  }
  createDollToy(): ZabkaDollToy {
    return new ZabkaDollToy()
  }
}

function clientCode(factory: AbstractToyFactory) {
  const car = factory.createCarToy();
  const doll = factory.createDollToy();

  console.log(car.play())
  console.log(doll.play())
}


// main
console.log('Testing client code with the first (Tesco) factory type')
clientCode(new TescoToyFactory())

console.log('')

console.log('Testing the same client code with the second (Aldi) factory type')
clientCode(new AldiToyFactory())

console.log('')

console.log('Testing the same client code with the third (Zabka) factory type')
clientCode(new ZabkaFactory())




