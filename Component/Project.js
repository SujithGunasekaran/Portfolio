import { myInfo } from '../Information/myInfo';

export default function MyProject() {
    const { Project } = myInfo;
    return (
        <div>
            <div className="project-container">
                <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                    <div className="col-md-12">
                        <div className="project-heading">{Project.ProjectHeading}</div>
                    </div>
                </div>
                <div className="project-card-container">
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <div className="project-skill-head-resume">{Project.ProjectSubHeading}</div>
                            <div className="education-name-line"></div>
                            <div className="project-skill-head-subheading">{Project.ProjectInfo}</div>
                        </div>
                        {
                            Project.ProjectList.map((projectInfo, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="project-card" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                                        <div className="project-card-title">{projectInfo.ProjectName}</div>
                                        <div className="project-card-description">{projectInfo.ProjectDescription}</div>
                                        <div className="project-card-tech-stack"><span className="project-card-tech-stack-language">{projectInfo.ProjectLanguage}</span></div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                {
                                                    projectInfo.ProjectLink !== 'No' ? <button className="project-card-website-link"><a href={projectInfo.ProjectLink} target="_blank" rel="noreference">{projectInfo.ProjectLinkBtnDisplayName}</a></button> : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="col-md-2 mx-auto">
                            <button className="project-card-more-website-btn"><a href={Project.ProjectBtnLink} target="_blank" rel="noreference">{Project.ProjectBtnName}</a></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}