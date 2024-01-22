---
author: ["yingwang"]
categories:
  - Books
title: 'Book Review: "Docker on AWS", by Justin Menga'
date: "2020-04-14T00:00:01-04:00"
draft: false
---

I encountered some difficulties with creating and deploying the MVP for the app
I wanted to build, mostly coming from the deployment side of things, and I
wanted to learn what was possible for Docker on AWS before I prematurely
optimized for any one system design. This book proved to me that I only had a
surface-level understanding of AWS, and helped take my skills to the next level.

Some of the things I've learned were:

- **CloudFormation is king in AWS-land.** This book gave me my first serious
  look at CloudFormation, and I've got to say I've really enjoyed learning
  infrastructure-as-code. It's so nice to be able to declaratively define
  stateful resources and get the same results time after time. CloudFormation is
  also nice because it ties very well with AWS's native tooling, and you can
  find all kinds of CloudFormation tutorials online. It's actually not that hard
  to learn.

  If you're interested in DevOps, definitely learn a platform like Terraform or
  CloudFormation, it'll improve your life quite a bit.

- **Security is a whole ball game.** really appreciate how Justin defines
  highly granular AWS IAM roles for pretty much every resource. It gives me
  confidence that this custom ECS stack can remain secure in production
  environments. What I didn't expect was how much security definitions tie into
  CloudFormation resource declaration.

  I chose CloudFormation over Terraform partially because I guessed AWS Support
  would be more familiar with CloudFormation issues, and because I figured
  CloudFormation would expose the "bare-metal" guts of AWS better than something
  that required non-native connectors, but now I'm also glad I chose
  CloudFormation because it's easy to orchestrate resources securely.

  I can see how DevOps is on the frontlines of securing stacks, not just in the
  IAM sphere, but also in adding resources. Things like adding a reverse proxy
  and NAT traversal are core to ensuring security best practices, and things I
  need to learn to do better.

- **ECS provides a great balance between resource transparency and resource
  automation.** I didn't like Elastic Beanstalk as much as I enjoyed learning
  about Elastic Container Service, because with ECS you get the actual
  underlying EC2 system logs. You can also define resources at different layers
  in order to maximize resource utilization; Justin even has a section on
  understanding ECS autoscaling. However, you can also define rolling
  deloyments, and CI/CD pipelines on top of that / those EC2 instances, so once
  your infrastructure is how you like it, you don't really need to touch it
  anymore. You get the agency to move in the direction you want.

  I think one thing that might be tricky is EC2 autoscaling along with ECS
  autoscaling, but that's a bridge I'll personally cross later. I really like
  the idea of having just one EC2 instance that has everything, it moves in the
  direction of a unified binary.

Some things I didn't like about the book were:

- **The attachment to AWS Lambda for defining custom CloudFormation resources.**
  I'm sure it scales a lot better, and Lambda is really nice when it works with
  CloudWatch, but there's no analogue for Lambda locally (maybe
  [Firecracker](https://firecracker-microvm.github.io/) as a
  functions-as-a-service platform), and Lambda is...I've found Lambda difficult
  to work with.

  Whether that's because CloudFormation stacks, when deployed without prior
  creation, automatically roll back upon failure deleting the associated
  CloudWatch logs, or because you have no visibility into the Lambda runtime
  (besides `python3.7` or what-not), or because Lambda resources in the book are
  defined inline vs. a separate Python file that might indicate issues locally
  before remote deployment, or because Lambda methods issue SIGINT upon Python
  warnings, or because I'm just not that good at Lambda at the moment, I'm not
  sure. I do prefer servers, and I think this book outlined the tradeoffs more
  specifically but didn't change the game in that regards.

  I don't think this is a deal breaker, though. I wonder whether you could
  deploy an ECS task definition in order to execute a database migration, vs. a
  Lambda custom resource. A task definition could wrap a short-lived Docker
  container instance, or even a Docker stage if possible, which would mimic
  Docker Compose more closely.

- **The CloudFormation stacks become ever more unwieldy to manage the larger
  they grow.** I get that production-grade CloudFormation stacks are much more
  complicated than the ones described in this book, but I'm also guessing they
  have much more extensive validation and custom support within companies. Not
  only can you define CI/CD pipelines using CloudFormation, you can [deploy a
  CI/CD pipeline to validate CloudFormation
  templates](https://aws.amazon.com/quickstart/architecture/cicd-taskcat/). That
  kind of customization is out of scope for a book, but I think it may affect
  the reader's understanding and appreciation of CloudFormation.

  For example, I had immense difficulty with the AWS Secrets Manager, likely
  because at time of writing, `AWS::SecretsManager::Secret` wasn't a defined
  resource within CloudFormation, and secrets may have had to be pre-created and
  tied into CloudFormation via AWS Lambda. This change threw me off, and I
  encountered significant CloudFormation stabilization issues, where the only
  error I would get is a timeout after an hour.

  Typing into the above, I also had latency issues with deploying resources that
  would stabilize after different periods of time. For example, EC2 instances
  are easy to create, while RDS instances are much more expensive. I didn't know
  how to recover from `ROLLBACK_COMPLETE` states, so I ended up deleting the
  entire CloudFormation stack. This made my iteration cycles quite long.

  In a later update, I might like to see nested or separate CloudFormation
  templates with common configuration files, in order to separate deployments of
  resources by deployment time, and to continue practicing examples even if all
  resources can't be stood up for some reason.

Overall, this book is great, and I'll definitely keep referring to it as I build
out my app. I would say it's the best DevOps book I've read, but I haven't read
too many DevOps books, and so I would say that doesn't mean much. It does make
DevOps approachable and demonstrable to software engineers from other
backgrounds, and I think that might just be higher praise.
