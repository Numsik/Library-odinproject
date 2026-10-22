const mylibrary = []

function book(name,author,pages,read){
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addbooktolibrary(name,author,pages,read){
    const newbook = new book(name, author,pages,read);
    mylibrary.push(newbook);
    return newbook;
}

addbooktolibrary("Malý princ", "Antoine de Saint-Exupéry", 107,true)
addbooktolibrary("Farma zvířat", "George Orwell", 165,false)
addbooktolibrary("Spalovač mrtvol", "Ladislav Fuks", 220,true)




const container = document.getElementById("library-container")
function displaybooks(){
    container.innerHTML = "";
    mylibrary.forEach((book) => {
        const div = document.createElement("div");
        const deletebtn = document.createElement("button");
        const readitbtn = document.createElement("button");
        readitbtn.textContent = book.read ? "Not read" : "Read it";
        deletebtn.textContent = "Delete"
        div.dataset.id = book.id;
        div.textContent = `${book.name} and the author is: ${book.author} it has: ${book.pages} and you ${book.read ? "Read it": "Didnt red it"}`;
       container.appendChild(div);
       container.appendChild(deletebtn);
       container.appendChild(readitbtn);
       deletebtn.addEventListener("click", () => Deletebook(book.id));
       readitbtn.addEventListener("click", () => {
        book.changeit()
        displaybooks()
    
    });

    });
    
    
}

book.prototype.changeit = function(){
    return this.read = this.read ? false : true;
}
function Deletebook (bookid){
    for (let i = 0; i < mylibrary.length; i++){
    if (mylibrary[i].id == bookid){
        const index = mylibrary.indexOf(mylibrary[i])
        mylibrary.splice(index,1)
        console.log("ono to funguje xdd" + bookid)
    }
    displaybooks()
}
}

const btnaddbook = document.getElementById("addbookbtn");
const inputname = document.getElementById("inputname");
const inputauthor = document.getElementById("inputauthor")
const inputpages = document.getElementById("inputpages")

btnaddbook.addEventListener("click", function(){
    addbooktolibrary(inputname.value,inputauthor.value,inputpages.value);
    displaybooks();
})
displaybooks()