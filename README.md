# Full Stack Web Application Deployed on a Kubernetes Cluster

There are two ways you can deploy this application on your kubernetes cluster

## 1. Using ArgoCD application manifest
Note: ArgoCD should already be deployed on the cluster
```
cd argocd-manifests
kubectl apply -f application.yml
```

## 2. Using Kubernetes manifests
```
kubectl apply -f manifests/
```

## 3. Apply kyverno policies using 
```
kubectl apply -f kyverno-policies/
```

## 4. Access the app in browser

Change the service type from ClusterIP to NodePort
```
kubectl patch svc url-shortener-service -n urlshortener --type='json' -p '[{"op":"replace","path":"/spec/type","value":"NodePort"}]'
```

```
minikube service url-shortener-service -n urlshortener
```

## 5. Github Action
A github action is setup to build and test the image before pushing it to docker hub
