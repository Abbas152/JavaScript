// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
// The HTML DOM (Document Object Model)
// When a web page is loaded, the browser creates a Document Object Model of the page.
// The HTML DOM model is constructed as a tree of Objects:


// *************************************
// How to Access Html Elements and Tags 
// Methods 

// Use Query Selector Both for Id and Class.
// const getClass = document.querySelector(".header");  // This is Object
// console.log(getClass);
// console.log(typeof getClass);

// Use Query Selector for Tag and Element 
// const getElement = document.querySelector(".header .navbar");
// console.log(getElement);

// We Can Use Any Node Element for Query Selector Like document, head, body, etc... 
// const head = document.querySelector("head");
// const title = head.querySelector("title");  // Here We Use Again Query Selector on Head
// console.log(title);



// *************************************
// How to write Text in Html With Help of JavaScript 
// const txtHeading = document.querySelector(".headline");

// txtHeading.textContent = "Something";  // textContent Show Hide Text in Console  
// console.log(txtHeading);

// txtHeading.innerHTML = "Something";    // innerHTML doesn't Show Hide Text
// console.log(txtHeading);






// *************************************
// How to Style 
// const styleWithJS = document.querySelector(".headline");
// styleWithJS.style.color = "blue";
// console.log(styleWithJS);




// *************************************
// get and set attrubutes
// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));

// set attribute 
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://codewithharry.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-ToDO input");
// console.log(inputElement.getAttribute("type"));







// *************************************
// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
// console.log(navItems);
// console.log(navItems[1]);


// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems);
// console.log(navItems[1]);









// *************************************
// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 
// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach    


// HTML Collection

// let navColor = document.getElementsByTagName("a");  // HTMLCollection
// console.log(navColor);


// for (let index = 0; index < navColor.length; index++) {
//      navColor[index].style.color = "green";
//      navColor[index].style.backgroundColor = "white";
//      navColor[index].style.fontWeight = "900";
// }


// for (const iterator of navColor) {
//     iterator.style.color="green";
//     iterator.style.backgroundColor = "white";
//     iterator.style.fontWeight = "900";
// }


// for Foreach Loop Which is not work with HTML Collections We can Convert HTML Collections to Array 
// navColor = Array.from(navColor);
// console.log(Array.isArray(navColor));

// navColor.forEach(element => {
//     element.style.color="green";
//     element.style.backgroundColor = "white";
//     element.style.fontWeight = "900";
// });




// Node List

// let navColor = document.querySelectorAll("a");  // Node List
// console.log(navColor);


// for (let index = 0; index < navColor.length; index++) {
//      navColor[index].style.color = "green";
//      navColor[index].style.backgroundColor = "white";
//      navColor[index].style.fontWeight = "900";
// }


// for (const iterator of navColor) {
//     iterator.style.color="green";
//     iterator.style.backgroundColor = "white";
//     iterator.style.fontWeight = "900";
// }


// for Foreach Loop Which is not work with HTML Collections We can Convert HTML Collections to Array 
// navColor = Array.from(navColor);
// console.log(Array.isArray(navColor));
// Here We Will Not Convert Array Like Object to Array Because We Can use ForEach Method in Node List 

// navColor.forEach(element => {
//     element.style.color="green";
//     element.style.backgroundColor = "white";
//     element.style.fontWeight = "900";
// });








// *************************************
// innerHTML

// const header = document.querySelector(".header");
// // console.log(header.innerHTML);
// header.innerHTML = "<h1>innerHTML is Changed</h1>";
// // header.innerHTML += `<button><a href= "#">Button</a></button>`;   
// // + Symbol Shows that We add Extra innerHTML and We Use Template Litteral Because WE Use Double Quotes "" 
// // Other Method is Use Escape BackSlash "\" Example Below
// header.innerHTML += "<button><a href= \"#\">Button</a></button>"; 
// console.log(header.innerHTML);







// *************************************
// DOM Treversing

// const rootNode = document.getRootNode();
// // console.log(rootNode);                                           // #document

// const allRootChildNodes = rootNode.childNodes;
// // console.log(allRootChildNodes);                                  // NodeList(2) [<!DOCTYPE html>, html]

// const htmlChildNodes = allRootChildNodes[1].childNodes;
// // console.log(htmlChildNodes);                                     // NodeList(5) [script#allow-copy_script, script, head, text, body]

// const HeadElementNodes = htmlChildNodes[2].childNodes;
// // console.log(HeadElementNodes);                                   // NodeList(15) [text, meta, text, meta, text, meta, text, title, text, link, text, script, text, style, text]

// const BodyElementNodes = htmlChildNodes[2].nextElementSibling;      // Here We Ignore the #text Node Because We Need Next Element 
// console.log(BodyElementNodes);                                      // <body></body>








// ************************* Please Comment Above Code Then UnComment this Code *************************

// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[1];                  // html  0 index pr html tag hai
// console.log(htmlElementNode);                                    // html

// const HtmlchildNodes = htmlElementNode.childNodes;
// // console.log(HtmlchildNodes);                                     //NodeList(5) [script#allow-copy_script, script, head, text, body]

