import React from "react";
import styled from "styled-components";
import { Student } from "./Student";
import { SearchBox } from "./SearchBox";
import { useRecoilValue } from "recoil";
import { studentsData } from "./globalVariables";

export const AllStudents = () => {
  const studentData = useRecoilValue(studentsData);
  const [name, setName] = React.useState("");
  const [tag, setTag] = React.useState("");

  const searchParams = ["firstName", "lastName"];
  let displayedResult = [];

  if (studentData) {
    displayedResult = studentData.filter((student) => {
      if (name.length >= 0 && tag.length <= 0) {
        return searchParams.some((param) => {
          return (
            student[param]
              .toString()
              .toLowerCase()
              .startsWith(name.toLowerCase()) ||
            name.toString().toLowerCase().includes(student[param].toLowerCase())
          );
        });
      } else if (name.length <= 0 && tag.length >= 0) {
        return student.tagName.some((item) => {
          return (
            item.toString().toLowerCase().startsWith(tag.toLowerCase()) ||
            tag.toString().toLowerCase().includes(item.toLowerCase())
          );
        });
      } else {
        return (
          searchParams.some((param) => {
            return (
              student[param]
                .toString()
                .toLowerCase()
                .startsWith(name.toLowerCase()) ||
              name
                .toString()
                .toLowerCase()
                .includes(student[param].toLowerCase())
            );
          }) &&
          student.tagName.some((item) => {
            return (
              item.toString().toLowerCase().startsWith(tag.toLowerCase()) ||
              tag.toString().toLowerCase().includes(item.toLowerCase())
            );
          })
        );
      }
    });
  }

  return (
    <Container>
      <SearchBox setInput={setName} placeholder="Search by name" />
      <SearchBox setInput={setTag} placeholder="Search by tag" />

      {studentData && (
        <StudentContainer>
          {displayedResult.length < 1 && <Warning>No match found!</Warning>}
          {displayedResult.map((student, index) => {
            return (
              <div key={student.id}>
                <Student data={student} index={index} />
              </div>
            );
          })}
        </StudentContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 50vw;

  margin: auto;
  margin-top: 5vw;
  background-color: white;
  border-radius: var(--border-radius);
`;

const StudentContainer = styled.div`
  max-height: 70vh;

  overflow: hidden;
  &:hover {
    overflow: auto;
  }
`;

const Warning = styled.div`
  padding: 1vw;
  text-align: center;
`;
