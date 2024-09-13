import ResumeDetails from '../Json/resume.json';
import { SiReact, SiJavascript, SiMysql } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { FaHtml5 } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';

export default function Resume() {
    return (
        <div>
            <div className="resume-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="resume-heading">Education and Work Experience</h2>
                        <div className="resume-heading-line"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {
                            ResumeDetails.Education.map((educationInfo, index) => (
                                <div className="education-list" key={index}>
                                    <h3 className="education-name-resume">
                                        {educationInfo.EducationHeading}
                                    </h3>
                                    <div className="education-name-line"></div>
                                    {
                                        educationInfo.EducationInformation.map((instituteInfo, index) => (
                                            <div key={index}>
                                                <div className={index > 0 ? 'education-type1-display' : 'education-type-display'}>
                                                    <div className="education-year-btn"></div>
                                                    <p className="education-type-resume">{instituteInfo.EducationType} - {instituteInfo.EducationYear}</p>
                                                </div>
                                                {
                                                    instituteInfo.EducationDetails.map((mystudyInfo, index) => (
                                                        <div className="education-details" key={index}>
                                                            <h4 className="education-clg-name-resume">{mystudyInfo.InstituteName}</h4>
                                                            <p className="education-clg-degeree-resume">{mystudyInfo.InstituteCourse}</p>
                                                            <div className="hr-resume" />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-6">
                        {
                            ResumeDetails.Experience.map((experienceInfo, index) => (
                                <div className="education-list" key={index}>
                                    <h3 className="education-name-resume">
                                        {experienceInfo.Heading}
                                    </h3>
                                    <div className="education-name-line"></div>
                                    {
                                        experienceInfo.WorkDetails.map((workDetail, index) => (
                                            <div key={index}>
                                                <div className={index > 0 ? 'education-type1-display' : 'education-type-display'}>
                                                    <div className="education-year-btn"></div>
                                                    <p className="education-type-resume">{workDetail.WorkType} : {workDetail.WorkingYear}</p>
                                                </div>
                                                <div className="education-details" key={index}>
                                                    <h4 className="education-clg-name-resume">{workDetail.WorkOfficeName}</h4>
                                                    <p className="education-clg-degeree-resume">{workDetail.WorkDescription}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="coding-skill-head-resume">Tech Stacks and Tools</h3>
                        <div className="education-name-line"></div>
                        <p className="coding-skill-head-subheading">Programming languages and tools that I know and usually used when making a project.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><FaHtml5 /></div>
                            <h4 className="coding-skill-name">HTML, CSS</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><SiJavascript /></div>
                            <h4 className="coding-skill-name">Javascript</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><SiReact /></div>
                            <h4 className="coding-skill-name">React.js</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><DiJavascript1 /></div>
                            <h4 className="coding-skill-name">Express.js</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><IoLogoNodejs /></div>
                            <h4 className="coding-skill-name">Node.js</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><SiMysql /></div>
                            <h4 className="coding-skill-name">MySql</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><DiMongodb /></div>
                            <h4 className="coding-skill-name">mongodb</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><DiJavascript1 /></div>
                            <h4 className="coding-skill-name">Next.js</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
