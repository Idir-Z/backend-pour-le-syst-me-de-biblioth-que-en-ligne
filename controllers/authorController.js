const { authorModel } = require('../models');
const author = require('../models/authorModel');
const book = require('../models/bookModel');
const { db } = require('../config/dbConnection')
exports.create = async (req, res) => {
    const { name, birthDate, nationality } = req.body
    let result;
    try {
        const newAuthor = await author.create({ name: name, birthDate: birthDate, nationality: nationality })
        result = { success: true, message: 'author created with id = ' + newAuthor.id }
    } catch (error) {
        console.log(error)
        result = { success: false, message: 'failed to create author ' }
    }
    res.send(result)
}
// #Crée et sauvegarde un nouveau Author
exports.findAll = async (req, res) => {
    let result;
    try {
        let authors = await author.findAll()
    result = {success: true, message: authors}
    } catch (error) {
        console.log(error)
        result = {success: true, message: 'failed to retrieve authors'}
    }
    res.send(result)
    
};
// #Retrouve tous les Author de la bdd
exports.findOne = async (req, res) => {
    let result;
    const id = req.params.id
    try {
        let authors = await author.findByPk(id)
    result = {success: true, message: authors}
    } catch (error) {
        console.log(error)
        result = {success: true, message: 'failed to retrieve author'}
    }
    res.send(result)
    
    
};
// #Rechercher un seul Author avec un ‘id’
exports.update = async (req, res) => {
    const ID = req.params.id
    const {nom,date_naissance,nationalite} = req.body
    let result;
    try {
        await author.update({
            name: nom,
            birthDate: date_naissance,
            nationality : nationalite
        }, {
            where: {id: ID}
        })
        result = {success:true,message:'author updated succesfully'}
        
    } catch (error) {
        console.log(error)
        result = {success : false,message : 'error updating author'}
    }
    res.send(result)
};
// #Megtre à jour un Author dont l’id est dans la requête
exports.delete = async (req, res) => {
    let result;
    const ID = req.params.id
    try {
        const auth = await author.findByPk(ID)
        if(!auth)
        await authorModel.destroy({
            where: {
              id: ID,
            },
        })
        result = {success : true,message:'author deleted succefully'}
        
    } catch (error) {
        console.log(error)
        result = {success : false,message:'error while deleting author'}
    }
    res.send(result)
};
// #Supprimer un Author dont le id est spécifié dans la requête
exports.deleteAll = async (req, res) => {
    let result
    try {
        await authorModel.destroy({
            where: {
              
            },
        })
        result = {success : true, message : 'all authors deleted succefully'}
    } catch (error) {
        console.log(error);
        result=result = {success : false, message : 'failed to delete authors'}
    }
    res.send(result)
};
// #Supprimer tous les Author de la base
exports.findAllPublished = (req, res) => {
    let result
    id = req.params.id
    sql = 'SELECT * FROM Books WHERE id IN (SELECT BookId FROM AuthorWBooks WHERE AuthorId IN (SELECT id FROM Authors WHERE id = ?))'
    const params = [id];
    try {
        db.all(sql, params, (err, rows) => {
            if (err) {
                console.error('Error executing query:', err.message);
                return;
            }
            console.log('Rows:', rows);
        });
        
        db.close((err) => {
            if (err) {
                console.error('Error closing the database:', err.message);
            } else {
                console.log('Database connection closed.');
            }
        });
        
    } catch (error) {
        console.log('error getting corresponding books')
        result = {success:false,message : 'error getting corresponding books'}
    }
};
// #Retrouver tous les Books qui ont un rapport avec l’Author dans req