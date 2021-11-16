// NOTE I've called this project objectsMon4Oct21 but it's Odin's Library project



// The whole of this app's code is in the 
// following init function:
const init = () => {

  //---------------------------------------------------------------------
// DON"T CODE ABOVE THIS LINE  
  //---------------------------------------------------------------------
  

/*
const container = document.querySelector('#container');

const redPara = document.createElement('p');

redParaTwo.textContent = 'Another red para'

redPara.classList.add('redText');

container.appendChild(blueH3);

myButton1.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

*/

// First some init type stuff:
// The array to hold the Book instances:
let myLibrary = [ ];
let myTestLib = [ ]
// Now a var for a reference to 
// the <tbody> element in the table:
let tableBody = document.getElementById("tableBody")

//--------

// Now define the Book class using ES6 syntax.
// Function getAndShowLibOnStartup() uses it soon,
// hence the clss declaration has to be here as 
// ES6 classes re not hoisted

// Replacing Book class made with a constructor
// to ES6 Book class using class syntax:
// Now the Book class:
class Book {
  constructor(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
                                         } //end constructor
cutThisFromArray(lib){
  let counter = 0
  for (let i = 0; i < lib.length; i++) {
  if (lib[i] == this) { // 'this' means an instance of Book
    counter = i
                      }  // end if
                                        } // end for
// Remember that 
// myArray.splice(2, 2) means 
// go to position 2, remove 2 items
// including the one at index [2].
// splice() changes the array: 
  lib.splice(counter,1)
                      } // end method                                        
             }// end Book class declaration

//---------

// Now get the library out of local storage and 
// set myLibrary to it:

getAndShowLibOnStartup()


// Now some vars to represent DOM nodes:
let addButton = document.querySelector('.addButton');
let closeDiv = document.querySelector('.closeDiv');
let submitDiv = document.querySelector('.submitDiv');
let titleInput = document.querySelector('.titleInput');
let authorInput = document.querySelector('.authorInput');
let pagesInput = document.querySelector('.pagesInput');
let testButton = document.querySelector('.testButton');
let testButton1 = document.querySelector('.testButton1');
// let testButton2 = document.querySelector('.testButton2');
let testPara = document.querySelector('.testPara');
let dialogBoxID = document.getElementById('dialogBoxID')

// let formDivID = document.getElementById('formDivID')
//-------
// Now make some elements draggable:
dragElement(dialogBoxID)
// dragElement(formDivID) -- this makes the form inputs fail to work




/* Now not used*/
/* 
// Now the Book class:
function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
//  this.textRead = ""
                                          }// end Book constructor
// A test prototype function
Book.prototype.testMethod1 = function(text) {  
  console.log(`Code called testMethod1. Text is ${text} and this.author is ${this.author}`)
                                        } // end fn

                                        
// Another test prototype function
Book.prototype.testMethod2 = function() {  
  console.log(`Code called testMethod2!`)
                                        } // end fn


// Code will call the following method 
// when the user 
// clicks the in-row button to remove
// a book (a row) from the table and 
// the library:
    Book.prototype.cutThisFromArray = function(lib) {
    let counter = 0
  for (let i = 0; i < lib.length; i++) {
  if (lib[i] == this) { // 'this' means an instance of Book
    counter = i
                      }  // end if
                                        } // end for
// Remember that 
// myArray.splice(2, 2) means 
// go to position 2, remove 2 items
// including the one at index [2].
// splice() changes the array: 
  lib.splice(counter,1)
                                                   } // end fn
Now not used*/
//-------


// The following is a global function that 
// myDisplayText uses. If that is the only class that uses it
// put it in that class rather having it global as it is now
function stringToArray(strng) {
  let myArr = []
  for (let i = 0; i < strng.length; i++) {
      myArr.push( strng.substr(i,1)  )
  // use str.substr(7, 6)-- means 6 chars from and incl [7] 
                                         } // end for
  return myArr
                             } // end fn

//------

// This fn converts an array to a string:
function arrayToString(arr) {
  let stringToReturn = ""

  for (let i = 0; i < arr.length; i++) {

      stringToReturn = stringToReturn.concat(arr[i])
                                       }
  return stringToReturn                                         
                           } // end fn


//-------
// Now an fn that code calls from inside the 
// "Submit" button's event handler.
// This fn removes unnecessary spaces 
// that the user has typed. It:
// 1) Gets rid of a leading space
// 2) Changes a run of 2 or more spaces
//    into one space.
// 3) Returns an array representing 
// the string it rxed as arg 
function cutRunOfSpaces(text){
let myArray = stringToArray(text)
let myArray1 = []
let myArray2 = []

for (let i = 0; i < myArray.length; i++) {
// If there is a member before the current one
  if (i>0) {
  // If the current member is " "
  // and the previous one is too
  // change the current member to "^":
  if (
    (myArray[i]   === " ") &&
    (myArray[i-1] === " ")
     )
   {
    myArray1.push("^")
   } else {
    myArray1.push(myArray[i])
          }  // end if-else
            } else { // if i is 0
              myArray1.push(myArray[i])
            } // end if-else
                                          } // end for

// So myArray1 is now, eg, [" ", "^", "M", "y", " ", "^", "W", "a", "y", "^", "^"]
// Now remove all "^"s:
for (let j = 0; j < myArray1.length; j++) {
  if (myArray1[j] !== "^") {
    myArray2.push(myArray1[j])
                           } 
                                          } // end for

// Now remove leading space if there is one:
if (myArray2[0] === " ") {
  myArray2.slice(1)
                        } // end if

return myArray2
                             } // end fn


//-------

// Now an fn that code calls from inside the 
// "Submit" button's event handler.
// This fn stores the library array 
// locally:
function storeLibLocally(lib){
  // First clear local storage:
localStorage.clear();
  //REMEMBER that you can only put 
  // strings into local storage
  // as the value part of a 
  // key-value pair. Hence: 
  let myLibToStore = JSON.stringify(lib)
  localStorage.setItem("storedLibArray", myLibToStore);
                             } // end fn

//-------

// Now an fn that code calls on startup. 
// This fn gets the library array that 
// code had stored locally and displays 
// it in the table.
// Remember that when an object gets json 
// stringified it loses its link to the 
// prototype chain, so this fn has to restore
// that chain:
function getAndShowLibOnStartup(){
let bookInst = null
  // Remember that localStorage
  // accepts keys that are strings
  // and values that are strings
  // hence:
  if ( // If the library is in localStorage as 
    // "storedLibArray" and there is at least 
    // one Book instance in it:
    localStorage.getItem("storedLibArray") &&
    (JSON.parse(localStorage.getItem("storedLibArray")).length > 0)
     ) {
    // Get the library out of storage:   
    let thingRetrievedFromStorage = JSON.parse(localStorage.getItem("storedLibArray"))
    
    // Now restore the prototype chain of 
    // each object in the lretrieved library 
    // (thingRetrievedFromStorage).
    // But first toast myLibrary:
    myLibrary = []
for (let i = 0; i < thingRetrievedFromStorage.length; i++) {
  // NOTE: this doesn't work:
  // thingRetrievedFromStorage[i].prototype = Object.create(Book.prototype)
  // maybe because typeof(Book) returns 'function'.
  // This is the only way I know for 
  // restoring the prototype chain:
    bookInst = new Book(
    thingRetrievedFromStorage[i].title,
    thingRetrievedFromStorage[i].author,
    thingRetrievedFromStorage[i].pages,
    thingRetrievedFromStorage[i].read
                      )
                      myLibrary.push(bookInst)
                                                            } // end for
      }  // end if

// Now put the contents of 
// myLibrary into the table:
makeTableFromLib(myLibrary)

                                 } // end fn

//--------

// Now an fn that puts a book in the library
// (without first checking whether or not it is 
// already in there) and then stores the library
// locally:
function addBookToLibraryTwo(bookInstance, lib) {
  // Put the book in the library:
   lib.push(bookInstance)
  // Now store the library locally:
  storeLibLocally(lib)
                                                } // end fn
  
//--------

// Now an fn that puts a book in library
// lib without first checking 
// whether or not it is already in there:
function addBookToLibraryThree(bookInstance, lib) {
  // Put the book in the library:
  lib.push(bookInstance)
                                             } // end fn

//-------
// Now an event listener callback for the div 
// of class "remove" (an in-row button).
// This div lives in the 6th <td> of every 
// table row. Code creates this div and gives
// it its class and sets its event listener 
// (whose callback this is) dynamically. This 
// div is a button whose click must remove 
// the appropriate book.
// The callback must
// 1) get the rowIndex of the row
// 2) remove object at rowIndex-1 in myLibrary
// by calling the appropriate fn that 
// code defined as part of the Book prototype
// 3) redraw the table using myLibrary as 
// the source of he data for the table:
function removeBookFromTable(){
  // 1) Remember the div (ie 'this') is in a td that is in 
  // a tr, hence use 'parentNode' twice below:
let rowInd = this.parentNode.parentNode.rowIndex
  // 2) Remember that myLibrary is an array of Book instances:
  myLibrary[rowInd-1].cutThisFromArray(myLibrary)
  // 3) 
makeTableFromLib(myLibrary)
                              } // end fn

//--------

/// A test fn
function getKeys(obj){
  let keys = [];
  for(key in obj){
     keys.push(key);
  }
  return keys;
}


//--------

// Now an event listener callback for the div 
// of class "changeRead" (an in-row button).
// This div lives in the 5th <td> of every 
// table row. Code creates this div and gives 
// it its class and sets its event listener 
// (whose callback this fn is)
// dynamically. This div is a button 
// whose click must change the read status
// of the appropriate book.
// The callback must
// 1) get the rowIndex of the row
// 2) go to the object at that index in myLibrary
//    and toggle the value of its 'read' property
// 3) redraw the table:
function toggleReadStatus(){
  // 1) Remember the div is in a td in a tr:
let rowInd = this.parentNode.parentNode.rowIndex
  // 2)
  if (myLibrary[rowInd-1].read == "No") {
    myLibrary[rowInd-1].read = "Yes"
                                        }  else {
                  myLibrary[rowInd-1].read = "No"
                                                } // end if-else
  // 3) 
  makeTableFromLib(myLibrary)
                            } // end fn

//----

// Now a fn that the event handler for 
// the 'Submit' button calls.
// This fn must show in the table the books 
// that the library contains.
// arg lib will be myLibrary
// and tableRef is the var for the ref to the table.
// This fn has to:
// 1) Append a <tr> to the <tbody> 
// for each member of array myLibrary
// 2) For each <tr> append seven <td>s and 
// populate each <td> with the appropriate 
// thing (either a property of the 
// appropriate member of myLibrary or 
// a button)
function makeTableFromLib(lib){
// First remove all elements inside 
// <tbody>. This is necessary otherwise 
// every time you submit a new book the whole library
// is repeated in the table!
tableBody.innerHTML = ""
// Now add each row to the table after the headers
for (let i = 0; i < lib.length; i++) {
 // Append a row element to the <tbody> element:
 let tr = document.createElement("tr");
  // Get the values of the myLibrary member's
 // four properties and create innerhtml
 // for the "remove" and "read status" buttons:
 let tnTitle = document.createTextNode(lib[i].title); 
 let tnAuthor = document.createTextNode(lib[i].author); 
 let tnPages = document.createTextNode(lib[i].pages); 
 let tnRead = document.createTextNode(lib[i].read); 

 let paraForTd5 = document.createElement("p")
 paraForTd5.appendChild(document.createTextNode(">"))
 paraForTd5.classList.add("paraForTds5and6")
 
 let paraForTd6 = document.createElement("p")
 paraForTd6.appendChild(document.createTextNode(">"))
 paraForTd6.classList.add("paraForTds5and6")

 let divForTd5 = document.createElement("div")
 divForTd5.classList.add("inTableButton")
 divForTd5.classList.add("changeRead")
 divForTd5.appendChild(paraForTd5)
  
 let divForTd6 = document.createElement("div")
 divForTd6.classList.add("inTableButton")
 divForTd6.classList.add("remove")
 divForTd6.appendChild(paraForTd6)

  // Now create <td>s and populate them with 
 // the appropriate stuff:
 let td1 = document.createElement("td");
 let td2 = document.createElement("td");
 let td3 = document.createElement("td");
 let td4 = document.createElement("td");
 let td5 = document.createElement("td");
 let td6 = document.createElement("td");
 // Give 1st and 2nd tds
 // class titleAuthorTd:
 td1.appendChild(tnTitle)
 td2.appendChild(tnAuthor)
 td1.classList.add("titleAuthorTd")
 td2.classList.add("titleAuthorTd")
 // Give 3rd and 4th tds
 // class pagesReadTd:
 td3.appendChild(tnPages)
 td4.appendChild(tnRead)
 td3.classList.add("pagesReadTd")
 td4.classList.add("pagesReadTd")
// Give 5th and 6th tds
// class buttonTd:
 td5.appendChild(divForTd5)
 td6.appendChild(divForTd6)
 td5.classList.add("buttonTd")
 td6.classList.add("buttonTd")

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
tr.appendChild(td5)
tr.appendChild(td6)

 tableBody.appendChild(tr)

                                     } // end for

// Now give the buttons that change the read status
// of a book an event handler.
// Code in the loop above has given all rows a 
// 5th <td> that contains a div of class "changeRead" 
if (document.querySelector('.changeRead')) {
  let arrOfRefsToChangeReadDivs = document.querySelectorAll(".changeRead");
for (let i = 0; i < arrOfRefsToChangeReadDivs.length; i++) {
  arrOfRefsToChangeReadDivs[i].addEventListener('click', toggleReadStatus)
                                                           } // end for 
                                           } // end if 

if (document.querySelector('.remove')) {
  let arrOfRefsToRemoveDivs = document.querySelectorAll(".remove");
for (let i = 0; i < arrOfRefsToRemoveDivs.length; i++) {
  arrOfRefsToRemoveDivs[i].addEventListener('click', removeBookFromTable)
                                                       } // end for 
                                           } // end if 

                                          } // end fn 

//------
/*
NOTE: keep the following code! It is part of the 
final project even though it has the word "test"
in, eg, vars (I never got round to chainging 
their names!)
*/
// Now an event listener for the test button.
// This puts ten books into library myTestLib
// and puts myTestLib into local storage:
testButton.addEventListener('click', function(){
  put10BooksIntoLib(myTestLib)
                            })
// The callback put10BooksIntoLib puts all of the 
// 1930s books into array myTestLib and then
// puts myTestLib into local storage:
function put10BooksIntoLib(lib){
// Put all books into library myTestLib
// (createBook simply creates a Book 
// instance and addBookToLibraryThree 
// simply puts whatever it rxes as arg[0] 
// into the library it rxes as arg[1]:

addBookToLibraryThree(createBook("The Great Gatsby", "F. Scott Fitzgerald", 177, "No"), lib)
addBookToLibraryThree(createBook("The Maltese Falcon", "Dashiell Hammett", 204, "No"), lib)
addBookToLibraryThree(createBook("Brave New World", "Aldous Huxley", 370, "No"), lib)
addBookToLibraryThree(createBook("The Metamorphosis", "Franz Kafka", 345, "No"), lib)
addBookToLibraryThree(createBook("The Grapes of Wrath", "John Steinbeck", 287, "No"), lib)
addBookToLibraryThree(createBook("Down and Out in Paris and London", "George Orwell", 162, "No"), lib)
addBookToLibraryThree(createBook("For Whom the Bell Tolls", "Ernest Hemingway", 187, "No"), lib)
addBookToLibraryThree(createBook("Angel Pavement", "J. B. Priestley", 324, "No"), lib)
addBookToLibraryThree(createBook("Cakes and Ale", "W. Somerset Maugham", 254, "No"), lib)
addBookToLibraryThree(createBook("Narcissus and Goldmund", "Hermann Hesse", 267, "No"), lib)

// So now lib (an array) contains 10 instances of the Book class.

// First clear localStorage:
localStorage.clear();

// Now put lib (converted using 
// JSON.stringify()) into local
// storage:
storeLibLocally(lib)
                               } // end fn


//--------

// Now an event listener for testButton1.
// This simly clears what's in 
// local storage:
testButton1.addEventListener('click', function(){
  localStorage.clear();
                                                })

/*
Books:
1) The Great Gatsby: F. Scott Fitzgerald    177pages
2) Dashiell Hammett, The Maltese Falcon,   204 pages
3) Brave New World, Aldous Huxley, 370 pages
4) Franz Kafka, The Metamorphosis, 345 pages
5) The Grapes of Wrath, John Steinbeck, 287 pages
6) George Orwell, Down and Out in Paris and London, 304 pages
7) Ernest Hemingway , For Whom the Bell Tolls, 278 pages
8) J. B. Priestley – Angel Pavement, 324 pages
9) W. Somerset Maugham – Cakes and Ale, 254 pages
10) Hermann Hesse, Narcissus and Goldmund, 267pages
*/


//-------

// Now an event listener for the 
// clicking of the "New book" button
// That appears at the top of the 
// outer panel:
addButton.addEventListener("click", showForm)

// Now the callback for the event listener above.
// This fn has to:
// 1) Make the form visible
function showForm(){
// 1) Make the form visible
// by giving it a specific class:
document.getElementById('formDivID').classList.remove('formDivVanish');
document.getElementById('formDivID').classList.add('formDivAppear');
                   } // end showForm

//-------

// Now an event listener for the 
// clicking of the Close button:
closeDiv.addEventListener("click", hideForm)

// Now the callback for the event listener above.
// This callback has to:
// 1) Make the form vanish
function hideForm(){
// 1) Make the form vanish
// by giving it a specific class:
document.getElementById('formDivID').classList.remove('formDivAppear');
document.getElementById('formDivID').classList.add('formDivVanish');
                   } // end showForm

//-------

// Now an event listener for the 
// clicking of the Submit button:
submitDiv.addEventListener("click", submitInfo)

// Now the callback for the event listener above:
// This fn has to:
// 1) Gather the info from the form inputs
// 2) Make a Book instance using that info
// 3) show the dialog box for a while
//    if the book is already in the library
//    (and then take no action)
//    otherwise put the book in the library
//    and update the table
// 4) Deal with empty fields
// 5) Close the form window if the book
//    has gone into the library.
function submitInfo(){

let bookInst = null
// 1) titleInput, etc are (global) 
// refs to the inputs of the form.
// First Remove  
// leading spaces or more than one 
// space anywhere else in each:
let titleInputString  = titleInput.value
titleInputString = arrayToString(cutRunOfSpaces(titleInputString))

let authorInputString = authorInput.value
authorInputString = arrayToString(cutRunOfSpaces(authorInputString))

let pagesInputNumber = pagesInput.value
pagesInputString = arrayToString(cutRunOfSpaces(pagesInputNumber.toString()))

// If any of the fields have nothing 
// in them show an error box:
if (
  (titleInputString  === "") ||
  (authorInputString === "") ||
  (pagesInputString  === "") 
   ) {
  
    // show error dialog box:
    document.getElementById('dialogBoxID1').classList.remove('dialogBoxVanish1');
    document.getElementById('dialogBoxID1').classList.add('dialogBoxVisible1');

    setTimeout(function(){ 
    document.getElementById('dialogBoxID1').classList.add('dialogBoxVanish1');
    document.getElementById('dialogBoxID1').classList.remove('dialogBoxVisible1');
                       }, 2000);

  return
     }


// 2)
bookInst = createBook(titleInputString, authorInputString, pagesInputString, "No")
// 3)
if (isBookInLib(myLibrary, bookInst.title, bookInst.author)) {
  // For a while show dialog box 
  // that tells user that hte book 
  // is already  in the library
  // (show dialog box then use 
  // setTimeOut to make it vanish
  // after 2000ms):
  document.getElementById('dialogBoxID').classList.remove('dialogBoxVanish');
  document.getElementById('dialogBoxID').classList.add('dialogBoxVisible');
  
setTimeout(function(){ 
  document.getElementById('dialogBoxID').classList.add('dialogBoxVanish');
  document.getElementById('dialogBoxID').classList.remove('dialogBoxVisible');
                     }, 2000);
                                 } else { // If the book is NOT in the library
// Put book instance into myLibrary and store myLibrary locally:
addBookToLibraryTwo(bookInst, myLibrary)


// update the table:
makeTableFromLib(myLibrary)

                                        } // end if-else

                   } // end showForm



//-------


// User enters details of a book and
// hits the "Submit" button.
// The following happens:
// 1) The button's click event handler 
// first checks whether the 
// book is already in the library. If
// it is, show dialog box and take no
// further action. Show dia box by
// removing class already there and adding 
// class dialogBoxVisisble. Then after an
// interval remove that class and 
// add class dialogBoxVanish.

// If book not in lib, 
// gather info from form
// and make a Book instance
// 2) Add the book instance to 
// to the library array
// 3) display the updated lib
// in the table


//--------

// Now an fn that hte callback
// for the Submit button employs.
// This fn must:
// 1) determine whether a book 
// of the given title already exists
// in a given library. 
// 2) return true -- if book is already in library
// or false -- if book not already in library:

// isBookInLib(myLibrary, bookInst.title, bookInst.author)
function isBookInLib(lib, title, author){
for (let i = 0; i < lib.length; i++) {
  
  if (
    lib[i].title === title &&
    lib[i].author === author
    ) {
      
    return true
      } // end if
                                         } // end for
return false                                           
                            } // end fn

//---------

// Now a function that creates an instance of Book.
// Code calls this fn when the user clicks the form's
// "Submit" button:
function createBook(title, author, pages, read) {
let bookInstance = null
bookInstance = new Book(title, author, pages, read)
return bookInstance
                                                } // end fn createBook

// theHobbit = new Book("The Hobbit", "J. R. Tolkien", "365", false)

//---------

// Now a fn to make any element dragable:
// The code for this came from W3 but it's easy to understand:
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
    // move the element from anywhere inside it: 
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                          }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
                              }
                              }    

//-------------------------------------------------------------------



// DON'T CODE BENEATH THIS LINE
//-------------------------------------------------------




} // end init function

window.onload = init;