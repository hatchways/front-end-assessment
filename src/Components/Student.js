import React from "react";
import styled from "styled-components";
import { averageCalculator } from "./utils";
import { TagBox } from "./TagBox";
import { FaPlus, FaMinus } from "react-icons/fa";
import { TagName } from "./TagName";

export const Student = (props) => {
  const { data, index } = props;
  const [isToggled, setIsToggled] = React.useState(false);
  const [isShowTag, setIsShowTag] = React.useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Container isToggled={isToggled} isShowTag={isShowTag}>
      <Avatar>
        <AvatarImg src={data.pic} />
      </Avatar>
      <MainContainer>
        <InfoContainer>
          <HeaderContainer>
            <Header>
              {data.firstName.toUpperCase()} {data.lastName.toUpperCase()}
            </Header>
            <Button onClick={handleClick}>
              {isToggled ? <FaMinus size="2vw" /> : <FaPlus size="2vw" />}
            </Button>
          </HeaderContainer>

          <DetailsContainer>
            <div>Email: {data.email}</div>
            <div>Company: {data.company}</div>
            <div>Skill: {data.skill}</div>
            <div>Average: {averageCalculator(data.grades)}%</div>
          </DetailsContainer>
          {isToggled && (
            <GradeContainer>
              {data.grades.map((grade, index) => {
                return (
                  <div key={index + 1}>
                    <span>{`Test ${index + 1}`}</span>
                    <Grade>{grade}%</Grade>
                  </div>
                );
              })}
            </GradeContainer>
          )}

          <TagName isShowTag={isShowTag} data={data} />
          <TagBox index={index} setIsShowTag={setIsShowTag} data={data} />
        </InfoContainer>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: solid 1px #efefef;
  display: flex;
  align-items: center;
  padding: 2vw;
  position: relative;
  height: ${(props) => (props.isToggled ? "24vw" : "11vw")};
  height: ${(props) => props.isShowTag && "15vw"};
  height: ${(props) => props.isToggled && props.isShowTag && "28vw"};
`;

const Avatar = styled.div`
  width: 8vw;
  height: 8vw;
  border-radius: 100%;
  border: solid #bfbfbf 1px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 2vw;
`;
const AvatarImg = styled.img`
  width: 8vw;
  height: 8vw;
  position: absolute;
  border-radius: 100%;
`;

const MainContainer = styled.div`
  position: absolute;
  top: 1vw;
  left: 0;
  min-height: 100%;
`;

const InfoContainer = styled.div`
  margin-left: 2vw;
  position: absolute;
  left: 12vw;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(50vw - 16vw);
`;
const Header = styled.div`
  font-weight: bold;
  font-size: 2vw;
  margin-bottom: 1vw;
`;

const Button = styled.button`
  border: none;
  background: none;
  margin: 0 0 1vw 0;
  position: absolute;
  right: 0;
  color: gray;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const DetailsContainer = styled.div`
  margin-left: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 6vw;
  font-size: 1.2vw;
`;

const GradeContainer = styled.div`
  font-size: 1.2vw;
  margin: 1vw 0 0 1vw;
`;

const Grade = styled.span`
  margin-left: 2vw;
`;
