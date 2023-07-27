import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import SkillsPage from './SkillPage.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import AboutMePage from './AboutMePage.jsx'
import ContactsPage from './ContanctsPage.jsx'

export default function Body() {

    console.log("render body")
    return (
        <section id="body">
            <Routes>
                <Route path='/' element={<Navigate to='/home'/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/skills' element={<SkillsPage/>}/>
                <Route path='/projects' element={<ProjectsPage/>}/>
                <Route path='/aboutme' element={<AboutMePage/>}/>
                <Route path='/contacts' element={<ContactsPage/>}/>
            </Routes>
        </section>
    )
}
