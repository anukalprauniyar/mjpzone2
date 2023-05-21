import React, { useState } from 'react';
import './studentComponentCss/FacultyPage.css';

const FacultyPage = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjects = [
    { id: 1, name: 'Mathematics', faculty: [
      { name: 'John Doe', image: 'john-doe.jpg', description: 'Professor of Mathematics' },
      { name: 'Jane Smith', image: 'jane-smith.jpg', description: 'Assistant Professor of Mathematics' },
      { name: 'Emily Wong', image: 'emily-wong.jpg', description: 'Assistant Professor of Physics' }
    ]},
    { id: 2, name: 'Computer Science', faculty: [
      { name: 'Michael Brown', image: 'michael-brown.jpg', description: 'Professor of Computer Science' },
      { name: 'Sara Johnson', image: 'sara-johnson.jpg', description: 'Assistant Professor of Computer Science' },
      { name: 'Emily Wong', image: 'emily-wong.jpg', description: 'Assistant Professor of Physics' }
    ]},
    { id: 3, name: 'Physics', faculty: [
      { name: 'David Lee', image: 'david-lee.jpg', description: 'Professor of Physics' },
      { name: 'Emily Wong', image: 'emily-wong.jpg', description: 'Assistant Professor of Physics' },
    ]},
    { id: 3, name: 'Computer Networks', faculty: [
      { name: 'David Lee', image: 'emily-wong.jpg' , description: 'Professor of Physics' },
      { name: 'Emily Wong', image: 'mjpu-logo.png', description: 'Assistant Professor of Physics' },
      { name: 'Emily Wong', image: 'emily-wong.jpg', description: 'Assistant Professor of Physics' }
    ]},
    { id: 3, name: 'Python', faculty: [
      { name: 'David Lee', image: 'david-lee.jpg', description: 'Professor of Physics' },
      { name: 'Emily Wong', image: 'emily-wong.jpg', description: 'Assistant Professor of Physics' },
      { name: 'Emily Wong', image: 'emily-wong.jpg', description: 'Assistant Professor of Physics' }
    ]},
    { id: 3, name: 'Java', faculty: [
      { name: 'David Lee', image: 'david-lee.jpg', description: 'Professor of Physics' },
      { name: 'Emily Wong', image: 'emily-wong.jpg', description: 'Assistant Professor of Physics' },
      { name: 'Emily Wong', image: 'emily-wong.jpg', description: 'Assistant Professor of Physics' }
    ]}
  ];

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="faculty-page">
      <h1 className="page-title">Faculty Information</h1>
      <div className="subject-list">
        {subjects.map((subject) => (
          <h2 
            key={subject.id}
            className={`subject ${selectedSubject === subject ? 'selected' : ''}`}
            onClick={() => handleSubjectClick(subject)}
          >
            {subject.name}
          </h2>
        ))}
      </div>
      {selectedSubject && (
        <ul className="faculty-list">
          {selectedSubject.faculty.map((faculty) => (
            <li key={faculty.name} className="faculty-item">
              <img
                className="faculty-image"
                src={`/images/${faculty.image}`}
                alt={`${faculty.name} profile`}
              />
              <div className="faculty-info">
                <h3 className="faculty-name">{faculty.name}</h3>
                <p className="faculty-description">{faculty.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FacultyPage;

