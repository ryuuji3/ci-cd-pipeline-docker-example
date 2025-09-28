# ci-cd-pipeline-docker-example
An example repository demonstrating a basic CI/CD pipeline publishing docker images


## Notable features
CI:
* Pull request validation only on affected packages; runs tests in parallel
* Validate PR title is a conventional commit (https://www.conventionalcommits.org/en/v1.0.0/)

CD:
* Automatically tag commits and generate changelog on commit for entire monorepo
* Publish recently modified packages to docker registry (packages that contain Dockerfile are automatically published)

## Developer Experience
* Using `nx` for efficient monorepo configuration
* Enforces conventional commits on protected branches *only*
