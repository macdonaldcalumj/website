module.exports = {
  siteName: "Gridsome",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ],
    },
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/technologies/**/*.md",
        typeName: "Technology",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/projects/**/*.md",
        typeName: "Project",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
        refs: {
          technologies: "Technology",
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/employment/**/*.md",
        typeName: "Employment",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
        refs: {
          projects: "Project",
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/education/**/*.md",
        typeName: "Education",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
        refs: {
          projects: "Project",
        },
      },
    },
    {
      use: "gridsome-plugin-netlify-cms",
      options: {
        publicPath: "/admin",
        modulePath: "src/admin/index.js",
      },
    },
  ],
  templates: {
    Education: "/education/:title",
    Employment: "/employment/:title",
    HomePage: "/",
    Project: "/projects/:title",
  },
};