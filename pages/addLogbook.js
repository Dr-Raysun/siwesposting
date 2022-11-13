import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db, auth } from "../firebase";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

function AddArticle() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const handlePublish = () => {
    {
      /** if (!formData.title || !formData.description || !formData.image) {
      alert("please fill all the fields");
      return;
    } */
    }
    if (!formData.title) {
      alert("fill in the title ");

      return;
    }
    if (!formData.description) {
      // do this
      alert("fill in the description");
      return;
    }
    if (!formData.image) {
      //do this
      alert("image field is empty ");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData(
          {
            title: "",
            description: "",
            image: "",
          },
          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            const articleRef = collection(db, `users/${user.uid}/Reports`);
            // const articleRef = collection(db, "Reports");
            addDoc(articleRef, {
              title: formData.title,
              description: formData.description,
              imageUrl: url,
              createdAt: Timestamp.now().toDate(),
            })
              .then(() => {
                toast("Article added successfully", { type: "success" });
                setProgress(0);
              })
              .catch((err) => {
                toast("erro adding article", { type: "error" });
              });
          })
        );
      }
    );
  };
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <h2>Daily report form</h2>

          <Close>
            <label htmlFor="">what day</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </Close>
          {/** description */}
          <Close>
            <label htmlFor="">Description of work done</label>
            <textarea
              rows="20"
              cols="50"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
          </Close>
          {/**image */}
          <Close>
            <label htmlFor="">Image evidence of work done</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="form-control"
              onClick={(e) => handleImageChange(e)}
            />
          </Close>
          <Close>
            {progress === 0 ? null : (
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped mt-2"
                  style={{ width: `${progress}%` }}
                >
                  {`uploading image${progress}%`}
                </div>
              </div>
            )}
            <Button>
              {" "}
              <button onClick={handlePublish}>publish</button>
            </Button>
          </Close>
        </Wrapper>
      </Container>
    </>
  );
}

export default AddArticle;
const Container = styled.div`
  border: 4px solid skyblue;
  // background-color: #18191a;
  background-color: smoke;
  color: black;
  display: flex;
  width: 100%;

  text-transform: uppercase;

  justify-content: center;
`;
const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  background-color: white;
  width: 100%;
  margin: 10% 30%;
  color: black;
  padding-top: 20px;
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Close = styled.div`
  border: 1px solid black;
  border-radius: 40px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  textarea {
    flex: 1;
  }

  input {
    flex: 1;
    height: 30px;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  button {
    background-color: black;
    color: white;

    text-align: center;
    height: 50px;
    width: 50px;
  }
`;
