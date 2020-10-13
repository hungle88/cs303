let animal = {

  eats: true
  
  };
  
  function Dog(name) {
  
  this.name = name;
  
  
  
  }
  
  
  
  let snoopy = new Dog("Snoopy");
  
  snoopy= Object.create(animal);

  console.log(snoopy.eats);