const result = getWeekNumber(new Date());
const date = new Date();
const month = date.getMonth();
const mes = Math.floor(month);
const day = date.getDay();

const semana = 51;





  document.getElementById("button").addEventListener("click", function() 
  {


    if(mes === 11){

      if(result[1]===50){

        weekFifty();

        return;
      }
      if(result[1]===51){

        weekFiftyOne();
        return

      }
      if(result[1]===52){

        weekFiftyTwo();
        return
      }
      
      
     
    }else



    if(mes === 1){


      if(result[1]===0){

        weekFiftyOne();
       

        

        return
      }
      if(result[1]===1){
        weekFiftyOne();

        
        return

      }
      if(result[1]===2){
        weekFiftyOne();
        

        return
      }
      if(result[1]===3){
        weekFiftyOne();
      

        return
      }
      if(result[1]===4){
        weekFiftyOne();
     

        return
      }
      if(result[1]===5){
        weekFiftyOne();
      

        return
      }

      
      

    }else


//febrero
    if(mes === 2){


      if(result[1]===6){
        weekFiftyOne();

        return
      }
      if(result[1]===7){
        weekFiftyOne();

        return

      }
      if(result[1]===8){
        weekFiftyOne();
         

        return
      }

      
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


  
  



