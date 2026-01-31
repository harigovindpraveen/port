
import React from 'react';

const TailwindIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10 3.75a.75.75 0 01.75.75v3.44l3.02-3.02a.75.75 0 111.06 1.06l-3.02 3.02h3.44a.75.75 0 010 1.5h-3.44l3.02 3.02a.75.75 0 11-1.06 1.06l-3.02-3.02v3.44a.75.75 0 01-1.5 0v-3.44l-3.02 3.02a.75.75 0 11-1.06-1.06l3.02-3.02H3.75a.75.75 0 010-1.5h3.44l-3.02-3.02a.75.75 0 011.06-1.06l3.02 3.02V4.5a.75.75 0 01.75-.75z" />
    </svg>
);

export default TailwindIcon;
