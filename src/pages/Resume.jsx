import React from 'react'
import resume from '../assets/Software Architect Deepan Karthegeyen A.pdf'

export default function Resume() {
  return (
    <div>
      <h2>My Resume</h2>
      <a href={resume} download className="btn btn-primary">Download PDF</a>
      <iframe src={resume} width="100%" height="600px" title="Resume" className="mt-3" />
    </div>
  )
}
