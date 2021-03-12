function logInuser(email, password) {
  setTimeout(() => {
    console.log("now we have the data");
    return {
      user: email,
      password: password,
    };
  }, 100);
}

console.log("start -------------2-------------");
const user1 = logInuser("yogitau2008@gmail.com", "12345");
console.log(user1);
console.log("end");

// start -------------2-------------
// undefined
// end
// now we have the data
// [Finished in 1.219s]
