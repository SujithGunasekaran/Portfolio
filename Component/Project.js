import { myInfo } from '../Information/myInfo';
import { MdFolderCopy } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


export default function MyProject() {
    const { Project } = myInfo;
    return (
        <div className="project-container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="project-heading">{Project.ProjectHeading}</h2>
                    <div className="project-heading-line"></div>
                </div>
            </div>
            <div className="project-card-container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="project-skill-head-subheading">{Project.ProjectInfo}</p>
                    </div>
                    {
                        Project.ProjectList.map((projectInfo, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="project-card">
                                    <div className="project-card-top-display">
                                        <MdFolderCopy className="project-card-top-folder-icon" />
                                        <div>
                                            {
                                                projectInfo.ProjectGitLink !== 'No' &&
                                                <a
                                                    href={projectInfo.ProjectGitLink}
                                                    target="_blank"
                                                    rel="noreference"
                                                    aria-label="Github link"
                                                >
                                                    <FaGithub className='project-card-top-font-icon' />
                                                </a>
                                            }
                                            {
                                                projectInfo.ProjectLink !== 'No' &&
                                                <a
                                                    href={projectInfo.ProjectLink}
                                                    target="_blank"
                                                    rel="noreference"
                                                    aria-label="External link"
                                                >
                                                    <FaExternalLinkAlt className='project-card-top-font-icon2' />
                                                </a>
                                            }
                                        </div>
                                    </div>
                                    <h3 className="project-card-title">{projectInfo.ProjectName}</h3>
                                    <p className="project-card-description">{projectInfo.ProjectDescription}</p>
                                    <p className="project-card-tech-stack"><span className="project-card-tech-stack-language">{projectInfo.ProjectLanguage}</span></p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="col-md-3 mx-auto">
                        <a
                            href={Project.ProjectBtnLink}
                            target="_blank"
                            rel="noreference"
                            className="project-card-more-website-btn"
                        >
                            {Project.ProjectBtnName}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
