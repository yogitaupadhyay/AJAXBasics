var btn = document.getElementById("btn");
var animalcont = document.getElementById("animal");
var pagecounter = 1;
btn.addEventListener("click", () => {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-" +
      pagecounter +
      ".json"
  ); //OR POST

  ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status <= 400) {
      console.log(ourRequest.responseText);
      // [
      //   {
      //     "name": "Meowsy",
      //     "species" : "cat",
      //     "foods": {
      //       "likes": ["tuna", "catnip"],
      //       "dislikes": ["ham", "zucchini"]
      //     }
      //   },
      //   {
      //     "name": "Barky",
      //     "species" : "dog",
      //     "foods": {
      //       "likes": ["bones", "carrots"],
      //       "dislikes": ["tuna"]
      //     }
      //   },
      //   {
      //     "name": "Purrpaws",
      //     "species" : "cat",
      //     "foods": {
      //       "likes": ["mice"],
      //       "dislikes": ["cookies"]
      //     }
      //   }
      // ]
      var data = ourRequest.responseText;
      console.log(data[0]);
      //[,   because brower is considering our data as simple text

      var jsonData = JSON.parse(ourRequest.responseText);
      //this cause response to pass through browsers parse filter
      console.log(jsonData[0]);
      //   name: "Meowsy", species: "cat", foods: {…}}
      // foods: {likes: Array(2), dislikes: Array(2)}
      // name: "Meowsy"
      // species: "cat"
      showHtml(jsonData);
      pagecounter++;
    } else {
      console.log(
        "we connected to server but recieved an error or recieved no data"
      );
    }
  };

  ourRequest.onerror = () => {
    console.log("Connection error");
  };
  ourRequest.send();
});

function showHtml(jsonData) {
  // animalcont.insertAdjacentHTML("beforeend", "testing 123");
  var data = "";
  for (var i = 0; i < jsonData.length; i++) {
    data =
      data +
      "<p>" +
      jsonData[i].name +
      " is " +
      jsonData[i].species +
      " and likes  " +
      jsonData[i].foods.likes +
      " and dislike " +
      jsonData[i].foods.dislike +
      " </p>";
  }
  animalcont.insertAdjacentHTML("beforeend", data);
}
