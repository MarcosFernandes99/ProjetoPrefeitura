let salario = [1200, 1500, 2000, 5000, 10000, 1800]
let numeroFilhos = [1, 3, 2, 1, 2, 4]
let contador = 6
let media = 0

console.log("A média do salário da população é:", "R$", CalcularMediaSalario())

function CalcularMediaSalario(){
    for(let i = 0; i < contador; i++){
        media = media + salario[i]
    }
        media = media / contador

        return media.toFixed(2)
}