import React, { Component } from "react";
import { PageProps } from "gatsby";
import { Link } from "gatsby";

import styled from "@emotion/styled";
import Layout from "./layout";
import Button from "./common/button";
import Title from "./common/title";
import Block from "./common/block";
import Header from "./header";

const Team = require("../images/banner_background_image.svg") as string;
const PolygonPath = require("../images/Polygon 1.svg") as string;
const Logo1 = require("../images/1.svg") as string;
const Logo2 = require("../images/2.svg") as string;
const Logo3 = require("../images/3.svg") as string;
const Services_1 = require("../images/Services_1.svg") as string;
const Services_2 = require("../images/Services_2.svg") as string;
const Services_3 = require("../images/Services_3.svg") as string;
const Services_4 = require("../images/Services_4.svg") as string;
const Services_5 = require("../images/Services_5.svg") as string;
const Services_6 = require("../images/Services_6.svg") as string;
const BrandImgPath = require("../images/image1.svg") as string;

const Banner = styled.div`
  &.bgImage {
    background: url(${Team}) top center no-repeat;
    background-size: cover;

    @media (max-width:860px){
    }
  }
  
  &.bgShade {
    background: rgba(0, 0, 0, 0.66);
    
    @media (max-width:360px){
      
    }
  }
`;

const BannerContent = styled.div`
  padding: 100px 0;
  max-width: 80%;
  margin: 0 auto;
  @media (max-width:860px){
    padding:60px 0;
  }
`;

const ContentOne = styled(Title)`
  width: 800px;
  color: #ffffff;
  padding: 100px 0 30px;
  
  @media (max-width:860px){
    width: auto;
    font-size: 30px;
    line-height: 1.5;
  }
  
  @media (max-width:480px){
    font-size: 25px;
    padding: 50px 0 30px;
  }
`;

const ContenTwo = styled.div`
  max-width: 724px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 46px;
  color: #ffffff;
  
  @media (max-width:480px){
    font-size: 20px;
    line-height: 1.5;
  }
`;
const ContentThree = styled(Button)`
  background: #0078D7;
  border-radius: 100px;
  margin: 100px 0 50px;
  
  @media (max-width:480px){
    margin: 30px 0 0;
  }
`;

const MenuItem = styled(Link)`
display:none;
@media (max-width:860px){
  display:block;
  text-decoration:none;
}
`;

const CareerButton = styled(Button)`
display:none;
@media (max-width:860px){
  display:block;
  font-family: Nunito;
  font-style: normal;
  font-weight:normal;
  font-size: 24px;
  line-height:1.5;
  text-decaration:none;
  z-index:-4;
  background:#0078D7;
  border-radius: 100px;
  margin: 50px 0 50px;
}
`;
const Container = styled.div`
  width: 106px;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  padding-bottom: 40px;
  
  @media (max-width:480px){
    display: none;
  }
`;

const ScrollDown = styled.div`
  width: 106px;
  height: 50px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 50px;
  color: white;
`;

const Polygon = styled.img`
  width: 24px;
  height: 24px;
  
  top: 38px;
  border-radius: 3px;
`;

const WhyContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top:100px;
  padding-bottom: 70px;
  @media (max-width: 1200px){
    width: 100%;
    margin-top:10px;
    padding: 0 30px 70px;
  }
`;

const WhyTitle = styled(Title)`
  color: #000000;
  text-align: center;
  margin-top:0px;
  padding: 50px 0;
  
  @media (max-width: 800px){
    font-size: 30px;
    line-height: 1;
  }
`;
const BlockContainer = styled.div`
  display:flex;
  margin-top:100px;
  
  @media (max-width: 800px){
    flex-direction: column;
    margin-top:30px;
  }
`;
const BlockLogo = styled.img`
  width: 100px;
  margin: 53px 0 0 49px;
`;

const BlockTitle = styled.h2`
  margin-left:5px;
  margin: 50px 0 0 15px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
  color: #363636;
  
  @media (max-width: 1200px){
    font-size: 25px;
  }
`;

const BlockDescription = styled.p`
  margin:15px;
  padding-bottom: 40px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 1.5;
  color: #000000;
`;

const ServicesContainer = styled.div`
  background-color: #e5e5e5;
  margin-top:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-bottom: 80px;
`;

const ContainerTitle = styled(Title)`
  color: #000000;
  text-align: center;
  margin:90px;
  
  @media (max-width: 800px){
    font-size: 30px;
    margin:30px;
    line-height: 1;
  }
