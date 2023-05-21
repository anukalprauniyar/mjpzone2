import React, { useState } from 'react';
import './studentComponentCss/Schedule.css';

const Schedule = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjects = [
    { id: 1, name: 'Monday', faculty: [
      { name: 'Java', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' },
      { name: 'Web Tech', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya'},
      { name: 'Computer Network', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' }
    ]},
    { id: 2, name: 'Tuesday', faculty: [
        { name: 'Javas', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' },
        { name: 'Web Techs', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya'},
        { name: 'Computer Networks', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' }
      ]},
    { id: 3, name: 'Wednusday', faculty: [
        { name: 'Java', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' },
        { name: 'Web Tech', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya'},
        { name: 'Computer Network', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' }
      ]},
    { id: 4, name: 'Thursday', faculty: [
        { name: 'Java', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' },
      { name: 'Web Tech', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya'},
      { name: 'Computer Network', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' }
    ]},
    { id: 5, name: 'Friday', faculty: [
        { name: 'Java', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' },
        { name: 'Web Tech', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya'},
        { name: 'Computer Network', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' }
      ]},
    { id: 6, name: 'Saturday', faculty: [
        { name: 'Java', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' },
        { name: 'Web Tech', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya'},
        { name: 'Computer Network', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' }
      ]},
      { id: 7, name: 'Sunday', faculty: [
        { name: 'Java', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' },
        { name: 'Web Tech', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya'},
        { name: 'Computer Network', Time :' 01.15pm - 2.00pm', description: 'Vinay Maurya' }
      ]},
  ];

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="faculty-page">
      <h1 className="page-title">Weekly Time Schedule</h1>
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
             
              <div className="faculty-info">
              
                <h3 className="faculty-name">{faculty.name}</h3>
                <p className="faculty-description">Faculty - {faculty.description}</p>
                <p className='class_time'>  Time -   {faculty.Time}</p>
                
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Schedule;

