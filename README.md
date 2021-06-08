[<p align="center"><img src="app-logo.svg" width="200"></p>](https://sourhub226.github.io/wetube-react/)
<p align="center"> A YouTube like video streaming app built using ReactJS.</p>

<p align="center">
        <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="Made with React">
        <img src="https://img.shields.io/static/v1?label=Youtube%20API&message=v3&color=white&labelColor=ff0000&logo=youtube" alt="Youtube api">      
        <img src="https://github.com/sourhub226/wetube-react/actions/workflows/main.yml/badge.svg" alt="Github pages deploy">
        <a href="https://github.com/sourhub226/wetube-react/issues">
                <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="contributions welcome">
        </a>
        <img src="https://views.whatilearened.today/views/github/sourhub226/todo-list-react.svg" alt="ViewCount">
</p>

### Features:
- YouTube API allowing searching and playing videos directly from YouTube.
- Advanced search to filter search results by order, duration, etc.
- Dark mode to reduce eye strain while binge watching.

### App screenshots:
Light mode                                 |  Dark mode
:-----------------------------------------:|:------------------------------------------:
![](screenshots/homepage-light-min.png)    |  ![](screenshots/homepage-dark-min.png)
![](screenshots/watch-area-light-min.png)  |  ![](screenshots/watch-area-dark-min.png)

### Running the app: 
1. Clone the project repo

        git clone https://github.com/sourhub226/wetube-react.git
 
2. Move to root directory of the project 

        cd wetube-react
     
3. Obtain a developer key for YouTube API v3 from [here](https://developers.google.com/youtube/registering_an_application)
4. Create a `.env` file based on `.env.template` provided and put the above obtained key in it. <br>The contents of the `.env` file should look something like this:

        API_KEY=XXXXXXXXXXXXXXXXXXXXXXXX
        
5. Install all required npm packages

        npm install
    
6. Run the app

        npm run dev
