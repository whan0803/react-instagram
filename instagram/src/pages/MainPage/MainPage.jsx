import RightComponent from "./RightComponent/RightComponent"
import LeftComponent from "./LeftComponent/LeftComponent"
import FooterComponent from "./FooterComponent/FooterComponent"

const MainPage = () => {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <RightComponent />
          <LeftComponent />
        </div>
        <FooterComponent />
      </div>
    );
}

export default MainPage