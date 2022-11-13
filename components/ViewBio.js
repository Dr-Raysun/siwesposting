import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import Link from "next/link";
import EditBiodata from "../pages/editbiodat";

const ViewBio = ({ id, name, course, email }) => {
  const router = useRouter();

  const handleDelete = async ({ id }) => {
    //referencing the system to dewnload

    const docRefToDelete = doc(db, `Biodata/${id}`);
    await deleteDoc(docRefToDelete);
    alert("delete successful");
  };

  const handleEdit = ({ id }) => {
    // code to handle update or edit of record
    alert("thid is edit nigaa");
    alert(`edit id is ${id}`);

    router.push({
      pathname: "/biodata",
      query: { data: id },
    });
  };
  return (
    <>
      <Container>
        <Box sx={{ minWidth: 375 }}>
          <Card variant="outlined">
            <div key={id}>
              <p>{name}</p>
              <p>{course}</p>
              <p>{email}</p>
              <button onClick={() => handleEdit({ id })}>Edit</button>
              <button onClick={() => handleDelete({ id })}>delete</button>
            </div>
          </Card>
        </Box>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: silver;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ViewBio;
