import ResumeDetails from '../Json/resume.json';
import { SiReact, SiJavascript, SiMysql } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { FaHtml5 } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';

export default function Resume() {
    return (
        <div>
            <div className="resume-container">
                <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                    <div className="col-md-12">
                        <div className="resume-heading">Education and Work Experience</div>
                        <div className="resume-heading-line"></div>
                    </div>
                </div>
                <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                    <div className="col-md-6">
                        {
                            ResumeDetails.Education.map((educationInfo, index) => (
                                <div className="education-list" key={index}>
                                    <div className="education-name-resume">
                                        {educationInfo.EducationHeading}
                                    </div>
                                    <div className="education-name-line"></div>
                                    {
                                        educationInfo.EducationInformation.map((instituteInfo, index) => (
                                            <div key={index}>
                                                <div className={index > 0 ? 'education-type1-display' : 'education-type-display'}>
                                                    <div className="education-year-btn"></div>
                                                    <div className="education-type-resume">{instituteInfo.EducationType} - {instituteInfo.EducationYear}</div>
                                                </div>
                                                {
                                                    instituteInfo.EducationDetails.map((mystudyInfo, index) => (
                                                        <div className="education-details" key={index}>
                                                            <div className="education-clg-name-resume">{mystudyInfo.InstituteName}</div>
                                                            <div className="education-clg-degeree-resume">{mystudyInfo.InstituteCourse}</div>
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
                                    <div className="education-name-resume">
                                        {experienceInfo.Heading}
                                    </div>
                                    <div className="education-name-line"></div>
                                    {
                                        experienceInfo.WorkDetails.map((workDetail, index) => (
                                            <div key={index}>
                                                <div className={index > 0 ? 'education-type1-display' : 'education-type-display'}>
                                                    <div className="education-year-btn"></div>
                                                    <div className="education-type-resume">{workDetail.WorkType} : {workDetail.WorkingYear}</div>
                                                </div>
                                                <div className="education-details" key={index}>
                                                    <div className="education-clg-name-resume">{workDetail.WorkOfficeName}</div>
                                                    <div className="education-clg-degeree-resume">{workDetail.WorkDescription}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                    <div className="col-md-12">
                        <div className="coding-skill-head-resume">Tech Stacks and Tools</div>
                        <div className="education-name-line"></div>
                        <div className="coding-skill-head-subheading">Programming languages and tools that I know and usually used when making a project.</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><FaHtml5 /></div>
                            <div className="coding-skill-name">HTML, CSS</div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><SiJavascript /></div>
                            <div className="coding-skill-name">Javascript</div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><SiReact /></div>
                            <div className="coding-skill-name">React.js</div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><DiJavascript1 /></div>
                            <div className="coding-skill-name">Express.js</div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><IoLogoNodejs /></div>
                            <div className="coding-skill-name">Node.js</div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><SiMysql /></div>
                            <div className="coding-skill-name">MySql</div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><DiMongodb /></div>
                            <div className="coding-skill-name">mongodb</div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className="coding-skill-container">
                            <div className="coding-skill-logo"><DiJavascript1 /></div>
                            <div className="coding-skill-name">Next.js</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