`;

const SubContainer = styled.div`
  max-width: 941px;
  display: flex;
  margin-top:50px;
  
  @media (max-width: 941px){
    padding: 0 10px;
    margin-top:30px;
  }
  
  @media (max-width: 480px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ServiceContentContainer = styled.div`
  flex: 1;
`;

const ServiceLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 50px;
  
  @media (max-width: 480px){
    margin-right: 0;
    margin-bottom: 20px;
    
  }
`;

const ServiceTitle = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 1.5;
  color: #363636;
  margin-bottom: 30px;
`;

const ServiceDesc = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 30px
`;

const More = styled(Link)`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  color: #0078d7;
`;

const BrandContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  margin-top:100px;
  padding-bottom: 70px;
  dispaly:flex;
  flex-direction:column;
  text-align: center;
  justify-content:center;
`;

const BrandTitle = styled(Title)`
 padding:0px;
  
  @media (max-width: 700px){
    font-size: 30px;
    line-height: 1.5;
  }
`;
const BrandImg = styled.img`
  width: 100%;
  margin-top:100px;

`;

const SlideContainer = styled.div`
  background: #F3F3F3;
`;

class Home extends Component {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Banner className="bgImage">
          <Banner className="bgShade">
            <BannerContent id="bContent">
              <Header index={0}></Header>
              <ContentOne>
                Over decade experience with poly
                skills engineering specialists.
              </ContentOne>
              <ContenTwo>
                Working with companies and individuals to solve hard problems
                with a robust, pragmatic approach and the right technology.
              </ContenTwo>
              <ContentThree width="273px" height="60px" bgColor="#0078D7">
                WORK WITH US
              </ContentThree>
              <MenuItem to={"/careers"}>
                <CareerButton width="273px" height="60px" bgColor="#0078D7">CAREERS</CareerButton>
              </MenuItem>
            </BannerContent>
            <Link to={"#title"}>
              <Container>
                <ScrollDown>SCROLL&nbsp;DOWN</ScrollDown>
                <Polygon src={PolygonPath}></Polygon>
              </Container>
            </Link>
          </Banner>
        </Banner>

        <WhyContainer>
          <WhyTitle id="title">Why tech.at.core ?</WhyTitle>
          <BlockContainer>
            <Block>
              <BlockLogo src={Logo1} />
              <BlockTitle>Startup mindset</BlockTitle>
              <BlockDescription>
                We enjoy bringing our years of experience into  the startup world,   and we worked with many
                startup teams, so we understand the startup realities, and we know what to expect and how to look into their processes, technology, and product quite well.
              </BlockDescription>
            </Block>
            <Block>
              <BlockLogo src={Logo2} />
              <BlockTitle>Our strategy</BlockTitle>
              <BlockDescription>
                There is no single solution, strategy, or approach for any corporates, startup, or individuals. Every situation is unique,
                and one should approach to solve the problem based on the overall context, situation, and resources at hand. Fail-fast approach, this is where pragmatism comes, and we come into play to help start-ups and corporate to bring this mindset.
              </BlockDescription>
            </Block>
            <Block>
              <BlockLogo src={Logo3} />
              <BlockTitle>Pragmatic thinking</BlockTitle>
              <BlockDescription>
                Technology is the one that shows the direction and brings the business strategy into reality. We are the true believer in
                technology as a core strategy to create world-class innovative and unique solutions to be the outliers in the market.
              </BlockDescription>
            </Block>
          </BlockContainer>
        </WhyContainer>

        <ServicesContainer>
          <ContainerTitle>Our services</ContainerTitle>
          <SubContainer>
            <ServiceLogo src={Services_1}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>
                Product inception & Engineering practices
              </ServiceTitle>
              <ServiceDesc>
                We help you to analyze and start the discovery phase of the
                project and develop a shared understanding.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_2}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>
                Tech Advisory, Solution Design &amp; Architecture
              </ServiceTitle>
              <ServiceDesc>
                With the fact “best result comes from the real experts,” we are
                true poly-skilled experts with the diversified team gives you the
                standard design & architecture.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_3}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>Tech Analysis Report</ServiceTitle>
              <ServiceDesc>
                We help your business take advantage of the emerging technology
                and provide an extremely quality review of upcoming technology and
                feasibility reports.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_4}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>Software Development</ServiceTitle>
              <ServiceDesc>
                With our specialized engineering skills and years of experience,
                we provide best software development solutions and resources.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_5}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>AI Consulting</ServiceTitle>
              <ServiceDesc>
                We help your business take advantage of the emerging technology
                and provide an extremely quality review of upcoming technology and
                feasibility reports.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
          <SubContainer>
            <ServiceLogo src={Services_6}></ServiceLogo>
            <ServiceContentContainer>
              <ServiceTitle>Tech & Engg Due Diligence</ServiceTitle>
              <ServiceDesc>
                Being founders and after working with various startups, we know
                startup pulse well to enable the bridge between founders and VCs.
              </ServiceDesc>
              <More to={"#"}>more...</More>
            </ServiceContentContainer>
          </SubContainer>
        </ServicesContainer>

        <BrandContainer>
          <BrandTitle>Brands we worked</BrandTitle>
          <BrandImg src={BrandImgPath}></BrandImg>
        </BrandContainer>
        <SlideContainer></SlideContainer>
      </Layout>
    );
  }
}

export default Home;
