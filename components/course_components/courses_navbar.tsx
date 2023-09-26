import React, { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import "@/components/course_components/course_navbar.css";

function CourseNavbar() {
  const [isActiveRecent, setIsActiveRecent] = useState(false);
  const [isActiveAll, setIsActiveAll] = useState(false);

  const handleButtonClickRecent = () => {
    setIsActiveRecent(!isActiveRecent);
    setIsActiveAll(false); // Ensure the other button is not active
  };

  const handleButtonClickAll = () => {
    setIsActiveAll(!isActiveAll);
    setIsActiveRecent(false); // Ensure the other button is not active
  };

  return (
    <div className="navbar_course">
      <Button className={`buttom_course_recent ${isActiveRecent ? 'active' : ''}`}variant="light"radius="sm" onClick={handleButtonClickRecent}> Recent courses 1/2023</Button>
      <Button className={`buttom_course_all ${isActiveAll ? 'active' : ''}`} variant="light" radius="sm" onClick={handleButtonClickAll} > All courses</Button>
      <Input
        className="search-input"
        placeholder="Search..."
        width="200px"
      />
    </div>
  );
}

export default CourseNavbar;

