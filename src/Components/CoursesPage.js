import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList'

function CoursesPage() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses)) //setState only updates the called properties
    }, []) // Passing the empty array tells react that it should only run the effect once

    return (
        <h2>Courses</h2>
        <CourseList courses={courses} />
    );



}

export default CoursesPage;