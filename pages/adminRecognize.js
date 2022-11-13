import styled from "styled-components";
import { useRouter } from "next/router";
import {
  collection,
  query,
  getDocs,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export async function getServerSideProps(context) {
  const bioRef = collection(db, "Biodata");
  const q = query(bioRef, orderBy("createdAt", "asc"));
  const querySnapshot = await getDocs(q);
  const bioName = querySnapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));

  console.log("all the admin name");
  console.log(bioName);
  // thing day happen

  return {
    props: {
      namebio: JSON.stringify(bioName),
    }, // will be passed to the page component as props
  };
}

const AdminRecognize = ({ namebio }) => {
  console.log("checing object name");

  const router = useRouter();
  const {
    query: { output },
  } = router;
  console.log("this is output");
  console.log(output); // the [output variable] contain the email of all loginUsers recognize  by admin or added by him

  //convert to javascript object and filtering out email not recognize

  let nameRegisters = JSON.parse(namebio).filter((data) =>
    output.find((element) => element == data.email)
  );

  console.log("output showing only people recognize by admin");
  console.log(nameRegisters);

  return (
    <>
      <Navbar />
      <Container>
        <List>
          {nameRegisters ? (
            nameRegisters.map((student) => (
              <>
                <Link href={`/allStudentBook/${student.id}`}>
                  <div id={student.id}>
                    {/** Note the student.id  refer to the document id */}
                    <Content>
                      <p>{student.name}</p>
                      <p>{student.course}</p>
                      <p>{student.state}</p>
                      <p>{student.email}</p>
                    </Content>
                  </div>
                </Link>
              </>
            ))
          ) : (
            <>
              <p>data no day available</p>
            </>
          )}
        </List>
      </Container>
    </>
  );
};

export default AdminRecognize;

const Container = styled.div`
  background-color: silver;
`;
const List = styled.div`
  border: 4px solid blue;
  padding: 20px;
`;
const Content = styled.div`
  // border: 4px solid green;
  padding: 2px 16px;
  background: #fff;
  margin: 20px 10px;
  border-left: 8px solid white;
  :hover {
    border-left: 8px solid red;
  }
`;
