// src/service/teacher.js

import axios from 'axios';


export const addTeacher = async (data) => {
    let response = await axios.post('https://blogify-adnl.onrender.com/addteacher', data)
    return response;
}


export const getAllTeacher = async () => {
    let response = await axios.get('https://blogify-adnl.onrender.com/allteacher')
    return response;
}

export const getSingleTeacherDetails = async (id) => {
    let response = await axios.get(`https://blogify-adnl.onrender.com/getteacherbyid/${id}`)
    return response;
}

export const editTeacher = async (id, data) => {
    let response = await axios.patch(`https://blogify-adnl.onrender.com/editteacher/${id}`, data)
    return response;
}

export const getTeacherDetail = async (id, data) => {
    let response = await axios.get(`https://blogify-adnl.onrender.com/detailteacher/${id}`, data)
    return response;
}

export const deleteSingleTeacherDetails = async (id) => {
    let response = await axios.delete(`https://blogify-adnl.onrender.com/deleteteacher/${id}`)
    return response;
}