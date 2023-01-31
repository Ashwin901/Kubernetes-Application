# URL Shortener

There are two ways you can deploy this application on your kubernetes cluster

## 1. Using ArgoCD
Note: ArgoCD should already be deployed on the cluster
```
cd argocd-manifests
kubectl apply -f application.yml
```

## 2. Manually using kubectl
```
cd manifests
```
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

Apply kyverno policies using 
```
kubectl apply -f kyverno-policies/
```

### Access the app in browser

Change the service type from ClusterIP to NodePort
```
kubectl patch svc url-shortener-service -n urlshortener --type='json' -p '[{"op":"replace","path":"/spec/type","value":"NodePort"}]'
```

```
minikube service url-shortener-service -n urlshortener
```
