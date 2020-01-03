import styled from "styled-components";
import { Tertiary, Solid } from "../../variables/colors";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Container = styled.div`
  padding: 0px !important;
  overflow-y: scroll;
  -ms-overflow-style: none; // IE 10+
  scrollbar-width: none;
  margin: 0 auto;
`;

export const StyledSidebar = styled.aside`
  width: 22rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: ${Tertiary.DarkGreen};
  z-index: 100;

  .nav-items {
    border-top: 1px solid #cfedfe;
  }
`;

export const StyledNavItem = styled.div`
  display: flex;
  align-items: center;

  span.label {
    display: flex;
    align-items: center;
  }

  a {
    display: block;
    width: 100%;
    padding: 1rem;
    padding-left: 1.4rem;
    border-bottom: 1px solid #cfedfe;
    text-decoration: none;
    text-transform: uppercase;
    color: ${Solid.WHITE};
    line-height: 1.4rem;
    font-weight: 500;
  }

  &:hover a {
    color: rgba(255, 255, 255, 0.6);
  }
`;