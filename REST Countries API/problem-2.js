//to display all the country flags in console
var request1 = new XMLHttpRequest()
request1.open("Get", "https://restcountries.com/v2/all");
request1.send();
request1.onload = function(){
    var data = JSON.parse(request1.response);  
    for(var i=0;i<data.length;i++){
         console.log(`Flag of Country : ${data[i].name} is : ${data[i].flag}`);
      }
};