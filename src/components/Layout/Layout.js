import { Children } from "react";
import { styled } from "styled-components";
import { Container } from "./Layout.styled";

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
