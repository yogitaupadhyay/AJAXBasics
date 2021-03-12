const yt = new Promise((resolve, reject) => {
  resolve("data from youtube");
});

const fb = new Promise((resolve, reject) => {
  resolve("data from facebook");
});

Promise.all([yt, fb]).then((user) => console.log(user));

// [ 'data from youtube', 'data from facebook' ]
