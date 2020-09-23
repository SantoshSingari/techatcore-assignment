import React, { Component } from "react";
import Layout from "./layout";
import styled from "@emotion/styled";
import Title from "./common/title";

const valuepath = require("../images/value.svg") as string;
const tickpath = require("../images/tick.svg") as string;
const imagepath = require("../images/image.svg") as string;
const Jay = require("../images/team/Jay.png") as string;
const Prasad = require("../images/team/prasad.jpg") as string;
const Raju = require("../images/team/RajuSidda.jpg") as string;
const Chetan = require("../images/team/ChetanBandari.png") as string;
const Vijay = require("../images/team/VijayPratap.jpg") as string;
const Vandana = require("../images/team/VandanaKumari.jpg") as string;
const Shiva = require("../images/team/ShivaSai.jpg") as string;
const Sushma = require("../images/team/Sushma.jpg") as string;
const Ravalika = require("../images/team/RavalikaKesari.jpeg") as string;
const Preethi = require("../images/team/Preethi.jpg") as string;
const Vivek = require("../images/team/Vivek.jpg") as string;

const BgShade = styled.div`
  position: absolute;
  max-width: 1920px;
  width:100%;
  height: 429px;
  left: 0px;
  top: 0px;
  display:flex;
  align-item:center;

  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
`;

const HeadTitle = styled(Title)`
  position: absolute;
  width: 202px;
  height: 65px;
  left: 40%;
  top: 247px;

  color: #ffffff;
`;

const WhyContainer = styled.div`
  position:absolute;
  max-width: 817px;
  width:60%;
  height: 534px;
  left:25%;
  display:flex;
  top: 597px;
  text-align:center;
`;

const WhyTitle = styled(Title)`
  position: absolute;
  max-width: 817px;
  width:60%;
  height: 534px;
  left: 172px;
  top: 0px;

  color: #000000;
`;

const Desc = styled.p`
  position: absolute;
  width: 817px;
  height: 333px;
  left: 0px;
  top: 201px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  color: #000000;
`;

const Break = styled.br``;

const ValuesContainer = styled.div`
  position:absolute;
  max-width: 1920px;
  width:100%;
  height: 945px;
  left: 0px;
  top: 1286px;
  display: flex;
  flex-direction:column;
  padding-right:143px;
  padding-left:143px;
`;

const ValueTitle = styled(Title)`
  position: absolute;
  max-width: 276px;
  height: 64px;
  left: 40%;
  top: 183px;
  color: #000000;
`;

const ValueIncontainer = styled.div`
postion:absolute;
max-width:1920px;
width:100%;
height:505px;
margin-top:400px;
display: flex;
flex-direction:row;
justify-content:space-around;
`;
const ValueBlock = styled.div`
postion:relative;
max-width:600px;
width:100%;
height:505px;
top:0px;
display: flex;
margin-right:50px;
align-items:left;
flex-direction:column;
`;
const ValueImg = styled.img`
  // position: absolute;
  max-width: 60px;
  width:100%;
  height: 60px;
  margin-top:16px;
`;


const ValueOne = styled.div`
  // position: absolute;
  max-width: 226px;
  width:100%;
  height: 72.46px; 
  margin-top:50px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
  color: #363636;
`;

const ValueDesc = styled.p`
  // position: absolute;
  max-width: 437px;
  width:100%;
  height: 81.35px;
  margin-top: 50px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;

  /* or 160% */

  color: #000000;
`;

const TechContainer = styled.div`
position: absolute;
max-width: 1661px;
width:100%;
height: 412px;
top: 2415px;
display:flex;
padding:50px;
flex-direction:column;
align-items:center;

`;
const TechTitle = styled.div`
  position: absolute;
  max-width: 478px;
  width:100%
  height: 64px;
  display:flex;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 50px;
  color: #000000;
`;

const TickContainer = styled.div`
position:absolute;
max-width:1920px;
width:100%;
height:262px;
top:150px;
display:flex;
flex-wrap:wrap;
margin-right:50px;
`;

const TechBox = styled.div`
postion:absolute;
max-width:400px;
width:100%;
margin:20px;
height:60px;
display:flex;
flex-direction:row;
align-items:center;
`;

const TechTick = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  // display:flex;
  // padding:10px;
`;

const TechDesc = styled.div`
  position: absolute;
  max-width: 226px;
  height: 56px;
  display:flex;
  margin-left:50px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
  color: #363636;
