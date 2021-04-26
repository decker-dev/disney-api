import Sequelize from 'sequelize'
const characterModel =require('./models/character')
const sequelize = new Sequelize ('disney','root','password',{
    host: 'localhost',
    dialect: 'mysql'
})

const character =characterModel(sequelize,Sequelize)
sequelize.sync({forse:false})
.then(()=>{
    console.log("sync")
})
module.exports ={character}