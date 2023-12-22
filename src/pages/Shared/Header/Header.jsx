import React, { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


const Header = () => {

    const [MarqueeTitle, setMarqueeTitle ] = useState([])

    useEffect( () =>{
        fetch('https://the-news-dragon-server-eight-indol.vercel.app/categories/1')
        .then(res => res.json())
        .then(data => setMarqueeTitle(data))
        .catch(error => console.log(error))
    } , [])


    return (
        <Container>
            <div className="text-center mt-3">
                <img src={logo} alt=""/>
                <p className='text-secondary' >
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            {/* marquee  */}
            <div className='highlights'>
                <div className='d-flex mt-3'>
                    <p className='latest'>Latest</p>
                    <Marquee  style={{width: "1000px"}} speed={100} delay={1} pauseOnHover={true} >
                        {
                            MarqueeTitle.map(title => <p 
                                key={title._id}
                            >
                                {title.title} <Link style={{color: "#D72050"}} className='px-2' to={`/news/${title._id}`}>See Details...</Link>
                            </p>)
                        }

                        {/* I can be a React component, multiple React components, or just some text.
                        <button className='see-more' size="sm">See Details</button>
                        I can be a React component, multiple React components, or just some text.
                        <button className='see-more'>See Details</button> */}
                    </Marquee>
                </div>
            </div>

        </Container>
    );
};

export default Header;