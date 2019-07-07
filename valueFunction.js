function value(anything) {
    while(typeof anything=='function'){
      anything=anything()
    }
    return anything
  }
  