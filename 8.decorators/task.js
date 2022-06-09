function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache) {
        console.log('Из кэша: ' + objectInCache.result);
        return 'Из кэша: ' + objectInCache.result;       
      };

    let result = func(...args);
    cache.push({hash, result}); 
    
      if (cache.length > 5) {
        cache.shift(hash);
      }; 

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;     
  };    
    
  return wrapper;
};


function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = true;
  return function (...args) {
    func(...args);
    flag = false;
    clearTimeout(timeout);
    timeout = setTimeout(func, ms);
  };   
};

function debounceDecorator2(func, ms) {
  let count = 0;
  let timeout;
  let flag = true;
  return function (...args) {
    func(...args);
    flag = false;
    func.history = count++;
    func.apply(this, args);
    clearTimeout(timeout);
    timeout = setTimeout(func, ms);
  };   
  
  
  
  
  
  /*let count = 0;
  function wrapper(...args) {
    wrapper.history = count++;
    return debounceDecoratorNew.call(this, ...args);
  }
  return wrapper;*/
}

