// O Math é um objeto que vai permitir a realização de operações matemáticas.
// O método random vai sortear um número aleatório entre 0 e 1.
const randomNumber = parseInt(Math.random()*100+1)
 console.log(randomNumber)

// Botão jogar
const playButton = document.querySelector('#jogar')

// Caixa de texto
const textBox = document.querySelector('#txtNumero')

// Span Jogadas anteriores 
const previousPlays = document.querySelector('.vezes')

// Span Jogadas restantes
const remainPlays = document.querySelector('.numChances')

// Div com parágrafos
const playAgain = document.querySelector('.resultados')

// 3º parágrafo da div resultados
const warnings = document.querySelector('.avisos')

// Criando um elemento Html
const paragraph = document.createElement('p')

// Criação de um vetor para armazenar os números jogados
const numbersPlayed = []

// Variável contadora
let myPlays = 1

// Variável para poder jogar
let playGame = true


if(playGame){
    playButton.addEventListener('click', function(e){ // função anônima que vai receber como parâmetro o botão representado pela letra (e)
        e.preventDefault() // removendo a ação submit(ação de envio do botão)
        let tentativa = parseInt(textBox.value) // variável que vai receber um número inteiro da caixa de texto
        validaChances(tentativa) //chamando uma função e passando número digitado como argumento
    })
}

function validaChances(num){
    if(isNaN(num) || num > 100 || num < 1 ){ // se o conteúdo da variável não for um número, execute o que estiver dentro da chaves 
        alert('Atenção, digite apenas valores numéricos entre 1 e 100') // alert vai exibir mensagem na tela
        textBox.value = '' // limpando conteudo da caixa de texto
        textBox.focus() // setando focus na caixa de texto
    }
}