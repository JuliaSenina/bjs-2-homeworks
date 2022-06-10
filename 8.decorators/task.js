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
        cache.shift();
      }; 

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;     
  };    
    
  return wrapper;
};


function debounceDecoratorNew(func, ms) {
  let timeout;
  return function (...args) {
    if (!timeout) {
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(func, ms, ...args);
  };   
};

function debounceDecorator2(func, ms) {
  let count = 0;
  let timeout;
  return function wrapper (...args) {
    if (!timeout) {
      func(...args);
    };  
  
    wrapper.history = ++count;
    clearTimeout(timeout);
    timeout = setTimeout(func, ms, ...args);
  };   
}

