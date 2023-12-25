const {Sequelize}=require('sequelize');
const CreateUser=require('./models/users');
const PostFavorite=require('./models/favorite')


require('dotenv').config();

const{PGUSER, PGPASSWORD,PGHOST, PGPORT,PGDATABASE}=process.env;


const sequelize = new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
{logging:false, native: false}
);

CreateUser(sequelize);
PostFavorite(sequelize)
const {User, Favorite} = sequelize.models;
//Aqui voy a declarar la relacion:
Favorite.belongsToMany(User, {through: 'user_fav'});
User.belongsToMany(Favorite, {through: 'user_fav'});





module.exports = {
    sequelize, 
    ...sequelize.models
}