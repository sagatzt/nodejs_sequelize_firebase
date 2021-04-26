

module.exports = (sequelize, Sequelize) => {
    const article = sequelize.define("articles", {
      title: {type: Sequelize.STRING},
      text: {type: Sequelize.STRING},
      states: {
        type:   Sequelize.ENUM,
        values: ['unpublished', 'published', 'deleted']
      }
    })
    return article
}