---
layout: base
title: "Git Cheatsheet"
---

### Add new remote

```bash
git remote add <name> <remote_url>
```

### Track branch

```bash
git branch -t <name> <remote>/<branch>
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
git push origin :<branch>
```

### Create tag

```bash
git checkout <branch>
git tag -a <tag_name> -m "<comment>"
git push origin <tag_name>
```

### Delete tag

```bash
git tag -d <sometag>
git push origin :<sometag>
```
