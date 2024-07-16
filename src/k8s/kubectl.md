---
parent: "Kubernetes"
title: "Kubectl"
nav_order: 1
---

First, Let's install CLI tools(it's called `kubectl`).

[Follow docs](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

Or just paste it...

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

## Add a yaml file(or delete)

K8s is an declarative architecture, it's consist of many yaml files.

If you have `a.yaml`, run `kubectl apply -f a.yaml` to send it, run `kubectl delete -f a.yaml` to delete it.

