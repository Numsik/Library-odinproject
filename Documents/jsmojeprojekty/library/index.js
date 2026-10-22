const mylibrary = []

function book(name,author,pages){
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
}


function addbooktolibrary(name,author,pages){
    const newbook = new book(name, author,pages);
    mylibrary.push(newbook);
    return newbook;
}

addbooktolibrary("Malý princ", "Antoine de Saint-Exupéry", 107)
addbooktolibrary("Farma zvířat", "George Orwell", 165)
addbooktolibrary("Spalovač mrtvol", "Ladislav Fuks", 220)




const container = document.getElementById("library-container")
function displaybooks(){
    container.innerHTML = "";
    mylibrary.forEach((book) => {
        const div = document.createElement("div");
        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete"
        div.dataset.id = book.id;
        div.textContent = `${book.name} and the author is: ${book.author} it has: ${book.pages}`;
       container.appendChild(div);
       container.appendChild(deletebtn);
       deletebtn.addEventListener("click", () => Deletebook(book.id));
    });
    
    
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