const express = require('express');
const app = express();
const users = [
    {
        "name": "Sumka",
        "id": 1,
        "price": 100,
        "count": 5
    },
    {
        "name": "salvar",
        "id": 2,
        "price": 500,
        "count": 2
    },
    {
        "name": "qolbaq",
        "id": 3,
        "price": 1000,
        "count": 50
    },
    {
        "name": "ayaqqabi",
        "id": 4,
        "price": 600,
        "count": 52
    },
    {
        "name": "uzuk",
        "id": 5,
        "price": 100,
        "count": 1
    },
    {
        "name": "kofta",
        "id": 6,
        "price": 100,
        "count": 5
    },
    {
        "name": "ayaqqabi",
        "id": 7,
        "price": 1200,
        "count": 70
    },
    {
        "name": "Sumka",
        "id": 8,
        "price": 400,
        "count": 4
    },
    {
        "name": "salvar",
        "id": 9,
        "price": 100,
        "count": 3
    },
    {
        "name": "papaq",
        "id": 10,
        "price": 120,
        "count": 0
    },
   
]
app.get('/', (req,res)=>{
    res.send("home page")
})

app.get('/users', (req,res)=>{
   
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedUser = users.find(user=>user.id == userID)
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('istifadeci yoxdur')
    }
})

app.listen(4000, ()=>{
    console.log("server quruldu");
})
  
