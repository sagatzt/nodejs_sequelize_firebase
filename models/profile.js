
module.exports = (sequelize, Sequelize) => {
    const profile = sequelize.define("profile", {
      address: {type: Sequelize.STRING},
      city: {type: Sequelize.STRING},
      birthday: {type: Sequelize.DATE}
    })
    return profile
}