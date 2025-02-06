  // Função para filtrar a lista com base na pesquisa
  document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = document.getElementById('searchInput').value.toUpperCase(); // Valor da pesquisa
    let ul = document.getElementById('itemList'); // A lista
    let li = ul.getElementsByTagName('li'); // Todos os itens da lista

    // Loop para percorrer cada item da lista
    for (let i = 0; i < li.length; i++) {
      let item = li[i];
      if (item.textContent.toUpperCase().indexOf(filter) > -1) {
        item.style.display = ""; // Exibe o item
      } else {
        item.style.display = "none"; // Esconde o item
      }
    }
  });
