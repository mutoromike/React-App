import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList'
import { Link } from 'react-router-dom'
function CoursesPage() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses)) //setState only updates the called properties
    }, []) // Passing the empty array tells react that it should only run the effect once

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">
                Add Course
            </Link>
            <CourseList courses={courses} />
        </>
    );
}

export default CoursesPage;