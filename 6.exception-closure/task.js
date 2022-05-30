function parseCount(numberOfGoods) {
  const conversionNumber = Number.parseInt(numberOfGoods, 10);
    
  if (Number.isNaN(conversionNumber)) {
    throw new Error("Невалидное значение");
  };

  return conversionNumber;
}
  
function validateCount(numberOfGoods) {
  try {
    return parseCount(numberOfGoods);
  } catch(err) {
    return err;
  }
};
  
  /*--2 задача--*/
  
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
      
    if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    };
  };
    
  getPerimeter() {
    return this.a + this.b + this.c;
  };
  
  getArea() {
    const p = getPerimeter() / 2;
    return Number((Math.sqrt(p(p - this.a)(p - this.b)(p - this.c))).toFixed(3));
  };
};

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(err) {
    const wrongTriangle = new Object();
    return wrongTriangle = {
      wrongTriangle.getArea() {
        return "Ошибка! Треугольник не существует";
      };
      wrongTriangle.getPerimeter() {
        return "Ошибка! Треугольник не существует";
      };
    };
  };
}
