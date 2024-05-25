const express = require('express')

const bodyParser = require('body-parser')

const app = express();

// middleware 
app.use(bodyParser.json())


//post
app.post('/post',(request,response)=>{

    const {number1,number2} = request.body
   

    var total = number1 + number2
    console.log(total)
    
    response.json({total})
})

app.listen(5000,()=>{
    console.log('server is running port 3000')
})