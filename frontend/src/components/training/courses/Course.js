import React, { useState, useEffect } from "react";
import CourseDataService from "services/CourseService";

const Course = props => {
  const initialCourseState = {
    id: null,
    number: "",
    title: "",
    subject: "",
    description: "",
    published: false
  };
  const [currentCourse, setCurrentCourse] = useState(initialCourseState);
  const [message, setMessage] = useState("");

  const getCourse = id => {
    CourseDataService.get(id)
      .then(response => {
        setCurrentCourse(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCourse(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCourse({ ...currentCourse, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentCourse.id,
      number: currentCourse.number,
      title: currentCourse.title,
      subject: currentCourse.subject,
      description: currentCourse.description,
      published: status
    };

    CourseDataService.update(currentCourse.id, data)
      .then(response => {
        setCurrentCourse({ ...currentCourse, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateCourse = () => {
    CourseDataService.update(currentCourse.id, currentCourse)
      .then(response => {
        console.log(response.data);
        setMessage("The course was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteCourse = () => {
    CourseDataService.remove(currentCourse.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/admin/courses");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentCourse ? (
        <div className="">
          <h4>Tutorial</h4>
          <form>
          <div className="">
              <label htmlFor="number">Course Number</label>
              <input
                type="text"
                className=""
                id="number"
                name="number"
                value={currentCourse.number}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="">
              <label htmlFor="title">Course Title</label>
              <input
                type="text"
                className=""
                id="title"
                name="title"
                value={currentCourse.title}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="">
              <label htmlFor="title">Course Subject</label>
              <input
                type="text"
                className=""
                id="subject"
                name="subject"
                value={currentCourse.subject}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="">
              <label htmlFor="title">Description</label>
              <input
                type="text"
                className=""
                id="description"
                name="description"
                value={currentCourse.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCourse.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentCourse.published ? (
            <button
              className=""
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className=""
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="" onClick={deleteCourse}>
            Delete
          </button>

          <button
            type="submit"
            className=""
            onClick={updateCourse}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Course...</p>
        </div>
      )}
    </div>
  );
};

export default Course;