function logInuser1(email, password, callback) {
  setTimeout(() => {
    callback({
      user: email,
      password: password,
    });
  }, 2000);
}

console.log("start -------------3-------------");
const user2 = logInuser1("yogitau2008@gmail.com", "12345", (data) => {
  console.log(data);
});
console.log("end");

// start -------------3-------------
// end
// { user: 'yogitau2008@gmail.com', password: '12345' }
// [Finished in 2.964s]
