# adminbro

setup adminbro steps

1. make sure yarn is installed
2. create a project folder and cd to that folder
3. run the command yarn init -y (it creates a package.json)
4. code . (opens the visual studio code editor)
5. open the terminal inside vs code 
6. run the command yarn add --dev eslint (add eslint as devDependencies into package.json)
7. run the command yarn run eslint --init
8. select the following options 
	- check syntax, find problems, code style
	- CommonJS
	- React
	- Typescript - No
	- Browser/None - select
	- first option - select
	- Install with npm - Yes
9. open settings.json
	- make sure eslint settings are intact
10. run the command yarn add admin-bro express mongoose admin-bro-mongoose admin-bro-expressjs express-formidable
11. run the command yarn add --dev nodemon
12. pull the github branch
13. run the command yarn start
