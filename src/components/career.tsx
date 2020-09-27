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
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const TechTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 1.5;
  
  color: #000000;
  text-align: center;
  padding: 50px 0;
  
  @media (max-width: 600px){
    font-size: 30px;
  }
`;

const TickContainer = styled.div`
  display:flex;
  flex-flow:row wrap;
  padding: 0 50px;
`;

const TechBox = styled.div`
  width:300px;
  display:flex;
  flex-direction:row;
  margin: 0 10px 40px;
`;

const TechTick = styled.img`
  width: 40px;
  height: 40px;
  display:flex;
`;

const TechDesc = styled.div`
  max-width: 226px;
  height: 56px;
  display:flex;
  margin-left:50px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800; 
  font-size: 25px;
  line-height: 1.5;
  color: #363636;
  
  @media (max-width: 600px){
    font-size: 18px;
  }
`;

const TeamContainer = styled.div`
  background: #e5e5e5;
`;


const TeamTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 1.5;
  
  color: #000000;
  text-align: center;
  padding: 50px 0;
  
  @media (max-width: 600px){
    font-size: 30px;
  }
`;
const MemberContainer = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content:center;
  padding: 0 20px;
`;

const TeamBox = styled.div`
  width: 280px;
  margin:12px;
`;

const TeamMember = styled.img`
  max-width: 368px;
  width:100%;
  height: 342px;
  background: #ffffff;
`;

const MemberName = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 1.5;
  color: #363636;
`;


const TechName = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
`;

const BlogContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const BlogTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 1.5;
  
  color: #000000;
  text-align: center;
  padding: 50px 0;
  
  @media (max-width: 600px){
    font-size: 30px;
  }
`;

const GroupContainer = styled.div`
  display:flex;
  justify-content: space-around;
  padding: 0 20px;
  
  @media (max-width: 600px){
    flex-direction: column;
    padding-bottom: 50px;
  }
`;

const RowBlog = styled.div`
  padding: 30px;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-sizing: border-box;
  margin: 0 10px;
  
  @media (max-width: 600px){
    margin-bottom: 20px;
  }
`;


const Group = styled.div`
  display:flex;
  margin:1%;
  justify-content:center;
  background-color:#1E3658;
`;

const BlogImg = styled.img`
  width: 80%;
  display:flex;
`;
const GroupTitle = styled.div`
  display:flex;
  margin-bottom: 20px;
 
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 1.5;
  color: #363636;
 `;
const Date = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.5;
  color: #000000;
`;

const Dept = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 1.5;
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
