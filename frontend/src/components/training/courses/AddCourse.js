import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { Button, NavLink } from 'react-bulma-components'



function AddCourse(props) {

    const initialFormState = { number: '', title: '', subject: '', description: '' }
    const [course, setCourse] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
      
        setCourse({ course, [name]: value })
      }

/*     useEffect(() => {
        axios.post('http://localhost:8000/api/courses/course-create/')
            .then(res => {
                console.log(res)
                setCourse(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []) */



    return (
        <div>
            <form 
            onSubmit={(event) => {
                event.preventDefault()
                if (!course.title || !course.subject) return
            
                props.addCourse(course)
                setCourse(initialFormState)
              }}>
            <label>Course Number</label>
            <input
                type="text"
                name="number"
                value={course.number}
                onChange={handleInputChange}
            />
            <label>Course Title</label>
            <input
                type="text"
                name="title"
                value={course.title}
                onChange={handleInputChange}
            />
            <label>Subject</label>
            <input
                type="text"
                name="subject"
                value={course.subject}
                onChange={handleInputChange}
            />
            <label>Description</label>
            <input
                type="textarea"
                name="description"
                value={course.description}
                onChange={handleInputChange}
            />
            <button>Add new course</button>
                <Button to="/admin/operations" renderAs={NavLink} className="is-primary">Add</Button>
            </form>
        </div>
    )
}

export default AddCourse
