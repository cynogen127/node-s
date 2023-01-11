const express = require("express");
const request = require("request");
const app = express();

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

app.get("/bsc", (req, res) => {
  request({
    url: 'https://bscscan.com/',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(`<html>
                  <head>
                    <title>BSCScan</title>
                  </head>
                  <body>
                    ${body}
                  </body>
                </html>`);
    } else {
      res.send("Error retrieving data from BSCScan");
    }
  });
});

