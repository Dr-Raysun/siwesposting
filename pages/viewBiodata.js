import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import { useEffect, useState } from "react";
import ViewBio from "../components/ViewBio";
import Navbar from "../components/Navbar";
const ViewBiodata = () => {
  const [viewBio, setviewBio] = useState([]);
  useEffect(() => {
    const collectionBioRef = collection(db, "Biodata");
    const q = query(collectionBioRef, orderBy("createdAt", "asc"));
    onSnapshot(q, (snapshot) => {
      const bioView = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setviewBio(bioView);
      console.log(viewBio);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <p>displaying all the student qualify for siwes</p>
        {/*** fetching data using server side */}
        {viewBio.map((item) => (
          <ViewBio
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            course={item.course}
          />
        ))}
      </div>
    </>
  );
};

export default ViewBiodata;
