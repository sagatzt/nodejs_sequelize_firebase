//MODELS
//https://sequelize.org/v4/manual/tutorial/models-definition.html

//VALIDATIONS
//https://sequelize.org/v4/manual/tutorial/models-definition.html

//RELATIONS
//https://sequelize.org/master/manual/assocs.html

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
      firstname: {type: Sequelize.STRING},
      lastname: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING},
      password:{type: Sequelize.STRING}
    }, {
      indexes: [
        // Create a unique index on email
        {
          unique: true,
          fields: ['email']
        }]
    })
    
    return user
}