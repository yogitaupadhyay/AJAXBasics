function logInuser1(email, password, callback) {
  setTimeout(() => {
    callback({
      user: email,
      password: password,
    });
  }, 1000);
}

function getVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 500);
}
console.log("start --------------------------");
const user2 = logInuser1("yogitau2008@gmail.com", "12345", (data) => {
  getVideos(data.user, (videos) => {
    console.log(videos);
  });
  console.log(data);
});
console.log("end-------------------------------");

// start --------------------------
// end-------------------------------
// { user: 'yogitau2008@gmail.com', password: '12345' }
// [ 'video1', 'video2', 'video3' ]
// [Finished in 2.631s]
