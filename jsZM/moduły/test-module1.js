const data=123;

//eksporty nazwane;
export function getdata(){return data};
export let testValue='cokolwiek';
export function add(a,b){
    return a+b;
}
export function multiply(a,b)
{
    return a*b;
}

//eksport domyslny
export default {
getData: getdata,
value: 'Hello world',
};


export function setTestValue(value)
{
    testValue=value;
}