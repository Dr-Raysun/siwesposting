import { useRouter } from "next/router";
import {
  collection,
  query,
  getDocs,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

export async function getStaticProps() {
  // This function above gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // referencing the form fill and summited by student
  const BiodataRef = collection(db, "Biodata");
  const bioQuery = query(BiodataRef, orderBy("createdAt", "asc"));
  const allBiodataRef = await getDocs(bioQuery); //getDocs for multiple document
  const studentBiodata = allBiodataRef.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log("Biodata of student here ");
  console.log(studentBiodata);

  //const studentRef = collection(db, `users/${user.uid}/Reports`);
  const studentRef = collection(db, "users");
  const q = query(studentRef, orderBy("lastSeen", "asc"));
  const allstudentRes = await getDocs(q); //getDocs for multiple document
  const student = allstudentRes.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log("this is all student");
  console.log(student);

  return {
    props: {
      //JSON.stringify convert d javascript to json() object
      // JSON.parse() convert json object back to javascript
      allStudent: JSON.stringify(student),
      allBiodata: JSON.stringify(studentBiodata),
    },
  };
}

const AllSiwesStudent = ({ allStudent, allBiodata }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  console.log("all student now on page");
  console.log(allStudent);
  console.log("this na biodata fill by the student");
  console.log(allBiodata);

  console.log("getting only the name ");
  let dname = [...JSON.parse(allBiodata).map((d) => d.email)];
  console.log(dname);

  let output = JSON.parse(allStudent)
    .map((login) => login.email)
    .map((data) => dname.find((element) => element == data))
    .filter((item) => item != undefined);
  console.log("output showing only people recognize by admin");
  console.log(output);
  return (
    <>
      <Navbar />
      <Container>
        <List>
          <h3>All individual by the admin</h3>
          <button
            onClick={() =>
              router.push({
                pathname: "./adminRecognize",
                query: { output: output },
              })
            }
          >
            click to view
          </button>
          <h3>showing result of all siwes student and their logbook fills</h3>
          <h3>Names</h3>

          {JSON.parse(allStudent).map((student) => (
            <>
              <Content>
                <div id={student.id}>
                  {/** Note the student.id  refer to the document id */}
                  <Link href={`/allStudentBook/${student.id}`}>
                    <p>
                      {student.name} <br />
                      {student.email}
                    </p>
                  </Link>
                </div>
              </Content>
            </>
          ))}
        </List>
      </Container>
    </>
  );
};

export default AllSiwesStudent;
const Container = styled.div`
  background-color: smoke;
`;
const List = styled.div`
  border: 4px solid skyblue;
  padding: 20px;
`;
const Content = styled.div`
  // border: 4px solid green;
  padding: 2px 16px;
  background: skyblue;
  margin: 20px 10px;
  border-left: 8px solid white;
  :hover {
    border-left: 8px solid blue;
  }
`;
