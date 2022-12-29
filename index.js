const result = getWeekNumber(new Date());
const date = new Date();
const month = date.getMonth();
const mes = Math.floor(month); //0-11
const day = date.getDay();

let a = day + 1;

const semana = 51;





  document.getElementById("button").addEventListener("click", function() 
  {


    
    if(mes === 0){//enero
      alert("el dia es: " + day + " el mes es: "+  mes +" numero de semana: " + result[1])//
      
      return
    
    }
    if(mes === 1){//febrero 
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//
      
      return
    
    }

    if(mes === 2){//marzo
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//
      
      return
    
    }

    if(mes===3){//abril
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//
      
      return
    }
    if (mes===4){//mayo
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//
      
      return
    }

    if(mes===5){//junio
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//
     
      return
    }
    if(mes===6){//julio
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//
      
      return
    }
    if (mes===7){//agosto
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//
      
      return
    }
    if (mes === 8){//septiembre
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//

      return
    }
    if (mes === 9){//octubre
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//
      
      return
    }

    if (mes===10){//noviembre
      alert("el dia es: "+ day + " el mes es: "+  mes +" numero de semana: " + result[1])//
      
      return
    }
    
    if(mes === 11){//diciembre
      alert("el dia es: "+ a + " el mes es: "+  mes +" numero de semana: " + result[1])//

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
    d.setUTCDate(d.getUTCDate() + 0 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 0)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}


  
  



