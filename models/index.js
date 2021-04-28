//https://sequelize.org/v4/manual/installation/usage.html

const Sequelize = require('sequelize')
const db={
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    name:process.env.DB_NAME,
    user:process.env.DB_USER,
    pass:process.env.DB_PASS,
    dial:process.env.DB_DIAL
}
const sequelize = new Sequelize(`mysql://${db.user}:${db.pass}@${db.host}:${db.port}/${db.name}`)


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