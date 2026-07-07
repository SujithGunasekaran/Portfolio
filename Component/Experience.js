import { useState } from 'react';
import ResumeDetails from '../Json/resume.json';
import Image from 'next/image';

const formatWorkingYear = (rangeText) => {
    return rangeText.replace(/(\d{4})\((\w+)\)/g, '$2 $1');
};

export default function Resume() {
    const [activeTab, setActiveTab] = useState('experience');

    const educationHeading = ResumeDetails.Education[0]?.EducationHeading || 'Education';
    const experienceHeading = ResumeDetails.Experience[0]?.Heading || 'Work Experience';

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
                    <div className="col-md-12">
                        <div className="resume-tabs" role="tablist">
                            <button
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'experience'}
                                className={`resume-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                                onClick={() => setActiveTab('experience')}
                            >
                                {experienceHeading}
                            </button>
                            <button
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'education'}
                                className={`resume-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                                onClick={() => setActiveTab('education')}
                            >
                                {educationHeading}
                            </button>
                        </div>

                        {activeTab === 'experience' && (
                            <div className="resume-timeline">
                                {
                                    ResumeDetails.Experience.map((experienceInfo) => (
                                        experienceInfo.WorkDetails.map((workDetail, companyIndex) => (
                                            workDetail.WorkExperience.map((workExperience, roleIndex) => (
                                                <div className="timeline-item" key={`${companyIndex}-${roleIndex}`}>
                                                    <div className="timeline-marker-col">
                                                        <span className="timeline-dot"></span>
                                                        <span className="timeline-line"></span>
                                                    </div>
                                                    <div className="timeline-card">
                                                        <div className="timeline-card-header">
                                                            <h4 className="timeline-title">
                                                                {workExperience.WorkTitle}
                                                                <span className="timeline-at">@</span>
                                                                {
                                                                    workDetail.WorkLogoPath &&
                                                                    <Image
                                                                        src={`/assert/${workDetail.WorkLogoPath}`}
                                                                        alt={workDetail.WorkLogoName}
                                                                        className="timeline-company-logo"
                                                                        priority={true}
                                                                        width={0}
                                                                        height={0}
                                                                        style={{ width: '18px', height: '18px' }}
                                                                    />
                                                                }
                                                                <span className="timeline-company">{workDetail.WorkOfficeName}</span>
                                                            </h4>
                                                            <span className="timeline-badge">{formatWorkingYear(workExperience.WorkingYear)}</span>
                                                        </div>
                                                        <ul className="timeline-description">
                                                            {
                                                                workExperience.WorkDescription.map((description, index) => (
                                                                    <li key={index}>{description}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))
                                        ))
                                    ))
                                }
                            </div>
                        )}

                        {activeTab === 'education' && (
                            <div className="resume-timeline">
                                {
                                    ResumeDetails.Education.map((educationInfo) => (
                                        educationInfo.EducationInformation.map((instituteInfo, instituteIndex) => (
                                            <div className="timeline-item" key={instituteIndex}>
                                                <div className="timeline-marker-col">
                                                    <span className="timeline-dot"></span>
                                                    <span className="timeline-line"></span>
                                                </div>
                                                <div className="timeline-card">
                                                    <div className="timeline-card-header">
                                                        <h4 className="timeline-title">
                                                            {instituteInfo.EducationDetails[0]?.InstituteCourse}
                                                            <span className="timeline-at">@</span>
                                                            <span className="timeline-company">{instituteInfo.InstituteName}</span>
                                                        </h4>
                                                        <span className="timeline-badge">{instituteInfo.EducationYear}</span>
                                                    </div>
                                                    <div className="timeline-subheader">
                                                        <span className="timeline-type">{instituteInfo.EducationType}</span>
                                                    </div>
                                                    <div className="timeline-education-marks">
                                                        {
                                                            instituteInfo.EducationDetails.map((studyInfo, index) => (
                                                                <p key={index}>{studyInfo.InstituteMark}</p>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}
