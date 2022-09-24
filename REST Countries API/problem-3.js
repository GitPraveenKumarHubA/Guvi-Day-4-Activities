//To print all countries name, region, sub region and population
var request1 = new XMLHttpRequest()
request1.open("Get", "https://restcountries.eu/rest/v2/all");
request1.send();
request1.onload = function(){
    var data = JSON.parse(request1.response);  
    for(var i=0;i<data.length;i++){
         console.log(`Country Name is : ${data[i].name} , region is : ${data[i].region} , sub region is : ${data[i].subregion} and population is : ${data[i].population}`);      
      }
};