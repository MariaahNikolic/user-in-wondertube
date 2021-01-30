import React from "react";
import { Row, Col } from "react-flexbox-grid";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <Row id="about-page">
      <Col xl={8} lg={10} md={12}>
        <Row className="about-page-content">
        <Col xl={12} className='close-button'><Link to="/intro"><img src="/images/icons/close.svg"/></Link></Col>
          <Col lg={12}>
            <h2 className="heading-lg yellow-background">ABOUT</h2>
            <p>
              <strong>User In The Wondertube </strong>
              is a project developed during the Final Synthesis Laboratory in
              the Density Lab at Politecnico di Milano.
              <br /> <br />
              This project is an extension of phase II, which explored the topic
              of content farms. In that phase, we focused on a content farm
              5-minute crafts and their YouTube channel. We collected data on
              elements such as representation of women, their body parts and
              human expressions on thumbnails and titles and keywords used in
              the videos and used this to study their correlation with the
              number of views. We interpreted this data to identify trends in
              the algorithms of YouTube, which finally led us to investigate how
              content farms use these trends to increase their reach.
              <br /> <br />
              With this data, we are able to recreate the content farm business
              model that uses social media for monetization, making profits with
              both the content farm company and the social networking site. In
              this project, we present this business model that uses YouTube,
              Facebook, Instagram and Pinterest to monetize and create traffic
              on company websites. We present it from different perspectives:
              the content farm company, the algorithms of online platforms and
              their users.
              <br /> <br />
              <em>User In The Wondertube</em> presents a story of a user
              browsing through YouTube. The user enters YouTube with a simple
              query but eventually ends up in a rabbit hole, while being
              endorsed suggestions by the algorithm. In the story, the user
              converses with different entities such as the YouTube algorithm,
              the channel creator, Facebook and Instagram. The viewer is able to
              see how the algorithm takes the user through this journey and in
              the process how the creators/companies monetise on this journey.
              The project explores the possibility of users losing control of
              their browsing experience and being dictated by the algorithm.
            </p>
          </Col>
          <Col>
            <h2 className="heading-lg yellow-background">AIM, FOCUS & OBJECTIVE</h2>
            <p>
              <strong>User In The Wondertube</strong>
              is a project developed during the Final Synthesis Laboratory in
              the Density Lab at Politecnico di Milano.
              <br /> <br />
              This project aims to allow viewers to reflect on the content they
              engage with online, provides insight on how algorithms and data
              gathering works, and thereby gives them the power to self-regulate
              how they browse online.
              <br /> <br />
              The project focuses on a specific audience of internet consumers
              seeking entertainment or looking for information, tips or advice
              on a subject online. When people log n to the internet for a
              specific purpose, be it entertainment or research, it is not
              uncommon to get lost in the vast array of resources available
              online. One of the strongest sources that draws internet consumers
              in is content farms.
              <br /> <br />
              <em>User In The Wondertube</em> presents a This project aims to
              present how content farms work in conjunction with algorithms, and
              the specific points at which content farms monetise on the user
              spending time on their content, and thereby allow viewers to have
              more control over their browsing experience.
            </p>
          </Col>

          <Col>
            <h2 className="heading-lg yellow-background">MESSAGE</h2>
            <p>
              The psychology of giving content farms the benefit of the doubt
              and then falling down a rabbit hole is more common than we think.
              Platforms such as YouTube benefit solely from the user spending
              maximum time on them and such rabbit holes help them thrive.
              <br /> <br />
              When a user’s online behaviour is passive, the online content they
              see is solely governed by the online entities, such as the online
              platforms and algorithms. Understanding how these entities work
              could alter the way users browse online.
            </p>
          </Col>
          <Col>
            <h2 className="heading-lg yellow-background">INTERACTION</h2>
            <p>
              The interface consists of a user journey in the form of a screen
              recording of a user browsing YouTube. Below the screen recording,
              there is a chatbox, wherein a live chat takes place between 5
              different entities: the user, the company/creator of the channel
              being browsed, and the algorithm of YouTube, Facebook and
              Instagram.
              <br /> <br />
              The user journey is divided into different chapters. The user
              faces a problem in his life (he burns his hand and needs
              first-aid) and wants to look up a solution on YouTube. The user
              journey then begins as he types in his first query on YouTube. As
              the journey progresses of him browsing YouTube, all three entities
              record their observations in the Chat form.
              <br /> <br />
              The user progressively goes down a rabbit hole through his
              journey. He begins from an objective query and ends up in
              unrelated videos. The viewer is able to see how the algorithm
              takes him there, and in the process how the creators/companies
              monetise on this journey.
            </p>
          </Col>
          <Col>
            <h3><strong>Sources:</strong></h3>
            <p>
              Michael Boccacino. “Building Successful Multi-Channel Social Media
              Strategies during COVID-19.” NewDigitalAge, June 11, 2020.
              https://newdigitalage.co/2020/06/11/building-successful-multi-channel-social-media-strategies-during-covid-19/.
              Michael Boccacino. “How Pinterest can be a useful platform for
              brands.” NewDigitalAge, August 28, 2020.
              https://newdigitalage.co/2020/08/28/how-pinterest-can-be-a-useful-platform-for-brands/.
              Dave Davies, “Meet the 7 Most Popular Search Engines in the
              World”, SEJ, January 7, 2018.
              https://www.searchenginejournal.com/seo-101/meet-search-engines/#close
              . Wattenhofer, Mirjam & Wattenhofer, Roger & Zhu, Zack. The
              YouTube Social Network. 2012.
              https://www.researchgate.net/publication/268367926_The_YouTube_Social_Network.
              https://twitter.com/search?q=5%20minute%20cradts&src=typed_query
              https://www.bbc.com/news/av/technology-51504484
              https://www.vice.com/en/article/v7mmqm/viral-russian-youtube-channel-5-minute-crafts-not-a-psyop-just-good-at-making-videos
              https://www.vice.com/en/article/3dkmwv/the-100-million-content-farm-thats-killing-the-internet
              https://www.washingtonpost.com/arts-entertainment/2019/03/21/these-how-videos-youtube-wont-teach-you-how-be-better-adult-theyre-not-supposed/
              https://www.globalreach.com/blog/2020/01/28/the-2nd-largest-search-engine-on-the-internet
              https://time.com/5636360/five-minute-crafts-youtube-channel-explained/
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default About;
