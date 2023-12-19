// pages/Classes/Classes.js
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import axios from 'axios';
import './classes.css'; // Import the classes.css file

const Classes = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
    getEnrolledCourses();
  }, []);

  const getEnrolledCourses = async () => {
    try {
      const response = await axios.get(
        'https://flexmoney-django-backend.onrender.com/api/yoga/enrolled_courses/',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Enrolled courses:', response.data);
      setEnrolledCourses(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching enrolled courses:', error.response.data);
      setError('Error fetching enrolled courses. Please try again.');
    }
  };

  const handleRegister = async (slotId) => {
    try {
      const response = await axios.post(
        'https://flexmoney-django-backend.onrender.com/api/yoga/enroll/',
        {
          slot_id: slotId,
          course_id: "1", // Assuming course_id is constant for all slots, you may need to adjust this
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Registration successful:', response.data);

      // Refresh the enrolled courses list after registration
      getEnrolledCourses();
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      setError('Registration failed. Please try again.');
    }
  };

  const isSlotEnrolled = (slotId) => {
    // Check if the slot is in the list of enrolled courses
    return enrolledCourses.some(course => course.slot === slotId);
  };

  const slots = [
    { id: 1, time: '6-7 AM' },
    { id: 2, time: '7-8 AM' },
    { id: 3, time: '8-9 AM' },
    { id: 4, time: '5-6 PM' },
  ];

  return (
    <div className="classes">
      <h2>Class Schedule</h2>

      {slots.map((slot) => (
        <div key={slot.id} className={`slot ${isSlotEnrolled(slot.id) ? 'registered' : ''}`}>
          <p>{slot.time}</p>
          <Button
            type="button"
            onClick={() => {
              if(!isSlotEnrolled(slot.id)){

                handleRegister(slot.id)}
            }

          }
        
          >
            {isSlotEnrolled(slot.id) ? 'Registered' : 'Register'}
          </Button>
        </div>
      ))}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Classes;
