// src/service/student.js

import axios from 'axios';


export const addStudent = async (data) => {
    let response = await axios.post('https://blogify-adnl.onrender.com/addstudent', data)
    return response;
}


export const getAllStudent = async () => {
    let response = await axios.get('https://blogify-adnl.onrender.com/allstudent')
    return response;
}

export const getSingleStudentDetails = async (id) => {
    let response = await axios.get(`https://blogify-adnl.onrender.com/getstudentbyid/${id}`)
    return response;
}

export const editStudent = async (id, data) => {
    let response = await axios.patch(`https://blogify-adnl.onrender.com/editstudent/${id}`, data)
    return response;
}

export const getStudentDetail = async (id, data) => {
    let response = await axios.get(`https://blogify-adnl.onrender.com/detailstudent/${id}`, data)
    return response;
}

export const deleteSingleStudentDetails = async (id) => {
    let response = await axios.delete(`https://blogify-adnl.onrender.com/deletestudent/${id}`)
    return response;
}