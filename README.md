# Node.js microservices in kubernetes example

In this repository, you will find three example microservices.

- App.Dashboard, which serves as frontend and displays data from other microservices
- App.Users, which will return 'Users'
- App.Computers, which will return 'Computers'

This microservices can be deployed in three modes.

1. Development/debug mode

Run from your computer. You can then browse to http://localhost:3000/ to visit your Dashboard, which pulls data from other two microservices.

```powershell
# Install dependencies
npm install
pushd App.Dashboard
npm install
popd
pushd App.Users
npm install
popd
pushd App.Computers
npm install
popd
# Start three node.js instances for each app
npm start
```

2. Docker mode

Run within docker. Download our example images or build your own (see **Build docker images and deploy** below) and deploy to your docker instance. You can then browse to http://localhost:3000/ to visit your Dashboard, which pulls data from other two microservices.

```powershell
$Dns = "10.0.0.10"
$ComputerName = "my-work-pc"
$Domain = "Domain.local"
# Pull images
docker pull houbystudio/nodejs-docker-example-dashboard
docker pull houbystudio/nodejs-docker-example-users
docker pull houbystudio/nodejs-docker-example-computers
# Start each docker image with your Computer.domain name and DNS server
docker run --env COMPUTERNAME=$ComputerName --env USERDNSDOMAIN=$Domain --dns $Dns -p 3000:3000 -d houbystudio/nodejs-docker-example-dashboard
docker run --dns $Dns -p 3002:3001 -d houbystudio/nodejs-docker-example-users
docker run --dns $Dns -p 3002:3002 -d houbystudio/nodejs-docker-example-computers
```

3. Kubernetes mode

TODO:

# How did we do it

## Create dummy dashboard, users and computers applications

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

## Build docker images

```powershell
pushd App.Dashboard
docker build -t houbystudio/nodejs-docker-example-dashboard .
popd
pushd App.Users
docker build -t houbystudio/nodejs-docker-example-users .
popd
pushd App.Computers
docker build -t houbystudio/nodejs-docker-example-computers .
popd
```