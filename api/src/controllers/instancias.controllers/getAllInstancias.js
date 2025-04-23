const pool = require('../../database/connection.js');

module.exports = async(req,res)=>{
    //TRAE TODAS LAS INSTANCIAS
    try{
        const [result] = await pool.query(`SELECT id_instancia, descripcion 
                FROM instancias`);

        console.log('que trae result getInstancias: ', result);

        res.status(200).json(result);
        
    }catch(error){
        res.status(400).send(error.message);
    }

};