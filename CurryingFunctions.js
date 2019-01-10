//currying function
//static function
//addSubtract(1)(2)(3)(4)(5)(6) -> 1 + 2 - 3 + 4 - 5 + 6 -> 5 etc.

function curry(fn) {
    return (b) => {
      return (c) =>{
        return (d) => {
            return (e) => {
                return (f) => {
                    return (g) => {
                        return fn(b,c,d,e,f,g);
                    };
                };
            };
        };
      };
    };
};

const plusminus = curry((b,c,d,e,f,g) => {
return b + c - d + e - f + g;
});

console.log(plusminus(1)(2)(3)(4)(5)(6));


//dnyamic currying
const addSubtract = (n) => {
    let cur = n
    let mul = 1
    
    const addsubt = (i) => {
      cur = cur + (i * mul)
      mul = mul * -1
      return addsubt
    }
    addsubt.valueOf = () => cur
    return addsubt
  }

  console.log (addSubtract(2)(1)(1)(5)(3)(2)+ 0);  //0 forces casting
  
  console.log(addSubtract(1)(2)(3) + 0); //0 forces casting
