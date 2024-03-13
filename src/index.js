const obj = {
  a: 1,
  b: 2,
  c: 3,
}

console.log(obj?.a, obj?.d);

async function asyncFunc() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

asyncFunc();


const arr2 = [1, 2, 3];

const results = arr2.flatMap(item => item + 1);
console.log(results);



class Person {
  static a = 'a';
  static b;
  name = 'morrain';
  age = 18
}

const person = new Person();

console.log(person);
