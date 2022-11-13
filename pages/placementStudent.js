import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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

const PlacementStudent = ({ biodata }) => {
  // listenin for the current user login
  const [user, loading] = useAuthState(auth);
  const [place, setPlace] = useState([]);

  // writin code to get only the biodata of the  current email login_in
  console.log("showing email only that is login");
  console.log("user login email is this", user.email);
  const userLoginBio = JSON.parse(biodata).filter((data) => {
    console.log("printing the userLoginBio");
    console.log(data.email);

    return data.email == user.email;
  });
  console.log("printing the userLoginBio");
  console.log(userLoginBio);

  // rewritteen useffect to suit just one user onluserLoginBio
  useEffect(() => {
    if (userLoginBio != "") {
      var store = placeIt(
        userLoginBio[0].course,
        userLoginBio[0].state,
        userLoginBio[0].id
      );
      console.log("showing output for onluserLoginBio one data");
      console.log(store);

      console.log("leaving the loops");

      console.log("viewing all the placement from the store");
      //console.log(place);
      console.log(store);
      setPlace(store);
      //console.log(" leaving of placing showing the data");

      // adding the random post to database
      const postedRef = doc(db, `posted/${userLoginBio[0].id}`);
      setDoc(
        postedRef,
        {
          name: userLoginBio[0].name,
          course: userLoginBio[0].course,
          state: userLoginBio[0].state,
          // id: userLoginBio[0].id,
          lastSeen: serverTimestamp(),
          email: userLoginBio[0].email,
          compName: store.name,
          compLocation: store.location,
        },
        { merge: true }
      );
    }
    // return

    //  }
  }, []);
  console.log("viewing all the placement from the store outside useEffect");
  console.log(place);

  return (
    <>
      <Navbar />
      <div>
        <PTagContainer>This is were you are posted</PTagContainer>

        {/** working on the current users onluserLoginBio at this point */}

        <Container>
          {userLoginBio != "" ? (
            <>
              <p>{userLoginBio[0].name}</p>
              {/**    <p>{userLoginBio[0].id}</p> */}
              <p>{userLoginBio[0].email}</p>
              <p>{userLoginBio[0].course}</p>
              <p>{userLoginBio[0].state}</p>
              <p>name of company: {place?.name}</p>
              <p>company location: {place?.location}</p>
            </>
          ) : (
            <p>
              no result found please contact your school to be recognize as an
              IT student
            </p>
          )}
        </Container>
      </div>
    </>
  );
};

export default PlacementStudent;

const Container = styled.div`
  border-bottom: 4px solid blue;
  padding: 20px;
  margin: 20px;
`;
const PTagContainer = styled.p`
  padding: 20px;
`;
//all office and there organization
//company in abuja and their location
const ondo = [
  {
    computer: [
      {
        name: "D2 GLOBAL COMPANY",
        location: "215, oyemekun road,, AKURE, Ondo",
      },
      {
        name: "VOKS Technologies",
        location:
          "opposite adamu house  ondoPlot 4, Road 13, Atipere Layout, Oda Road, Akure, Ondo",
      },
      { name: "Teqporte Cloud", location: "Ado Ekiti, Ado Ekiti, Ekiti" },
      {
        name: "GoGlobal Solutions",
        location: "1, GoGlobal Hub, Beside Takeaway, Adamolekun, Adebayo, Ado",
      },
      {
        name: "Shokenny Solutions Ltd",
        location:
          "Opposite School of Nursing (University of medical sciences), after Dome along Igbatoro road, Akure, Ondo State",
      },
      {
        name: "SoftAbility Services Limited",
        location: "132A, New Hospital Road, Akure, Ondo Nigeria",
      },
      {
        name: "CIT Centre Nigeria Limited",
        location:
          "Suit 26 Ebenzer Shpping Plaza Araromi Street, Akure, Ondo Nigeria",
      },
      {
        name: "Femtun Computer Services",
        location:
          "Shop 23 FUTA Road off Arakale Road, Akure, Ondo State Nigeria",
      },
      {
        name: "Sabi Programmers",
        location: "TE Hub Building, FUTA Junction, Akure, Ondo",
      },
      {
        name: "Sky Technologies",
        location: "Futa Road by Embassy Junction, Akure, Ondo Nigeria",
      },
    ],
  },
  {
    law: [
      {
        name: "O. Oluwadare Aguda",
        location: "Elijah Aguda Close, Ondo Road, Akure, Ondo",
      },
      {
        name: "Afolabi Omobomi & Co",
        location: "42 Hospital Road, Akure, Ondo",
      },
      {
        name: "Akin Ogunsakin And Company",
        location:
          " 1, Oba-Ile Housing Estate, Q Road, Akoko North West, Ondo, Nigeria",
      },
      {
        name: "Ademuyiwa Adeniyi And Company",
        location: "104A, New Hospital Road, Akure, Akure North, Ondo, Nigeria",
      },
      {
        name: "Bam Oxygen And Company",
        location:
          "18, Okeruku Street Ilara mokin., Ilara Mokin, Ifedore, Ondo, Nigeria",
      },
      {
        name: "Fagbemi Bode Akinkoye And Company",
        location: "59, Yaba Street, Ondo Town, Ondo West, Ondo, Nigeria",
      },
      {
        name: "Topminds",
        location: "Oye Akinnawonu Street, Ade-Super Junction, Ondo City 23401",
      },
      {
        name: "Bright & Bright – Legal Practitioners & Consultants",
        location:
          "RESOLUTION LAW OFFICE, Suite 20, Main Avenue (North), Federal Housing Estate (Shagari Village), Igba, Ondo, Ondo State, Ondo City",
      },
      {
        name: "Lade Fasua and Associates",
        location: "Oba Adesida Road, Akure, Nigeria",
      },
      {
        name: "Boluwaji Kunlee and Co. Legal Practitioners",
        location: "vOba Adesida Road, Akure, Nigeria",
      },
    ],
  },
];

