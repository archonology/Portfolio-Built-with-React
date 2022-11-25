import React from 'react';
import homeParty from '../images/home-party-page.jpg';


export default function ProjectCard(props) {
    return (
        <div>
            <div className="project-card col m-3 p-4" >
                <img
                    alt={props.image}
                    className="card-img-top"
                    src={homeParty}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className='d-flex justify-content-end'>
                        <a href={props.repo} className="link">Visit the Repo</a>
                        <a href={props.deployed}className="link2">Visit the Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}