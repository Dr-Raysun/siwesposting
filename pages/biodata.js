import { useRouter } from "next/router";
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  addDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Biodata = () => {
  //receiving the data from viewBio.js component  using router
  const router = useRouter();
  const {
    query: { data },
  } = router;

  //const userData = JSON.parse(props.router.query.data);
  console.log("this is userdata");
  console.log(data);

  useEffect(() => {
    //getting the single document
    if (data) {
      const docRefToUpdate = doc(db, `Biodata/${data}`); //refereincing the doc to update
      console.log("this is doc ref ");
      console.log(docRefToUpdate);
      getDoc(docRefToUpdate).then((doc) => {
        console.log("showing the data gotten from database ");
        console.log(doc.data());
        setFormbio(doc.data());
      });
    }
  }, []);

  {
    /**
  useEffect(() => {
    //getting a single document to update
    const docRefToUpdate = doc(db, `Biodata/${data}`);
    const docSnap = getDoc(docRefToUpdate);
    console.log("docSnap return a promise which is below");
    console.log(docSnap);

    docSnap.then((doc) => {
      console.log("this is the data gottne from promise ");
      console.log(doc.data());

      setFormbio(doc.data());
    });
  }, []); */
  }
  //setFormbio({ ...docSnap.data() });
  console.log("getting the data back ");

  //console.log(formBio);

  const [formBio, setFormbio] = useState({
    name: "",
    course: "",
    email: "",
    state: "",
  });

  //console.log("this is editing now oficially showing ");
  //console.log(edit);

  const handleSubmit = () => {
    var validation = false;
    //udating todo with the generated id

    if (!formBio.name) {
      alert("enter your full name ");
      return;
    } else if (!formBio.course) {
      alert("please enter your course of study");
      return;
    } else if (!formBio.email) {
      alert("please enter your course of study");
      return;
    } else if (!formBio.state) {
      alert("please pick a state before i slap you hard idiot");
      return;
    }

    validation = true;
    if (validation) {
      alert("all is fill now");
      if (data) {
        alert("data day now oh");
        //referencing the document with the doc id which is the [data]
        const docRefToUpdate = doc(db, `Biodata/${data}`); //refereincing the doc to update
        console.log("this is doc ref ");
        console.log(docRefToUpdate);

        //updating the document
        updateDoc(docRefToUpdate, {
          name: formBio.name,
          course: formBio.course,
          state: formBio.state,
          email: formBio.email,
          createdAt: serverTimestamp(), // or Timestamp.now().toDate(),
        });
        alert(
          ` udated biodata\n NAME is ${formBio.name} \n COURSE is ${formBio.course} \n STATE is ${formBio.email}\n STATE is ${formBio.state}`
        );
        setFormbio({
          name: "",
          course: "",
          email: "",
          state: "",
        });
        alert("form is now updated and summited congratulation");
        router.push("/viewBiodata");
      } else {
        // add an new document with a generated id
        const bioRef = collection(db, "Biodata");
        addDoc(bioRef, {
          name: formBio.name,
          course: formBio.course,
          email: formBio.email,
          state: formBio.state,
          createdAt: serverTimestamp(), // or Timestamp.now().toDate(),
        });
        alert(
          ` NAME is ${formBio.name} \n COURSE is ${formBio.course} \n EMAIL is ${formBio.email}\n STATE is ${formBio.state}`
        );
        setFormbio({
          name: "",
          course: "",
          email: "",
          state: "",
        });
        alert("form is now summited congratulation");
      }
    }
  };
  const handleChange = (e) => {
    // alert("change notice");
    setFormbio({
      ...formBio,
      [e.target.name]: e.target.value,
    });
    console.log("this is form bio", formBio);
  };
  return (
    <>
      <Navbar />
      <Container>
        <Cover>
          <Wrapper>
            <p>student qualify for programme </p>
            {data ? <p>the data id {data}</p> : <p>no data id </p>}
          </Wrapper>
          {/** name
           * state
           * course of study
           * school
           * permanent home adderess
           */}
          <FormContainer>
            <Wrapper>
              <label htmlFor="">Full name:</label>
              <input
                type="text"
                name="name"
                value={formBio.name}
                onChange={(e) => handleChange(e)}
              />
            </Wrapper>
            <Wrapper>
              <label htmlFor="">EMAIL:</label>
              <input
                type="text"
                name="email"
                value={formBio.email}
                onChange={(e) => handleChange(e)}
              />
            </Wrapper>

            <Wrapper>
              <label htmlFor="course">course of study:</label>
              <select
                name="course"
                value={formBio.course}
                onChange={(e) => handleChange(e)}
              >
                <option value="">--Please choose course of study--</option>
                <option value="computer science">computer science</option>
                <option value="law">Law</option>
                <option value="industrail chemistry">
                  Industrail Chemistry
                </option>
                <option value="medicine">Medicine</option>
              </select>
            </Wrapper>

            <Wrapper>
              <label htmlFor="state">choose state you lived currently:</label>
              <select
                name="state"
                value={formBio.state}
                onChange={(e) => handleChange(e)}
              >
                <option value="">--Please choose the state--</option>
                <option value="abuja">Abuja</option>
                <option value="lagoes">Lagoes</option>
                <option value="ondo">Ondo state</option>
                <option value="niger">Niger state</option>
              </select>
            </Wrapper>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </FormContainer>
        </Cover>
      </Container>
    </>
  );
};

export default Biodata;

const Container = styled.div`
  border: 4px solid skyblue;
  background-color: silver;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  border: 4px solid blue;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  border: 4px solid yellow;
`;
const Cover = styled.div`
  border: 4px solid green;
  width: 90%;
  // margin: auto;
`;
