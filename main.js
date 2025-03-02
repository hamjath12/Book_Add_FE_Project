var overlay=document.querySelector('.overlay')
var poptext=document.querySelector('.poptext')
var addBtn=document.getElementById('popbtn')

// plus btn click show the input box
addBtn.addEventListener('click',function(Event){
    Event.preventDefault()
    overlay.style.display='block';
    poptext.style.display='block';
});

// cancel-book close the input box
var cancelbook=document.getElementById('cancel-book')
cancelbook.addEventListener('click',function(){
    overlay.style.display='none';
    poptext.style.display='none';
});

// Add the book title , author, description
var container=document.querySelector('.container')
var AddBookBtn=document.getElementById('Add-book')
var  BookTitle=document.getElementById('Book-title')
var  bookAuthor=document.getElementById('book-author')
var  bookDescrip=document.getElementById('book-descrip')

AddBookBtn.addEventListener('click',function(Event){
    Event.preventDefault()
    var div=document.createElement("div");
    div.setAttribute("class","container-fluid");
    div.innerHTML=`<h2>${BookTitle.value}</h2>
            <h4>${bookAuthor.value}</h4>
            <p>${bookDescrip.value}</p>
            <button onclick="delteBook(event)">Delete</button>`
    container.append(div);
    overlay.style.display='none';
    poptext.style.display='none';


});

// delete book 
function delteBook(event){
    event.target.parentElement.remove()
};