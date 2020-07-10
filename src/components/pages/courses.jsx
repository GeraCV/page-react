import React from 'react'
import CoursesGrid from '../organisms/coursesGrid'
import { connect } from 'react-redux'

const Courses = ({ courses }) => {
  return (<CoursesGrid courses={courses} />)
}

const mapStateToProps = state => {
  return (
    { courses: state.coursesReducer.courses }
  )
}
export default connect(mapStateToProps, {})(Courses)









  // async componentDidMount() {
  //   const answer = await fetch('http://my-json-server.typicode.com/GeraCV/db-json/courses')
  //   const response = await answer.json()
  //   this.setState({
  //     courses: response
  //   })
  // }