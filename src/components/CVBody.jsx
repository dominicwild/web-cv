import "../scss/cv-body.scss";
import "../scss/experience.scss"


function CVBody() {
    return (
        <div className='cv-body'>
            <div className='section profile'>
                <h1 className="section-title profile-title">Profile</h1>
                <div className='section-body profile-body'>
                    As an AWS certified Software Developer with 5 years of commercial experience, I have a broad range of expertise from full stack web development to advanced scripting. I am a strong advocate for Test-Driven Development (TDD) and pragmatic problem-solving, prioritizing effective solutions over theoretical perfection. My keen interest in technological innovation drives me to explore diverse tools and creative strategies for tackling complex challenges. I excel in environments that encourage taking ownership of projects and foster self-driven, proactive engagement.
                </div>
            </div>

            <div className='section education'>
                <h1 className="section-title">Education</h1>
                <div className='section-body education-body'>
                    <div className="qualification">
                        <div className="qualification-date">
                            2015-2019
                        </div>
                        <div className="qualification-description">
                            <div>
                                Computer Science (with Industrial Experience) MSciHons <i>(IET Accredited)</i>
                            </div>
                            <div>
                                <b>First Class Honours (1:1)</b>
                            </div>
                            <div>
                                Lancaster University
                            </div>
                        </div>
                    </div>

                    <div className="qualification">
                        <div className="qualification-date">
                            2013-2015
                        </div>
                        <div className="qualification-description">
                            <b>A-Levels:</b> Computer Science (A), Mathematics (A), Physics (B), Psychology (C)
                        </div>
                    </div>

                </div>
            </div>

            <div className='section experience'>
                <h1 className="section-title">Experience</h1>
                <div className="languages">
                    <span>
                        <b>Languages: &nbsp;</b>
                        Java, HTML/CSS, React, TypeScript, Python, C#
                    </span>
                </div>
                <div className="experience-header">
                    <div>
                        March 2022 - Current
                    </div>
                    <div>
                        Codurance
                    </div>
                    <div>
                        Software Consultant
                    </div>
                </div>
                <div className='section-body experience-body'>
                    Consulting on a large variety of software projects. Almost always following XP practices such as pairing, TDD, CI/CD etc. Languages used such as Java, C#, TypeScript (React) and etc. My role has involved a wide spectrum of responsibilities, such as modernising legacy code, performance testing, feature delivery, encouraging best practices, leading scopes of work, giving presentations to key stakeholders and mentoring colleagues. Much of my work involves the cloud, primarily AWS and some Azure.
                </div>

                <div className="experience-header">
                    <div>
                        November 2019 - March 2022
                    </div>
                    <div>
                        DXC
                    </div>
                    <div>
                        Software Developer
                    </div>
                </div>
                <div className='section-body experience-body'>
                    Primarily worked on a cloud migration project of a large financial application to AWS. Main technology used was Java Spring, in a micro-service architecture. I was responsible for developing re-usable libraries, estimating work and mentoring colleagues practicing TDD and BDD. Dynamo DB was used in this project. Other projects worked on include React web forms, PowerShell automation scripts & applications, C# Windows automation (WinAppDriver), gaining experience in various cloud technologies.
                </div>

            </div>

            <div className='section projects'>
                <h1 className="section-title">Projects</h1>

                <div className="header">
                    Community Hub RND Architecture
                </div>
                <div className='section-body hobbies-body'>
                    Designed the AWS architecture for an internal community hub, enhancing company connectivity for an R&D project. Tailored the solution using in-depth analysis of company data and need-finding surveys. Led technology selection, project methodology, and MVP definition, focusing on innovative solutions to meet internal challenges.
                </div>

                <div className="header">
                    Micro:bit Mesh
                </div>
                <div className='section-body hobbies-body'>
                    Design, implementation, testing, and evaluation of a mesh networking protocol for the Micro:bit’s runtime using C/C++. Required in-depth research of ARM processors to decipher how the low-level hardware could be manipulated leading to successful implementation of a protocol based in research.
                </div>
            </div>

            <div className='section hobbies hide'>
                <h1 className="section-title">Hobbies</h1>
                <div className="header">
                    Micro:bit Mesh
                </div>
                <div className='section-body hobbies-body'>
                    Design, implementation, testing, and evaluation of a mesh networking protocol for the Micro:bit’s runtime using C/C++. Required in-depth research of ARM processors to decipher how the low-level hardware could be manipulated leading to successful implementation of a protocol based in research.
                </div>
            </div>
        </div>
    )
}

export default CVBody