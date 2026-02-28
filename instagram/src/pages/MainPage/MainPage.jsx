import RightComponent from "./RightComponent/RightComponent"
import LeftComponent from "./LeftComponent/LeftComponent"
import FooterComponent from "./FooterComponent/FooterComponent"
import LoginPage from "../LoginPage/LoginPage"

import { useState } from "react"

const MainPage = () => {



    const [leftState, setLeftState] = useState('');

    let leftComponent;
    if (leftState == "login") {
      leftComponent = <LoginPage setLeftState={setLeftState} />;
    } else {
      leftComponent = <LeftComponent setLeftState={setLeftState} />;
    }
    console.log(leftState)
    return (
      <div>
        <div style={{ display: "flex" }}>
          <RightComponent />
          {leftComponent}
        </div>
        <FooterComponent />
      </div>
    );
}

export default MainPage