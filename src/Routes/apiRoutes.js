const {Router}=require('express');
const {charUsers,charUserById}= require('../handlers/characterHandler');
const charRouter =Router();

//?El endpoint de la ruta es /api/

charRouter.get('/character', charUsers );

charRouter.get('/character/:id', charUserById);

module.exports=charRouter;