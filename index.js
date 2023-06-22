var express = require('express')
var app = express()

app.use((req, res, next) => {
 
    if(!req.get('Authorization')){
        var err = new Error('Not Authenticated!')
       
        res.status(401).set('WWW-Authenticate', 'Basic')
        next(err)
    }
    else{
     var credentials = Buffer.from(req.get('Authorization').split(' ')[1], 'base64')
        .toString()
        .split(':')
        var username = credentials[0]
        var password = credentials[1]
        if(!(username === 'admin' && password === 'admin123')){
            var err = new Error('Not Authenticated!')
            
            res.status(401).set('WWW-loginauthentication', 'Basic')
            next(err)
        } 
        res.status(200)
        
        next()
    }
})


app.get('/', (req, res) => {
    res.send('hi ajith welcome to authentication')
})

app.listen((8001), () => {
    console.log("Server start");
})
