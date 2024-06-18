import {
  ButtonStyled,
  Ingredients,
  List,
  ListItem,
  ListItemIcon,
  ModalContainer,
  ModalInfo,
  ModalInfoContainer,
  Name,
  Recipe,
  SecondName,
} from "./RecipeCardModal.styled";
import { PiCookingPotLight, PiClipboardTextLight } from "react-icons/pi";
import { BsCheck2 } from "react-icons/bs";

export const RecipeCardModal = ({ image, name, ingredients, recipe }) => {
  return (
    <ModalContainer>
      <Name>{name}</Name>
      <ModalInfoContainer>
        <img src={image} alt={name} height="400px" />

        <ModalInfo>
          <div>
            <SecondName>
              <PiClipboardTextLight size="24" />
              Ingredients
            </SecondName>
            <Ingredients>
              {ingredients.map((ingredient, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <BsCheck2 />
                    </ListItemIcon>
                    {ingredient}
                  </ListItem>
                );
              })}
            </Ingredients>
          </div>
          <div>
            <SecondName>
              <PiCookingPotLight size="24" />
              Recipe
            </SecondName>
            <Recipe>
              {recipe.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemIcon>{index + 1}.</ListItemIcon> {item}
                  </ListItem>
                );
              })}
            </Recipe>
          </div>
        </ModalInfo>
      </ModalInfoContainer>
    </ModalContainer>
  );
};
