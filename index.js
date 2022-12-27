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
      
      return
     
    }



    if(mes === 0){


      if(result[1]===0){

        weekOne();
       

        

        return
      }
      if(result[1]===1){
        weekTwo();

        
        return

      }
      if(result[1]===2){
        weekThree();
        

        return
      }
      if(result[1]===3){
        weekFour();
      

        return
      }
      if(result[1]===4){
        weekFive();
     

        return
      }
      if(result[1]===5){
        weekSix();
      

        return
      }

      
      return

    }



    if(mes === 1){


      if(result[1]===0){
        weekSix();

        return
      }
      if(result[1]===1){
        weekSeven();

        return

      }
      if(result[1]===2){
        weekEight();
         

        return
      }

      
      return

    }
    

    


    


   


   








































































    
    function weekOne(){

      
      if(day===0){
        alert("enero domingo semana 1")
      }else if(day===1){
        alert("ener1o lunes semana 1")
      }else if(day===2){
        alert("ener1o martes semana 1")
      }else if(day===3){
        alert("ener1o miercoles semana 1")
      }else if(day===4){
        alert("ener1o jueves semana 1")
      }else if(day===5){
        alert("ener1o viernes semana 1")
      }else if(day===6){
        alert('es Shabat!. el acceso automatico esta bloqueado!')
      }
    }
    function weekTwo(){
      if(day===0){
        alert("enero domingo semana 2")
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
      
    }function weekThree(){
      if(day===0){
        alert("enero domingo semana 3")
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
    function weekFour(){
      if(day===0){
        alert("enero domingo semana 4")
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
    function weekFive(){
      if(day===0){
        alert("enero domingo semana 5")
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
    function weekSix(){
      if(day===0){
        alert("ener1o domingo semana 1")
      }else if(day===1){
        alert("ener1o lunes semana 1")
      }else if(day===2){
        alert("ener1o martes semana 1")
      }else if(day===3){
        alert("ener1o miercoles semana 1")
      }else if(day===4){
        alert("ener1o jueves semana 1")
      }else if(day===5){
        alert("ener1o viernes semana 1")
      }else if(day===6){
        alert('es Shabat!. el acceso automatico esta bloqueado!')
      }
      
    }
    function weekSeven(){
      if(day===0){
        alert("ener1o domingo semana 2")
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
    }function weekEight(){
      if(day===0){
        alert("ener1o domingo semana 3")
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
    function weekNine(){
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
    function weekTen(){
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
    function weekEleven(){
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
    function weekTwelve(){
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
    }function weekThirteen(){
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
    function weekFourTeen(){
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
    function weekFiveTeen(){
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
    function weekSixTeen(){
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
    function weekSevenTeen(){
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
    function weekEightTeen(){
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
    function weekNineTeen(){
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
    function weekTwenty(){
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
    function weekTwentyOne(){
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

    function weekTwentyTwo(){
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

    function week(weekTwentyThree){
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
    function weekTwentyFour(){
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
    function weekTwentyFive(){
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
    function weekTwentySix(){
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
    function weekTwentySeven(){
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
    function weekTwentyEight(){
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
    function weekTwentyNine(){
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
    function weekThirty(){
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

    function weekFifty(){
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
      }else{
        
      }
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


  
  



