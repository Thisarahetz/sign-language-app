## SALON SASS

> [!NOTE]
> [Figma](https://www.figma.com/files/team/952775637315740610/project/250814822?fuid=926951937132210398).
>


>  [!IMPORTANT]
> This project use `Conventional Commits` commit msg styles

 ```
 <type>[optional scope]: <description>
```
 Example - `echo "fix(scope): some message"` .
 
[Vist Cheat Sheet To Know More](https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index)

- feat: Commits, which adds a new feature
- fix: Commits, that fixes a bug
- refactor: Commits, that rewrite/restructure your code, however, do not change any behavior
- perf: Commits are special refactor commits, that improve performance
- style: Commits, that do not affect the meaning (white space, formatting, missing semi-colons, etc)
- test: Commits, that add missing tests or correct existing tests
- docs: Commits, that affect documentation only
- build: Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
- ops: Commits, that affect operational components like infrastructure, deployment, backup, recovery...
- chore: Miscellaneous commits e.g. modifying .gitignore


- `migrate:generate`: Generate new migration files.
  ```bash
  npm run migrate:generate
  ```

- `migrate:execute`: Execute the latest migration.
  ```bash
  npm run migrate:execute
  ```

- `migrate:rollback`: Rollback the last migration.
  ```bash
  npm run migrate:rollback
  ```

- `migrate:seed`: Seed the database with initial data.
  ```bash
  npm run migrate:seed
  ```