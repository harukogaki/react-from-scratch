const express = require('express');
const app = express();

app.get('/test', (req, res, next) => {
    res.send({ data: "Hello"})
})

// Serve the files on port 3000.
app.listen(8080, function () {
  console.log('Example app listening on port 8080!\n');
});