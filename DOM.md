
src:w3school

# DOM:
- The DOM is a W3C (World Wide Web Consortium) standard.
- The DOM defines a standard for accessing documents:
- "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
- The W3C DOM standard is separated into 3 different parts:
      1. Core DOM - standard model for all document types
      2. XML DOM - standard model for XML documents
      3. HTML DOM - standard model for HTML documents
      
- When a web page is loaded, the browser creates a Document Object Model of the page.
- The HTML DOM model is constructed as a tree of Objects:
## HTML DOM
The HTML DOM is a standard object model and programming interface for HTML. It defines:
    - The HTML elements as objects
    - The properties of all HTML elements
    - The methods to access all HTML elements
    - The events for all HTML elements
In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

### With the object model, JavaScript gets all the power it needs to create dynamic HTML:
    - JavaScript can change all the HTML elements in the page
    - JavaScript can change all the HTML attributes in the page
    - JavaScript can change all the CSS styles in the page
    - JavaScript can remove existing HTML elements and attributes
    - JavaScript can add new HTML elements and attributes
    - JavaScript can react to all existing HTML events in the page
    - JavaScript can create new HTML events in the page
# DOM :METHODS AND PROPERTIES :
      HTML DOM methods are actions you can perform (on HTML Elements).
      The HTML DOM can be accessed with JavaScript (and with other programming languages).
      In the DOM, all HTML elements are defined as objects.s
      The programming interface is the properties and methods of each object.
      A property is a value that you can get or set (like changing the content of an HTML element).
      A method is an action you can do (like add or deleting an HTML element).HTML DOM properties are values (of HTML Elements) that you can set or change.
 ### The following example changes the content (the innerHTML) of the <p> element with id="demo":
```
  <html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>
</body>
</html>
  ```
 In the example above, getElementById is a method, while innerHTML is a property.
  
 ## DOM Document
    The HTML DOM document object is the owner of all other objects in your web page.
    The document object represents your web page.
    If you want to access any element in an HTML page, you always start with accessing the document object.
    Below are some examples of how you can use the document object to access and manipulate HTML.
  
## Method	Description
    document.getElementById(id)	Find an element by element id
    document.getElementsByTagName(name)	Find elements by tag name
    document.getElementsByClassName(name)	Find elements by class name
  
## Attributes, Property	Description

Property	|  Description
------------- | -------------
element.innerHTML =  new html content	   | Change the inner HTML of an element
element.attribute = new value   | Change the attribute value of an HTML element
element.style.property = new style	| Change the style of an HTML element
  
## Method	Description
  Method	|  Description
------------- | -------------
element.setAttribute(attribute, value)	| Change the attribute value of an HTML element
  document.createElement(element)	| Create an HTML element
document.removeChild(element)	| Remove an HTML element
document.appendChild(element)	| Add an HTML element
document.replaceChild(new, old) |	Replace an HTML element
document.write(text) |	Write into the HTML output stream
  document.getElementById(id).onclick = function(){code} | Adding event handler code to an onclick event
 
  ## More Attributes
     Property	|  Description | DOM
------------- | ------------- | ------------
 
document.anchors 	Returns all <a> elements that have a name attribute	1
document.applets	Returns all <applet> elements (Deprecated in HTML5)	1
document.baseURI	Returns the absolute base URI of the document	3
document.body	Returns the <body> element	1
document.cookie	Returns the document's cookie	1
document.doctype	Returns the document's doctype	3
document.documentElement	Returns the <html> element	3
document.documentMode	Returns the mode used by the browser	3
document.documentURI	Returns the URI of the document	3
document.domain	Returns the domain name of the document server	1
document.domConfig	Obsolete. Returns the DOM configuration	3
document.embeds	Returns all <embed> elements	3
document.forms	Returns all <form> elements	1
document.head	Returns the <head> element	3
document.images	Returns all <img> elements	1
document.implementation	Returns the DOM implementation	3
document.inputEncoding	Returns the document's encoding (character set)	3
document.lastModified	Returns the date and time the document was updated	3
document.links	Returns all <area> and <a> elements that have a href attribute	1
document.readyState	Returns the (loading) status of the document	3
document.referrer	Returns the URI of the referrer (the linking document)	1
document.scripts	Returns all <script> elements	3
document.strictErrorChecking	Returns if error checking is enforced	3
document.title	Returns the <title> element	1
document.URL	Returns the complete URL of the document	1

  
  


