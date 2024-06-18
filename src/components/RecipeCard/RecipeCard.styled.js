import { styled } from "styled-components";
import { RecipeDifficulty } from "../../constants";

export const RecipeCardDiv = styled.div`
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ButtonsDiv = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 6px;
`;

export const ButtonStyled = styled.button`
  padding: 8px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: white;
  transition: background-color 0.3s;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #234e14;
    transition: color 0.3s;
  }
`;

export const ImgStyled = styled.img`
  width: 350px;
  height: 150px;
  object-fit: cover;
`;

export const InfoStyled = styled.div`
  padding: 10px 15px 30px 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;
`;

export const Name = styled.h2`
  margin-top: 8px;
  margin-bottom: 12px;
  color: black;
  transition: color 0.3s;
  font-family: "Iglets", sans-serif;

  &:hover {
    color: #234e14;
    transition: color 0.3s;
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 4px;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: grey;
  }
`;

export const BadgeName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #589443;
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px 18px 10px 18px;
  min-width: 94px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  letter-spacing: 1px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);

  background-color: ${(props) => {
    if (!props.active) {
      return props.theme.colors.white;
    }
    switch (props.type) {
      case RecipeDifficulty.easy:
        return "#62B544";
      case RecipeDifficulty.medium:
        return "#589443";
      case RecipeDifficulty.hard:
        return "#3B6E29";
    }
  }};

  color: ${(props) => {
    return props.active ? props.theme.colors.white : props.theme.colors.black;
  }};
`;

export const CloseButtonStyled = styled.button`
  border: none;
  background-color: white;
  padding: 8px;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s;
  position: absolute;
  top: 20px;
  right: 25px;

  &:hover {
    color: #234e14;
    transition: color 0.3s;
  }
`;
