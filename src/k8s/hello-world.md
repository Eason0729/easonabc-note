---
parent: "Kubernetes"
title: "Hello world"
nav_order: 4
---

# Bad Example

Let's setup a service called hello-world.

> Deployment is a resource that's the blueprint of how to construct a Pod

> ReplicaSet decide how many to run and what machine should run such Pod.

`deployment.yml`
```yaml
kind: Deployment
apiVersion: apps/v1
metadata:
  name: hello-world
  labels:
    app: hello-world

spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-world # when deleting deployment, k8s will try to find Pod that match this and delete Pod spawned by Deployment
  template:
    metadata:
      labels:
        app: hello-world # Pod inherent metadata from deployment's **spec**
    spec:
      containers:
        - name: hello-world
          image: registry.hub.docker.com/lmmendes/http-hello-world
          ports:
            - name: web
              containerPort: 80
              hostPort: 80 # open a port on machine
```

This configuration stink, it only open accept request on a machine **randomly** selected by control plan.

And this example stinks, too. Because it contain no infomation about selector.

## Better Example

Let's introduce more resource.

Service has 4 variants, one of such is `NodePort`, `NodePort`(no udp) open port on all worker

```yaml
apiVersion: v1
kind: Service
metadata:
  name: hello-world
spec:
  type: NodePort
  selector:
    app: hello-world
  ports:
    - port: 80 # match containerPort
      nodePort: 80
```

Remember to remove `hostPort`.

> Going to http://localhost:80 won't works because `localhost` is not domain of your VM nor container.