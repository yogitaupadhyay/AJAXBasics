function logInuser1(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: email,
        password: password,
      });
    }, 1000);
  });
}

function getVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 500);
  });
}

function getVideoDetail(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: video,
        yr: 2000,
      });
    }, 500);
  });
}

console.log("start --------------------------");
logInuser1("yogitau2008@gmail.com", "12345").then((data) =>
  getVideos(data.user).then((videos) =>
    videos.forEach((item, i) => {
      getVideoDetail(item).then((videoDetail) => console.log(videoDetail));
    })
  )
);
console.log("end-------------------------------");
