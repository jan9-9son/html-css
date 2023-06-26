function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fulano = document.getElementById('fullname')
  var txtano=document.getElementById('txtano')
  var sexo=document.getElementById('txtradio')
  var email = document.getElementById('txtemail')
  var res =document.getElementById('res')
 
    
  if(fulano.value.length == '' || txtano.value ==0|| email.value=='') { 
    window.alert(' [ERROR]')
    
    res.innerHTML=`Fill all the boxes !`
    
    }
    
    else {if(sexo[0].checked||sexo[1]){
       window.alert("You are a part of milions of users")
    } else{window.alert("Tick one of the boxes")}}
  
    
    
  }
 
