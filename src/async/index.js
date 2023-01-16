const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true) ? setTimeout(() => resolve('Async!!'), 2000) : reject(new Error('Error'));
  });
}

const anothherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hello!');
}

console.log('before');
anothherFn();
console.log('after');