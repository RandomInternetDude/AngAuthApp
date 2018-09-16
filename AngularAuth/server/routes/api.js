const express = require('express');
const router = express.Router();
const User = require ('../models/user');
const mongoose = require ('mongoose');
const db = "mongodb://joeyv:Downwood2@ds133202.mlab.com:33202/eventsprojectdb";

mongoose.connect(db, err => {
    if(err) {
        console.log('error occured' + err )
    } else {
        console.log('connected to mongodb successfully :]')
    }
});

router.get('/', (req, res) => {
    res.send('from api route');
});

router.post('/register' , (req, res) => {
    let userData = req.body
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
        console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })

});

router.post('/login', (req, res) =>{
    let userData = req.body
    
    User.findOne({email: userData.email}, (error , user) => {
        if (error){
            console.log(error)
        } else {
            if (!user){
                res.status(401).send('invalid email')
            } else 
                if (user.password !== userData.password) {
                    res.status(401).send('Invaild password')
                } else {
                res.status(200).send(user)
            }      
        }
    })
});


router.get('/events', (req, res)=> {
    let events = [
        {
            "_id": "1",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "2",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "3",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "4",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "5",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "6",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        }
    ]
    res.json(events);
});

router.get('/special', (req, res)=> {
    let events = [
        {
            "_id": "1",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "2",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "3",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "4",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "5",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        },
        {
            "_id": "6",
            "name": "Downtown Skate Sesh",
            "Description": "lorem Ipsum",
            "date": 10/31/2018,
        }
    ]
    res.json(events);
});

module.exports = router
