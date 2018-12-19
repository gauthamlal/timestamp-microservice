let port = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const app = express();

app.get("/api/timestamp/:date_string?", (req, res) => {
  let date_string = req.params.date_string;
  let isDate = (new Date(date_string)).getTime() > 0;
  let date = new Date(date_string);
  if (isDate) {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  } else {
    let newIsDate = new Date(Number(date_string)).getTime() > 0;
    let newDate = new Date(Number(date_string));
    if (newIsDate) {
      res.json({
        unix: newDate.getTime(),
        utc: newDate.toUTCString()
      });
    } else {
      res.json({
        error: "Invalid Date"
      });
    }
  }
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
