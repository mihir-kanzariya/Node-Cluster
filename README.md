# Node Cluster


## Getting Started
You can download this repo or clone using below command. (`<folder-name>` will be project folder in which you want to start your project).
```
> git clone https://github.com/mihir-kanzariya/Node-Cluster.git <folder-name>
```

### Project Setup
Once you clone or download project, go into your folder

### Installing
```
> npm install     
```

### Run it using below command in the root directory of your application.

### To run With Cluster 
```
> node withcluster.js
```

### To run Without Cluster
```
> node withoutcluster.js
```
### To test the performance of your app, you need to install [siege](https://jason.pureconcepts.net/2011/09/installing-siege-mac-os-x-lion/) on your system. After installing [siege](https://jason.pureconcepts.net/2011/09/installing-siege-mac-os-x-lion/) use the command given below
```
> siege -r1000 -c10 http://localhost:3000/
```
This command sends 10 users continuously for 1000 times. In the end, you will see statistics and differences between `withcluster.js` and `withoutcluster.js`. 
