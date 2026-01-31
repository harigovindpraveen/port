
import React from 'react';

const TypeScriptIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="128" height="128" fill="#007acc"></rect>
    <path fill="#fff" d="M22.2 22.4h83.5v83.5H22.2z"></path>
    <path fill="#007acc" d="M92.7 54.1c0-1.8-1.5-3.3-3.3-3.3H62.9c-.8 0-1.5.7-1.5 1.5v35.3c0 .8.7 1.5 1.5 1.5h8.9c.8 0 1.5-.7 1.5-1.5V60.9h14.6c.8 0 1.5-.7 1.5-1.5v-5.3zm-31 23.2c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"></path>
    <path fill="#fff" d="M61.7 68.3c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"></path>
  </svg>
);

export default TypeScriptIcon;
