var API = new APISchema();


$("#addUser").click(function(){
    addUser();
});

function addUser(){
  var email =  $("#addEmail").val();
  var password =  $("#addPassword").val();


  if(email === "" || password === ""){
      M.toast({html: 'No se permiten campos vacios!'});

  }else{
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      var uid = user.uid;

      fetch(API.users, {
        method: 'POST',
        body: JSON.stringify({
          US_name: email,
          US_email: password,
          UID: uid
        }),
        headers: {
          "Content-type":  "application/json"
        }

      })
      .then(response => response.json())
      .then(data => {
      // M.toast({html: 'REGISTRO CORRECTO'});
       window.location = "?view=home";
    
      })
      .catch(err => {

      });

      

      // ...
     

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      M.toast({html: errorCode  + ' - ' + errorMessage});

    });

  }

}