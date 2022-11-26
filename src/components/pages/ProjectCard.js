import React from 'react';


export default function ProjectCard(props) {
    return (
        <div>
            <div className={props.customClass}>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div className='d-flex justify-content-end'>
                    <a href={props.repoUrl} target='_blank' rel='noreferrer' className="link">Visit the Repo</a>
                    <a href={props.deployedUrl} target='_blank' rel='noreferrer'
                        className="link2">Visit the Live Site</a>
                </div>
            </div>
        </div>
    )
}