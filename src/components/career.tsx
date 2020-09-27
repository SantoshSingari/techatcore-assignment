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
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding-bottom: 70px;
`;

const WhyTitle = styled(Title)`
  color: #000000;
  padding: 50px 0;
  
  @media (max-width: 600px){
    font-size: 30px;
  }
`;

const Desc = styled.p`
  max-width: 817px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  
  @media (max-width: 817px){
    padding: 0 10px;
    font-size: 18px;
    line-height: 1.5;
  }
`;

const Break = styled.br``;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction:column;
  background: #E5E5E5;
  padding: 0 20px 70px
`;

const ValueTitle = styled(Title)`
  color: #000000;
  text-align: center;
  padding: 50px 0;
  
  @media (max-width: 600px){
    font-size: 30px;
  }
`;

const ValueImg = styled.img`
  width:60px;
  height: 60px;
`;

const ValueContentContainer = styled.div`
  display: flex;
  @media (max-width: 760px){
    flex-direction: column;
  }
`;

const ValueContentBlock = styled.div`
  flex: 1;
  margin: 0 10px;
  
  @media (max-width: 760px){
    margin: 0 0 40px;
  }
`;

const ValueContentTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 1.5;
  color: #363636;
`;

const ValueDesc = styled.p`
  margin-top: 50px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  
  @media (max-width: 760px){
    font-size: 18px;
  }
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
          <WhyTitle id="title">Why tech.at.core ?</WhyTitle>
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
          <ValueContentContainer>
            <ValueContentBlock>
              <ValueImg src={valuepath}></ValueImg>
              <ValueContentTitle>Being Human</ValueContentTitle>
              <ValueDesc>
                We are human-first approach company and everything comes next.
              </ValueDesc>
            </ValueContentBlock>
            <ValueContentBlock>
              <ValueImg src={valuepath}></ValueImg>
              <ValueContentTitle>Unblock people</ValueContentTitle>
              <ValueDesc>
                Helping the team or people around is always comes as a top priority
              </ValueDesc>
            </ValueContentBlock>
            <ValueContentBlock>
              <ValueImg src={valuepath}></ValueImg>
              <ValueContentTitle>Lead by example mindset</ValueContentTitle>
              <ValueDesc>
                Inspire everyone and set the trend and show how to.
              </ValueDesc>
            </ValueContentBlock>
          </ValueContentContainer>
        </ValuesContainer>
        <TechContainer>
          <TechTitle>Life at tech.at.core</TechTitle>
          
          <TickContainer>
          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Being Human
          </TechDesc>
          </TechBox>

          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Unblock people
          </TechDesc>
          </TechBox>

          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Lead by example mindset
          </TechDesc>
          </TechBox>

          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Flexible working hours
          </TechDesc>
          </TechBox>

          <TechBox>
          <TechTick src={tickpath}></TechTick>
          <TechDesc>
            Flexible working machine
          </TechDesc>
          </TechBox>
          </TickContainer>
        </TechContainer>
        
        <TeamContainer>
          <TeamTitle>Our team</TeamTitle>

          <MemberContainer>

          <TeamBox>
          <TeamMember src={Jay}></TeamMember>
          <MemberName>Jayasagar Jagirapu</MemberName>
          <TechName>Founder</TechName>
          </TeamBox>
 
          <TeamBox>
          <TeamMember src={Prasad}></TeamMember>
          <MemberName>Prasad Jagirapu</MemberName>
          <TechName>Administration Head</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Raju}></TeamMember>
          <MemberName>Raju Sidda</MemberName>
          <TechName>Senior Software Engineer</TechName>
          </TeamBox>
 
          <TeamBox>
          <TeamMember src={Chetan}></TeamMember>
          <MemberName>Chetan Kumar Bandari</MemberName>
          <TechName>DevOps Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Vandana}></TeamMember>
          <MemberName>Vandana Kumari</MemberName>
          <TechName>QA Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Vijay}></TeamMember>
          <MemberName>Vijay Pratap</MemberName>
          <TechName>Software Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Sushma}></TeamMember>
          <MemberName> Sushma Boddu</MemberName>
          <TechName> Software Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Shiva}></TeamMember>
          <MemberName>ShivaSai Dikond</MemberName>
          <TechName> Software Engineer</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Ravalika}></TeamMember>
          <MemberName>Ravalika Kesari</MemberName>
          <TechName> Software Engineer</TechName>
          </TeamBox>
          
          <TeamBox>
          <TeamMember src={Vivek} ></TeamMember>
          <MemberName>Vivek Tej</MemberName>
          <TechName> Software Intern</TechName>
          </TeamBox>

          <TeamBox>
          <TeamMember src={Preethi}></TeamMember>
          <MemberName>Preethi Bandari</MemberName>
          <TechName>Software Intern</TechName>
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
            <GroupTitle>De- Risk your Products with UX Design Experts </GroupTitle>
            <Date>19 Aug 2020</Date>
            <Name>Jaya Sagar</Name>
            <Dept>Technical Department</Dept>
          </RowBlog>
          <RowBlog>
          <Group>
          <BlogImg src={imagepath}></BlogImg>
          </Group>
          <GroupTitle>De- Risk your Products with UX Design Experts </GroupTitle>
          <Date>19 Aug 2020</Date>
          <Name>Jaya Sagar</Name>
          <Dept>Technical Department</Dept>
          </RowBlog>
          </GroupContainer>
        </BlogContainer>

        
      </Layout>
    );
  }
}
