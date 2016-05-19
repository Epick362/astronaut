## Astronaut Database App

This application uses Laravel as an API backend and Bootstrap4 + AngularJS as frontend which handles all the application routing.
You can add, delete and sort astronauts.

### Installation
Project is assumed to be run in a Homestead VMbox. Other installations may require additional configuration.

After cloning, run
```
  composer install
  php artisan migrate
  cp .env.example .env
  php artisan key:generate
  npm install
  bower install
  gulp dist
```
