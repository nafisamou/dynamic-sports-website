/* Load data */
const loadSports = (searchText) =>{
const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText} `
fetch(url)
.then(res => res.json())
.then(data => displaySports(data.player))
}

/* Display data */
const displaySports = (sports) =>{
    const sportContainer = document.getElementById('sport-container');
    sportContainer.textContent = ``;
    sports.forEach(sport => {
        const sportDiv = document.createElement('div');
        sportDiv.classList.add('col');
        sportDiv.innerHTML = `
        <div class = "card" onclick = 'loadSportDetail(${sport.idPlayer})'>
         <img src="${sport.strThumb ? sport.strThumb:'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'}" class="card-img-top" alt="player-image">
         <div class="card-body">
         <h5 class="card-title">${sport.strPlayer}</h5>
         <p class="card-text">${sport.strGender}</p>
         <p class="card-text">${sport.dateBorn}</p>
         <p class="card-text">${sport.strDescriptionEN.slice(0,100)}</p>
         </div>
     </div>`

     sportContainer.appendChild(sportDiv);
      //  console.log(sport);
    });
}
/* search field */
const searchSports = () => {
const searchField = document.getElementById('search-field')
const searchText = searchField.value;
loadSports(searchText)
searchField.value = ''
}

/* load sports details */
const loadSportDetail = (idPlayer) => {
const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${idPlayer}`
fetch(url)
.then(res => res.json())
.then(data => displaySportDetails(data.players))
}

/* Display sport details */
const displaySportDetails = (sport) =>{
const detailContainer = document.getElementById('detail-container');
detailContainer.textContent = '';
const detailDiv = document.createElement('div');
detailDiv.classList.add('card');
detailDiv.innerHTML = `
            <img src="${sport.strThumb ? sport.strThumb:'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${sport.strPlayer}</h5>
              <p class="card-text">
              ${sport.strDescriptionEN.slice(0,100)}
              </p>
              <button class="btn btn-primary">Go somewhere</button>
            </div>
`
detailContainer.appendChild(detailDiv);
// console.log(sport);
}

loadSports('');


/* 
৮. চ্যালেঞ্জ-১

the meal db এর খালতো ভাই the sports db থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 
*/
/* 
৯. চ্যালেঞ্জ-২

দেখো sports db এর জন্য যে ওয়েবসাইট বানাবে সেখানে একটা লোডিং স্পিনার যোগ করতে পারো কিনা। জিনিসটা একটু কঠিন মনে হতে পারে। তাও দেখানোর চেষ্টা করো। এইটা আমরা এক সময় দেখিয়ে দেব। তবে তার আগে তুমি দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।  
*/