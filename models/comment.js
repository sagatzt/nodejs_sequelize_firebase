module.exports = (sequelize, Sequelize) => {
    const comment = sequelize.define("comments", {
      message: {type: Sequelize.STRING},
    })
    return comment
}