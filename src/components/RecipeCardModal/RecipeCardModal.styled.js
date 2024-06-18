import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 15px;
  padding-bottom: 20px;
  gap: 30px;
  text-align: center;
`;

export const Name = styled.h2`
  margin-top: 8px;
  margin-bottom: 25px;
  color: black;
  transition: color 0.3s;
  font-family: "Iglets", sans-serif;
  font-size: 30px;
  &:hover {
    color: #234e14;
    transition: color 0.3s;
  }
`;

export const SecondName = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 20px;
  color: #589443;
`;

export const List = styled.ul`
  max-width: 350px;
  overflow-y: auto;
`;

export const Ingredients = styled(List)`
  max-height: 120px;
`;

export const Recipe = styled(List)`
  max-height: 170px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 6px;
`;

export const ListItemIcon = styled.span`
  color: #234e14;
`;

export const ModalInfoContainer = styled.div`
  display: flex;
  text-align: left;
  gap: 30px;
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
