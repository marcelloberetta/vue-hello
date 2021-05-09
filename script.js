
const app = new Vue({

   el:'#app',

   data : {

      messaggio : "Ciao Vue ! :)",

      myClass : '',
     
   },

   methods : {
   
      changeColor(color){
       
       this.myClass = color;
       ;
     },
          
   }
  
 })