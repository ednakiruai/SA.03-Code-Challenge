// Your code here
// declaring var


let films = "https://code-server-msv5.onrender.com/films"
document.addEventListener('DOMContentLoaded', async(event)=>{
    const films = await getAllMovies()
     viewMoviePoster(films)
     listMovies(films)
     
})

   

function getAllMovies() {
    return fetch("https://code-server-msv5.onrender.com/films",{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    )
        .then(res => res.json())
        .then(films => films)
        }


function movieTitles() {
  const ul = document.getElementById("films")
    return fetch("https://code-server-msv5.onrender.com/films")
    .then(res => res.json())
    .then(title => title.map(movie => {
      let li = document.createElement("li");
      li.innerHTML = `
      <div>
      <h3 id="${movie.id}"class="movies">${movie.title}</h3>
      <button>DELETE</button>
      </div>`
      ul.appendChild(li)
    
    }))
}
movieTitles()

function listMovies(films) {
  const list = document.getElementById("showing");
  //const carrier = document.createElement("div")


  const views = document.querySelectorAll(".movies");
views.forEach(details => {
  details.addEventListener("click", (event) => {
   // console.log(event.target.id);
   const disDetails = films.find((element)=> element.id === event.target.id)
   list.innerHTML = ` 
   <div id="details" class="card">   
   <div id="title" class="title">${disDetails.title}</div>
            <div id="runtime" class="meta">${disDetails.runtime} minutes</div>
            <div class="content">
              <div class="description">
                <div id="film-info">${disDetails.description}</div>
                <span id="showtime" class="ui label">${disDetails.showtime}</span>
                <span id="ticket-num">${disDetails.capacity-disDetails.tickets_sold}remaining tickets</span>
              </div>
            </div>
            <div class="extra content">
              <button id="buy-ticket" class="ui orange button" onclick="redTickets(-1)">
                Buy Ticket
              </button>
            </div>
   
   `
   //list.appendChild(carrier)
  })
})

}

function viewMoviePoster(films){
  const card = document.querySelector('#display')
  const box = document.createElement('div')
 const view = document.querySelectorAll(".movies")
 view.forEach(movieposters =>{
  movieposters.addEventListener('click',(event)=>{
    //console.log(event.target.id)
    const foundfilm = films.find((element)=>element.id === event.target.id)
    box.innerHTML =`
    <img src=${foundfilm.poster}>`
    card.appendChild(box)
  })
 })
}

function redTickets(red){ 
  const num = document.getElementById('ticket-num')
  const gone = document.getElementById('buy-ticket')
  const newNum = parseInt(num.innerHTML)
  num.innerHTML = newNum
  
  if(newNum > 1){
    num.innerHTML = newNum + red + 'remaining tickets'
  }else{
    num.textContent = 'Sold out'
    gone.disabled = true

  }

}


// const btn = document.getElementById('buy-ticket')

//       btn.addEventListener('click', function(event){
//           let remTickets = parseInt(document.querySelector('#ticket-num').textContent,10)
//           event.preventDefault()
//           if(remTickets > 0){
//               document.querySelector('#ticket-num').textContent  = remTickets-1
              
//           }
//           else if(parseInt(remTickets, 10)===0){
//               btn.textContent = 'Sold Out'
//           }
//   })








        

