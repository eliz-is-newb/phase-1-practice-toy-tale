let addToy = false;
// deliverables: 
// [x] fetch toys from local host
// [x] add toy info to the card
// [x] increase a toy's likes using a like button
// [] add a new toy 
// [] on form submit, get data, make post request 






// add toy info to the card 

//data.forEach(toy => createCard(toy))

const createCard = obj =>{  
  
  const toyCollection = document.querySelector("#toy-collection");
  
  const divElement = document.createElement("div")
  divElement.classList.add("card")
  toyCollection.append(divElement);

  const nameElement = document.createElement('h2')
  nameElement.innerText = obj.name;
  divElement.append(nameElement);

  const imgElement = document.createElement('img')
  imgElement.classList.add('toy-avatar')
  imgElement.src = obj.image;
  divElement.append(imgElement);

  const pElement = document.createElement('p')
  pElement.innerText = `${obj.likes} Like(s)` // add toys id number
  divElement.append(pElement);

  const buttonElement = document.createElement('button')
  buttonElement.classList.add("like-btn");
  buttonElement.innerText = "Like ❤️";
  divElement.append(buttonElement)

  buttonElement.addEventListener('click', ()=>{

    let amountOfLikes = parseInt(pElement.innerText)
    console.log(amountOfLikes)
    amountOfLikes ++;
    pElement.innerText = `${amountOfLikes} Like(s)` // add toys id number

  } )
}

// first deliverable: fetch 
fetch('http://localhost:3000/toys')
.then(res => res.json())
.then(data => data.forEach(toy => createCard(toy)))





// add a new toy deliverable - you were missing #'s in your IDs
 const toyform = document.querySelector('#toyForm')


 toyform.addEventListener('submit',(e)=>{
   e.preventDefault()

  let newToy = {
    name: `${e.target.name.value}`,
    image: `${e.target.image.value}`,
    likes: 0
  } 

    console.log(newToy)

  fetch("http://localhost:3000/toys/", {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(newToy)
  })

  .then(res => res.json())
  .then(res => createCard(res))
  
});

// patch 

  fetch("http://localhost:3000/toys/:id", {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"likes": " "})
  }).then(res=>res.json()).then(json =>{  })








// button that's already there
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
})
