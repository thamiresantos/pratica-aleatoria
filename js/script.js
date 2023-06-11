//----------- JavaScript referente a pagina de calculos simples ----------- 

const apertaButao = document.querySelector('#button')

apertaButao.addEventListener('click', calculo);

function calculo() {
    
    //variáveis
    var res = document.getElementById ('res')
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value
    
    
    //verificar se todos os campos estão eneenchidos
    if(n1.length == 0 || n2.length == 0) {
        window.alert('Ops... Algum campo está vazio! Por favor, verifique e tente novamente!')
    } else { 
        
    // soma dos valores
    const numero01 = parseFloat(n1)
    const numero02 = parseFloat(n2)
    const calculoSoma = numero01 + numero02

   // adição dos valores
    const calculoSubtração = numero01 - numero02

  // divisão dos valores
  const calculoDivisao = numero01 / numero02

  // multiplicação  de valores
  const calculoMulti = numero01 * numero02

    res.innerHTML = ` Olá, você inserio o número ${n1} e o número ${n2} <br>
     A soma de ${n1} + ${n2} = ${calculoSoma} 
     <br>  A subtração de ${n1} - ${n2} = ${calculoSubtração} 
     <br> A divisão de ${n1} / ${n2} = ${calculoDivisao}
     <br> A multiplição de ${n1} *  ${n2} = ${calculoMulti}    <br> Obrigada por participar!` 

   


    }

}






    
   