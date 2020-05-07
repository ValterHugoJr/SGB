module.exports = (app) => {
    const { pesquisarController } = app.controllers;
    // INDEX
    app.get('/pesquisar',pesquisarController.index_pesquisa);
    app.get('/pesquisar/index',pesquisarController.index_pesquisa);
    // PESQUISA
    app.post('/pesquisar/livro',pesquisarController.pesquisar_livro);
  };