//company in abuja and their location
abuja = [
  {
    computer: [
      { name: "a group", location: "opposite adamu house" },
      { name: "b group", location: "opposite adamu house" },
      { name: "c group", location: "opposite adamu house" },
      { name: "d group", location: "opposite adamu house" },
      { name: "e group", location: "opposite adamu house" },
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
lagoes = [
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

// student record to test for codition
name = "emma";
course = "computer";
state = "abuja";
//testing for only law
name = "emma";
course = "law";
state = "abuja";

// condition for checking were to post the individual based on the location
if (course == "computer" && state == "abuja") {
  console.log("yes");
  const onlyabuja = abuja[0].computer;
  const newit = onlyabuja[Math.floor(Math.random() * onlyabuja.length)];
  console.log(newit);
  address = newit.location;
  companyName = newit.name;
  console.log("name is", companyName, " address", address);
} else if (course == "law" && state == "abuja") {
  console.log("yes");
  const onlylaw = abuja[1].law;
  const newit = onlylaw[Math.floor(Math.random() * onlylaw.length)];
  console.log(newit);
  address = newit.location;
  companyName = newit.name;

  console.log("name is", companyName, " address", address);
}

//checking for courses
abuja[0].computer;
// random values
radarray[Math.floor(Math.random() * radarray.length)];

// using funtion
const placeForIt = (course, state) => {
  if (course == "computer" && state == "abuja") {
    console.log("yes for computer science");
    const onlyabuja = abuja[0].computer;
    const newit = onlyabuja[Math.floor(Math.random() * onlyabuja.length)];
    console.log(newit);
    address = newit.location;
    companyName = newit.name;
    console.log("name is", companyName, " address", address);
    return newit;
  } else if (course == "law" && state == "abuja") {
    console.log("yes for law");
    const onlylaw = abuja[1].law;
    const newit = onlylaw[Math.floor(Math.random() * onlylaw.length)];
    console.log(newit);
    address = newit.location;
    companyName = newit.name;

    console.log("name is", companyName, " address", address);
    return newit;
  } else if (course == "law" && state == "lagoes") {
    console.log("yes for law");
    const onlylaw = lagoes[1].law;
    const newit = onlylaw[Math.floor(Math.random() * onlylaw.length)];
    console.log(newit);
    address = newit.location;
    companyName = newit.name;

    console.log("name is", companyName, " address", address);
    return newit;
  }
};

//checking restructuring to test sha

const placeIt = (course, state) => {
  if (state == "abuja") {
    if (course == "computer") {
      console.log("yes for computer science");
      const onlycomputer = abuja[0].computer;
      const newit =
        onlycomputer[Math.floor(Math.random() * onlycomputer.length)];
      console.log(newit);
      address = newit.location;
      companyName = newit.name;
      console.log("name is", companyName, " address", address);
      return newit;
    } else if (course == "law") {
      console.log("yes for law");
      const onlylaw = abuja[1].law;
      const newit = onlylaw[Math.floor(Math.random() * onlylaw.length)];
      console.log(newit);
      address = newit.location;
      companyName = newit.name;

      console.log("name is", companyName, " address", address);
      return newit;
    }
  } else if (state == "lagoes") {
    if (course == "computer") {
      console.log("yes for computer science");
      const onlycomputer = lagoes[0].computer;
      const newit =
        onlycomputer[Math.floor(Math.random() * onlycomputer.length)];
      console.log(newit);
      address = newit.location;
      companyName = newit.name;
      console.log("name is", companyName, " address", address);
      return newit;
    } else if (course == "law") {
      console.log("yes for law");
      const onlylaw = lagoes[1].law;
      const newit = onlylaw[Math.floor(Math.random() * onlylaw.length)];
      console.log(newit);
      address = newit.location;
      companyName = newit.name;

      console.log("name is", companyName, " address", address);
      return newit;
    }
  }
};

placeIt("law", "lagoes");
placeIt("law", "lagoes");
placeIt("law", "lagoes");
placeIt("law", "lagoes");

//algorithm for checking if whether email is in database of the administrator

bioInfo = [
  { name: "synergy group", location: "opposite adamu house" },
  { name: "Roy group", location: "opposite adamu house" },

  { name: "dd group", location: "opposite adamu house" },
  { name: "ee group", location: "opposite adamu house" },
  { name: "c group", location: "opposite adamu house" },
];
fireLogin = [
  { name: "aa group", location: "opposite adamu house" },
  { name: "bb group", location: "opposite adamu house" },
  { name: "cc group", location: "opposite adamu house" },
  { name: "dd group", location: "opposite adamu house" },
  { name: "ee group", location: "opposite adamu house" },
  { name: "c group", location: "opposite adamu house" },
];

let dname = [...bioInfo.map((d) => d.name)];
console.log(dname);
//fireLogin.map((d, i) => d.name == bioInfo[i]);
let output = fireLogin.map((d, i) => {
  if (d.name == dname[i]) {
    console.log("same name here");
  }
});

email = fireLogin.map((d, i) => d.name).find((e, i) => e == dname[i]);

emailCheck = fireLogin
  .map((d, i) => d.name)
  .findIndex((email) => email == "c group");

//another way to compared two value
let arr1 = ["Dog", "Cat", "Monkey", "Zebra", "Goat", "Goose"];
let arr2 = ["Zebra", "Goat"];
const result = arr2.map((searchTerm) =>
  arr1.findIndex((compareTerm) => compareTerm === searchTerm)
);
console.log(result);
emaiavailable = arr2.map((dt) => arr1.findIndex((e) => e == dt));
emailavalable2 = arr2.map((dt) => arr1.find((e) => e == dt));

zz = fireLogin
  .map((d) => d.name)
  .map((dt) => dname.find((e) => e == dt))
  .filter((ite) => ite != undefined);
