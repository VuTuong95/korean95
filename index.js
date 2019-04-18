const express = require('express')
const app = express()
const port = 3060

app.get('/', (req, res) => res.send('Hello World! - I Am Tuong'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))