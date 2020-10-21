// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection, store }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    let homePage = require('./content/index.json')
    
    // The JSON file only stores the IDs, actual references need created here.
    let allEducation = []
    let allEmployment = []

    if (homePage.education) {
      for (education of homePage.education) {
        allEducation.push(store.createReference('Education', education))
      }

      homePage.education = allEducation
    }

    if (homePage.employment) {
      for (employment of homePage.employment) {
        allEmployment.push(store.createReference('Employment', employment))
      }

      homePage.employment = allEmployment
    }

    const collection = addCollection({
      typeName: 'HomePage'
    })

    collection.addNode(homePage);
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