`;

const TeamContainer = styled.div`
  position: absolute;
  max-width: 1920px;
  width:100%;
  height: 2087px;
  left: 0px;
  top: 3046px;
  background: #e5e5e5;
  display:flex;
  flex-direction:column;
  align-items-center;
`;


const TeamTitle = styled.div`
  position: absolute;
  max-width: 315px;
  width:100%;
  left:40%;
  justify-content:center;
  height: 63.56px;
  top: 183.02px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 50px;
  /* or 93% */

  color: #000000;
`;
const MemberContainer = styled.div`
position:absolute;
max-width:1920x;
width:100%;
height:1664px;
display:flex;
flex-wrap:wrap;
top:250px;

`;

const TeamBox = styled.div`
position: relative;
max-width: 368px;
width:100%;
height: 453px;
display:flex;
margin-left:80px;
flex-direction:column;
align-items:left;
`;

const TeamMember = styled.img`
  position: absolute;
  max-width: 368px;
  width:100%;
  height: 342px;
  background: #ffffff;
`;

const MemberName = styled.div`
  position: absolute;
  max-width: 226px;
  width:100%;
  height: 72.46px;
  top:366px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
  color: #363636;
`;


const TechName = styled.div`
  position: absolute;
  max-width: 152px;
  width:100%;
  height: 38px;
  top:415px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
`;

const BlogContainer = styled.div`
  position: absolute;
 max-width: 1641px;
 width:100%;
  height: 979px;
  display:flex;
  flex-direction:column;
  align-items-center;
  top: 5319px;
  border:5px solid red;
`;

const BlogTitle = styled.div`
  position: absolute;
  max-width: 640px;
  height: 94px;
  top:0px;



  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 46px;
  color: #363636;
`;
const Container = styled.div`
position:absolute;
max-width:1641px;
width:100%;
height:718px;
margin-top:261px;
display:flex;
flex-wrap:wrap;
`;
const SubBlog = styled.div`
  position:absolute;
  max-width: 791px;
  height: 718px;
  display:flex;
margin-top:5px;
margin-right:2px;
margin-left:5px;
flex-direction:column;
align-items:left;
`;

const Group = styled.div`
  position: absolute;
  max-width: 680px;
  height: 285px;
  left: 55px;
  top: 57px;

  background: #1e3658;
  border: 1px solid #1e3658;
  box-sizing: border-box;
`;

const ImageLogo = styled.img`
  position: absolute;
  max-width: 506px;
  height: 275px;
  left: 76px;
  top: 5px;
`;



const Time = styled.div`
  position: absolute;
  max-width: 152px;
  height: 38px;
  left: 55px;
  top: 508px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
`;

const BlogMainTitle = styled(Title)`
  position: absolute;
  max-width: 128px;
  width:100%;
  height: 64px;
  left: 756px;
  top: 377px;

  color: #000000;
`;

const BlogName = styled.div`
  position: absolute;
  max-width: 253px;
  height: 63px;
  left: 55px;
  top: 579px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;

const Department = styled.div`
  position: absolute;
  max-width: 152px;
  height: 38px;
  left: 55px;
  top: 620px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
`;

