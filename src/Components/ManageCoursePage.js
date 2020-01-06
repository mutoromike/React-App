import React, { useState, useEffect } from 'react';
import CourseForm from './CourseForm'
// import { Prompt } from "react-router-dom";
import * as CourseApi from '../api/courseApi';
import { toast } from 'react-toastify';

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({})
    const [course, setCourse] = useState({ //setCourse is the setter, setting Course
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    })

    useEffect(() => {
        const slug = props.match.params.slug
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

    function formIsValid() {
        const _errors = {}
        if (!course.title) _errors.title = "Title is required"
        if (!course.authorId) _errors.authorId = "Author is required"
        if (!course.category) _errors.category = "Category is required"

        setErrors(_errors)
        return Object.keys(_errors).length === 0
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!formIsValid()) return
        CourseApi.saveCourse(course).then(() => {
            props.history.push("/courses")
            toast.success("Course created successfully")
        })
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm
                errors={errors}
                course={course}
                onChange={handleChange}
                onSubmit={handleSubmit}
                handleErrors={formIsValid}
            />
            {/* <Prompt when={true} message="Are you sure you wanna leave?" /> */}
            {props.match.params.slug}
        </>
    )
}

export default ManageCoursePage;