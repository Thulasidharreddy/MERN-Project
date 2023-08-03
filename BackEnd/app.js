const express = require('express')
const app = express()

const mongoose = require('mongoose')

const user_model = require('./model/users')
// console.log(user_model);
const cors = require('cors')
const users = require('./model/users')


// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// Connect to database
const db_url = 'mongodb://localhost:27017/users'
mongoose.connect(db_url)
    .then(() => {
        console.log("Database Connection Established");
    })
    .catch(() => {
        console.log("Error connecting to Database");
    })

app.post('/login',(req,res)=>{
    console.log("got login data");
    users.findOne({email : req.body.email}).then((userData)=>{
        if(userData){
            if(userData.password == req.body.password){
                res.send({message:'login succeful',status:200,userData:userData});
            }else{
                res.send({message:'Invalid Password'});
            }
        }else{
            res.send({message:'User Not found'});
        }
    })
})
app.post('/signup', (req, res) => {
    console.log('Received data : ',req.body);
    user_model.findOne({ email: req.body.email_id})
        .then((userData) => {
            // console.log(userData);
            if (userData) {
                console.log(userData);
                res.send({ message: 'user already exits' })
            } else {
                // add data
                const user = new user_model(
                    {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email_id,
                        password: req.body.password
                    }
                )
                // console.log(user);
                user.save().then(()=>{
                    res.send({message:'user registred succesfully'})
                   }).catch(()=>{
                    res.send({message:"user registration failed try after sometime"})
                   })
            }
        })
})

app.listen(4001, () => {
    console.log('Server Started');
})

