import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteLogbook from "../components/DeleteLogbook";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function AddLogbook() {
  const [user] = useAuthState(auth);
  const [articles, setArticles] = useState([]);
  //const articleRef = collection(db, "Articles");
  useEffect(() => {
    //const articleRef = collection(db, "Reports");
    const articleRef = collection(db, `users/${user.uid}/Reports`);
    console.log("articleRef is this ", articleRef);
    const q = query(articleRef, orderBy("createdAt", "asc"));
    onSnapshot(q, (snapshot) => {
      //  console.log("number of snapshot", snapshot);
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log("number of articles", articles);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <h1>DAILY REPORT </h1>
        {articles.length === 0 ? (
          <p>No articles found!</p>
        ) : (
          articles.map(({ id, title, description, imageUrl, createdAt }) => (
            <Wrapper key={id}>
              <Row>
                <Textcontent>
                  <p>
                    <b> ORIGINAL DAY LOGBOOK WAS FILL:</b>{" "}
                    {createdAt.toDate().toDateString()}
                  </p>
                  <h2> DAY FILL: {title}</h2>

                  <h4>{description}</h4>
                  <ImageWrapper>
                    <img src={imageUrl} alt="the works " />
                  </ImageWrapper>
                  <DeleteLogbook id={id} imageUrl={imageUrl} />
                </Textcontent>
              </Row>
            </Wrapper>
          ))
        )}
      </Container>
    </>
  );
}

export default AddLogbook;
const Container = styled.div`
  border: 4px solid white;
  background-color: white;

  margin: 2px;
  padding: 1rem;
  background: #fff;
  h1 {
    text-align: center;
  }
`;
const Wrapper = styled.div`
  background-color: white;
`;
const Row = styled.div`
  border: 4px solid white;
`;
const Textcontent = styled.div`
  border: 4px solid white;
  text-align: center;
`;
const ImageWrapper = styled.div`
  border: 4px solid white;
  width: 50%;
  height: 50%;
  margin: auto;

  img {
    border: 4px solid white;

    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
    border-radius: 12px;
  }
`;
