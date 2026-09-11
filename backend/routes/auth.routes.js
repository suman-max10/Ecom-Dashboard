import express from "express"
const router = express.Router();

router.get("/signup",(req,res)=>{
    res.send("Sign Up Routes Called");
})

router.get("/login",(req,res)=>{
    res.send("Login Routes Called");
})

router.get("/logout",(req,res)=>{

    res.send("Logout Routes Called");
})
export default router;