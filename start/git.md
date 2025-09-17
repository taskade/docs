# Git Tutorial

A concise guide to get started with Git, the distributed version control system.

## 1. Installation and Setup

1. Install Git:
   - macOS: `brew install git`
   - Windows: Download from https://git-scm.com/downloads
   - Linux: `sudo apt-get install git`

2. Configure your identity:

```shell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 2. Initializing a Repository

Create a new Git repository in your project folder:

```shell
git init
```

## 3. Recording Changes

Check the status of your files:

```shell
git status
```

Add files to staging:

```shell
git add <file>
```

Commit changes:

```shell
git commit -m "Describe your changes"
```

## 4. Viewing History

See a summary of commits:

```shell
git log --oneline
```

## 5. Working with Remotes

Clone a remote repository:

```shell
git clone <repository-url>
```

Add a remote and push:

```shell
git remote add origin <url>
git push -u origin main
```

Fetch and integrate changes:

```shell
git pull
```

## 6. Branching and Merging

Create a new branch and switch to it:

```shell
git branch <branch-name>
git checkout <branch-name>
```

Merge another branch into the current one:

```shell
git merge <branch-name>
```

## 7. Ignoring Files

Create a `.gitignore` file in your repository root to exclude files:

```gitignore
# Ignore log files
*.log
/node_modules/
```

## Further Resources

Explore the official documentation: https://git-scm.com/docs
