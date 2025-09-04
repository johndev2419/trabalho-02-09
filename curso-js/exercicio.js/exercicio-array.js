// Gerar listas com os dados dos livros.
// Listas: titulos, anosDePublicacao, editoras, numerosDePaginas, precos e categorias.
// Massa de dados: Preencher as listas com 7 livros de categorias diversificadas (Ficção, Romance, Financeiro, Tecnologia)
// Criar o método que permite cadastrar novo livro
// Criar os seguintes métodos:
// - Listar todos os livros da categoria Ficção
// - Listar todos os livros publicados a partir do ano 2010
// - Listar todos os livros de uma determinada editora (entrada via prompt)
// - Listar todos os livros com mais de 300 páginas
// - Listar o livro com maior número de páginas
// - Listar o livro com menor número de páginas
// - Listar a média de páginas dos livros cadastrados
// - Listar todos os livros cujo título possua mais de 30 caracteres
// - Listar o livro mais caro
// - Listar o livro mais barato
// - Criar uma lista com os títulos e preços dos livros da categoria Tecnologia
// - Criar uma lista com os títulos e anos de publicação dos livros da categoria Romance
// - Listar todos os livros cujo título possua a palavra "JavaScript"


let titulosLivros = [ "Harry Potter",  "Dom Casmurro", 
    
    "Pai Rico, Pai Pobre",
    "Mais esperto que o diabo",          // 7
    "JavaScript",
    "Orgulho e Preconceito",
    "JavaScript Moderno e Profissional"
];

let anosPublicados = [1999, 1856, 2008, 1920, 2000, 1994, 2022 ];
let editorasLivros = ["john globos", "john editoras",
     "albert book", "john white",
    "albert lybary", "john whish", "cleitinho impressoras"
];
let numerosDePaginas = [1178, 256, 207, 464, 176, 432, 380];
let precosLivros = [120.00, 35.00, 50.00, 20.00, 30.00, 100.00, 60.00];
let categoriasLivros = ["ficção", "romance", "financeiro", "desenvolvimento pessoal", 
    "tecnologia", "romance", "tecnologia"];


function cadastrarLivro() {
    
    let titulos = prompt("digite o titulo do livro");
    let anos = parseInt(prompt("digite o ano do livro publicado"));
    let editoras = prompt("digite qual editora o livro foi publicado");
    let paginas = parseInt(prompt("digite os numeros de paginas"));
    let precos = parseFloat(prompt("digite o preço do livro que deseja cadastrar"));
    let categorias = prompt("digite a categoria do livro (ficção,romance, etc...)");
    
    titulosLivros.push(titulos);
    anosPublicados.push(anos);
    editorasLivros.push(editoras);
    numerosDePaginas.push(paginas);
    precosLivros.push(precos);
    categoriasLivros.push(categorias);

    alert(`Livro ${titulos} cadastrado com sucesso!`);
}

function listarFiccao(){
    let resultadoficcao = [];

    for (let i = 0; i < titulosLivros.length; i = i + 1){
      let categoria = categoriasLivros [i];
      let titulo = titulosLivros[i];
      if(categoria === "ficção"){
        resultadoficcao.push(titulo)
      }
    }
    alert(`Os livros de ficção são ${resultadoficcao}`);
}

function listarLivros2010(){
    let resultadoLivros2010 = [];

    for(let i =0; i < titulosLivros.length; i = i + 1){
        let ano = anosPublicados[i];
        let titulo = titulosLivros[i];
        if(ano > 2010){
            resultadoLivros2010.push(titulo);
        }
    }
    alert("lista de livros que foi publicados após 2010: " + resultadoLivros2010);
}

function listarPorEditora() {
    let editoraBusca = prompt("digite o nome da editora:");
    let resultadoEditoras = [];
    for (let i = 0; i < titulos.length; i = i + 1) {
       let editora = editoras[i];
        let titulo = titulos[i];

        if (editora.toLowerCase() === editoraBusca.toLowerCase()) {
            resultadoEditora.push(titulo);
        }
    }

   alert(`livors da editora ${resultadoEditoras}`)
}

