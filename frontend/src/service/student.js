// src/service/student.js

import axios from 'axios';


export const addStudent = async (data) => {
    let response = await axios.post('http://localhost:3000/addstudent', data)
    return response;
}


export const getAllStudent = async () => {
    let response = await axios.get('http://localhost:3000/allstudent')
    return response;
}

export const getSingleStudentDetails = async (id) => {
    let response = await axios.get(`http://localhost:3000/getstudentbyid/${id}`)
    return response;
}

export const editStudent = async (id, data) => {
    let response = await axios.patch(`http://localhost:3000/editstudent/${id}`, data)
    return response;
}

export const getStudentDetail = async (id, data) => {
    let response = await axios.get(`http://localhost:3000/detailstudent/${id}`, data)
    return response;
}

export const deleteSingleStudentDetails = async (id) => {
    let response = await axios.delete(`http://localhost:3000/deletestudent/${id}`)
    return response;
}