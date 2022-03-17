import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { studentsData } from "./globalVariables";

export const TagBox = ({ index, setIsShowTag, data }) => {
  const [tag, setTag] = React.useState("");
  const [studentData, setStudentData] = useRecoilState(studentsData);

  const tagArr = [];

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      if (!data.tagName.some((tagName) => tagName === tag)) {
        tagArr.push(tag);
        setStudentData([
          ...studentData.slice(0, index),
          {
            ...studentData[index],
            tagName: [...studentData[index].tagName, tag],
          },
          ...studentData.slice(index + 1),
        ]);
      }

      setTag("");
    }
  };
  React.useEffect(() => {
    if (data.tagName.length > 0) {
      setIsShowTag(true);
    }
  }, [data.tagName, setIsShowTag]);

  return (
    <div>
      <Tag
        placeholder="Add a tag"
        onChange={handleChange}
        onKeyPress={onEnterPress}
        value={tag}
      ></Tag>
    </div>
  );
};

const Tag = styled.input`
  width: 40%;
  font-size: 1.15vw;
`;
