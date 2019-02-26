let express = require('express')
let bp = require('body-parser')

let server = express()

//middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

//routes
let goldenRoutes = require('./server-assets/routes/golden-route')
server.use('/api/goldens', goldenRoutes)
let pointerRoutes = require('./server-assets/routes/pointer-route')
server.use('/api/pointers', pointerRoutes)

//catchall
server.use('*', (req, res, next) => {
  res.status(404).send('No matching routes')
})

//start server
server.listen(3000, () => {
  console.log('Server is running on port 3000')
})