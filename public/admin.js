
// Your Code Here
async function admin(){
const bookListResponse  = await fetch ('http://localhost:3001/listBooks');
const bookList = await bookListResponse.json();




bookList.forEach(book => {
    const title= book.title;

    const li = document.createElement('li')
    bookList.textcontent= book.title;
    
});
}
admin()