---
layout: base
title: "Git Cheatsheet"
syntax_highlight: true
comments: true
---

### Clone repository

```bash
git clone <repo_url> [folder_name]
```

### Create branch

```bash
git branch <branch_name>
```

### Checkout branch

```bash
git checkout <branch_name>
```

### View code differences

```bash
# Between working area and default branch (usually master)
git diff

# Between staged changes and default branch (usually master)
git diff --staged

# Between working area and some other branch
git diff <remote>/<branch>
```

### Create branch and checkout

```bash
git checkout -b <branch_name>
```

### Add new remote

```bash
git remote add <remote_name> <repo_url>
```

### Track remote branch

```bash
git branch -t <branch_name> <remote_name>/<remote_branch>
```

### Delete local branch

```bash
# Delete merged branch
git branch -d <branch>

# Delete non-merged branch (or force deletion)
git branch -D <branch>
```

### Delete remote branch

```bash
git push origin :<branch_name>
```

### Create tag

```bash
git tag -a <tag_name> -m "<comment>"
```

### Push tag to origin

```bash
git push origin <tag_name>
```

### Delete local tag

```bash
git tag -d <tag_name>
```

### Delete remote tag

```bash
git push origin :<tag_name>
```

### Clean local repo

```bash
git gc --prune
```

### Clean remote repo

```bash
git remote prune <remote>
```

### Restore deleted file

```bash
git reset HEAD <file>
git checkout <file>
```

### Undo last push

Use this instruction with caution.

```bash
git push -f <remote> <commit_sha1>:<branch_name>
```

### Undo staged changes

```bash
# Unstage changes on a tracked file
git reset HEAD <file>

# Unstage changes on a currently-untracked file
git rm --cached <file>

# Unstage changes on the working copy
# (use this instruction with caution, you could lose data)
git checkout -f
```

### Undo last pull

```bash
git reset --hard
```

### Undo last commit

```bash
git reset --soft HEAD^
```

### Blame

```bash
git blame -L <line_from>,<line_to> <file>
```

### Amend last commit

```bash
git commit --amend
```

### Unstage files

```bash
git reset HEAD <file>
```

### Reset file

```bash
# To a specific commit
git checkout <commit_sha1> <file>

# To a specific branch
git reset <remote>/<branch> <file>
```

### Resolve conflicts with checkout

```bash
# Resolve accepting the remote changes
git checkout --theirs <file>

# Resolve accepting the local changes
git checkout --ours <file>
```

### Revert commit or merge

```bash
git revert -m 1 <commit_sha1>
```

### Clean untracked files from working directory

```bash
git clean -f [-i]
```

## Contribute!

If you have commands, tips, suggestions or improvements that could make the cheatsheet richer or if you see something 
that is not accurate or right, please, feel free to propose the changes either on 
[GitHub](https://github.com/satanas/site) or in the comments below.
