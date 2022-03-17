import styled from "styled-components";

export const TagName = (props) => {
  const { isShowTag, data } = props;

  return (
    <>
      {isShowTag && (
        <TagContainer>
          {data.tagName.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </TagContainer>
      )}
    </>
  );
};

const TagContainer = styled.div`
  width: calc(50vw - 16vw);
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

const Tag = styled.span`
  height: 2vw;
  background-color: var(--border-color);
  padding: 0.5vw;
  border-radius: var(--border-radius);
  margin: 0.5vw;
  font-size: 1.2vw;
  text-align: center;
`;
