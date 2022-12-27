const result = getWeekNumber(new Date());
const date = new Date();
const month = date.getMonth();
const mes = Math.floor(month); //0-11
const day = date.getDay();

const semana = 51;





  document.getElementById("button").addEventListener("click", function() 
  {


    if(mes === 11){
      alert(day, mes, "semana ", result[1])

      return
    }

    if(mes === 0){
      alert(day, mes, "semana ", result[1])
      return
    }
    if(mes === 1){
      alert(day, mes, "semana ",result[1])
      return
    }



    


   


   








































































    


    function weekFiftyOne(){
      if(day===0)
      {
        alert("domingo1")
        return
      }
      if(day===1)
      {
        alert("lunes1")
        return
      }
      if(day===2)
      {
        alert("martes1")
        return
      }
      if(day===3)
      {
        alert("miercoles1")
        return
      }
      if(day===4)
      {
        alert("jueves1")
        return
      }
      if(day===5)
      {
        alert("viernes1")
        return
      }
      if(day===6)
      {
        alert("sabado1")
        return
      }
      
    }


    function weekFiftyTwo(){
      if(day===0)
      {
        alert("domingo3")
        return
      }
      if(day===1)
      {
        alert("lunes3")
        return
      }
      if(day===2)
      {
        alert("martes3")
        return
      }
      if(day===3)
      {
        alert("miercoles3")
        return
      }
      if(day===4)
      {
        alert("jueves3")
        return
      }
      if(day===5)
      {
        alert("viernes3")
        return
      }
      if(day===6)
      {
        alert("sabado3")
        return
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


  
  



