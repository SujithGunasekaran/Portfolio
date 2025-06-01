import { myInfo } from '../Information/myInfo';
import { MdComputer } from "react-icons/md";
import { FiServer } from "react-icons/fi";
import { IoCode } from "react-icons/io5";

const SKILLS_ICON = {
    'frontend': MdComputer,
    'backend': FiServer,
    'other': IoCode
};

const Skill = ({ skill }) => {

    const Icon = SKILLS_ICON[skill.name];

    return (
        <div className="col-md-6" key={skill.name}>
            <div className="skill-container">
                <div className='skill-header-container'>
                    <div className='skill-logo'><Icon /></div>
                    <div className='skill-title'>{skill.title}</div>
                </div>
                <ul className='skill-list'>
                    {
                        skill.knownSkills.map((knownSkill) => (
                            <li
                                key={knownSkill}
                                className='skill-item'
                            >
                                {knownSkill}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )

}

const About = () => {
    const { Home } = myInfo;

    return (
        <div>
            <div className="about-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-hero-container">
                            <h2 className="about-heading">{Home.myActivityHeading}</h2>
                            <div className="about-heading-line"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p className="about-info">{Home.myActivityInfoOne}</p>
                        <p className="about-info">{Home.myActivityInfoTwo}</p>
                        <ul>
                            {
                                Home.myActivityInfoTwoList.map((item, index) => (
                                    <li
                                        key={index}
                                        className='about-info-item'
                                    >
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                        <p className="about-info">{Home.myActivityInfoThree}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            {
                                myInfo.Skills.map((skill) => (
                                    <Skill
                                        key={skill.name}
                                        skill={skill}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
