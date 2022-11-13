import Image from "next/image";
import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Image src="/firebaseImage.png" height={200} width="200" />
        <Circle size={60} color="#ffcb2b" />
      </div>
    </center>
  );
};

export default Loading;
