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

async function getUser() {
  try {
    const data = await logInuser1("yogitau2008@gmail.com", "12345");
    const videos = await getVideos(data.user);
    const videoDetail = await getVideoDetail(videos[0]);
    console.log(videoDetail);
  } catch (err) {
    console.log(err);
  }
}
getUser();
console.log("end-------------------------------");
