const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const data = []

router.get('/', (req,res,next) => {
    res.render('index', { products: data, title: "read notes left by others" })
})



module.exports = router