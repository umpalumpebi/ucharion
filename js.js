const profileBtn = document.querySelector('#profile_right');
const leftDiv = document.querySelector('.profile2');
const fbLogo = document.getElementById('facebook_logo')


profileBtn.addEventListener('click', function() {
    leftDiv.classList.toggle('hidden');
  });

document.addEventListener('click', function(event) {
    if(event.target !== button && event.target !== leftDiv) {
        leftDiv.classList.add('hidden')
    }
})



profileBtn.addEventListener('click', function() {
    const newDiv = `
        <div id='allProfiles'>
            <button id='profileNname'><img src='img/profile_right.jpg'><a id='name'><b>Ucha Sephiskveradze</b></a></button>
            <hr class='hr1'>
            <button id='AllProfilesbtn'><a id='seeprof'>See all profiles</a></button>
        </div>
        <div id='profilebtns'>
            <button id='settings'><img src='img/settings.png' id='settings_img'><a id='settings_a'><b>Settings & privacy</b></a></button>
            <button id='help'><img src='img/help.png' id='help_img'><a id='help_a'><b>Help & support</b></a></button>
            <button id='lightMode'><img src='img/lightmode.png' id='lightmode_img'><a id='light_a'><b>Light mode</b></a></button>
            <button id='feedback'><img src='img/feedback.png' id='feedback_img'><a id='feedback_a'><b>Give feedback</b></a></button>
            <button id='logOut'><img src='img/logout.png' id='logout_img'><a id='logout_a'><b>Log out</b></a></button>
        </div>
  `;
    leftDiv.innerHTML = newDiv;


    const style = document.createElement('style');
    style.innerHTML = `
        .profile2 {
            position: absolute;
            right: 1.5vw;
            top: 6vh;
            border: none;
            background-color: rgb(36,37,38);
            width: 19vw;
            height: 45vh;
            border-radius: 10px;
        }

        .profile2 button:hover {
            background-color: rgba(58,59,60);
        }

        .profile2 button {
            display: flex;
            justify-content: left;
            flex-direction: column;
            border-style: none;
            align-items: left;
            background-color: rgb(36,37,38);
            width: 17vw;
            height: 5.3vh;
            border-radius: 15px;
            background-size: auto;
        }


        #profileNname img {
            border: none;
            border-radius: 25px;
            width: 1.8vw;
            height: 4vh;
            margin-right: 2vw;
            margin-top: 5px;
        }

        #name {
            position: relative;
            font-family: 'factmedium', Arial, sans-serif;
            font-size: 16px;
            margin-left: 2.2vw;
            bottom: 3vh;
            color: rgb(227,229,234);
        }

        #allProfiles {
            margin-left: 24px;
            margin-top: 2vh;
        }

        #name {
            font-family: 'factmedium', 'Arial;
        }

        #profileNname {
            height: 6vh;
            justify-content: center;
        }


        #AllProfilesbtn {
            position: relative;
            font-family: 'factmedium', Arial, sans-serif;
            font-size: 15px;
            color: rgb(46,133,246);
            justify-content: center;
            height: 5vh;
            bottom: 5px;
        }

        #profilebtns img {
            width: 2vw;
        }

        #profilebtns button {
            margin-left: 7px;
        }

        #help_img {
            margin-top: 10px;
        }

        #settings_img {
            margin-top: 4px;
        }

        #lightmode_img {
            margin-top: 3px;
        }

        #feedback_img {
            margin-top: 3px;
        }

        #logout_img {
            margin-top: 2px;
        }

        #profilebtns button a  {
            position: relative;
            font-family: 'factmedium', Arial, sans-serif;
            font-size: 13px;
            margin-left: 2.5vw;
            bottom: 3vh;
            color: rgb(227,229,234);
        }

        #help_a {
            margin-top: 10px;
        }

        #settings_a {
            margin-top: 4px;
        }

        #lightmode_a {
            margin-top: 3px;
        }

        #feedback_a {
            margin-top: 3px;
        }

        #logout_a {
            margin-top: 2px;
        }

        `;
    document.head.appendChild(style);

    const lightBtn = document.querySelector('#lightMode')
    const friends_colored_class = document.querySelector('.friends_colored_class')
    const profile_left_class = document.querySelector('.profile_left_class')
    const memories_class = document.querySelector('.memories_class')
    const saved_class = document.querySelector('.saved_class')
    const most_recent_class = document.querySelector('.most_recent_class')
    const groups_colored_class = document.querySelector('.groups_colored_class')
    const see_more_class = document.querySelector('.see_more_class')
    const profile_left_a = document.querySelector('.profile_left_a')
    const friends_a = document.querySelector('.friends_a')
    const memories_a = document.querySelector('.memories_a')
    const saved_a = document.querySelector('.saved_a')
    const most_recent_a = document.querySelector('.most_recent_a')
    const groups_a = document.querySelector('.groups_a')
    const see_more_a = document.querySelector('.see_more_a')
    lightBtn.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark-mode');
        document.body.classList.toggle('dark-mode');
        friends_colored_class.classList.toggle('dark-mode')
        profile_left_class.classList.toggle('dark-mode')
        memories_class.classList.toggle('dark-mode')
        saved_class.classList.toggle('dark-mode')
        most_recent_class.classList.toggle('dark-mode')
        groups_colored_class.classList.toggle('dark-mode')
        see_more_class.classList.toggle('dark-mode')
        profile_left_a.classList.toggle('dark-mode')
        friends_a.classList.toggle('dark-mode')
        memories_a.classList.toggle('dark-mode')
        saved_a.classList.toggle('dark-mode')
        most_recent_a.classList.toggle('dark-mode')
        groups_a.classList.toggle('dark-mode')
        see_more_a.classList.toggle('dark-mode')

    })
});



