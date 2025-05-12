# js-deprecated-code

# set vscode for git difference

git config --global diff.tool vscode
git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"
git config --global -e (see configuration)

git difftool (unstaged)
git difftool --staged (staged)

git log --oneline
git log
git log --reverse

git show <commit-id>
git show HEAD~1
git show HEAD
git show head:<file>

# undo the add
git restore --staged file.js

# undo files after commit
git rm -r --cached file.js
git commit -m ""

# discard local chanegs
git restore file.js -- this will discard any modified tracked file, set back to previous
git clean -fb (f means file, d means directory)

## restoring a file to its previous version
git restore --source=HEAD~1 file.js (specially if u want to restore deleted file)

