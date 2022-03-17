import React from "react";
import styled from "styled-components";

export const SearchBox = (props) => {
  const { setInput, placeholder } = props;
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <SearchContainer>
        <Input placeholder={placeholder} onChange={handleChange}></Input>
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  width: 95%;
  margin: auto;
`;
const Input = styled.input``;
