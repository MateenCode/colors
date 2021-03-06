const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const splashy = require("splashy")();
const imgs = require("./data/input.json");

imgs.forEach(img => {
  (async () => {
    let colors = await splashy.fromUrl(img.toString());

    let color1 = colors[0];
    let color2 = colors[1];
    let color3 = colors[2];

    let csvWriter = await createCsvWriter({
      path: "./data/output.csv",
      append: true,
      header: [
        { id: "url", title: "URl" },
        { id: "color1", title: "Color" },
        { id: "color2", title: "Color" },
        { id: "color3", title: "Color" }
      ]
    });

    let records = [
      {
        url: img,
        color1: color1,
        color2: color2,
        color3: color3
      }
    ];

    csvWriter.writeRecords(records).then(() => {
      console.log("...Done");
    });
  })();
});
