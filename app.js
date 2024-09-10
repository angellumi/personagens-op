function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
     //Vai obter valor que tiver dentro do id campo-pesquisa e atribuir a variavel campoPesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //se campoPesquisa não há nada, volte, não vai carregar o resto do código
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum nome foi encontrado. Você não pesquisou o nome do personagem ou relacionado</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo= "";
    let descricao = "";
    let tags = "";
    // Itera sobre os dados e cria o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se no dado.titulo includes tiver o campo de pesquisa, vai ser executado o campo de código
    
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        
// Cria um novo elemento div para cada resultado, com o + dizendo que soma, não substitue um ao outro
resultados += `
<div class="item-resultado">
  <a href=${dado.linkdois} target="_blank"><h2>${dado.titulo}<h2></a>
  <p2 class="descricao-meta">${dado.descrição}.</p2>
  <div class="container">
    <img src="#" alt="#"> 
  </div>
  <a href="${dado.link}">mais informações</a>
</div>
       ` }
       if(!resultados){

        resultados = "Nada foi encontrado"
          }
       // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
        }
}
  
//criar var imagem pra cada um dps no dados.js e dado.img
