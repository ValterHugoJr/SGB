module.exports = (app) => {
    const { emprestarController } = app.controllers;
    // INDEX
    app.get('/livro/emprestar/:id',emprestarController.index_emprestar);
    // EMPRESTRAR
    app.post('/livro/emprestar/livro',emprestarController.emprestar_livro);
    // HISTÓRICO
    app.get('/livro/historico',emprestarController.list_emprestimos);
    // RENOVAR EMPRÉSTIMO
    app.get('/livro/emprestimo/renovar/:id',emprestarController.renovar_emprestimo);
    // RECEBER EMPRÉSTIMO
    app.get('/livro/emprestimo/receber/:id',emprestarController.receber_emprestimo);
  };