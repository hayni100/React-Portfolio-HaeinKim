import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { Layout, theme, Icons } from "antd";
import { GithubOutlined, LinkedinOutlined, FacebookOutlined} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Layout
      className="layout"
      style={{
        background: "white",
      }}
    >
      <Header
        style={{
          fontSize: "2rem",
          background: "white",
        }}
      >
        HAEIN KIM - Full Stack Web Developer
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: "white",
          }}
        >
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          {renderPage()}
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <GithubOutlined style={{
          padding: "10px",
          fontSize: "30px"
        }} />
        <LinkedinOutlined style={{
          padding: "10px",
          fontSize: "30px"
        }} />
        <FacebookOutlined style={{
          padding: "10px",
          fontSize: "30px"
        }} />
      </Footer>
    </Layout>
  );
}
