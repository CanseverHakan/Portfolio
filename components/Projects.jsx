import React from 'react';
import Styles from '../styles/Projects.module.css';
import ProjectData from './ProjectData';

export default function Projects() {
  return (
    <div className={Styles.main}>
      <h1 className={Styles.mainTitle}>Web Projects</h1>
      <div className={Styles.webProject}>
        {ProjectData.map((project, index) => (
          <div className={Styles.Card} key={index}>
            <img className={Styles.imgCard} src={project.img} alt={project.name} />
            <div className={Styles.title}>{project.name}</div>
            <div className={Styles.description}>{project.description}</div>
            <div className={Styles.language}>
              <img className={Styles.imgLanguage} src={project.language} />
              <img className={Styles.imgLanguage} src={project.language2} />
            </div>
          </div>
        ))}
      </div>
      <h1 className={Styles.mainTitle}>Mobil Projects</h1>
    </div>
  );
}
