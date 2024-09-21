import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import HeaderComponent from "./components/header/Header";
import ContentComponent from "./components/body/ContentComponent";

function App() {
  return (
    <Layout>
      <Header
        className="border-b-[1px] shadow-sm  border-gray-200 px-2 md:px-5 "
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "white",
        }}
      >
        <HeaderComponent />
      </Header>
      <Content>
        <ContentComponent />
      </Content>
    </Layout>
  );
}

export default App;
