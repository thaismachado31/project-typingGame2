//1. Um jogador
//2. Jogo por tempo: 30s
//3. Digitar as palavras que aparecem o mais rapido possivel
//4. Se errar uma letra passa para a palavra seguinte
//5. Após completar a palavra corretamente passa para a palavra seguinte
//6. Depois de acertar 8 palavras seguidas você ganha mais 8s no tempo
//7. Primeiro aparecem palavras de 3 letras, depois de 4 letras até 10 letras.
//8. Após 8 palavras de um tamanho passa para o seguinte.
//9. Após acabar o tempo mostrar quantidade de acertos, letras por segundo e best record

// Criar as listas de palavras por tamanho. A seleção é feita sempre de forma aleatória


class Game {
    constructor() {
        this.time = 10;
        this.score = 0;
        this.round = 0;
        this.gamePlaying;
        this.setTime;
    }

    start(print, end) {
        this.setTime = setInterval(() => {
            if (this.time > 0) {
                this.time-=1;
            } else if (this.time === 0){
                 this.gamePlaying = false;
                 end();
            };
            print();
        }, 1000);
        this.gamePlaying = true;
    }


    restart () {
        
        this.time = 30;
        this.round = 0;
        this.score = 0;
        this.gamePlaying = false;
        clearInterval(this.setTime)
    }

}
