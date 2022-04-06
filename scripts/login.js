var API = new APISchema();


$("#btnlogin").click(function(){
    login();
});

function login(){
  var email =  $("#txtEmail").val();
  var password =  $("#txtPassword").val();


  if(email === "" || password === ""){
      M.toast({html: 'No se permiten campos vacios!'});

  }else{
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      M.toast({html: 'LOGIN CORRECTO'});
      window.location = "?view=home";

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      M.toast({html: errorCode  + ' - ' + errorMessage});

    });

  }

}

