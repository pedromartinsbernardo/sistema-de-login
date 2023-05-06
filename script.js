


   function login(){
   const email= document.getElementById('email').value

   const senha= document.getElementById('senha').value

   const button= document.getElementById('button')

   console.log(email)

   firebase.auth().signInWithEmailAndPassword(email,senha).then(() => {
     
      window.location.href = "login.html";;
  }).catch(error => {
     
      alert(getErrorMessage(error));
  });





 
   }