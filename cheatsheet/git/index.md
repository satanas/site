---
layout: base
title: "Git Cheatsheet"
---

### Add new remote

```
git remote add <name> <remote_url>
```

### Track branch

```
git branch -t <name> <remote>/<branch>
```

### Delete local branch

```
# Delete merged branch
git branch -d <branch>

# Delete non-merged branch (or force deletion)
git branch -D <branch>
```

### Delete remote branch

```
git push origin :<branch>
```

### Create tag

```
git checkout <branch>
git tag -a <tag_name> -m "<comment>"
git push origin <tag_name>
```

### Delete tag

```
git tag -d <sometag>
git push origin :<sometag>
```
