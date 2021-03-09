import React, { Component } from "react";
import Courses from './Courses';

import axios from "axios";
import { API_URL } from "constants/index";

class CoursesHome extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    this.resetState();
  }

  getCourses = () => {
    axios.get(API_URL).then(res => this.setState({ courses: res.data }));
  };

  resetState = () => {
    this.getCourses();
  };

  render() {
    return (

            <Courses
              courses={this.state.courses}
              resetState={this.resetState}
            />
    );
  }
}

export default CoursesHome;