import { users } from "./data.js";
import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 3000;
const myapp = express();

myapp.use(express.json());
myapp.use(cors())

myapp.post("/register", (req, res) => {
    let {name, email, password} = req.body;
    let user = users.find(u => u.email === email);
    if(user) {
        let resObj = {
            success : false,
            message : "Email Already exists"
        }
        res.status(309).send(resObj)
    }else {
        let userObj = {
            id : new Date(), ...req.body
        }
        let resObj = {
            success : true,
            message : "Registration Done.",
            data : userObj
        }
        users.push(userObj)
        res.status(201).send(resObj)
    }
})

myapp.post("/login", (req, res) => {
    let {email, password} = req.body;
    let user = users.find(u => u.email === email && u.password === password);
    if(user) {
        let resObj = {
            success : true,
            message : "login success"
        }
        res.status(200).send(resObj)
    }else {
        let resObj = {
            success : false,
            message : "Data not found"
        }
        res.status(404).send(resObj)
    }
})

myapp.get("/users", (req, res) => {
    res.status(200).send(users);
})

myapp.listen(PORT, () => {
    console.log("Server has been started...");
})