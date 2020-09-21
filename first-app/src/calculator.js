export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

//There can be ONLY ONE default export

const calculator = { name : 'calculator', add, subtract };

export default calculator;