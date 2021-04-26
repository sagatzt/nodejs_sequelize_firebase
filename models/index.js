//https://sequelize.org/v4/manual/installation/usage.html

const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://sequelize:1234@localhost:3306/sequelize')

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.users=require("./user")(sequelize,Sequelize)
db.articles=require("./article")(sequelize,Sequelize)
db.comments=require("./comment")(sequelize,Sequelize)
db.profile=require("./profile")(sequelize,Sequelize)

//associations
//db.users.hasMany(db.articles, {as : 'articles', foreignKey : 'userId'});
db.articles.belongsTo(db.users)
db.users.hasMany(db.articles)
db.comments.belongsTo(db.articles)
db.comments.belongsTo(db.users)

db.users.hasOne(db.profile)

//db.sequelize.sync()
module.exports=db