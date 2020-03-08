// handle nested promises with if statements and async await
const handle = promise =>
  promise.then(res => [null, res]).catch(err => [err, null]);

export default handle;
