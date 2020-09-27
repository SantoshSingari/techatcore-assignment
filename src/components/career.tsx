import React, { Component } from "react";
import Layout from "./layout";
import styled from "@emotion/styled";
import Title from "./common/title";
import Header from "./header";

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
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding: 70px 50px;
`;

const HeadTitle = styled(Title)`
  color: #ffffff;
  text-align: center;
  padding-top: 50px;
`;

const WhyContainer = styled.div`
  position:absolute;
  max-width:1920px;
  width:100%;
  height: 534px;
  display:flex;
  flex-direction:column;
  align-items:center;
  top: 597px;
  justify-content:center;
`;

const WhyTitle = styled(Title)`
  position: absolute;
  max-width: 817px;
  width:100%;
  height: 534px;
  display:flex;
  justify-content:center;
  top: 0px;
  

  color: #000000;
`;

const Desc = styled.p`
  position: absolute;
  max-width: 817px;
  height: 333px;
  top: 201px;
  display:flex;
  justify-content:center;

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
  background: #E5E5E5;
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
flex-direction:column;
justify-content:center;
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
max-width:1720px;
width:84%;
height:262px;
top:350px;
display:flex;
flex-flow:row wrap;

`;

const TechBox = styled.div`
postion:absolute;
max-width:350px;
width:100%;
height:60px;
display:flex;
flex-direction:row;
`;

const TechTick = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  display:flex;
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
  font-size: 25px;
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
  justify-content:center;
`;


const TeamTitle = styled.div`
  position: absolute;
  max-width: 315px;
  width:100%;
  left:40%;
  justify-content:center;
  height: 63.56px;
  top: 50px;

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
max-width:1720x;
width:100%;
height:1664px;
display:flex;
flex-flow:row wrap;
top:250px;
justify-content:center;
`;

const TeamBox = styled.div`
position: relative;
width: 280px;
height: 453px;
display:flex;
margin:12px;
flex-direction:column;
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
  font-size: 28px;
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
  font-size: 18px;
  line-height: 32px;
  color: #000000;
`;

const BlogContainer = styled.div`
position: absolute;
max-width: 1641px;
width:100%;
height: 979px;
top: 5319px;
display:flex;
flex-direction:column;
align-items:center;

`;

const BlogTitle = styled.div`
position:relative;
max-width: 128px;
height: 64px;
top:0px;
justify-content:center;

font-family: Nunito;
font-style: normal;
font-weight: 800;
font-size: 54px;
line-height: 50px;


color: #000000;

`;

const GroupContainer = styled.div`
postion:absolute;
max-width:1641px;
width:80%;
height:718px;
margin-top:100px;
display:flex;
flex-direction:row;
justify-content:center;
`;

const RowBlog = styled.div`
position:relative;
max-width:900px;
width:100%;
height: 718px;
display:flex;
flex-direction:column;
margin:4%;
padding:50px;
background: #FFFFFF;
border: 1px solid #CFCFCF;
box-sizing: border-box;
`;


const Group = styled.div`
position:relative;
width: 480px;
height: 285px;
display:flex;
margin:1%;
justify-content:center;
background-color:#1E3658;
`;

const BlogImg = styled.img`
position: absolute;
width: 350px;
height: 275px;
display:flex;
`;
const GroupTitle = styled.div`
position: absolute;
width: 506px;
height: 94px;
top:377px;
display:flex;
margin:1%;

font-family: Nunito;
font-style: normal;
font-weight: 800;
font-size: 26px;
line-height: 46px;
color: #363636;
 `;
const Date = styled.div`
position: absolute;
width: 152px;
height: 38px;
top:508px;
display:flex;
margin:1%;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
color: #000000;

`;

const Name = styled.div`
position: absolute;
width: 253px;
height: 63px;
top: 570px;
display:flex;
margin:1%;

font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 32px;
color: #000000;

`;

const Dept = styled.div`
position: absolute;
width: 253px;
height: 63px;
top: 610px;
display:flex;
margin:1%;

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 32px;
color: #000000;
`;

export default class career extends Component {
  render() {
    return (
      <Layout>
        <BgShade>
          <Header index={0}></Header>
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
          <MemberName>Chetan&nbsp;Kumar&nbsp;Bandari</MemberName>
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
          <BlogTitle>Blog</BlogTitle>
          <GroupContainer>
          <RowBlog>
            <Group>
              <BlogImg src={imagepath}></BlogImg>
            </Group>
            <GroupTitle>De-&nbsp;Risk&nbsp;your&nbsp;Products&nbsp;with&nbsp;UX&nbsp;Design Experts </GroupTitle>
            <Date>19 Aug 2020</Date>
            <Name>Jaya&nbsp;Sagar</Name>
            <Dept>Technical&nbsp;Department</Dept>
          </RowBlog>
          <RowBlog>
          <Group>
          <BlogImg src={imagepath}></BlogImg>
          </Group>
          <GroupTitle>De-&nbsp;Risk&nbsp;your&nbsp;Products&nbsp;with&nbsp;UX&nbsp;Design Experts </GroupTitle>
          <Date>19 Aug 2020</Date>
          <Name>Jaya&nbsp;Sagar</Name>
          <Dept>Technical&nbsp;Department</Dept>
          </RowBlog>
          </GroupContainer>
        </BlogContainer>

        
      </Layout>
    );
  }
}
