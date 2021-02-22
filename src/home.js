import { onNavigate } from './routes.js'

export const home = (target) => {
    const html = `
        <ul class="navbar-list">
            <li class="navbar-item"><a href="#"  id="aboutLink">about</a></li>
            <li class="navbar-item"><a href="#"  id="homeLink"><i class="fas fa-home"></i></a></li>
            <li class="navbar-item"><a href="#"  id="contactLink">contact</a></li>
        </ul>
        <h1>Hola</h1>
    `

    target.innerHTML = html

    document.getElementById('aboutLink').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/about')
    })

    document.getElementById('homeLink').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/')
    })

    document.getElementById('contactLink').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/contact')
    })
}

