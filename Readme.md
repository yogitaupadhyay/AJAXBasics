# File Reading order :-
* CallBack1.js
* CallBack2.js
* CallBack3.js
* CallBack4.js
* CallBack5.js
* Promise1.js
* Promise2.js
* Promise3.js
* Async.js

### JSON:javascript object notation
### Ajax:asynchronous javascript xml
we browser have something called XMLHttpRequest which would help us making connection with some url and let u
s  send and recieve data.


### open sonsole in browser:```ctrl+shift+j```

#### In JavaScript, `document.write()` can be used to write directly to the HTML output stream:
`document.getElementById(id).style.property = new style` e.g. `document.getElementById('id1').style.color = 'red'`,
`document.getElementById(id).innerHTML = new HTML` ,
`document.getElementById(id).attribute = new value` e.g. `document.getElementById("myImage").src="landscape.jpg"`

### Events on HTML elements
Examples of HTML events:

    When a user clicks the mouse
    When a web page has loaded
    When an image has been loaded
    When the mouse moves over an element
    When an input field is changed
    When an HTML form is submitted
    When a user strokes a key
### Ways of assigning event to HTML element
    1.normal 
    <button onclick="displayDate()">Try it</button>
   
```
2. Using Dom
<script>
document.getElementById("myBtn").onclick = displayDate;
</script>
```
    3.<input type="text" id="fname" onchange="upperCase()">
   
```
 4.using Event Listener
 `element.addEventListener(event, function, useCapture);` e.g. :-
    document.getElementById("myBtn").addEventListener("click", displayDate);
    The addEventListener() method attaches an event handler to the specified element.
<script>
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
document.getElementById("demo").innerHTML = Date();
}
</script>
```
# Event Listener 
```
### The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
### You can add many event handlers to one element.
<script>
var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
alert ("Hello World!");
}

function someOtherFunction() {
alert ("This function was also executed!");
}
</script>
```
```
###  You can add many event handlers of the same type to one element, i.e two "click" events.
<script>
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}
</script>
```
```
### 
    You can add event listeners to any DOM object not only HTML elements. i.e the window object.
<script>
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = Math.random();
});
</script>
 ```


  
    The addEventListener() method makes it easier to control how the event reacts to bubbling.
    When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do     not control the HTML markup.
    You can easily remove an event listener by using the removeEventListener() method.
    
 
