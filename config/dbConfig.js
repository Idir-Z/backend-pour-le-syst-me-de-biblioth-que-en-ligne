let repertoireActuel = __dirname
let repertoireBD = repertoireActuel + 'db'
module.exports = {
HOST: "0.0.0.0",
USER: "",
PASSWORD: "",
DB: "Blogs",
dialect: "sqlite",
pool: {
max: 5,
min: 0,
acquire: 30000,
idle: 10000
},
Storage : repertoireBD + '/mabase.sqlite'
};