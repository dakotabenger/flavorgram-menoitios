<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/dakotabenger/flavorgram-menoitios">
    <img src="https://raw.githubusercontent.com/dakotabenger/flavorgram-menoitios/main/react-app/public/knifork.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Flavorgram</h3>

  <p align="center">
    A application for those food lovers that want to share their passion 
    <br />
    <a href="https://github.com/dakotabenger/flavorgram-menoitios/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://flavorgram.herokuapp.com/" target="_blank" >View Live</a>
    ·
    <a href="https://github.com/dakotabenger/flavorgram-menoitios/issues">Report Bug</a>
    ·
    <a href="https://github.com/dakotabenger/flavorgram-menoitios/issues">Request Feature</a>
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#getting-started">Flask/Back-end</a></li>
        <li><a href="https://github.com/dakotabenger/flavorgram-menoitios/blob/main/react-app/README.md">React/Front-End</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
<img src="https://github.com/dakotabenger/flavorgram-menoitios/blob/readMe/react-app/public/flavorgram-homepage.jpg?raw=true" alt="HomePage" >
<-- quick description about project -->

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Javascript]()
* [React](https://reactjs.org/)
* [Python](https://docs.python.org/3/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [Flask-Migrate](https://flask-migrate.readthedocs.io/en/latest/)
* [SQLAlchemy](https://www.sqlalchemy.org/)
# Flask React Project

This is the backend for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

8. Release your docker container to heroku

   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```

9. set up your database:

   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
   heroku run -a {NAME_OF_HEROKU_APP} flask seed all
   ```

10. Under Settings find "Config Vars" and add any additional/secret .env variables.

11. profit

<!-- USAGE EXAMPLES -->
## Usage

### Some of the features that you can use with this website
- Being able to sign-up/login/demo 
<img src="https://github.com/dakotabenger/flavorgram-menoitios/blob/main/react-app/public/Flavorgram-DemoLogin.gif?raw=true" />

- Liking recipes
<img src="https://github.com/dakotabenger/flavorgram-menoitios/blob/main/react-app/public/Flavorgram-CanLike.gif?raw=true" />

- Commenting / Recipe info
<img src="https://github.com/dakotabenger/flavorgram-menoitios/blob/main/react-app/public/Flavorgram-Commenting.gif?raw=true" />

- Create Recipes 
<img src="https://github.com/dakotabenger/flavorgram-menoitios/blob/main/react-app/public/Flavorgram-CreateRecipe.gif?raw=true" />

- Search for recipes
<img src="https://github.com/dakotabenger/flavorgram-menoitios/blob/main/react-app/public/Flavorgram-Search.gif?raw=true" />

- User Profiles 
<img src="https://github.com/dakotabenger/flavorgram-menoitios/blob/main/react-app/public/Flavorgram-UserProfiles.gif?raw=true" />

<!-- ROADMAP -->
## Roadmap

For all planning done before hand check it out [here](https://github.com/dakotabenger/flavorgram-menoitios/wiki)

<!-- CONTACT -->
## Contact
#### Dakota Benger: [Github](https://github.com/dakotabenger) - [LinkedIn](https://www.linkedin.com/in/dakota-benger/)

#### Derek Nungesser: [Github](https://github.com/dereknungesser) - [LinkedIn](https://www.linkedin.com/in/nungesser94/)

#### Dez Adkins: [Github](https://github.com/dezadkins) - [LinkedIn](https://www.linkedin.com/in/desmond-adkins-64981a36/)

#### Ramses Romero Jr: [Github](https://github.com/RamsesRomeroJr) - [LinkedIn](https://www.linkedin.com/in/ramses-romero-jr/)


[Project Link](https://github.com/dakotabenger/flavorgram-menoitios)
