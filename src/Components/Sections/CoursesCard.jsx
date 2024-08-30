import React from 'react'

const CoursesCard = ({course}) => {
  return (
    <div>
      {course?.items && <div><img src={course?.items[0]?.snippet?.thumbnails?.default?.url} alt="thumbnail"></img></div>}
    <h2>{course?.courseName}</h2>
    <p>{course?.courseDesc}</p>
    <p>{course?.courseTags}</p>
    </div>
  )
}

export default CoursesCard