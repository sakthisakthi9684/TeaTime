import React from "react";

function Footer() {
  return (
    <footer className="bg-teal-700 text-white text-center py-2">
      <p>&copy; {new Date().getFullYear()}</p>
      <p>Created by : <b><a href="mailto:sakthisakthi9684@gmail.com" className="hover:text-teal-300"> sakthisakthi9684@gmail.com</a></b></p>
    </footer>
  );
}

export default Footer;

