const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const data = []

router.post('/leave', (req, res, next) => {
    res.render('leave', {notes: data, title: "Leave a note"})

    data.push({
        id: Math.random(),
        note: req.body.note
    })
    fs.writeFile(path.join(__dirname, '..','notes.json'), JSON.stringify(data, null, 2), () => {
        res.status(302).redirect('/')
    })
})

module.exports = router
