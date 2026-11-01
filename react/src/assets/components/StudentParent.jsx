import React from "react";
import Student from "./Student";

function StudentParent() {
  return (
    // props with destructuring

    <div className="grid grid-cols-2 border-2">
      <Student name="Shriya Karki" />
      <Student age={21} />
    </div>
  );
}

export default StudentParent;