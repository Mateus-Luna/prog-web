//Etapa 1: Modificar o conteúdo de parágrafos. Se algum dos inputs não estiver preenchido, não modifique o seu respectivo texto.
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Dica02: Utilize a propriedade "value" para recuperar a informação preenchida nos campos de input.
const alterarTextos = () => {
    document.getElementById("texto1").textContent = document.getElementById("input1").value
    document.getElementById("texto2").textContent = document.getElementById("input2").value
    document.getElementById("texto3").textContent = document.getElementById("input3").value

}

//Etapa 2: Adicionar e remover elementos no final da lista de itens
//Dica01: Utilize o método createElement para criar li
//Dica02: Utilize a propriedade "textContent" do li para modificar o seu conteúdo
//Dica03: Utilize a propriedade "ul.children.length" para saber a quantidade de itens na lista
//Dica04: Utilize a propriedade "ul.appendChild" para adicionar o li na lista
function adicionarItem() {
    let qntElements = document.getElementById("listaItens").children.length
    let element = document.createElement("li")
    element.textContent = "Item " + (qntElements+1)
    document.getElementById("listaItens").appendChild(element) 
}

//Dica05: Utilize as propriedades "ul.removeChild" e "ul.lastChild" para fazer remoções de li na lista
//Dica06: Lembre-se de só deixar remover se a lista tiver pelo menos um elemento
function removerItem() {
    let qntElements = document.getElementById("listaItens").children.length
    if (qntElements > 1){
        document.getElementById("listaItens").removeChild(document.getElementById("listaItens").lastChild)
    }

}

//Etapa 3: Modificar estilos de inputs do tipo text
//Obrigatório: Uso de callback function para alterar a cor de fundo de todos os inputs
//Dica01: Utilize a propriedade "style.backgroundColor" para modificar a cor de fundo dos inputs
function mudarCorFundo() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input =>
        input.style.backgroundColor = document.getElementById("inputCor").value
    )
    }

//Etapa 4: Ocultar e Exibir Elementos
//Dica01: Utilize a propriedade "style.display" e o valor da variável estilo para ocultar ou exibir a imagem
function ocultarImagem() {
    estilo = 'none'
    document.getElementById("imagem").style.display = estilo
}

function exibirImagem() {
    estilo = 'block'
    document.getElementById("imagem").style.display = estilo

}

//Etapa 4: Mover elementos na página
//Dica01: Utilize apenas as propriedades "box.style.left" e "box.style.top" para fazer a movimentação do elemento
function mover(direcao) {
    const box = document.getElementById('divDeslizavel');
    let left = parseInt(window.getComputedStyle(box).left) || 0;
    let top = parseInt(window.getComputedStyle(box).top) || 0;
    
    switch (direcao) {
        case 'esquerda':
            box.style.left = (left - 10) + 'px'       
            break;
        case 'direita':
            box.style.left = (left + 10) + 'px'
            break;
        case 'cima':
            box.style.top = (left - 10) + 'px'       
            break;
        case 'baixo':
            box.style.top = (left + 10) + 'px'       
            break;
    }
}

//Exercício 6: Trocar Classe de Elementos0
//Dica01: Utilize a propriedade "p.classList.toggle" para fazer a alternância
function alternarClasse() {
    const p = document.getElementById('classeParagrafo');
    if (p.classList.contains('classeAzul')){
        p.classList.toggle('classeAzul');
        p.classList.toggle('classeVermelha');
        p.textContent = "Este parágrafo é da classe vermelha."
    } else{
        p.classList.toggle('classeVermelha');
        p.classList.toggle('classeAzul');
        p.textContent = "Este parágrafo é da classe azul."
    
    }
}

//Exercício 7: Galeria de Imagens com Zoom
//Dica01: Utilize a função replace para substitutir o 100 por 300 no valor de src da imagem
function mostrarImagemMaior(img) {
    const imagemMaior = document.getElementById('imagem-maior');
    const imagem = img.src.replace('100','300')
    imagemMaior.src = imagem;
}

// Exercício 8: Validação de Formulário
//Obrigatório: É preciso aplicar estratégias de validação dos valores dos quatro campos do formulário.
//Pelo menos: não aceitar nome vazio, o cpf precisa estar mascarado e com 14 dígitos, 
//o email precisa ter pelo menos um @ e um ponto duas posições após o @ e a senha não deve conter menos que 8 caracteres.
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('mensagem-erro');
    
    erro.textContent = '';
    if (nome === ''){
        erro.textContent = "não aceitar nome vazio";
        return false;
    }
    const cpfMascarado = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    if (!cpfMascarado.test(cpf)){
        erro.textContent = "o cpf precisa estar mascarado e com 14 dígitos"
        return false
    }
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailValido.test(email)){
        erro.textContent = "o email precisa ter pelo menos um @ e um ponto duas posições após o @."
        return false
    }
    if (senha.length < 8){
        erro.textContent = "a senha não deve conter menos que 8 caracteres."
        return false
    }
    return true;
}

// Exercício 9: Contador Incremental
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio01: Implemente a geração da música "Um Elefante Incomodaa Muita Gente"
//quando o número de versos for maior que 9, a função deve colocar reticência (...) para o caso
//do número de "incomodam" ser maior ou igual a 10.
let contador = 0;
function incrementar() {
    contador++;
    document.getElementById("contador").textContent = contador
}

function decrementar() {
    contador--;
    document.getElementById("contador").textContent = contador

}

function geraMusicaElefante(numVersos){

}

// Exercício 10: Filtrar Itens de uma Lista com callback e arrow function
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio02: Transforme a lista de itens em objetos (professor: nome, area, laboratorio, disciplina) e utilize o filtro para atuar considerando todos os atributos do projeto.
function filtrarItens() {
    const filtro = document.getElementById('filtro').value.toLowerCase();
    const itens = Array.from(document.getElementById('lista-professores').getElementsByTagName('li'));

    //Converter o comando de repetição abaixo em uma callback que recebe como parâmetro uma arrow function
    itens.forEach(item =>{
        const nome = item.textContent.toLowerCase();
        item.style.display = nome.includes(filtro) ? "" : "none";
    })
}
