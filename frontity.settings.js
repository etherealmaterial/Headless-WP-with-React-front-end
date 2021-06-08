const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "my-first-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.agriwebb.com",
          "postTypes": [
            {
              type: "customer-story",
              endpoint: "customer-story",
              archive: "/customer-story"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
