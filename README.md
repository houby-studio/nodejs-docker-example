# nodejs-docker-example
Example application: creating dockerized node.js application and deploying to kubernetes

# How did we do it

## Create dashboard, users and computers applications
```powershell
# npm config set strict-ssl false # Use if behind proxy with SSL inspection
# Create Dashboard app
mkdir App.Dashboard && pushd App.Dashboard
npm init
npm install express axios --save
popd
# Create Computers app
mkdir App.Computers && pushd App.Computers
npm init
npm install express --save
popd
# Create Users app
mkdir App.Users && pushd App.Users
npm init
npm install express --save
popd
```