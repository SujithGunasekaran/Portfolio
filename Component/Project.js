import { myInfo } from '../Information/myInfo';
import { MdFolderCopy } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


export default function MyProject() {
    const { Project } = myInfo;
    return (
        <div>
            <div className="project-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="project-heading">{Project.ProjectHeading}</div>
                        <div className="project-heading-line"></div>
                    </div>
                </div>
                <div className="project-card-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="project-skill-head-subheading">{Project.ProjectInfo}</div>
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
                                                    <a href={projectInfo.ProjectGitLink} target="_blank" rel="noreference">
                                                        <FaGithub className='project-card-top-font-icon' />
                                                    </a>
                                                }
                                                {
                                                    projectInfo.ProjectLink !== 'No' &&
                                                    <a href={projectInfo.ProjectLink} target="_blank" rel="noreference">
                                                        <FaExternalLinkAlt className='project-card-top-font-icon2' />
                                                    </a>
                                                }
                                            </div>
                                        </div>
                                        <div className="project-card-title">{projectInfo.ProjectName}</div>
                                        <div className="project-card-description">{projectInfo.ProjectDescription}</div>
                                        <div className="project-card-tech-stack"><span className="project-card-tech-stack-language">{projectInfo.ProjectLanguage}</span></div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="col-md-3 mx-auto">
                            <button className="project-card-more-website-btn"><a href={Project.ProjectBtnLink} target="_blank" rel="noreference">{Project.ProjectBtnName}</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
