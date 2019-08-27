function exe1(){
    // recupera os dados do usuário
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);
    // calcular
    var media = (nota1+nota2+nota3+nota4)/4
    // verifica aprovação
    if (media >= 7){
        alert("Aluno aprovado com média " + media)
        console.log("Aluno aprovado com média" + media)
    }
    else {
        alert("Aluno reprovado com média " + media)
        console.log("Aluno reprovado com média " + media)
    }
}
function exe2(){
    // recupera os dados do usuário
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    // calcular
    var media = (n1+n2)/2
    // verifica aprovação
    if (media >= 7){
        alert("Aluno aprovado com média " + media)
        console.log("Aluno aprovado com média " + media)
    }
    else if ((media >= 3) && (media < 7)){
        alert("Aluno com média " + media)
        console.log("Aluno com média " + media)
    }
    else { 
        alert("Aluno reprovado com média " + media)
        console.log("Aluno reprovado com média " + media)
    }
}
    function exe3(){
    // recupera os dados do usuário
    var nu1 = Number(document.getElementById("nu1").value);
    var nu2 = Number(document.getElementById("nu2").value);
    // verifica aprovação
    if (nu1 < nu2){
        alert("O menor numero é o " + nu1)
        console.log("O menor numero é o " + nu1)
    }
     else if (nu1 > nu2){ 
        alert("O menor numero é o " + nu2)
        console.log("O menor numero é o " + nu2)
    }
    else { 
        alert("Não contem numero menor")
        console.log("Não contem numero menor")
    }
}
function exe4(){
    // recupera os dados do usuário
    var nn1 = Number(document.getElementById("nn1").value);
    var nn2 = Number(document.getElementById("nn2").value);
    var nn3 = Number(document.getElementById("nn3").value);
    // verifica aprovação
    if ((nn1 > nn2) && (nn1 > nn3)){
        alert("O maior numero é o " + nn1)
    }
    else if ((nn2 > nn1) && (nn2 > nn3)){
        alert("O maior numero é o " + nn2)
    }
    else if ((nn3 > nn1) && (nn3 > nn2)){
        alert("O maior numero é o " + nn3)
    }
    else
        alert ("não contem maior numero")
}
function exe5(){
    // recupera os dados do usuário
    var nnn1 = Number(document.getElementById("nnn1").value);
    var nnn2 = Number(document.getElementById("nnn2").value);
    var nnn3 = (document.getElementById("nnn3").value);
    // verifica aprovação
    switch (nnn3) {
        case '1': Resultado = (nnn1 + nnn2) / 2
            
            break;
        case '2': if (nnn1 <= nnn2){
        Resultado = nnn2 - nnn1
        }
        else {
        Resultado = nnn1 - nnn2
        }

            break;
        case '3': Resultado = nnn1 * nnn2

            break;
        case '4': if (nnn2 != 0){
            Resultado = nnn1 / nnn2
        }
        else {
            Resultado = "Divisão por zero"
        }
            break;
    
        default:
        Resultado = "Opção não encontrada"
    }
    alert("Resultado: " + Resultado)
}
function exe7(){
    var salario = Number(document.getElementById("salario").value)
    if (salario < 500){
        var novo = salario + salario*30/100
        alert("Novo valor " + novo)
    }
    else {
        alert("Não tem direito a aumento")
    }
}
function exe22(){
    // recupera os dados do usuário
    var idade = Number(document.getElementById("idade").value);
    var peso = Number(document.getElementById("peso").value);
    var risco = 0

    if (idade < 20){
         if (peso <= 60)
         risco = 9
         else if ((peso > 60) && (peso <90))
         risco = 8
            else if (peso > 90)
            rico = 7 
    }
    if ((idade >= 20) && (idade <= 50)){
        if (peso <= 60)
        risco = 6
        else if ((peso > 60) && (peso <90))
        risco = 5
        else if (peso > 90)
        rico = 4
    }
    if (idade > 50){
        if (peso <= 60)
        risco = 3
        else if ((peso > 60) && (peso <90))
        risco = 2
        else if (peso > 90)
        rico = 1
    }
    alert("O risco se encaixa no grupo " + risco)
}