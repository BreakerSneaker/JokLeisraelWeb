const result = getWeekNumber(new Date());
const date = new Date();
const month = date.getMonth();
const mes = Math.floor(month);
const day = date.getDay();
const semana = 51;





  document.getElementById("JuevesDia").addEventListener("click", function() 
  {



    if(mes===11)//si fecha es 1-12 entra al loop
    {
      
      if(result[1]===50)//si la semana es la semana 1-52 y toca tal libro
      {
        
        weekFifty();//week 50
      }else if(result[1]===51)
      {
        weekFiftyOne();//week51
      }
    } 





//funcion de dias
    function weekFifty(){
      if(day===4){
        window.open('Pdocument\\bereshit\\brd5.html')
      }
    }


    function weekFiftyOne(){
      if(day===4){
        alert("jueves")
      }
    }
    
    
  
  });// boton jueves por el dia con archivos del dia
  document.getElementById("juevesNoche").addEventListener("click", function() 
  {



    if(mes===11)//si es diciemmbre
    {
      //si la semana es la semana 50 y toca bereshit
      if(result[1]===50){
        
        weekFiftyN();//week 50
      }else if(result[1]===51){
        weekFiftyOneN();//week51
      }
    } 






    function weekFiftyN(){
      if(day===4){
        window.open('Pdocument\\bereshit\\brd6.html')
      }
    }


    function weekFiftyOneN(){
      if(day===4){
        alert("juevesNoche")
      }
    }
    
    
  
  });//boton jueves noche con archivos de la noche


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




