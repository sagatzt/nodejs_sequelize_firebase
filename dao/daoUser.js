const db = require('../models/')

let daoUser={}

daoUser.create=(user)=>{
    return new Promise((resolved)=>{
        db.users.create(user).then(data=>resolved(data))
    })
}

daoUser.findByEmail=(email)=>{

}

daoUser.findAll=()=>{
    return new Promise((resolved)=>{
        db.users.findAll().then(data=>resolved(data))
    })
}

daoUser.findByEmail=(email)=>{
    return new Promise((resolved)=>{
        db.users.findAll({
            where: {
              email: email
            }
          }).then(data=>resolved(data))
    })
}


//https://sequelize.org/master/manual/eager-loading.html
daoUser.findAllArticles=()=>{
    return new Promise((resolved)=>{
        db.articles.findAll({
            include:db.users
        }).then(data=>resolved(data))
    })
}

module.exports=daoUser