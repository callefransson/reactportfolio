import React from "react";
import CvJson from '../json/Cv.json';
import '../css/Cv.css';
import Image from 'react-bootstrap/Image';
import ProfileImage from '../assets/profilbild-new.jpg';

const ImpportCv = ()=>{
return(
<>
<main className="container text-light d-flex justify-content-center">
    <div className="d-flex" id="cv-section">
        <div className="d-flex flex-column">
            <aside className="p-4" id="aside-content">
                <Image src={ProfileImage} rounded width={250}/>
            <h1 className="pt-3 ">CV</h1>
            {CvJson.personalInfo.map((info)=>(
                <address key={info.id} className="fst-italic lh-sm">
                    <p>Namn: {info.name}</p>
                    <p>Ålder: {info.age}</p>
                    <p>Adress: {info.adress}</p>
                    <p>Stad: {info.city}</p>
                    <p>Email: {info.email}</p>
                    <p>Mobil: {info.phone}</p>
                </address>
            ))}
            </aside>
        </div>
        <div className="p-4">
            <div>
            <h2>Utbildning</h2>
            {CvJson.education.map((edu)=>(
                <div key={edu.id}>
                    <p>{edu.school}</p>
                </div>
            ))}
            </div>
            <div>
            <h2>Arbetslivserfarenheter</h2>
                {CvJson.workExperience.map((work)=>(
                    <div key={work.id}>
                        <p>{work.company}</p>
                    </div>
                ))}
            </div>
            <div>
            <h2>Programmeringsspråk</h2>
                {CvJson.programming.map((skills)=>(
                    <div key={skills.id}>
                        <p>{skills.computerLanguage}</p>
                    </div>
                ))}
            </div>
            <div>
            <h2>Programvaror</h2>
                {CvJson.program.map((lang)=>(
                    <div key={lang.id}>
                        <p>{lang.software}</p>
                    </div>
                ))}
            </div>
            <div>
            <h2>Språk</h2>
                {CvJson.language.map((lang)=>(
                    <div key={lang.id}>
                        <p>{lang.swedish}</p>
                        <p>{lang.english}</p>
                    </div>
                ))}
            </div>
            <div>
            <h2>Meriter</h2>
                {CvJson.merits.map((m)=>(
                    <div key={m.id}>
                        <p>{m.B}</p>
                    </div>
                ))}
            </div>
            <div>
            <h2>Målsättnig</h2>
                {CvJson.goals.map((goal)=>(
                    <div key={goal.id}>
                        <p>{goal.workGoals}</p>
                    </div>
                ))}
            </div>
            <div>
            <h2>Referenser</h2>
                {CvJson.references.map((ref)=>(
                    <div key={ref.id}>
                        <p>{ref.reference}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </main>
</>
);
}
export default ImpportCv;