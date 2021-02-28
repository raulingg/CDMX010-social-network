import {onNavigate} from './routes.js';

export const home = `
    <div id="back-list"><div id="post-list"></div>
`;

document.getElementById("toHome").addEventListener('click', (e) => {
    e.preventDefault()
    onNavigate('/')
  })
  document.getElementById("toForm").addEventListener('click', (e) => {
    e.preventDefault()
    onNavigate('posting')
  })
  document.getElementById("toPost").addEventListener('click', (e) => {
    e.preventDefault()
    onNavigate('/post')
  })

  export default home;