function adicionarCaracter(numero){
    const valordisplay = document.querySelector(".display").value
    
    document.querySelector(".display").value = valordisplay + numero
  }

 function limpatela(){
     document.querySelector(".display").value = ""
 }

 function calcular(){
     const valordisplay = document.querySelector(".display").value

     document.querySelector(".display").value = eval(valordisplay)
 }

 function inverternumero(){
    const valordisplay = document.querySelector(".display").value

    document.querySelector(".dsplay").value = valordisplay * -1
 }