const livrosIniciais = [
  {
    id: 1,
    titulo: "Segurança em Aplicações Web",
    autor: "Carlos Silva",
    categoria: "Segurança",
    capa: "https://m.media-amazon.com/images/I/41O+D9r2X-L.jpg"
  },
  {
    id: 2,
    titulo: "Redes de Computadores",
    autor: "Andrew S. Tanenbaum",
    categoria: "Infraestrutura",
    capa: "https://m.media-amazon.com/images/I/41zQ8K73p+L._SY445_SX342_.jpg"
  },
  {
    id: 3,
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    categoria: "Desenvolvimento",
    capa: "https://m.media-amazon.com/images/I/41xShlnTZTL._SY445_SX342_.jpg"
  },
  {
    id: 4,
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    categoria: "Romance Clássico",
    capa: "https://m.media-amazon.com/images/I/51-2ZqJ-nBL._SY445_SX342_.jpg"
  },
  {
    id: 5,
    titulo: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    categoria: "Romance Clássico",
    capa: "https://m.media-amazon.com/images/I/51r2X71077L._SY445_SX342_.jpg"
  },
  {
    id: 6,
    titulo: "Como Eu Era Antes de Você",
    autor: "Jojo Moyes",
    categoria: "Romance Contemporâneo",
    capa: "https://m.media-amazon.com/images/I/51oO1T6Z0cL._SY445_SX342_.jpg"
  },
  {
    id: 7,
    titulo: "Binding 13",
    autor: "Chloe Walsh",
    categoria: "Romance New Adult",
    capa: "https://m.media-amazon.com/images/I/41B1WzH1GzL._SY445_SX342_.jpg"
  }
];
function renderAcervo() {
  // Pega os dados do banco local (adapte esta linha conforme o seu código)
  let db = JSON.parse(localStorage.getItem('db_biblioteca')) || { livros: livrosIniciais };
  let livros = db.livros;

  // Início do HTML da página
  let html = `
    <h2>Acervo da Biblioteca</h2>
    <div style="margin-bottom: 20px;">
        <input type="text" placeholder="Buscar por título ou autor..." style="padding: 10px; width: 80%; max-width: 600px; border-radius: 4px; border: 1px solid #333; background: #222; color: white;">
        <button class="btn-primary" style="padding: 10px 20px;">Buscar</button>
    </div>
    
    <!-- Grid dos Cards -->
    <div style="display: flex; flex-wrap: wrap; gap: 20px;">
  `;

  // Laço para gerar cada livro
  livros.forEach(livro => {
    html += `
      <div class="card" style="width: 220px; background: #1e1e1e; padding: 15px; border-radius: 8px; border: 1px solid #333; display: flex; flex-direction: column;">
        
        <!-- IMAGEM DA CAPA -->
        <img src="${livro.capa}" alt="Capa de ${livro.titulo}" style="width: 100%; height: 320px; object-fit: cover; border-radius: 5px; margin-bottom: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
        
        <!-- INFORMAÇÕES DO LIVRO -->
        <h3 style="font-size: 16px; color: #fff; margin-bottom: 5px;">${livro.titulo}</h3>
        <p style="color: #bbb; font-size: 14px; margin-bottom: 5px;"><em>${livro.autor}</em></p>
        <p style="color: #888; font-size: 12px; margin-bottom: 15px; flex-grow: 1;">${livro.categoria}</p>
        
        <!-- BOTÃO -->
        <button class="btn-primary" style="width: 100%; padding: 10px; border-radius: 4px; font-weight: bold; cursor: pointer;">Detalhes</button>
      </div>
    `;
  });

  // Fechamento das divs
  html += `</div>`;

  // Joga o HTML na tela
  app.innerHTML = html;
}