import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Table, Section } from 'react-bulma-components'


function CourseList() {
    const [ courses, setCourses ] = useState([])

useEffect(() => {
    axios.get('http://localhost:8000/api/courses/course-list/')
    .then(res => {
        console.log(res)
        setCourses(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

    return (
        <div className="container">
            <Section>
                <Table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Team</th>
                        <th>Team</th>
                        <th>Team</th>
                    </tr>
                </thead>

            </Table>
            </Section>
            
            <ul>
                { courses.map(course => <li key={course.id}>{ course.title } {course.subject}</li>) }
            </ul>
        </div>
    )
}

export default CourseList