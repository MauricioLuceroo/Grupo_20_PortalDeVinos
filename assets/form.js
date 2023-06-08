var imput = document.getElementsByClassName("formulario_input");
for (var i =0 ; i < imput.length; i++) {
    imput[i].addEventListener("keyup", function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add("fijar");
        }else{
            this.nextElementSibling.classList.remove("fijar");
        }
        
    });
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var subject = document.getElementsByName("Subject")[0].value;
  
    if (name === "") {
      alert("Por favor, ingresa tu Nombre");
      return;
    }
  
    if (email === "") {
      alert("Por favor, ingresa tu Correo electrónico");
      return;
    }
  
    if (subject === "") {
      alert("Por favor, ingresa el Asunto");
      return;
    } 
  
    alert("El formulario se ha enviado correctamente");
    
  
    document.getElementById("form").reset();
  });
 

 
  
  
  
  
  