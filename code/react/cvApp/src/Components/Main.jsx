import Info_Main from "./Main/Info_Main"
import PersonalData from "./Main/PersonalData"
import WorkExperience from "./Main/WorkExperience"
import Skills from "./Main/Skills"
import Education from "./Main/Education"
import Contact from "./Main/Contact"


function Main() {
    return (
        <>
        <div className="bg-black w-full max-md:h-full">
            <Info_Main />
            <PersonalData />
            <WorkExperience />
            <Skills />
            <Education />
            <Contact />
        </div>
        </>
    )
}

export default Main