
fetch('https://digimon-api.herokuapp.com/api/digimon')
.then ((data) => {
    console.log(data);
    return data.json();
})

 .then((completdata) => {
    console.log(completdata);
    completdata.length=20;
    let data1 ="" ;
    completdata.map((values)=>{
        data1+=`<div class="card">
        <img src="${values.img}" alt="img" class"images" />
        <h2 class="name">${values.name}</h2>
        <h5 class="level">Level: ${values.level}</h5>
      </div>`
    });
    document.getElementById("cards").innerHTML=data1
      });




const searchbutton = document.getElementById("searchbutton")
const searchbyname = document.getElementById("searchbyname")


searchbutton.onclick = (event) => {
    event.preventDefault()

    const divname = searchbyname.value

    getData(divname);
}

function getData(divname) {

    fetch("https://digimon-api.vercel.app/api/digimon/name/" + divname)
        .then((response) => response.json())
        .then((data) => {
             {
                console.log(data)

                display(data)
            }
        });
}

function display(data) {
    let data1 ="" ;
    data.map((values)=>{
        data1=`<div class="card">
        <img src="${values.img}" alt="img" class"images" />
        <h2 class="name">${values.name}</h2>
        <h5 class="level">Level: ${values.level}</h5>
      </div>`
    });
    document.getElementById("cards").innerHTML=data1

}

