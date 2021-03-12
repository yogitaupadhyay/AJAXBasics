function other() {
  console.log("some other function");
  console.log("some  function");
}

console.log("start");
other();
console.log("end");

// OUTPUT:
// start
// some other function
// some  function
// end

// second example
console.log("start");
var arr = [1, 3, 5, 6, 7];
arr.forEach((item, i) => {
  console.log(item);
});

console.log("end");
// start
// 1
// 3
// 5
// 6
// 7
// end
