import React from 'react';
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        // .then() is called to handle the promise
        getCourses().then(courses => {
            this.setState({ courses: courses }) //setState only updates the called properties
        })
    }
    render() {
        return (
            <div>
                <h2>Courses</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author ID</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map(course => {
                            return (
                                <tr key={course.id}>
                                    <td>{course.title}</td>
                                    <td>{course.authorId}</td>
                                    <td>{course.category}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }

}

export default CoursesPage;