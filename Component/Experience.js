import ResumeDetails from '../Json/resume.json';
import Image from 'next/image';

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
                                                    <h4 className="education-clg-name-resume">{instituteInfo.InstituteName}</h4>
                                                </div>
                                                {
                                                    instituteInfo.EducationDetails.map((mystudyInfo, index) => (
                                                        <div className="education-details" key={index}>
                                                            <p className="education-type-resume">{instituteInfo.EducationType} - {instituteInfo.EducationYear}</p>
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
                                                    <div className='education-title-container'>
                                                        {
                                                            workDetail.WorkLogoPath &&
                                                            <Image
                                                                src={`/assert/${workDetail.WorkLogoPath}`}
                                                                alt={workDetail.WorkLogoName}
                                                                className='hero-image'
                                                                priority={true}
                                                                width={0}
                                                                height={0}
                                                                style={{ width: '20px', height: '20px' }}
                                                            />
                                                        }
                                                        <h4 className="education-clg-name-resume hide">{workDetail.WorkOfficeName}</h4>
                                                    </div>
                                                </div>
                                                {
                                                    workDetail.WorkExperience.map((workExperience, index) => (
                                                        <div className="education-details" key={index}>
                                                            <p className="education-type-resume">{workExperience.WorkTitle} : {workExperience.WorkingYear}</p>
                                                            <ul>
                                                                {
                                                                    workExperience.WorkDescription.map((description, index) => (
                                                                        <li
                                                                            key={index}
                                                                            className='education-clg-degeree-resume list'
                                                                        >
                                                                            {description}
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
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
                </div>
            </div>
        </div>
    )

}
