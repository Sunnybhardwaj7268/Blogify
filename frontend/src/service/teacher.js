// src/service/teacher.js

import axios from 'axios';


export const addTeacher = async (data) => {
    let response = await axios.post('http://localhost:3000/addteacher', data)
    return response;
}


export const getAllTeacher = async () => {
    let response = await axios.get('http://localhost:3000/allteacher')
    return response;
}

export const getSingleTeacherDetails = async (id) => {
    let response = await axios.get(`http://localhost:3000/getteacherbyid/${id}`)
    return response;
}

export const editTeacher = async (id, data) => {
    let response = await axios.patch(`http://localhost:3000/editteacher/${id}`, data)
    return response;
}

export const getTeacherDetail = async (id, data) => {
    let response = await axios.get(`http://localhost:3000/detailteacher/${id}`, data)
    return response;
}

export const deleteSingleTeacherDetails = async (id) => {
    let response = await axios.delete(`http://localhost:3000/deleteteacher/${id}`)
    return response;
}