import PropTypes from "prop-types";
import { CiAlarmOn } from "react-icons/ci";
import { PiChartPieSliceLight } from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";
import {
  Badge,
  BadgeList,
  BadgeName,
  ButtonsDiv,
  ButtonStyled,
  CloseButtonStyled,
  ImgStyled,
  InfoBlock,
  InfoStyled,
  Name,
  RecipeCardDiv,
  RecipeInfo,
} from "./RecipeCard.styled";
import { RecipeDifficulty } from "../../constants";
import { TfiZoomIn, TfiTrash } from "react-icons/tfi";
import { Component } from "react";
import Modal from "react-modal";
import { RecipeCardModal } from "../RecipeCardModal/RecipeCardModal";
import { IoMdClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.2)",
    minHeight: "500px",
  },
};

Modal.setAppElement("#root");

export class RecipeCard extends Component {
  state = {
    selectedImg: null,
  };

  setSelectedImg = () => {
    this.setState({ selectedImg: this.props.item.image });
  };

  closeModal = () => {
    this.setState({ selectedImg: null });
  };

  render() {
    const { selectedImg } = this.state;
    const {
      item: {
        id,
        image,
        name,
        time,
        servings,
        calories,
        difficulty,
        ingredients,
        recipe,
      },
      onDelete,
    } = this.props;
    return (
      <RecipeCardDiv>
        <ButtonsDiv>
          <ButtonStyled type="button" onClick={() => onDelete(id)}>
            <TfiTrash size="22" />
          </ButtonStyled>
          <ButtonStyled type="button" onClick={this.setSelectedImg}>
            <TfiZoomIn size="22" />
          </ButtonStyled>
        </ButtonsDiv>
        <ImgStyled src={image} alt={name} />
        <InfoStyled>
          <Name>{name}</Name>
          <RecipeInfo style={{ display: "flex", gap: 10 }}>
            <InfoBlock>
              <CiAlarmOn size="24" />
              <span>{time} min</span>
            </InfoBlock>
            <InfoBlock>
              <PiChartPieSliceLight size="24" />
              <span>{servings} servings</span>
            </InfoBlock>
            <InfoBlock>
              <BsBarChart size="24" />
              <span>{calories} calories</span>
            </InfoBlock>
          </RecipeInfo>

          <div>
            <BadgeName>Difficulty</BadgeName>
            <BadgeList>
              <Badge
                active={difficulty === RecipeDifficulty.easy}
                type={RecipeDifficulty.easy}
              >
                Easy
              </Badge>
              <Badge
                active={difficulty === RecipeDifficulty.medium}
                type={RecipeDifficulty.medium}
              >
                Medium
              </Badge>
              <Badge
                active={difficulty === RecipeDifficulty.hard}
                type={RecipeDifficulty.hard}
              >
                Hard
              </Badge>
            </BadgeList>
          </div>
        </InfoStyled>
        <Modal
          isOpen={selectedImg !== null}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CloseButtonStyled type="button" onClick={this.closeModal}>
            <IoMdClose size="24" />
          </CloseButtonStyled>
          <RecipeCardModal
            image={selectedImg}
            name={name}
            ingredients={ingredients}
            recipe={recipe}
          />
        </Modal>
      </RecipeCardDiv>
    );
  }
}

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    services: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(["easy", "medium", "hard"]).isRequired,
  }).isRequired,
};
