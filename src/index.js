const obj = {
  a: 1,
  b: 2,
  c: 3,
}

console.log(obj?.a, obj?.d);

async function asyncFunc() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 1000);
  });
}


//
// const arr2 = [1, 2, 3];
//
// const results = arr2.flatMap(item => item + 1);
// console.log(results);
//
// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues); // [1, 2, 10, 21]
// console.log(values); // [1, 10, 21, 2]

async function getData(){
  const data  =  await asyncFunc()
  console.log(data)
}

