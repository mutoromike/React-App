import React, { useState } from 'react';
import CourseForm from './CourseForm'
// import { Prompt } from "react-router-dom";
import * as CourseApi from '../api/courseApi';
import { toast } from 'react-toastify';

const ManageCoursePage = props => {
    const [course, setCourse] = useState({ //setCourse is the setter, setting Course
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    })

    // Using Destructuring
    function handleChange({ target }) {
        setCourse({
            ...course,
            [target.name]: target.value
        })
    }

    // Without destructuring, same fncn as above
    // function handleChange(event) {
    //     const updatedCourse = { ...course, [event.target.name]: event.target.value } // Create a copy of the course object
    //     setCourse(updatedCourse)
    // }

    function handleSubmit(event) {
        event.preventDefault()
        CourseApi.saveCourse(course).then(() => {
            props.history.push("/courses")
            toast.success("Course created successfully")
        })
    }
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm
                course={course}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {/* <Prompt when={true} message="Are you sure you wanna leave?" /> */}
            {props.match.params.slug}
        </>
    )
}

export default ManageCoursePage;