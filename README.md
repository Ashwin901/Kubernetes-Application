# URL Shortener

### Secret Component
Create the secret component first because deployment depends on it
```
kubectl apply -f url-shortener-secret.yaml
```

### Deployment and Service Component
Both deployment and service specifications are in the same file
```
kubectl apply -f url-shortener-deployment.yaml
```

### Access the app in browser
The service is external, to get the IP address use the following command
```
minikube service <service-name>
```