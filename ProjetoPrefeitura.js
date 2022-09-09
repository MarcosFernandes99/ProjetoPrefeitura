let salario = [1200, 1500, 2000, 5000, 10000, 1800]
let numeroFilhos = [1, 3, 2, 1, 2, 4]
let contador = 6


console.log("A média do salário da população é:", "R$", CalcularMediaSalario())
console.log("A média de filhos da população é:", CalcularMediaFilhos())
console.log("O maior salário da população é:", "R$", CalcularMaiorSalario())
console.log("A porcentagem de habitantes com salário até R$ 1500:", "%", CalcularPorcentagem())

function CalcularMediaSalario(){
    let media = 0
    for(let i = 0; i < contador; i++){
        media = media + salario[i]
    }
        media = media / contador

        return media.toFixed(2)
}

function CalcularMediaFilhos(){
    let media = 0
    for(let i = 0; i < contador; i++){
        media = media + numeroFilhos[i]
    }
        media = media / contador

        return media.toFixed(2)
}

function CalcularMaiorSalario(){
    let maiorSalario = 0
    for(let i = 0; i < contador; i++){
        if(salario[i] > maiorSalario){
            maiorSalario = salario[i]
        }
    }

        return maiorSalario

}

function CalcularPorcentagem(){
    let quantidadePessoas = 0
    let porcentagem = 0
    for(let i = 0; i < contador; i ++){
        if(salario[i] <= 1500){
            quantidadePessoas++
        }
    }

    porcentagem = (100 * quantidadePessoas) / contador
    
    return porcentagem.toFixed(2)

}


