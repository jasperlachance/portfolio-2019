import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Jasper.
        </BigTitle>
        <Subtitle>I'm creating noice web experiences for the next generation of consumer-facing products.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Mogul"
            link="https://mogul.global"
            bg="linear-gradient(to right, #373B57 0%, #5F6278 100%)"
          >
            Product and UX Design and creactive direction for the Mogul app, Mogul admin tool, and all other projects under the Mogul brand.
          </ProjectCard>
          <ProjectCard
            title="Quack Worlds"
            link="https://www.quackworlds.com"
            bg="linear-gradient(to right, #4e54c8 0%, #8f94fb 100%)"
          >
            Brand and website design, development and Minecraft multiplayer server architecture setup and administration and community management.
          </ProjectCard>
          <ProjectCard title="SAM" link="https://samdesk.io" bg="linear-gradient(to right, #1CB469 0%, #76D2A5 100%)">
            Product and UX Design for the app, brand, and websites during a transition from a journliast CMS to aa AI powered social alerting platform.
          </ProjectCard>
          <ProjectCard
            title="Mytic Rebels"
            link="http://mysticrebels.net"
            bg="linear-gradient(to right, #F8B700 0%, #FAD366 100%)"
          >
            Website design and creative direction for the web presence of an online World of Warcraft gaming community as well as community management.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Jasper LaChance" />
          <AboutSub>
            Over the past decade I've developed a passion for technology in a diverse set of user experience and
            front-end development related skills.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I typically work on web-based applications, both mobile and desktop, designing workflows and interfaces, and
          helping implement these concepts in code. Even so, I'm open to new experiences and love exploring new
          technologies and industries. Aside from work passions, I also am an avid Minecraft and League of Legends
          gamer. I setup and administrate an online Minecraft community called Quack Worlds. I also enjoy travel and
          tropical cocktails.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:hello@jasperlachance.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/jaythechance">Dribbble</a> &{' '}
            <a href="https://twitter.com/jaythechance/">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 Jasper LaChance.</Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
