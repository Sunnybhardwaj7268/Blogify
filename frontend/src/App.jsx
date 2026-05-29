import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './web/pages/HomePage'
import BlogDetailesPage from './web/pages/BlogDetailesPage'
import Dashboard from './admin/pages/Dashboard'
import AddBlog from './admin/pages/AddBlog'
import AllBlog from './admin/pages/AllBlog'
import PageNotFound from './web/pages/PageNotFound'
import toast, { Toaster } from 'react-hot-toast';
import EditBlog from './admin/pages/EditBlog'
import BlogDetail from './admin/pages/BlogDetail'
import StudentDashboard from './StudentAdmin/pages/StudentDashboard'
import AddStudent from './StudentAdmin/pages/AddStudent'
import AllStudent from './StudentAdmin/pages/AllStudent'
import EditStudent from './StudentAdmin/pages/EditStudent'
import StudentDetail from './StudentAdmin/pages/StudentDetail'
import TeacherDashboard from './TeacherAdmin/pages/TeacherDashboard'
import AddTeacher from './TeacherAdmin/pages/AddTeacher'
import AllTeacher from './TeacherAdmin/pages/AllTeacher'
import EditTeacher from './TeacherAdmin/pages/EditTeacher'
import TeacherDetail from './TeacherAdmin/pages/TeacherDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog/:id' element={<BlogDetailesPage />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/add-blog' element={<AddBlog />} />
        <Route path='/admin/all-blogs' element={<AllBlog />} />
        <Route path='/admin/edit-blog/:id' element={<EditBlog />} />
        <Route path='/admin/detail-blog/:id' element={<BlogDetail />} />




        <Route path='/student-admin/dashboard' element={<StudentDashboard />} />
        <Route path='/student-admin/add-student' element={<AddStudent />} />
        <Route path='/student-admin/all-students' element={<AllStudent />} />
        <Route path='/student-admin/edit-student/:id' element={<EditStudent />} />
        <Route path='/student-admin/detail-student/:id' element={<StudentDetail />} />




        <Route path='/teacher-admin/dashboard' element={<TeacherDashboard />} />
        <Route path='/teacher-admin/add-teacher' element={<AddTeacher />} />
        <Route path='/teacher-admin/all-teachers' element={<AllTeacher />} />
        <Route path='/teacher-admin/edit-teacher/:id' element={<EditTeacher />} />
        <Route path='/teacher-admin/detail-teacher/:id' element={<TeacherDetail />} />


        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
