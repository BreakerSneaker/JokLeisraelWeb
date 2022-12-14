const result = getWeekNumber(new Date());
const date = new Date();
const month = date.getMonth();
const mes = Math.floor(month);
const day = date.getDay();

const semana = 51;





  document.getElementById("button").addEventListener("click", function() 
  {



    if(mes===11)//si es diciemmbre
    {
      //si la semana es la semana 50 y toca bereshit
      if(result[1]===50){
        weekFifty();//week 50
      }else if(result[1]===51){
        weekFiftyOne();//week51
      }
    } 






    function weekFifty(){
      if(day===0){
        window.open('Pdocument\\bereshit\\brd1.html')
      }else if(day===1){
        window.open('Pdocument\\bereshit\\brd2.html')
      }else if(day===2){
        window.open('Pdocument\\bereshit\\brd3.html')
      }else if(day===3){
        window.open('Pdocument\\bereshit\\brd4.html')
      }else if(day===4){
        window.open('thu.html')
      }else if(day===5){
        window.open('Pdocument\\bereshit\\brd7.html')
      }else if(day===6){
        alert('es Shabat!. el acceso automatico esta bloqueado!')
      }
    }


    function weekFiftyOne(){
      if(day===0){
        alert("domingo")
      }else if(day===1){
        alert("lunes")
      }else if(day===2){
        alert("martes")
      }else if(day===3){
        alert("miercoles")
      }else if(day===4){
        alert("jueves")
      }else if(day===5){
        alert("viernes")
      }else if(day===6){
        alert("sabado")
      }
    }
    






























      
    
  
  });


  function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}


  
  



