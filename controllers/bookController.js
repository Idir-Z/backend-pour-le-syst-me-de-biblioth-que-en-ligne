const { authorModel } = require('../models');
const author = require('../models/authorModel');
const book = require('../models/bookModel');
const { db } = require('../config/dbConnection')
exports.create = async (req, res) => {
    const { title, release_date, ISBN } = req.body
    let result;
    try{
        const newBook = await book.create({ title: title, releaseDate: release_date, ISBN: ISBN })
        result = { success: true, message: 'book created with id = ' + newBook.id }
    }catch (error){
        console.log(error)
        result = { success: false, message: 'failed to create book ' }
    }
    res.send(result)
}
// #Crée et sauvegarde un nouveau Author
exports.findAll = async (req, res) => {
    let result;
    try {
        let books = await book.findAll()
    result = {success: true, message: books}
    } catch (error) {
        console.log(error)
        result = {success: true, message: 'failed to retrieve books'}
    }
    res.send(result)
};
// #Retrouve tous les Author de la bdd
exports.findOne = async (req, res) => {
    let result;
    const id = req.params.id
    try {
        let books = await book.findByPk(id)
    result = {success: true, message: books}
    } catch (error) {
        console.log(error)
        result = {success: true, message: 'failed to retrieve book'}
    }
    res.send(result)
    
    
};
// #Rechercher un seul Author avec un ‘id’
exports.update = async (req, res) => {
    const ID = req.params.id
    const {title,release_date,ISBN} = req.body
    let result;
    try {
        await book.update({
            title: title,
            releaseDate: release_date,
            ISBN : ISBN
        }, {
            where: {id: ID}
        })
        result = {success:true,message:'book updated succesfully'}
        
    } catch (error) {
        console.log(error)
        result = {success : false,message : 'error updating book'}
    }
    res.send(result)
};
// #Megtre à jour un Author dont l’id est dans la requête
exports.delete = async (req, resp) => {
    let result;
    const ID = req.params.id
    try {
        const res = await book.findByPk(ID)
        if(!res)
        await book.destroy({
            where: {
              id: ID,
            },
        })
        result = {success : true,message:'book deleted succefully'}
        
    } catch (error) {
        console.log(error)
        result = {success : false,message:'error while deleting book'}
    }
    resp.send(result)
};
// #Supprimer un Author dont le id est spécifié dans la requête
exports.deleteAll = async (req, res) => {
    let result
    try {
        await book.deleteAll()
        result = {success : true, message : 'all books deleted succefully'}
    } catch (error) {
        console.log(error);
        result=result = {success : false, message : 'failed to delete books'}
    }
    res.send(result)
};
// #Supprimer tous les Author de la base

// #Retrouver tous les Books qui ont un rapport avec l’Author dans req