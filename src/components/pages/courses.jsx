import React from 'react'
import CoursesGrid from '../organisms/coursesGrid'
import withLoader from '../HOC/withLoader'
// import courses from '../../listCurses'


class Courses extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  render() {
    const { courses } = this.state
    return (
      <CoursesGrid courses={courses} />
    )
  }

  async componentDidMount() {
    const answer = await fetch('http://my-json-server.typicode.com/GeraCV/db-json/courses')
    const response = await answer.json()
    this.setState({
      courses: response
    })
  }
}

export default Courses
