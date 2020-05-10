interface ServiceInterface {
  operation(): string
}

class Service implements ServiceInterface {
  operation() {
    return 'service class operation'
  }
}

class ServiceProxy extends Service implements ServiceInterface {
  realService: Service;

  constructor(realService: Service) {
    super()
    this.realService = realService
  }

  checkAccess() {
    return true
  }

  operation() {
    if (this.checkAccess()) {
      return this.realService.operation();
    } else {
      return 'acces denied'
    }
  }
}

const service = new Service()
const serviceProxy = new ServiceProxy(service)
const response = serviceProxy.operation()
console.log(response)

