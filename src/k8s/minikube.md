---
parent: "Kubernetes"
title: "Minikube"
nav_order: 2
---

Before learning kubernetes, we need some testing/learning tools (~~I use minikube BTW~~).

# Prerequired knoweledge

1. minikube can be deployed as a VM, a container, or bare-metal, and that's what we called `driver`.
  - If deployed in qemu(a type of VM), then driver is qemu
  - If deployed in docker(a type of container), then driver is docker

## Process

- Install minikube CLI

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-latest.x86_64.rpm
sudo rpm -Uvh minikube-latest.x86_64.rpm
```

- Let CLI create an cluster for us(start, create if not found)

```bash
minikube start --driver docker
```

> If docker doesn't work, try virtual box(it's very likely to work, but performance suffers)

- Verify it's running

```bash
kubectl get nodes
```

**Remember you need to start minikube every boot**