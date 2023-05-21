import React from "react";
import "./studentComponentCss/StudentAttendance.css";
import {ResponsiveContainer, LineChart, Line, XAxis ,YAxis ,Legend, Tooltip} from 'recharts';

const data =[
    
    { 
        name:'Computer Organisation',
        PresentDays :  28,
        TotalDays : 45,

    },
    { 
        name:'DataBase Management System',
        PresentDays :  22,
        TotalDays : 35,

    },
    { 
        name:'Principles of Management',
        PresentDays :  21,
        TotalDays : 30,

    },
    { 
        name:'DataStructures And Algorithm',
        PresentDays :  29,
        TotalDays : 40,

    },
    { 
        name:'Programming in C',
        PresentDays :  32,
        TotalDays : 40,

    },
]

function StudentAttendance (){
return(
    <>
    <h1 className="heading" >Attendence</h1>
    <table className="table" >
        <tr>
            <th>Subject Name</th>
            <th>Presented Days</th>
            <th>Total Number of Days</th>
        </tr>
        <tr>
            <td>Programming in C</td>
            <td>32</td>
            <td>40</td>
        </tr>
        <tr>
            <td>Computer Organisation</td>
            <td>28</td>
            <td>45</td>
        </tr>
        <tr>
            <td>DataBase Management System</td>
            <td>22</td>
            <td>35</td>
        </tr>
        <tr>
            <td>Principles of Management </td>
            <td>21</td>
            <td>30</td>
        </tr>
        <tr>
            <td>DataStructures And Algorithm</td>
            <td>29</td>
            <td>40</td>
        </tr>
    </table>
    <ResponsiveContainer width='100%' aspect={5} >
        <LineChart data={data} width={500} height={300} margin={{top: 30 , right: 20, left:10}}   >
         <XAxis dataKey='name' interval={'preserveStartEnd'} />
         <YAxis dataKey='TotalDays' />
         <Line dataKey='PresentDays' stroke="green" />
         <Line dataKey='TotalDays' stroke="Blue" />
         <Legend />
         <Tooltip />
        </LineChart>
    </ResponsiveContainer>
    </>
)

}

export default StudentAttendance;