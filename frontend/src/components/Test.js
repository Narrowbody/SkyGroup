import React, {useState, useEffect} from 'react'
import axios from 'axios'



function Test() {
    const [course, setCourse] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState (1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/courses/course-detail/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setCourse(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch data</button>
            <div>{ course.title }</div>
            
            {/* <ul>
                {
                    courses.map(course => <li key={course.id}>{ course.title }</li>)
                }
            </ul> */}
        </div>
    )
}

export default Test
