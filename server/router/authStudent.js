const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

require('../backend/db/conn');
const Student = require('../models/studentSchema');

router.get('/',(req,res) => {
    res.send('Hello from router auth student')
})


//register 
router.post('/register',async (req,res)=>{
    const {
    studentfname,
    studentlname,
    fatherlname,
    fatherfname,
    motherfname,
    motherlname,
    gender,
    dob,
    phone,
    fatherphone,
    email,
    address1,
    address2,
    city,
    state,
    country,
    hsrollno,
    hsserialno,
    hsboard,
    hsobtainmarks,
    hsmaxmarks,
    imrollno,
    imserialno,
    imboard,
    imobtainmarks,
    immaxmarks,
    gdrollno,
    gdenrollno,
    gdboard,
    gdobtainmarks,
    gdmaxmarks}  = req.body;

    if(!studentfname ||
        !studentlname ||
        !fatherlname ||
        !fatherfname ||
        !motherfname ||
        !motherlname ||
        !gender ||
        !dob ||
        !phone ||
        !fatherphone ||
        !email ||
        !address1 ||
        !address2 ||
        !city ||
        !state ||
        !country ||
        !hsrollno ||
        !hsserialno ||
        !hsboard ||
        !hsobtainmarks ||
        !hsmaxmarks ||
        !imrollno ||
        !imserialno ||
        !imboard ||
        !imobtainmarks ||
        !immaxmarks ||
        !gdrollno ||
        !gdenrollno ||
        !gdboard ||
        !gdobtainmarks ||
        !gdmaxmarks) {
            return res.status(422).json({error : "Fill the required fields"});
        }

        try {
            const studentExist = await Student.findOne({hsrollno : hsrollno});

            if(studentExist){
                return res.status(422).json({error: "Student already exist"});
            }
            

            const student = new Student({
                studentfname,
                studentlname,
                fatherlname,
                fatherfname,
                motherfname,
                motherlname,
                gender,
                dob,
                phone,
                fatherphone,
                email,
                address1,
                address2,
                city,
                state,
                country,
                hsrollno,
                hsserialno,
                hsboard,
                hsobtainmarks,
                hsmaxmarks,
                imrollno,
                imserialno,
                imboard,
                imobtainmarks,
                immaxmarks,
                gdrollno,
                gdenrollno,
                gdboard,
                gdobtainmarks,
                gdmaxmarks});

                await student.save();

                res.status(201).json({message:"Student Registration Successfull"});

        }  catch (error) {
            console.log(error);
        }
});



//student login route
router.post('/student-login',async (req,res)=> {
    try {
        let token;
        const {email , dob} = req.body;

        if(!email || !dob) {
            return res.status(400).json({error:"Please fill the data"});
        }

        const studentLogin = await Student.findOne({email : email , dob : dob});

        if(!studentLogin) {
            res.status(400).json({error : " data error"})
        }

        //JWT 
        token = await studentLogin.generateAuthToken();
        // console.log(token);
        res.cookie("jwtoken",token , {
            expires : new Date(Date.now() + 25892000000),
            httpOnly : true
        });

        res.json({message : "Student Login Successfull"});
        
    } catch (err) {
        console.log(err);
    }
})

module.exports = router ;