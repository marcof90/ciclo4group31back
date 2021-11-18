const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const incomeRoutes = require('./routes/income.routes')
const outcomeRoutes = require('./routes/outcome.routes')
const authRoutes = require('./routes/auth.routes')
const app = express()
require('dotenv').config()

//configuraciones
const port = 3000
app.use(morgan('dev'))
mongoose.connect(process.env.DB_URL)
.then(db => console.log('Connected'))
.catch(err => console.log(err))
app.use(express.urlencoded({extended: false}))

//rutas
app.use('/incomes', incomeRoutes)
app.use('/outcomes', outcomeRoutes)
app.use('/auth', authRoutes)

app.get('/saludo', (req, res)=>{
    res.send('Hola tripulantes!!!!')
})

app.get('/tripulantes', (req, res)=>{
    res.send('Estamos en el grupo 31')
})

//inicio del servidor
app.listen(port, ()=>{
    console.log('Server iniciado')
})