function listarMaisPaginas(){
    let resulatdoMaisPaginas = [];

    for(let i = 0; i <titulosLivros.length; i = i + 1){
    let pagina = numerosDePaginas [i];
    let titulo = titulosLivros [i];

    if(pagina <= 300){
        resulatdoMaisPaginas.push(titulo);
    }
}
  alert(`os livros com páginas acima de 300 são : ${resulatdoMaisPaginas}`);
}

function listarMaiorQuantidePaginas(){
    let maiorPaginas = 0;
    let livroMaisPainas = "";


    for(let i = 0; i < titulosLivros.length; i = i + 1){
    let pagina = numerosDePaginas [i];
    let titulo = titulosLivros [i];

    if(pagina > maiorPaginas){
          maiorPaginas = pagina;
          livroMaisPainas = titulo;
        
    }
}
  alert(`${livroMaisPainas} contém o maior número de páginas: ${maiorPaginas}`);
}

function mostrarMenorPaginas(){
    let menorNumeroPaginas = Infinity;
    let livroMenorPaginas = "";

    for(let i = 0; i < titulosLivros.length; i = i + 1){
      let menorPaginas = numerosDePaginas [i];
      let titulo = titulosLivros[i];

      if(menorPaginas < menorNumeroPaginas){
        menorNumeroPaginas = menorPaginas;
        livroMenorPaginas = titulo;
      }
    }
    alert(`${livroMenorPaginas} contém a menor número de páginas: ${menorNumeroPaginas}`);  
}

function mediaDePaginas(){
    let somaPaginas = 0;

    for(let i = 0; i < titulosLivros.length; i = i +1){
           let numeroPaginas = numerosDePaginas [i];
         
           somaPaginas = somaPaginas + numeroPaginas;
    }
    let media = somaPaginas / titulosLivros.length ; 
    
    alert(`A média das quantidades de páginas são: ${media}`);
}

function listarAcima30Caracteres(){
    
  
    for(let i = 0; i < titulosLivros.length; i = i + 1){

    }
}

function listarLivroCaro(){
    let livroValorCaro = 0;
    let livroCaro = "";
    
    for(let i = 0; i < titulosLivros.length; i = i + 1){
        let valor = precosLivros[i];
        let titulo = titulosLivros[i];

        if(valor > livroValorCaro){
            livroValorCaro = valor;
            livroCaro = titulo;
        }
    }
    alert(`O ${livroCaro} mais caro da lista é o : ${livroValorCaro}`);
}

function listarLivroBarato(){
    let livroValorBarato = Infinity;
    let livroBarato = "";
    
    for(let i = 0; i < titulosLivros.length; i = i + 1){
        let valor = precosLivros[i];
        let titulo = titulosLivros[i];

        if(valor < livroValorBarato){
            livroValorBarato = valor;
            livroBarato = titulo;
        }
    }
    alert(`O ${livroBarato} é o mais barato da lista é o : ${livroValorBarato}`);
}

function listarLivroPrecoTec(){
    let listatec = [];


    for(let i = 0; i < titulosLivros.length; i = i + 1){
        let categoria = categoriasLivros [i];
        let preco = precosLivros [i];
        let titulo = titulosLivros[i];
           if(categoria === "tecnologia"){
           let dados = `${titulo}, ${preco}`
           listatec.push(dados)
           }
        }
        alert(listatec);
}

function listaAnosTituloCategoria(){
    let romance = []; 

    for(let i = 0; i < titulosLivros.length; i = i + 1){
        let  categoria = categoriasLivros[i];
        let ano = anosPublicados[i];
        let titulo = titulosLivros[i];

        if(categoria ==="romance"){
            let dados = `${titulo} , ${ano}`;
            romance.push(dados);
        }
    }
   alert(romance);
}

function listaJavascript(){
    let listajava = [];

    for(let i = 0; i < titulosLivros.length; i = i + 1){
        let titulo = titulosLivros[i];
        if(titulo.includes("JavaScript")){
            let dados = `${titulo}`
            listajava.push(dados)
        }
    }
    alert(listajava)
}


