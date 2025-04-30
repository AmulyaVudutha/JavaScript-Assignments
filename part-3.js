/*function createGreeting(greeting) {
    return function(name) {
      return `${greeting}, ${name}!`;
    };
  }

  const sayHello = createGreeting("Hello");
  console.log(sayHello("Everyone"));     
  
  const sayHi = createGreeting("Hi");
  console.log(sayHi("Ayan"));  */ 

  function createSecretHolder(secret) {
    let _secret = secret;
  
    return {
      getSecret: function() {
        return _secret;
      },
      setSecret: function(newSecret) {
        _secret = newSecret;
      }
    };
  }
  const holder = createSecretHolder("mySecret");
  
  console.log(holder.getSecret());    
  
  holder.setSecret("newSecretValue");
  console.log(holder.getSecret());    
  
  console.log(holder._secret);        
    
  