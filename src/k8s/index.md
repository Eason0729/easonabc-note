---
title: "Kubernetes"
nav_order: 2
---

Before learning kubernetes, you should known docker-compose (I will used a lot of example to guide you).

# What's kubernetes

> Kubernetes, also known as K8s, is an open source system for automating deployment, scaling, and management of containerized applications.

Because you came here, I will assume you know that.

# What is inside kubernetes?

1. A CLI that make network request to cluster(to add/update service)
    In this case, it's called kubectl

2. A cluster with at least one machine
    Machine has two responsibility, work(run whatever you ask to) and manage(decide what to run),
    in this case work called `worker`, manage called `control plane`, you can have both on same machine,
    not very important, just to acknowledge

