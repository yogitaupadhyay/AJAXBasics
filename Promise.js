const promise = new Promise((resolve, reject) => {
  resolve("hello");
});

promise.then((user) => console.log(user));
