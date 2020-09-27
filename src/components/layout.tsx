import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Helmet from "react-helmet";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

const PageStyle = styled.div`
  position: relative;
  width:100%;
  max-width: 1920px;
  height: 7091px;
  

  background: #ffffff;

  @media(max-width: 360px){
    position: relative;
    height: 6598px;
    
    background: #FFFFFF;

  
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A group of software enthusiasts to do projects in great way"
        />
        <meta name="author" content="tech.at.core"></meta>
        <title>tech.at.core</title>
      </Helmet>
      <PageStyle>
        <main>{children}</main>
        <Footer></Footer>
      </PageStyle>
    </>
  );
};

export default Layout;
