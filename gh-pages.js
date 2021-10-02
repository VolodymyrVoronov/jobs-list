var ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/VolodymyrVoronov/jobs-list",
    user: {
      name: "Volodymyr",
      email: "vvoronov@tutanota.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
