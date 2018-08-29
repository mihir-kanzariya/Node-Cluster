# Node Cluster


## Getting Started
You can download this repo or clone using below command. (`folder-name` will be project folder in which you want to start your project).
```
> git clone https://github.com/mihir-kanzariya/Node-Cluster.git <folder-name>
```

### Project Setup
Once you clone or download project go into you folder

### Installing
```
> npm install     
```

### Run it using below command in the root directory of your application.

### With Cluster 
```
> node withcluster.js
```

### Without Cluster
```
> node withoutcluster.js
```
### Test performance of app, you need to install [siege](https://jason.pureconcepts.net/2011/09/installing-siege-mac-os-x-lion/) on your system. After installing [siege](https://jason.pureconcepts.net/2011/09/installing-siege-mac-os-x-lion/) use below command 
```
> siege -r1000 -c10 http://localhost:3000/
```
This command send 10 users continuously 1000 times. At the last you will see statistics and see the differences between `withcluster.js` and `withoutcluster.js`. 