const lagoes = [
  {
    computer: [
      {
        name: "Dataflex Nigeria Limited",
        location: " 227B, Muri Okunola Street, Victoria Island Lagos, Nigeria ",
      },
      {
        name: "INITS Limited",
        location: "Office Address: 16, Majaro Street, Onike, Yaba, Lagos",
      },
      {
        name: "Calm Global Information Technology Ltd",
        location: "118B Ilupeju Street, Dolphin Estate, Ikoyi Lagos",
      },
      {
        name: " Coure Software and Systems Limited",
        location:
          "15B Joseph Harden Street, 3rd Floor, Eleganza House, Lagos Island, Lagos, Nigeria",
      },
      {
        name: "Siscomedia Limited",
        location:
          "Block 9, Flat 2, Alhaji, Lsdpc Duplex, Alhaji Masha rd, Masha, Surulere, Lagos, Nigeria",
      },
      {
        name: "MciiRoy Projects Limited",
        location: "14a Bayo Adejonwo St, Maryland 100211, Lagos",
      },
      {
        name: "Chronicles Software Development Company",
        location:
          "7 Akintoye Shogunle Street, Off Awolowo Way, Ikeja, Lagos, Nigeria., Lagos, Ikeja, 100271, Lagos",
      },
    ],
  },
  {
    law: [
      {
        name: "Bam & Gad Solicitors",
        location: "Plot 17/19 Allen Avenue, Ikeja, Lagos Nigeria",
      },
      {
        name: "Paradigm-Stone Attorneys",
        location:
          "1b, Etim Inyang Crescent,Off Muri Okunola Street, Victoria Island, Lagos",
      },
      {
        name: "Abdulai, Taiwo & Company",
        location: "278 Ikorodu Road, Yaba, Lagos Nigeria",
      },
      {
        name: "Agabi, Shinaba, Ogon & Co",
        location: "136 Awolowo Road 3rd Floor, SW Ikoyi, Lagos Nigeria",
      },
      {
        name: "Aluko & Oyebode",
        location: "1 Murtala Muhammed Drive, Ikoyi, Lagos Nigeria",
      },
      {
        name: "Fidelity Law Firm",
        location: "8B Lalupon Close Off Keffi Street, S.W Ikoyi, Lagos Nigeria",
      },
      {
        name: "G. Elias & Co",
        location: "6 Broad Street, Marina Lagos Island, Lagos Nigeria",
      },
      {
        name: "George Etomi & Partners",
        location:
          "1b Tiamiyu Belo-Osagie Avenue, Parkview Estate Ikoyi, Lagos Nigeria",
      },
      {
        name: "Giwa-Osagie & Co",
        location: "4 Lalupon Close Off Keffi Street, S.W Ikoyi, Lagos Nigeria",
      },
      {
        name: "GMO Legal",
        location:
          "Sapphire House 12B Bashorun Okusanya Avenue Off Admiralty Road, Lekki Peninsula Phase 1 Lekki, Lagos Nigeria",
      },
    ],
  },
];

// algorithm for checking placement

//checking restructuring to test sha

const placeIt = (course, state, id) => {
  // var seedrandom = require("seedrandom");
  //var rng = seedrandom("hello world");
  console.log("the data id is this below");
  console.log(id);

  if (state == "ondo") {
    if (course == "computer science") {
      console.log("yes for computer science");
      const onlycomputer = ondo[0].computer;
      // const newit =
      // onlycomputer[Math.floor(Math.random() * onlycomputer.length)];
      // console.log(newit);

      // introducing random-seed function here
      var seed = id;
      var rand = require("random-seed").create(seed);
      //rand.initState();
      console.log("random-seed in the placement fuction here below");
      const newit = onlycomputer[rand(onlycomputer.length)];

      // console.log(rng());
      var address = newit.location;
      var companyName = newit.name;
      //console.log("name is", companyName, " address", address);
      return newit;
    } else if (course == "law") {
      console.log("yes for law");
      const onlylaw = abuja[1].law;
      //   const newit = onlylaw[Math.floor(Math.random() * onlylaw.length)];
      // console.log(newit);
      //
      var seed = id;
      var rand = require("random-seed").create(seed);

      console.log("random-seed in the placement fuction here below");
      const newit = onlylaw[rand(onlylaw.length)];

      //
      address = newit.location;
      companyName = newit.name;

      //console.log("name is", companyName, " address", address);
      return newit;
    }
  } else if (state == "lagoes") {
    if (course == "computer science") {
      console.log("yes for computer science");
      const onlycomputer = lagoes[0].computer;
      // const newit =
      // onlycomputer[Math.floor(Math.random() * onlycomputer.length)];

      var seed = id;
      var rand = require("random-seed").create(seed);

      console.log("random-seed in the placement fuction here below");
      const newit = onlycomputer[rand(onlycomputer.length)];

      //console.log(newit);
      address = newit.location;
      companyName = newit.name;
      //console.log("name is", companyName, " address", address);
      return newit;
    } else if (course == "law") {
      console.log("yes for law");
      const onlylaw = lagoes[1].law;
      // const newit = onlylaw[Math.floor(Math.random() * onlylaw.length)];

      var seed = id;
      var rand = require("random-seed").create(seed);

      console.log("random-seed in the placement fuction here below");
      const newit = onlylaw[rand(onlylaw.length)];

      //console.log(newit);
      address = newit.location;
      companyName = newit.name;

      //console.log("name is", companyName, " address", address);
      return newit;
    }
  }
};
