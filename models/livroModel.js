module.exports = () => {
    let db = require('../config/connect_db')();
    let Schema = require('mongoose').Schema;    
    let livros = Schema({
        titulo: {
            type: String,
            required: true
        },
        autor: {
            type: String,
            required: true
        },
        edicao: {
            type: String,
            required: true
        },
        isbn: {
            type: String,
            required: true,
            index: {unique: true}
        },
        quantidade: {
            type: Number,
            required: true
        }
    });
    return db.model('livro', livros);
};