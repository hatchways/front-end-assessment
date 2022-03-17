import React from "react";
import { AllStudents } from "./AllStudents";
import { useSetRecoilState } from "recoil";
import { studentsData } from "./globalVariables";

function App() {
  const setStudentData = useSetRecoilState(studentsData);
  React.useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => {
        const copyData = [];
        data.students.forEach((item) => {
          copyData.push({ ...item, tagName: [] });
        });
        setStudentData(copyData);
      });
  }, [setStudentData]);

  return (
    <div>
      <AllStudents />
    </div>
  );
}

export default App;
