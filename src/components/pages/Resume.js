import React from 'react';
import pdf from '../../assets/resume_pdf/resume.pdf'
export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <a href={pdf}>Download Resume</a>
    </div>
  );
}
