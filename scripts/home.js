var API = new APISchema();


$("#addProduct").click(function(){
    addProduct();
});

function addProduct(){
  var codigo =  $("#codigo").val();
  var nombre =  $("#nombre").val();
  var descrip =  $("#descrip").val();
  var precio =  $("#precio").val();


  if(codigo === "" || nombre === "" || descrip === "" || precio === "" ){
      M.toast({html: 'No se permiten campos vacios!'});

  }else{
      fetch(API.products, {
        method: 'POST',
        body: JSON.stringify({
          PD_code: codigo,
          PD_name: nombre,
          PD_descrip: descrip,
          PD_price: precio,
        }),
        headers: {
          "Content-type":  "application/json"
        }

      })
      .then(response => response.json())
      .then(data => {
      M.toast({html: 'PRODUCTO NUEVO AGREGADO'});
      // window.location = "?view=home";
    
      })
      .catch(err => {

      })
      
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        M.toast({html: errorCode  + ' - ' + errorMessage});
  
      });
      

      

  }

}




function methodAppend (){
  $("#idBody").append('<tr>' +
  '<td>' + products.code + '</td>' +
  '<td>' + products.name + '</td>' +
  '<td>' + products.descrip + '</td>' +
  '<td>' + products.precio + '</td>' +
  '<td><a (click)= "deleteUser(users._id)" href="#"style="margin-left: 10px; margin-right: 10px;"><i class="material-icons red-text">delete</i></a>/td>' +
  '</tr>');


}




//   <a (click)= "deleteUser(users._id)" href="#"style="margin-left: 10px; margin-right: 10px;"><i class="material-icons red-text">delete</i></a>