// // console.log(HtmlchildNodes[0]);                               //NodeList(5) [script#allow-copy_script]
// // console.log(HtmlchildNodes[1]);                               //NodeList(5) [script]
// // console.log(HtmlchildNodes[2]);                               //NodeList(5) [head]
// // console.log(HtmlchildNodes[3]);                               //NodeList(5) [text]
// // console.log(HtmlchildNodes[4]);                               //NodeList(5) [body]


// // console.log(HtmlchildNodes[0].parentNode);
// // console.log(HtmlchildNodes[0].nextSibling);
// // console.log(HtmlchildNodes[2].nextElementSibling);            // if we Want to see Next Element and Ignore #text Node then we use .nextElementSibling

// // const allChildren = htmlElementNode.children;                 // Here we Ignore All #text Nodes and Only Shows Elements and Children Property Give us HTML Collection. 
// // console.log(allChildren);






// *************************************
// Class List 
// const navbar = document.querySelector(".navbar");                          // Here We Check How Much Classes are Exist.
// // console.log(navbar.classList);                                          
// // const ans = navbar.classList.contains("navbar");                           // Here We Check A Class is Exist or Not.
// // // console.log(ans);
// // const ans = navbar.classList.contains("navbar");                           // Here We Check A Class is Exist or Not.
// // // console.log(ans);

// const darkMode = document.querySelector("body");
// darkMode.classList.add("bg-dark-mode");                                 // Here We add Class bg-dark-mode
// darkMode.classList.remove("bg-dark-mode");                              // Here We Remove Class bg-dark-mode
// darkMode.classList.toggle("bg-dark-mode");                              // toggle: It add class if class is not added and remove class if class is added.






// *************************************
// createElement()
// append
// prepend
// remove
// before
// after


// // append Add To Last Item
// const NewElement = document.createElement("li");
// NewElement.textContent = "List 2";
// const myUl = document.querySelector(".todo-ul");
// myUl.append(NewElement);


// // prepend Add To first Item
// const NewElement = document.createElement("li");
// NewElement.textContent = "List 2";
// const myUl = document.querySelector(".todo-ul");
// myUl.prepend(NewElement);




// // remove property remove Element
// myUl.remove();





// before Add Item before
// const NewElement = document.createElement("li");
// NewElement.textContent = "List 2";
// const myUl = document.querySelector(".todo-ul");
// myUl.before(NewElement);





// after Add Item after
// const NewElement = document.createElement("li");
// NewElement.textContent = "List 2";
// const myUl = document.querySelector(".todo-ul");
// myUl.after(NewElement);






// *************************************
// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;


// const myUl = document.querySelector(".todo-ul");
// myUl.insertAdjacentHTML("beforeend", "<li>Todo List 2</li>")
// myUl.insertAdjacentHTML("afterbegin", "<li>Todo List 3</li>")







// *************************************
// Clone Node
// const myUl = document.querySelector(".todo-ul");
// const NewLi = document.createElement("li");
// NewLi.textContent = "List 2";
// // This is Cloning.
// const cloneLi = NewLi.cloneNode(true);  // true means Deep Clonning, Which Means Clone Childs of li. 
// myUl.append(NewLi);
// myUl.prepend(cloneLi);






// *************************************
// Some Old Methods to Support Poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild

// const myUl = document.querySelector(".todo-ul");
// const NewLi = document.createElement("li");
// const firstTodo = document.querySelector(".todo-ul li");
// NewLi.textContent = "List 2";

// // myUl.appendChild(NewLi); // This Append Last
// // This Insert Before Li but This Method Needs Two Arguments. 1st New Item and 2nd Reference Item.
// myUl.insertBefore(NewLi,firstTodo); 

// // This Method Replace items and Also Needs Two Arguments. 1st New Item and 2nd Reference Item.
// myUl.replaceChild(NewLi, firstTodo);

// // This Method Remove Items 
// myUl.remove(firstTodo);







// *************************************
// Static List and Live List 
// querySelectorAll Gives Static List 
// getElementsBySomthing... Gives Live List 

// // Static List   
// const myListItems = document.querySelectorAll(".newUl li"); // We Select Our List Items 
// const myUl = document.querySelector(".newUl");              // We Select Our UL  
// const newListItems = document.createElement("li");          // We Create New Li
// newListItems.textContent = "Item 6";                        // We Store text Our New Li
// myUl.append(newListItems);                                  // We Append New Li our Ul
// console.log(myListItems);                                   // Print On Console Our List Items to see Node List Items




// // Live List 
// const ul = document.querySelector(".newUl");                // We Select Our UL  
// const myListItems = ul.getElementsByTagName("li");          // We Select Our List Items 
// const newListItems = document.createElement("li");          // We Create New Li
// newListItems.textContent = "Item 6";                        // We Store text Our New Li
// ul.append(newListItems);                                    // We Append New Li our Ul
// console.log(myListItems);                                   // Print On Console Our List Items to see Node List Items







// *************************************
// How get Dimensions of Elements 
// How to Find Height and Width 
// const sectionTodo = document.querySelector(".todo-section");
// const dimensions = sectionTodo.getBoundingClientRect();                  // It Gives All Dimensions  
// const dimensionsHeight = sectionTodo.getBoundingClientRect().height;     // It Gives Specify Dimension 
// console.log(dimensions);
// console.log(dimensionsHeight);






