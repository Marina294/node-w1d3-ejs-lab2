//Imports
const express = require('express')
const path = require('path')
const mainRoutes = require('./routes/main-routes')
const leaveRoutes = require('./routes/leave-routes')
const readRoutes = require('./routes/read-routes')

//Setups
const app = express();
app.set('view engine', 'ejs')
app.set('views','views')

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// //Routes
app.use(mainRoutes)
app.use(leaveRoutes)
app.use(readRoutes)

//Server starts
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server has started on port ${PORT}....`))

// //catch-all-middleware ------ 404
app.use((req,res,next) => {
    res.status(404)
    res.sendFile(path.join(__dirname, 'public','404.html'))
})