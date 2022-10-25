
// Your Code Here
async function admin(){
const bookListResponse  = await fetch ('http://localhost:3001/listBooks');
const bookList = await bookListResponse.json();


const ul =document.createElement('ul')

bookList.forEach(book => {
    const li = document.createElement('li');
   li.textcontent= book.title;

    const textInput= document.createElement('input');
    textInput.type='text';
    textInput.value=book.quantity;
    li.append(textInput);

    const button = document.createElement('input');
    button.type= 'button';
    button.value='Save';
    li.append(button);

    button.addEventListener('click', async( ) =>{
    const updateBookResponse = await fetch('http://localhost:3001/updatedBooks',{
        method:'PATCH',
        headers: {
            'Content-Type': 'aplication/json'
    },
        body: JSON.stringify({
            id: book.id,
            quantity : textInput.value,
        }),
    })
    })

    ul.append(li);

});
const root= document.querySelector('#root');
root.append(ul);

}
admin()