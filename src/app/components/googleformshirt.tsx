import React from 'react';

const GoogleFormShirt = () => {
  return (
    <div className="flex justify-center">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf0JQJf9ZQdOtxtzh8O9hY8bEwgmx6Zb2RmQKkc2y8stq1P0g/viewform?embedded=true"
        width="100%"
        height="100%"
        style={{ minHeight: '900px' }}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleFormShirt;
