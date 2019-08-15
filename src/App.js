import React from 'react';
import mainImage from './images/daveschneidermusicimage.jpg'

import band4 from './images/daveschneider4.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowAltCircleDown
} from '@fortawesome/free-solid-svg-icons'

import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Reveal from 'react-reveal/Reveal';

function About() {
  return (
    <div className="section">
      <div className="row section">
        <h4 className="section-header" id="about">About</h4>
      </div>
      <div className="content">


        <div className="text-background">

          <p className="inline">
            As a teenager, David Schneider was inspired to learn to play guitar. He was captivated by an album of music performed by Paco de Lucia, Al Di Meola, and John McLaughlin. This pivotal moment in his life launched him into years of study and composition of Latin, Jazz, and Classical music - a passion he chose to make his career.
        </p>
          <img src={mainImage} className="main-image" alt="Dave Schneider holding a guitar" />
          <p className="inline">
            Now with over twenty years of experience, Dave specializes in Nuevo Flamenco. His style is exotic and alluring, yet it is simple enough for the untrained listener to walk away with one of his original songs stuck in their head. From serene waltzes to vivacious flamenco dances, it is his goal to make every new composition and performance his best yet.
            In addition to performing in wedding ceremonies, cocktail hours, parties, and even funerals, Dave performs at bars, restaurants, and concerts both as a soloist and in bands.
        </p>
        </div>
      </div>
    </div >
  )
}

function Contact() {
  return (
    <div className="section">
      <div className="row center">
        <h4 className="section-header" id="contact">Contact</h4>
      </div>
      <div className="row center contact">
        <p className="center">
          <Social />
          <li>Email: Schneider.Guitar@gmail.com</li>
          <li>Phone: (401) 440-8659</li>
        </p>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="App-header" id='header'>
      <h1 className='title'>David Schneider</h1>
      <h3 className='subtitle'>Acoustic Guitarist, Composer</h3>
      <Social />
      <div class="center">
        <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" className="arrow" />
      </div>
    </header>
  )
}

class Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      video: false
    }
  }

  showVideos = () => {
    this.setState((prevState) => ({
      video: !prevState.video
    }))
  }

  render() {
    if (this.state.video) {
      return (
        <div className="section">
          <div className="row">
            <h4 className="section-header" id="music">Music</h4>
          </div>
          <div className="row bandcamp-row" >
            <iframe className="bandcamp" title="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=2908174980/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true" seamless><a href="http://djsguitar.bandcamp.com/album/the-palm-tree-e-p">The Palm Tree E.P. by Dave Schneider Trio</a></iframe>
          </div>

          <button type="button" className="btn btn-info" onClick={this.showVideos}>Hide Videos</button>

          <div className="video-div">
            <iframe className="video" title="busking" src="https://www.youtube.com/embed/hz0CRsZC9RQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="video-div">
            <iframe className="video" title="youtube" src="https://www.youtube.com/embed/l2fZPbN2o4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="video-div">
            <iframe className="video" title="band" src="https://www.youtube.com/embed/R92tvotaBW0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </div >
      )
    }
    else {
      return (
        <div className="section">
          <div className="row">
            <h4 className="section-header" id="music">Music</h4>
          </div>
          <div className="row bandcamp-row" >
            <iframe className="bandcamp" title="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=2908174980/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true" seamless><a href="http://djsguitar.bandcamp.com/album/the-palm-tree-e-p">The Palm Tree E.P. by Dave Schneider Trio</a></iframe>
          </div>
          <button type="button" className="btn btn-info center" onClick={this.showVideos}>Show Videos</button>
        </div >
      )
    }
  }
}


class Reviews extends React.Component {
  render(props) {
    if (this.props.width > 768) {
      return (
        <div id="gigmasters-reviews-widget" data-width="600" data-widget="1" data-member-id="128113"
          className="section"></div>
      )
    }
    else {
      return (
        <div id="gigmasters-reviews-widget" data-width="320" data-widget="1" data-member-id="128113"
          className="section"></div>
      )
    }
  }
}



function Social() {
  return (
    <div className="center">
      <a
        href="https://www.facebook.com/DjsGuitar/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.youtube.com/user/Schneiderguitar1/videos"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/schneider.guitar"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

function Wedding() {
  return (
    <div className="section">
      <div className="row">
        <h4 className="section-header" id="wedding">Your Wedding</h4>
      </div>
      <div class="content">
        <img src={band4} className="section-img-right" alt="Dave Schneider performing with a bassist" />
        <div className="text-background">
          <p> For your ceremony, Dave will provide joyous background music before, during, and after the walk. He has an extensive repertoire of music available, and he is always happy to incorporate new material, at your request. For your cocktail hour he can provide a solo act of Spanish guitar and other instrumental music, or he can assemble a small jazz combo for your event, which is any combination of guitar, bass, drums, and a vocalist or saxophone player. Dave works with many other highly skilled musicians that will greatly enhance your special day!</p>
        </div>
      </div>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }


  render() {
    return (
      <div className="App">
        <div className="container App-Container">
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" id="home" href="#home" onClick={this.navClick}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="about" href="#about" onClick={this.navClick}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="music" onClick={this.navClick} href="#music">Music</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#wedding" id="wedding" onClick={this.navClick}>Wedding</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" id="contact" href="#contact" onClick={this.navClick}>Contact and Booking</a>
                </li>
              </ul>
            </div>
          </nav> */}
          <Header />

          <Reveal effect='fadeInUp' effectOut="fadeOutLeft">

            <About />
            <Music />
            <Wedding />
            <Contact />
            <Reviews width={this.state.width} />
          </Reveal>
        </div>
      </div >
    )
  }
}


export default App;
