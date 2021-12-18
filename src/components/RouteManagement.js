import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Dashboard from "./Dashboard";
import PostList from './PostList'
import PostRate from './PostRate'
import AddPost from './AddPost'
import PostSchedule from './PostSchedule'

import React from 'react'



const RouteManagement = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Dashboard />}/>
                    <Route path="post/list" element={<PostList />}/>
                    <Route path="post/add" element={<AddPost />}/>
                    <Route path="post/schedule" element={<PostSchedule />}/>
                    <Route path="post/rate" element={<PostRate />}/>
                    
                       
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteManagement
