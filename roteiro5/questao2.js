function verificarTCC(E, D) {
    if (D - E >= 3) {
        console.log("Muito bem! O aluno está apto a apresentar até o natal!");
    } else if (D - E > 0 && D - E < 3) {
        console.log("O trabalho está muito ruim!");
        D += 2;
        if (D <= 24) {
            console.log("TCC Apresentado!");
        } else {
            console.log("Não deu! Só no próximo ano agora.");
        }
    } else {
        console.log("Eu odeio o prof. Florovsky!");
    }
}

// Exemplos de teste
verificarTCC(13, 19);  // Muito bem! O aluno está apto a apresentar até o natal!
verificarTCC(22, 23);  // O trabalho está muito ruim! Não deu! Só no próximo ano agora.
verificarTCC(21, 22);  // O trabalho está muito ruim! TCC Apresentado!
