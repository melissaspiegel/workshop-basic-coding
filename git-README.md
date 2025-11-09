# 🧠 Git Test — With Answers (JavaScript Engineer Edition)

A concise Git knowledge reference and self-test sheet.  
Each question covers an essential Git concept or command frequently tested in interviews.

---

## 🧩 Part 1 — Core Questions & Answers

### 1️⃣ What does `git clone` do?
> Copies a remote repository (all commits, branches, and tags) into your local environment and sets the remote origin.

---

### 2️⃣ Difference between `git fetch` and `git pull`?
> - `git fetch` downloads remote changes **without merging**.  
> - `git pull` = `git fetch` + `git merge` — applies fetched commits into your current branch.

---

### 3️⃣ What is a “detached HEAD” state?
> It means you’ve checked out a specific commit or tag instead of a branch.  
> You can inspect or run code, but new commits won’t be attached to a branch unless you create one.

---

### 4️⃣ How do you discard local changes in tracked files?
```bash
git restore .          # discard all working-directory changes
git restore <file>     # discard one file
git reset --hard HEAD  # discard staged + unstaged changes
```

---

### 5️⃣ Difference between `git merge` and `git rebase`?
> - **Merge:** Combines two branches, preserving all history with a merge commit.  
> - **Rebase:** Re-applies your commits on top of another branch, giving a clean, linear history.

---

### 6️⃣ What does `git stash` do?
> Temporarily saves (stashes) uncommitted **tracked** changes so you can switch branches or pull safely.  
> Restore them later with `git stash pop`.

---

### 7️⃣ What’s inside the `.git` directory?
> Hidden folder containing all repository data — commits, branches, tags, configuration, and the object database.  
> This folder *is* the actual Git repository.

---

### 8️⃣ How do you remove the last local commit but keep your changes?
```bash
git reset --soft HEAD~1
```
> Undoes the last commit but leaves all changes staged for a new commit.

---

### 9️⃣ What command shows all branches (local + remote)?
```bash
git branch -a
```
> Lists local and remote branches together.

---

### 🔟 How do you recover a lost commit?
```bash
git reflog
git checkout <hash>    # or git reset --hard <hash>
```
> `reflog` records every movement of `HEAD` and lets you restore deleted or reset commits.

---

## ⚙️ Part 2 — Hands-On Exercise

```bash
# 1. Create a new repo
git init git-practice
cd git-practice

# 2. Add a file and commit
echo "Hello" > app.js
git add .
git commit -m "Initial commit"

# 3. Create a branch and modify file
git checkout -b feature/update-message
echo "console.log('Updated');" >> app.js
git commit -am "Add update message"

# 4. Merge back into main
git checkout main
git merge feature/update-message

# 5. Visualize history
git log --oneline --graph --decorate --all
```

✅ **Expected:** A clean history showing both branches and the merge commit.

---

## 🧠 Part 3 — Scenario Questions

| Scenario | Best Command |
|-----------|---------------|
| Committed secrets (API key) by mistake | `git filter-repo` or `BFG Repo-Cleaner` to remove from history |
| Teammate force-pushed and diverged your branch | `git fetch --all` + `git rebase origin/main` |
| Want to test another branch but keep changes | `git stash` → switch branch → `git stash pop` |
| Find who changed each line | `git blame <file>` |
| Undo a bad merge commit safely | `git revert -m 1 <merge_commit_hash>` |

---

## 📜 Part 4 — Multiple Choice Review

| Question | Correct Answer |
|-----------|----------------|
| `git add .` | ✅ Stages changes for next commit |
| `git push origin main` | ✅ Pushes local commits to remote `main` |
| `git reset --hard` | ✅ Resets HEAD and discards local changes |

---

## ✨ Quick Reference Commands

| Category | Command | Description |
|-----------|----------|-------------|
| Branching | `git branch -a` | List all branches |
| Staging | `git add <file>` | Stage changes |
| Committing | `git commit -m "msg"` | Save staged changes |
| Undo | `git reset --soft HEAD~1` | Undo commit but keep changes |
| Discard | `git restore .` | Remove local changes |
| Stash | `git stash / git stash pop` | Temporarily save & restore work |
| Log | `git log --oneline --graph --all` | Visual commit graph |
| Recovery | `git reflog` | View HEAD movement, restore lost commits |

---

### ✅ Key Takeaway
> Mastering Git means understanding **how history moves** — not just memorizing commands.  
> Think in terms of commits, branches, and the DAG (directed acyclic graph) that connects them.
