const express = require('express')

const app = express();



const data =(req, res) => {
    res.send('Hello World!');
}
app.get('/get', data )

app.listen(5000,()=>{
    console.log('server is running port 3000')
})