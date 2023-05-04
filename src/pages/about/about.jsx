import React from 'react'
import {Link} from 'react-router-dom'
import Navbar1 from '../../components/header/navbar1'
import Footer from '../../components/footer/footer';
import './about.css'

const About = () => {
  //missions//
  const missions = [
    {
      text:'To use innovative technology in agriculture fields',
    },
    {
      text:'Usage of natural resources for sustainable energy resources',
    },
  ];
  //vissions//
  const visions = [
    {
      text:'To use innovative technology in agriculture fields',
    },
    {
      text:'Usage of natural resources for sustainable energy resources',
    },
  ];
  //teams details//
  const members = [
    {
      name: 'Justin Lucky',
      email: 'justinlucky@lucky.io',
      image:'https://images.unspsh.com/photo-1579825318929-7ad3cb82613c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4N',
      phone:'12345678',
      position:'Janitor',
    },
    {
      name: 'Ramesh',
      email: 'ramesh@lucky.io',
      image:'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODMxMDAzOTk&ixlib=rb-4.0.3&q=85',
      phone:'354782',
      position:'Administrator',
    },
    {
      name: 'Rakesh',
      email: 'rakesh@lucky.io',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODMxMDAzMjA&ixlib=rb-4.0.3&q=85',
      phone: '76543456',
      position: 'CTO, Technical Head',
    },
    {
      name: 'Malesh',
      email: 'malesh@lucky.io',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODMxMDAzMjA&ixlib=rb-4.0.3&q=85',
      phone: '567654',
      position: 'CDO',
    },
    {
      name: 'Suresh',
      email: 'suresh@lucky.io',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODMxMDAyNTU&ixlib=rb-4.0.3&q=85',
      phone: '7654567',
      position: 'CFO',
    }
  ];
  return (
    <div id='about-container'>
      <header>
        <Navbar1/>
      </header>
      <main>
        <div className="main-container">
        <h1>This is about page</h1>
        <div className="mission-container">
          <h1>Our Mission</h1>
          <div className="mission-text">
            {missions.map((mission, index) => (
              <ul key={index} className='mission'>
               <li>{mission.text}</li>
             </ul>
            ))}
          </div>
        </div>
        <div className="vision-container">
        <h1>Our Vision</h1>
        <div className="vision-text">
         {visions.map((vision, index) => (
          <ul key={index} className='mission'>
            <li>{vision.text}</li>
          </ul>
         ))}
        </div>
        </div>
        <div className="team-container">
          <div className="members">
            <h1>Our Team</h1>
            {members.map((member, index) => (
              <div key={index} className="member">
                <h2>{member.name}</h2>
                <img src={member.image} alt=''/>
                <h3>{member.position}</h3>
                <p>E-mail:{member.email}</p>
                <p>Phone:{member.phone}</p>
                <button>Reach Me</button>
              </div>
            ))}
          </div>
        </div>
        <div className="story-container">
          <h1>Our Story</h1>
          <div className="story-text">
            <p>Our Janitor [Justin Lucky] grew from an orphanage home. Despite the difficult
              circumstances, he always had a curious and a passion
              mind for technology. He was particularly interested in how
              technology could be applied to agriculture to make it more efficient and sustainable.
            </p>
            <p>As he grew older, Janitor made friends with like-minded individuals who shared his vision.
              They shared ideas, pooled their resources, and worked together to learn programming and design skills.
              They also had the opportunity to learn how to use technology to make their lives easier.
              With their newfound knowledge and skills, they founded a company with a mission to revolutionize the agricultural industry.
            </p>
            <p>Their company focused on cutting out the middleman and connecting farmers directly to customers.
              The company also provide advance technology to detect pests and crop diseases using their artificial and machine learnable server.
              This could detect plant diseases, and pests destroying the crops. They also provide market for farmer to get the latest type of chemicals and technology to remove
              pests, weeds and fight against crops diseases.
            </p>
            <p>
              The Janitor story is a moral for all the present generation to strive forward despite difficulties we face. 
              He said <strong>"Learn to use these four things properly to be successful they are time, money, health and relations."</strong>
              He also said <strong>"Learn the differnce between compare and compete."</strong>
            </p>
            <p>Facing the problems and knowing the pain of people facing it too, Janitor would like to give something from what he had earn so far.
              <br />
              Feel free to register to the below form in order to try your lucky chance.
            </p>
            <button><Link to='/help-form'>Looking for help</Link></button>
          </div>
        </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default About
