var res= fetch("https://restcountries.com/v3.1/all");
let weather=fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
res.then((data)=>data.json())
.then((data1)=>foo(data1))

function foo(arr){
for(var i=0;i< arr.length;i++){
console.log(arr[i])

var div=document.createElement("div")
div.innerHTML=`  <div class="box">
<div class="container">
    <div class = "row">
        <div class="col-md-4">
   
        <div class="card">


          <h5 class="title-card">${arr[i].name.common}</h5><br>
           <img src="${arr[i].flags.png}" class="card-img-top" alt="..." </img>
          <div class="card-body">
          <p class="title">Capital : ${arr[i].capital}</p>
            <p class="card-text">Region : ${arr[i].region}</p>
            <p class="card-text">Subregion : ${arr[i].subregion}</p>
              <a href="${arr[i].weather}" class="btn btn-primary">Click for weather</a><br>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`
document.body.append(div)
}}