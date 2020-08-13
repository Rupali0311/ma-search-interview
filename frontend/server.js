const express = require('express')
const app = express()

const port = 3000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Test App</title>
      </head>
      <body>
        <div id="target"></div>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
  `)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
