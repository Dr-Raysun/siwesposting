import {
  collection,
  query,
  getDocs,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import Link from "next/link";
import { Image } from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import DisplayEach from "../../components/DisplayEach";
//import { useRouter } from "next/router";
export async function getServerSideProps(context) {
  const id = context.query.id;
  console.log("the context id is");
  console.log(id);
  //referencing the Report colleciton
  const allReportRef = collection(db, `users/${context.query.id}/Reports`);
  const q = query(allReportRef, orderBy("createdAt", "asc"));
  const allStudentReport = await getDocs(q);
  const eachReport = allStudentReport.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log("showing document for each student");
  console.log(eachReport);
  return {
    props: {
      report: JSON.stringify(eachReport),
    }, // will be passed to the page component as props
  };
}

const ViewEachStudentLog = ({ report }) => {
  //const router = useRouter();
  console.log("now report is now these");
  console.log(report);
  console.log(report.length);
  return (
    <div>
      <p>detail of all student who fill log book and the id below </p>
      {/**{router.query.id} */}

      <p>showing the data here </p>
      {report.length <= 3 ? (
        <p>no report</p>
      ) : (
        <>
          {JSON.parse(report).map((student, i) => (
            <>
              <div id={student.id}>
                {/** <DisplayEach
            title={student.title}
            description={student.description}
            timeInSeconds={student.createdAt.seconds}
      /> */}
                <Wrapper>
                  <b>original day logbook was fill</b>
                  <p>
                    view {student.createdAt.seconds} nanosecond{" "}
                    {student.createdAt.nanoseconds}
                  </p>
                  <p>
                    conversion
                    {student.createdAt.seconds} date
                    {student.createdAt.seconds * 1000}
                    {new Date(student.createdAt.seconds * 1000).toDateString()}
                  </p>
                  <h2> DAY FILL: {student.title}</h2>
                  <h3>work done</h3>
                  <p>{student.description}</p>
                  <img
                    src={student.imageUrl}
                    width="50%"
                    height="50%"
                    alt="siwes logbook image daily  "
                  />
                </Wrapper>
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default ViewEachStudentLog;

const Wrapper = styled.div`
  border: 4px solid blue;
  margin: 10px 0;
  color: #4d5b7c;
  padding: 10px 20px;
  img {
    display: block;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`;
