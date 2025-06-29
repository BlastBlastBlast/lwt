import React from 'react';
import './style.css';

const DecorativeElements = () => {
  return (
    <div className="decorative-elements">
      {/* Elements behind the image */}
      <div className="decorative-element behind element-1"></div>
      <div className="decorative-element behind element-2"></div>
      
      {/* Elements in front of the image */}
      <div className="decorative-element front element-3"></div>
      <div className="decorative-element front element-4"></div>
    </div>
  );
};

export default DecorativeElements;
