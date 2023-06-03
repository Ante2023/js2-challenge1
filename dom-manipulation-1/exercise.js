/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const pNodes = document.querySelectorAll("p");
if(pNodes.length === 6){
//    console.log(pNodes)
}

const firstDiv = document.querySelector(".site-header");
// console.log(firstDiv);

const jumboText = document.querySelector("#jumbotron-text")
// console.log(jumboText);

const primaryElements = document.querySelectorAll(".primary-content p")
// console.log(primaryElements)


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

document.querySelector('#alertBtn')
    .addEventListener('click',
        ()=>alert("Thanks for visiting Bikes for Refugees!")
    )

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

document.querySelector('#bgrChangeBtn')
    .addEventListener('click',
        ()=>{
            document.querySelector('body').style.background="red"
        })


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/


// document.querySelector('#addArticleBtn').addEventListener('click',()=>{

//     const pElement = document.createElement('p')
//     const articleElemet = document.createElement('article')

//     pElement.textContent = document.querySelector('.form-control').value

//     articleElemet.appendChild(pElement)
//     document.querySelector('#mainArticles').appendChild(articleElemet)
// })


/*
Task 5s
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document.querySelector('#largerLinksBtn').addEventListener('click',()=>{
    document.querySelectorAll('.article-title').forEach(link=>{
        link.innerHTML = link.innerHTML.toUpperCase()
    })
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
document.querySelector('#addArticleBtn').addEventListener('click',()=>{

    const pElement = document.createElement('p')
    const articleElemet = document.createElement('article')

    const inputElement = document.querySelector('.form-control')
    const inputValue = inputElement.value
    const temp = inputValue
    inputElement.value=''
    pElement.value=temp
    console.log(pElement);

    articleElemet.appendChild(pElement)
    document.querySelector('#mainArticles').appendChild(articleElemet)
})
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

