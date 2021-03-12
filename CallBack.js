function logInuser(email, password) {
  setTimeout(() => {
    return {
      user: email,
      password: password,
    };
  }, 100);
}

console.log("start -------------1-------------");
const user = logInuser("yogitau2008@gmail.com", "12345");
console.log(user);
console.log("end");
// start
// undefined
// end
// [Finished in 3.354s]

// start -------------2-------------
// undefined
// end
// now we have the data
// now we have the data
// [Finished in 3.018s]
