
import React from 'react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.73c-.966 0-1.75-.783-1.75-1.75S5.534 3.23 6.5 3.23s1.75.784 1.75 1.75S7.466 6.73 6.5 6.73zM19 19h-3v-5.6c0-1.33-.027-3.03-1.845-3.03-1.845 0-2.128 1.44-2.128 2.93V19h-3V8h2.88v1.32h.04c.4-.76 1.37-1.55 2.84-1.55 3.04 0 3.6 2.002 3.6 4.6v5.31z" />
  </svg>
);

export default LinkedInIcon;
