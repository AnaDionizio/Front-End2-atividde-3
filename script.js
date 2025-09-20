// Coleta os dados de altura e gênero de 15 pessoas
function coletarDados() {
    const pessoas = [];
    let numeroDePessoas = 0;

    while (numeroDePessoas < 15) {
        const altura = parseFloat(prompt("Digite a altura (em metros):"));
        const genero = prompt("Digite o gênero (Masculino/Feminino):");

        if (!isNaN(altura) && (genero === 'Masculino' || genero === 'Feminino')) {
            pessoas.push({ altura, genero });
            numeroDePessoas++;
        } else {
            alert("Dados inválidos. Tente novamente.");
        }
    }

    return pessoas;
}

// Calcula os resultados com base nos dados
function calcularResultados(pessoas) {
    let maiorAltura = -Infinity;
    let menorAltura = Infinity;

    let totalMasculino = 0;
    let countMasculino = 0;
    let countFeminino = 0;

    pessoas.forEach(pessoa => {
        if (pessoa.altura > maiorAltura) maiorAltura = pessoa.altura;
        if (pessoa.altura < menorAltura) menorAltura = pessoa.altura;

        if (pessoa.genero === 'Masculino') {
            totalMasculino += pessoa.altura;
            countMasculino++;
        }

        if (pessoa.genero === 'Feminino') {
            countFeminino++;
        }
    });

    console.log(`Maior altura: ${maiorAltura.toFixed(2)} metros`);
    console.log(`Menor altura: ${menorAltura.toFixed(2)} metros`);

    if (countMasculino > 0) {
        const mediaMasculino = totalMasculino / countMasculino;
        console.log(`Média de altura do gênero Masculino: ${mediaMasculino.toFixed(2)} metros`);
    } else {
        console.log("Nenhum dado de gênero Masculino registrado.");
    }

    console.log(`Número de pessoas do gênero Feminino: ${countFeminino}`);
}

// Função principal
function main() {
    const pessoas = coletarDados();
    calcularResultados(pessoas);
}

// Inicia o programa
main();
