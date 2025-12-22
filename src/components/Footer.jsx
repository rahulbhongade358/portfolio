import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-950 text-gray-400 text-center py-6 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Rahul. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
