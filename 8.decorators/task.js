function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
      if (!objectInCache) {
        console.log('Из кэша: ' + cache[hash]);
        return 'Из кэша: ' + cache[hash];  
              
      };
        let result = func(...args);
        cache.push({hash}); 
    
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
  func();
  let flag = true;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!flag) {
        func.apply(this, args);
        console.timeEnd("time");
      };
    }, ms);
  };   
}

function debounceDecorator2(func) {
  // Ваш код
}
