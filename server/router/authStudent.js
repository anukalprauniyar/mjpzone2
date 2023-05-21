const express = require('express');
const router = express.Router();

require('../backend/db/conn');
const Student = require('../models/studentSchema');

router.get('/',(req,res) => {
    console.log()
})

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

module.exports = router ;