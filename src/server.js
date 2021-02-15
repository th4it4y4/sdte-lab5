const express = require('express')
const app = express()

app.get('/student_id', (req, res) => {
    res.send('61070104')
})

module.exports = app
