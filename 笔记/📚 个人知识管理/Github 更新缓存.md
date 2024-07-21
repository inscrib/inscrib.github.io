- 更新远程仓库 URL 
	- `git remote set-url origin git@github.com:0x-buidl/0x-buidl.github.io.git`
- 清除缓存的凭据 
	- `git credential-cache exit`
- 推送当前分支到 `main`  
	- `git push origin HEAD:main`
- 重命名当前分支为 `main` 
	- `git branch -m master main`
- 更新远程分支 
	- `git push origin main`
- 设置上游分支 
	- `git push -u origin main`
- 检查当前分支
	- `git checkout main`

---
...
