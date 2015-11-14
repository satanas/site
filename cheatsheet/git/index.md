---
layout: base
title: "Git Cheatsheet"
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
git branch -t <local_branch_name> <remote_name>/<remote_branch_name>
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
git remote prune <remote_name>
```

### Restore deleted file

```bash
git reset HEAD <file>
git checkout <file>
```

### Undo last push

Use this instruction with caution.

```bash
git push -f <remote> <commit_sha>:<branch_name>
```

### Undo unstaged changes in working space

Use this instruction with caution, you could lose data.

```bash
git checkout -f
```

### Undo last pull

```bash
git reset --hard
```