export default class career extends Component {
  render() {
    return (
      <Layout>
        <BgShade>
          <HeadTitle>Careers</HeadTitle>
        </BgShade>
        <WhyContainer>
          <WhyTitle id="title">Why&nbsp;tech.at.core&nbsp;?</WhyTitle>
          <Desc>
            We are passionate Software specialist across various disciplines. We
            value quality of work and challenge continuous learning throughout
            the our journey.
            <Break></Break>
            <Break></Break>
            At tech.at.core, we believe human-first approach and you will get
            all the freedom and flexibility to work in your style and technology
            experiments.
            <Break></Break>
            <Break></Break>
            We help with the right mentorship program to have a right career
            path, we provide continuousone-to-one feedback sessions with your
            team and mentor.
            <Break></Break>
            <Break></Break>
            We believe, at tech.at.core you never get bored with the work and
            challenges will have.
          </Desc>
        </WhyContainer>
        <ValuesContainer>
          <ValueTitle>Our values</ValueTitle>
          
          <ValueIncontainer>
            
            <ValueBlock>
          <ValueImg src={valuepath}></ValueImg>
          <ValueOne>
            Being&nbsp;Human
          </ValueOne>
          <ValueDesc>
            We are human-first approach company and everything comes next.
          </ValueDesc>
          </ValueBlock>
         
          <ValueBlock>
          <ValueImg src={valuepath}></ValueImg>
          <ValueOne>
            Unblock&nbsp;people
          </ValueOne>
          <ValueDesc>
            Helping the team or people around is always comes as a top priority
          </ValueDesc>
          </ValueBlock>
          
          <ValueBlock>
          <ValueImg src={valuepath}></ValueImg>
          <ValueOne>
            Lead&nbsp;by&nbsp;example&nbsp;mindset
          </ValueOne>
          <ValueDesc>
            Inspire everyone and set the trend and show how to.
          </ValueDesc>
          </ValueBlock>
         
        </ValueIncontainer>
        
        </ValuesContainer>
        <TechContainer>
          <TechTitle>Life&nbsp;at&nbsp;tech.at.core</TechTitle>
          
          <TickContainer>
          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Being&nbsp;Human
          </TechDesc>
          </TechBox>

          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Unblock&nbsp;people
          </TechDesc>
          </TechBox>

          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Lead&nbsp;by&nbsp;example&nbsp;mindset
          </TechDesc>
          </TechBox>

          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Flexible&nbsp;working&nbsp;hours
          </TechDesc>
          </TechBox>

          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Flexible&nbsp;working&nbsp;machine
          </TechDesc>
          </TechBox>
          </TickContainer>
        </TechContainer>
        
        <TeamContainer>
          <TeamTitle>Our team</TeamTitle>

          <MemberContainer>

          <TeamBox>
          <TeamMember src={Jay}></TeamMember>
          <MemberName>Jayasagar&nbsp;Jagirapu</MemberName>
          <TechName>Founder</TechName>
          </TeamBox>
 
          <TeamBox>
          <TeamMember src={Prasad}></TeamMember>
          <MemberName>Prasad&nbsp;Jagirapu</MemberName>
          <TechName>Administration&nbsp;Head</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Raju}></TeamMember>
          <MemberName>Raju&nbsp;Sidda</MemberName>
          <TechName>Senior&nbsp;Software&nbsp;Engineer</TechName>
          </TeamBox>
 
          <TeamBox>
          <TeamMember src={Chetan}></TeamMember>
          <MemberName>Cheatn&nbsp;Kumar&nbsp;Bandari</MemberName>
          <TechName>DevOps&nbsp;Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Vandana}></TeamMember>
          <MemberName>Vandana&nbsp;Kumari</MemberName>
          <TechName>QA&nbsp;Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Vijay}></TeamMember>
          <MemberName>Vijay&nbsp;Pratap</MemberName>
          <TechName>Software&nbsp;Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Sushma}></TeamMember>
          <MemberName> Sushma&nbsp;Boddu</MemberName>
          <TechName> Software&nbsp;Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Shiva}></TeamMember>
          <MemberName>ShivaSai&nbsp;Dikond</MemberName>
          <TechName> Software&nbsp;Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Ravalika}></TeamMember>
          <MemberName>Ravalika&nbsp;Kesari</MemberName>
          <TechName> Software&nbsp;Engineer</TechName>
          </TeamBox>
          
          <TeamBox>
          <TeamMember src={Vivek} ></TeamMember>
          <MemberName>Vivek&nbsp;Tej</MemberName>
          <TechName> Software&nbsp;Intern</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Preethi}></TeamMember>
          <MemberName>Preethi&nbsp;Bandari</MemberName>
          <TechName>Software&nbsp;Intern</TechName>
          </TeamBox>

          </MemberContainer>
        </TeamContainer>
        

        <BlogContainer>
          <BlogMainTitle>Blog</BlogMainTitle>
          <Container>
          
          <SubBlog>
            <Group>
              <ImageLogo src={imagepath}></ImageLogo>
            </Group>
            <BlogTitle>De-&nbsp;Risk&nbsp;your&nbsp;Products&nbsp;with&nbsp;UX&nbsp;Design&nbsp;Experts</BlogTitle>
            <Time>19&nbsp;Aug&nbsp;2020</Time>
            <BlogName>Jaya&nbsp;Sagar</BlogName>
            <Department>Technical&nbsp;Department</Department>
          </SubBlog>
          <SubBlog>
            <Group>
              <ImageLogo src={imagepath}></ImageLogo>
            </Group>
            <BlogTitle>De-&nbsp;Risk&nbsp;your&nbsp;Products&nbsp;with&nbsp;UX&nbsp;Design&nbsp;Experts</BlogTitle>
            <Time>19&nbsp;Aug&nbsp;2020</Time>
            <BlogName>Jaya&nbsp;Sagar</BlogName>
            <Department>Technical&nbsp;Department</Department>
          </SubBlog>
          </Container>
        </BlogContainer>
      </Layout>
    );
  }
}
