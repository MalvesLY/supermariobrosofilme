/* 
Objetivo 1 - Abrir a modal quando clicar no botão
    Passo 1 - Pegar o elemento que representa o botão no HTML com JS
    Passo 2 - Identificar quando clicar no botão
    Passo 3 - Pelar o elemento da modal no JS
    Passo 4 - Abrir modal
Objetivo 2 - Fechar a modal ao clicar no X
    Passo 1 - Pegar o elemento que representa o X
    Passo 2 - Identificar quando clicar no X
    Passo 3 - Fechar a modal
*/

const botaoAbrirModal = document.querySelector('.butao');
const modal = document.querySelector('.modal');
const botaoFecharModal = document.querySelector('.fechar-modal');
const videoTrailer = document.getElementById('video');
const linkDoVideo = video.src

function alternarModal(){
    modal.classList.toggle("aberto")
};

botaoAbrirModal.addEventListener("click", () => {
    alternarModal(); videoTrailer.setAttribute("src", linkDoVideo)
}); 

botaoFecharModal.addEventListener("click", () => {alternarModal(); videoTrailer.setAttribute("src", "");});

//const = variável constante

//getElementById == pegue um elemento pelo ID. 

//setAttribute = definir um atributo
 
//.addEventListener "Escuta" um evento que ocorra com o elemento, como o clique de um botão. 
//() => {ação} Função para executar uma ação (chamada de seta)

 //classlist = propriedade com uma lista de clases dos objetos, onde dá para adcionar novas classes, remover, etc

 //Colocar classe (ou id).atributo, especifíca qual atributo você quer e de onde (p.e. video.src)

 //AO invés de usar os métodos .add (modal.classList.add("aberto")) e .remove (modal.classList.remove("aberto")), poderiamos usar o .toggle que significa alternar, assim, neste caso, se a classe modal tiver um "aberto", ele retira, mas se não tiver, ele coloca. Mas não é aconselhavel usá-lo neste caso, porque iria repitir uma linha de código, o que não é bom. (DRY=Don't Repeat Yourself)

 //Outra forma de criar uma função, além da seta (() => {}), é usando o function