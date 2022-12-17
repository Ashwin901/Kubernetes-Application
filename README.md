# URL Shortener

Create persistent volume for mongodb
```
kubectl apply -f mongo-pv.yaml
```

Create persisitent volume claim
```
kubectl apply -f mongo-pv-claim.yaml
```

Create secret for mongo db
```
kubectl apply -f mongo-secret.yaml
```

Create deployment and service for mongodb
```
kubectl apply -f mongo-deployment.yaml
```

Create secret for url-shortener deployment
```
kubectl apply -f url-shortener-secret.yaml
```
Create url-shortener deployment and the corresponding service
```
kubectl apply -f url-shortener-deployment.yaml
```

### Access the app in browser

Change the service type from ClusterIP to NodePort
```
kubectl patch svc url-shortener-service -n urlshortener --type='json' -p '[{"op":"replace","path":"/spec/type","value":"NodePort"}]'
```

```
minikube service url-shortener-service -n urlshortener
```
