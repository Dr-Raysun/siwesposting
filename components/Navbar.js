import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import itfLogo1 from "../public/itfLogo1.png";
import { useState } from "react";

const Navbar = () => {
  const [user] = useAuthState(auth);
  //open and closed icon
  const [open, setOpen] = useState(false);
  // array of email qualify as admin
  const admin = [
    "emma@gmail.com",
    "adeniyiraymond30@gmail.com",
    "adengold@gmail.com",
  ];
  const currentEmail = user.email;
  console.log("this is a showing ", currentEmail);
  // checking to show if admin and user will be show on the header
  const b = !!admin.find((element) => element == currentEmail);

  const handleClose = () => {};
  const router = useRouter();
  const handleClick = () => {
    // alert("this button is hit");
    let admin = prompt("enter the password for admin", "xxxxxxx");
    alert("name is ", admin);
  };
  // alert("admin is bad", admin);
  return (
    <>
      {b ? (
        <>
          {/**  show only the admin board if true */}
          <Container>
            <MenuControl>
              <MenuIcon onClick={() => setOpen(true)} />
            </MenuControl>
            <Menu control={open}>
              <CloseControl>
                <CloseIcon onClick={() => setOpen(false)} />
              </CloseControl>
              <Image src={itfLogo1} width={50} height={50} />

              <Link href="/">
                <a>Home</a>
              </Link>
              <Dropdown>
                <button>Administration</button>
                <DropdownContent>
                  <Link href="/biodata">
                    <a>Adding Siwes Student</a>
                  </Link>
                  <Link href="/viewBiodata">
                    <a>view Siwes Student</a>
                  </Link>
                  <Link href="/allStudentBook">
                    <a>all siewes student logbook</a>
                  </Link>
                  <Link href="/allPosted">
                    <a>view all student posted location</a>
                  </Link>
                </DropdownContent>
              </Dropdown>
              {/**   <Dropdown>
                <button>student</button>
                <DropdownContent>
                  <Link href="/viewLogbook">
                    <a>view all report </a>
                  </Link>
                  <Link href="/addLogbook">
                    <a>fill logbook </a>
                  </Link>
                  //   <a href="/placement">placement</a> 
                  <Link href="/placementStudent">
                    <a> check were you are posted </a>
                  </Link>
                </DropdownContent>
              </Dropdown>   */}
              <Dropdown>
                <button>Information</button>
                <DropdownContent>
                  <a href="#">about siwes</a>
                  <a href="#">company in nigeria</a>
                  <a href="#">Link 3</a>
                </DropdownContent>
              </Dropdown>
              <Dropdown>
                <button>
                  <Avatar src={user.photoURL} />
                  {user.displayName} DASHBOARD
                </button>
                <DropdownContent>
                  <a onClick={() => signOut(auth)}>sign Out</a>
                </DropdownContent>
              </Dropdown>
            </Menu>
          </Container>
        </>
      ) : (
        <>
          {/**  show only the student board if false */}
          <Container>
            <MenuControl>
              <MenuIcon onClick={() => setOpen(true)} />
            </MenuControl>
            <Menu control={open}>
              <CloseControl>
                <CloseIcon onClick={() => setOpen(false)} />
              </CloseControl>

              <Link href="/">
                <a>Home</a>
              </Link>

              {/**  <Dropdown>
              <button>Administration</button>
              <DropdownContent>
                <Link href="/biodata">
                  <a>Adding Siwes Student</a>
                </Link>
                <Link href="/viewBiodata">
                  <a>view Siwes Student</a>
                </Link>
                <Link href="/allStudentBook">
                  <a>all siewes student logbook</a>
                </Link>
                <Link href="/allPosted">
                  <a>view all student posted location</a>
                </Link>
              </DropdownContent>
            </Dropdown> */}

              <Dropdown>
                <button>student</button>
                <DropdownContent>
                  <Link href="/viewLogbook">
                    <a>view all report </a>
                  </Link>
                  <Link href="/addLogbook">
                    <a>fill logbook </a>
                  </Link>
                  {/** <a href="/placement">placement</a> */}
                  <Link href="/placementStudent">
                    <a> check were you are posted </a>
                  </Link>
                </DropdownContent>
              </Dropdown>
              <Dropdown>
                <button>Information</button>
                <DropdownContent>
                  <a href="#">about siwes</a>
                  <a href="#">company in nigeria</a>
                  <a href="#">Link 3</a>
                </DropdownContent>
              </Dropdown>

              <Dropdown>
                <button>
                  <Avatar src={user.photoURL} />
                  {user.displayName} DASHBOARD
                </button>
                <DropdownContent>
                  <a onClick={() => signOut(auth)}>sign Out</a>
                </DropdownContent>
              </Dropdown>
            </Menu>
          </Container>
        </>
      )}
    </>
  );
};

export default Navbar;
const Container = styled.div`
  background-color: skyblue;

  //background-color: #000000;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //font-size: 12px;

  // a {
  // font-size: 12px;
  //color: white;
  //text-align: center;
  //padding: 14px 16px;
  //text-decoration: none;
  //:hover {
  //background-color: blue;
  //}
  //}

  //border: 4px solid blue;
  //min-height: 60px;

  // padding: 0 20px;
  //display: flex;
  //justify-content: space-between;
  //align-items: center;

  //position: fixed;
  //top: 0;
  //left: 0;
  //right: 0;
  //z-index: 1;
`;
const Menu = styled.div`
  //background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  a {
    font-size: 12px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    :hover {
      background-color: blue;
    }
  }
  @media (max-width: 768px) {
    background-color: red;

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    flex-direction: column;
    justify-content: start;

    transform: ${({ control }) =>
      control ? "translate(0)" : "translate(-100%)"};
  }
`;
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;

  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    :hover {
      background-color: #ddd;
    }
  }
`;
const Dropdown = styled.div`
  float: left;
  overflow: hidden;

  button {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
  }
  :hover {
    // background-color: red;
    background-color: blue;
    :hover ${DropdownContent} {
      display: block;
    }
  }
`;
const MenuControl = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  // display: none;
  // visibility: hidden;
  // border: 4px solid green;
`;
const CloseControl = styled.div`
  /* When the browser is at least 768px and above */
  @media (min-width: 768px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: end;
  padding-top: 10px;
  padding-right: 10px;
`;
