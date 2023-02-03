let showModalBtn = document.getElementById('showModalBtn')
let modalBody = document.getElementById('modalBody')
let modalTitle = document.getElementById('modalTitle')

let live = document.getElementById('live')
let code = document.getElementById('code')

let img = document.getElementById('img')
let tech = document.getElementById('tech')
let about = document.getElementById('description')

function visit(evt){
    window.open(
        evt.currentTarget.link,
        '_blank' 
    );
}

function beSocial(){
    // alert('yes')
    
    about.innerHTML=" <br><ul style='margin:20px;'> <li>It is a full stack social media and blogging platform.</li>\
    <li>Users who have registered can post, share, like, and comment on their own and other users’ content.</li> \
    <li>Registered users can follow and unfollow contemporary users.</li></ul>"

    // about.textContent="rudrq"

    img.setAttribute('src','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia3eRUhmYU2Lc9ihFWLWwBSLauSXhtMeEFJF4Fe8yb89HQQCjNhSupSBZIX6TK1DLB7DBv4XP4f3MVb0Rr_hsR7OBLzsf9d4x40MQoHhIhuzoMEVdkkVOOAAazYFBUtYfZvQyBT0uy72nJOczKhe0QRDiX4i4Vk6J8_s1sOttDTstIRLyWTlWF_zgEhQ/s320/bSocialLogo.PNG')

    tech.innerHTML = "<ul> <li>Nodejs</li><li>Expressjs</li><li>Mongoose</li><li>jwt</li><li>multer</li><li>momentjs</li> </ul>"
    modalTitle.textContent="beSocial"

    live.removeEventListener('click',visit)
    live.addEventListener('click',visit)
    live.link='https://besocial.onrender.com/'

    code.removeEventListener('click',visit)
    code.addEventListener('click',visit)
    code.link='https://besocial.onrender.com/'

    showModalBtn.click()
}



function liveType(){
    
    about.innerHTML=" <br><ul style='margin:20px;'> <li>A web application called liveType is used to compete in real-time typing matches between two players. Users can join the room from anywhere in the world, compete, and communicate in real time.</li>\
    <li>Many people use fantastic sites like monkeytype.com, typerush.com, etc. to gauge their typing speed. However, they are missing out on their friends' in-person competition. Numerous studies have already shown that a win-reward system, like as the one in liveType, makes it easier to complete tasks since you feel accomplished after defeating a friend in a tight competition.</li> </ul>"


    img.setAttribute('src','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIlQiNrsfEBRO6AIwVFWpm8ODUNLChVrudun6lt8dcnClUWI0inwLCivb_1rMc3W0m2ojMMdZ8IWcxpM7BfnOpnY8tYOpapxPAXTFogZJHNv68ineoj56i0Jtu13wniB04qQx-egQ5bdU67_pvlY7_w-YgoiB2WK65iKVbC_Wbd8wGdGu9FVJEcbaIdw/w640-h402/liveType.PNG')

    tech.innerHTML = "<ul> <li>Nodejs</li><li>Expressjs</li><li>Socket.io</li><li>jwt</li><li>ejs</li></ul>"
    modalTitle.textContent="liveType"

    live.removeEventListener('click',visit)
    live.addEventListener('click',visit)
    live.link='https://livetype.onrender.com/'

    code.removeEventListener('click',visit)
    code.addEventListener('click',visit)
    code.link='https://livetype.onrender.com/'

    showModalBtn.click()
}

function typemaster(){
    
    modalTitle.textContent="Typemaster"

    img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHE96A1qvAn6YqQRnNQuYW4GmxDAHm_k-YA&usqp=CAU')

    tech.innerHTML = "<ul> <li>Nodejs</li><li>Expressjs</li><li>Mongoose</li><li>jwt</li><li>multer</li><li>momentjs</li> <li>ejs</li></ul>"

    about.innerHTML=" <br><ul style='margin:20px;'> <li>Typemaster is a full-stack web application built for practicing typing and substantially increase WPM.</li>\
    <li>Users typing data are saved and used to plot various interactive graphs to track their progress.</li> </ul>"

    live.removeEventListener('click',visit)
    live.addEventListener('click',visit)
    live.link='https://typemaster.onrender.com/'

    code.removeEventListener('click',visit)
    code.addEventListener('click',visit)
    code.link='https://typemaster.onrender.com/'
 
    showModalBtn.click()
}


function livechat(){
    
    modalTitle.textContent="liveChat"

    img.setAttribute('src','https://cdn.dribbble.com/users/267404/screenshots/3713416/talkup.png')

    tech.innerHTML = "<ul> <li>Nodejs</li><li>Expressjs</li><li>Socket.io</li><li>ejs</li><li>momentjs</li> </ul>"

    about.innerHTML=" <br><ul style='margin:20px;'> <li>Users can join from any corner of the world in a room and chat in realtime.</li></ul>"

    live.removeEventListener('click',visit)
    live.addEventListener('click',visit)
    live.link='https://mychat-77td.onrender.com'

    code.removeEventListener('click',visit)
    code.addEventListener('click',visit)
    code.link='https://mychat-77td.onrender.com'
 
    showModalBtn.click()
}



function bms(){
    
    modalTitle.textContent="Book Management System"

    img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSipU8YntX0xOlufUz17r6Bm97_ZemGXirReNrB-6fTwFAehWn29x0TkaK5M0jP1yhUeHU&usqp=CAU')

    tech.innerHTML = "<ul> <li>Nodejs</li><li>Expressjs</li><li>ejs</li><li>jwt</li><li>mongoose</li> </ul>"

    about.innerHTML=" <br><ul style='margin:20px;'> <li>Users can search/filter thousands of books from five different genres.</li><li>They can add/remove books from their accounts.</li></ul>"

    live.removeEventListener('click',visit)
    live.addEventListener('click',visit)
    live.link='https://bookmazter.onrender.com'

    code.removeEventListener('click',visit)
    code.addEventListener('click',visit)
    code.link='https://bookmazter.onrender.com'
 
    showModalBtn.click()
}

