import styled from "styled-components";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db, auth } from "../firebase";
import Navbar from "../components/Navbar";

export async function getServerSideProps() {
  const postedRef = collection(db, "posted"); //referencing the collection posted
  const q = query(postedRef, orderBy("lastSeen", "asc"));
  const querySnapshot = await getDocs(q); // getting all docum using getDocs
  const postedList = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), //spreading all the data
  }));
  console.log(postedList); // the data here is still in javascript format

  if (!postedList) {
    return {
      notFound: true,
    };
  }
  // return only accept json object so convert using [JSON.stringify()]
  return {
    props: { postedStudent: JSON.stringify(postedList) }, // will be passed to the page component as props
  };
}

const allPosted = ({ postedStudent }) => {
  console.log("when data is still in string");
  console.log(postedStudent);
  return (
    <>
      <Navbar />
      <div>
        <p>student posted location</p>
        {JSON.parse(postedStudent).map((student) => (
          <>
            <Container>
              <p>{student.name}</p>
              <p>{student.course}</p>
              <p>{student.state}</p>
              <p>{student.compName}</p>
              <p>{student.compLocation}</p>
            </Container>
          </>
        ))}
      </div>
    </>
  );
};

export default allPosted;
const Container = styled.div`
  border: 4px solid blue;
`;
