import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Slider from './components/slider';
// import images from './images';
import '../assets/scss/base.scss';
// import '../assets/styles/about.styles.css';
// import House from '../images/Smith_House.png';


const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]


class About extends Component {
    render() {
        return(
            <div className="about-container-div">
                <h1>About</h1>
                <p className="about-paragraphs" id="about-top-paragraph">
                    Pleasant Homes is a home construction business based in the 
                    Bright, Indiana area. Pleasant Homes has been building custom homes
                    for over 30 years. The founders, Greg and Karen Huffman, have built 
                    over 100 homes in the Bright, Indiana and surrounding areas. 
                </p>
                <br></br>
                { /**<img id="about-house-img" src={ House } alt="House" /> */}

                <Slider slides={images} autoPlay={2} />

                <br></br>
                <p className="about-paragraphs" id="about-second-paragraph">
                    With a great reputation established from years of hard work and 
                    superior quality, Pleasant Homes is a leading home builder in
                    the Bright, Indiana area. With over 100 homes in the area, there are
                    plenty of examples of the quality of homes built by Pleasant Homes. 
                </p>
            </div>
        )
    }
}

export default About