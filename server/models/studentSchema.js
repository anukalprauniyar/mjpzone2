const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
        studentfname: {
            type : String,
            required:true
        },
        studentlname: {
            type : String,
            required:true
        },
        fatherfname: {
            type : String,
            required:true
        },
        fatherlname: {
            type : String,
            required:true
        },
        motherfname: {
            type : String,
            required:true
        },
        motherlname: {
            type : String,
            required:true
        },
        gender: {
            type : String,
            required:true
        },
        dob: {
            type : String,
            required:true
        },
        phone: {
            type : Number,
            required:true
        },
        fatherphone: {
            type : Number,
            required:true
        },
        email: {
            type : String,
            required:true
        },
        address1: {
            type : String,
            required:true
        },
        address2: {
            type : String,
            required:true
        },
        city: {
            type : String,
            required:true
        },
        state: {
            type : String,
            required:true
        },
        country: {
            type : String,
            required:true
        },
        hsrollno: {
            type : Number,
            required:true
        },
        hsserialno: {
            type : Number,
            required:true
        },
        hsboard: {
            type : String,
            required:true
        },
        hsobtainmarks: {
            type : Number,
            required:true
        },
        hsmaxmarks: {
            type : Number,
            required:true
        },
        imrollno: {
            type : Number,
            required:true
        },
        imserialno: {
            type : Number,
            required:true
        },
        imboard: {
            type : String,
            required:true
        },
        imobtainmarks: {
            type : Number,
            required:true
        },
        immaxmarks: {
            type : Number,
            required:true
        },
        gdrollno: {
            type : Number,
            required:true
        },
        gdenrollno: {
            type : Number,
            required:true
        },
        gdboard: {
            type : String,
            required:true
        },
        gdobtainmarks: {
            type : Number,
            required:true
        },
        gdmaxmarks: {
            type : Number,
            required:true
        }
})


const Student = mongoose.model('STUDENT',studentSchema);

module.exports = Student;