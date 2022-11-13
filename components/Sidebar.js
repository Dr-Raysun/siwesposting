import { Avatar, IconButton } from "@mui/material";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomMenu from "./CustomMenu";

const Sidebar = () => {
  return (
    <Container>
      <p>this is me </p>
      <CustomMenu />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: whitish;
  // height: 100vh;
`;
const IconContainer = styled.div`
  background-color: blue;
`;
