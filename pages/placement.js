import styled from "styled-components";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
// This gets called on every request
export async function getServerSideProps() {
  const bioRef = collection(db, "Biodata");
  const q = query(bioRef, orderBy("createdAt"));
  const querySnapshot = await getDocs(q);
  const biodata = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(biodata);

  // Pass data to the page via props
  return { props: { biodata: JSON.stringify(biodata) } };
}

const Placement = ({ biodata }) => {
  const [place, setPlace] = useState([]);
  // using javascript to check the output
  useEffect(() => {
    // {
    // var store = [];
    var store = JSON.parse(biodata).map((doc) => {
      // console.log(doc.course);
      //console.log(doc.name);
      //console.log(doc.state);

      return placeIt(doc.course, doc.state);
      // console.log(store);
      // storePlaceit = { ...store };

      // console.log(functionPlaceit);

      console.log("leaving the loops");

      // console.log(place);
    });
    //console.log("placing showing the data");
    //console.log(place);
    //setPlace(store);
    console.log("viewing all the placement from the store");
    //console.log(place);
    console.log(store);
    setPlace(store);
    //console.log(" leaving of placing showing the data");

    //  }
  }, []);
  console.log("viewing all the placement from the store outside useEffect");
  console.log(place);

  var rand = require("random-seed").create();
  //var n = rand(50);
  console.log("random number generator newinstall");
  rand.initState();
  var n1 = rand(10); // n1 === 58
  //var n2 = rand(50); // n2 === 26
  // rand.initState(); // re-init
  //var n3 = rand(100);
  //console.log(n);
  //console.log(n1);
  //console.log(n2);
  //console.log(n3);
  console.log("random number generator loop");
  for (let i = 0; i < 3; i++) {
    //  console.log(n);
    console.log(n1);
  }

  return (
    <div>
      <p>this is the page for showing placement of student</p>
      {JSON.parse(biodata).map((doc, index) => (
        <>
          <Container id={doc.id}>
            <p>{doc.name}</p>
            <p>{doc.course}</p>
            <p>{doc.state}</p>
            <p>{index}</p>
            <p>name of company {place[index]?.name}</p>
            <p>company location {place[index]?.location}</p>
          </Container>
        </>
      ))}
    </div>
  );
};

export default Placement;

const Container = styled.div`
  border-bottom: 4px solid blue;
`;

//all office and there organization
//company in abuja and their location
const ondo = [
  {
    computer: [
      { name: "a group", location: "opposite adamu house ondo" },
      { name: "b group", location: "opposite adamu house  ondo" },
      { name: "c group", location: "opposite adamu house  ondo" },
      { name: "d group", location: "opposite adamu house  ondo" },
      { name: "e group", location: "opposite adamu house  ondo  ondo" },
      { name: "f group", location: "opposite adamu house" },
    ],
  },
  {
    law: [
      { name: "adamu firm", location: "vicent high way" },
      { name: "love firm", location: "vicent high way" },
      { name: "kiss firm", location: "vicent high way" },
    ],
  },
];

const lagoes = [
  {
    computer: [
      { name: "a tech group", location: "opposite adamu house lagoes " },
      { name: "a tech group", location: "opposite adamu house lagoes" },
      { name: " b tech group", location: "opposite adamu house lagoes" },
      { name: " c tech group", location: "opposite adamu house lagoes" },
      { name: "d tech group", location: "opposite adamu house lagoes" },
      { name: "e tech group", location: "opposite adamu house lagoes" },
      { name: "f tech group", location: "opposite adamu house lagoes" },
    ],
  },
  {
    law: [
      { name: "lagoes adamu firm", location: "vicent high way lagoes" },
      { name: "lagoes love firm", location: "vicent high way lagoes" },
      { name: "lagoes kiss firm", location: "vicent high way lagoes" },
    ],
  },
];

// algorithm for checking placement

//checking restructuring to test sha

const placeIt = (course, state) => {
  // var seedrandom = require("seedrandom");
  //var rng = seedrandom("hello world");

  //console.log(rng());
  console.log("random number generator newinstall");
  var rand = require("random-seed").create();
  rand.initState();
  // var n1 = rand(10)

  if (state == "ondo") {
    if (course == "computer science") {
      console.log("yes for computer science");
      const onlycomputer = ondo[0].computer;
      const newit =
        onlycomputer[Math.floor(Math.random() * onlycomputer.length)];

      // introducing random-seed function here
      // var rand = require("random-seed").create();
      // rand.initState();
      //console.log("random-seed in the placement fuction here below");
      //const newit = onlycomputer[rand(onlycomputer.length)];

      console.log("newit nin ondo state");
      console.log(newit);
      var address = newit.location;
      var companyName = newit.name;
      //console.log("name is", companyName, " address", address);
      return newit;
    } else if (course == "law") {
      console.log("yes for law");
      const onlylaw = abuja[1].law;
      const newit = onlylaw[Math.floor(Math.random() * onlylaw.length)];
      // console.log(newit);
      address = newit.location;
      companyName = newit.name;

      //console.log("name is", companyName, " address", address);
      return newit;
    }
  } else if (state == "lagoes") {
    if (course == "computer science") {
      console.log("yes for computer science");
      const onlycomputer = lagoes[0].computer;
      const newit =
        onlycomputer[Math.floor(Math.random() * onlycomputer.length)];
      //console.log(newit);
      address = newit.location;
      companyName = newit.name;
      //console.log("name is", companyName, " address", address);
      return newit;
    } else if (course == "law") {
      console.log("yes for law");
      const onlylaw = lagoes[1].law;
      const newit = onlylaw[Math.floor(Math.random() * onlylaw.length)];
      //console.log(newit);
      address = newit.location;
      companyName = newit.name;

      //console.log("name is", companyName, " address", address);
      return newit;
    }
  }
};
