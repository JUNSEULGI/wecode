#git 정리

###git 용어

1. git clone

- 이미 존재하는 레포지토리를 내 로컬에 복사한다.
- 사용법 : git clone repository_url
- git init이 필요 없다.
- git remote add origin url도 필요 없다.

2. git branch 이름

- 새로운 브랜치를 생성한다.

3. git checkout 이름

- 다른 브랜치로 이동한다.

4. git add

- git이 추적하여 변경된 것이 감지된 파일들 중, staging area로 올릴 파일을 추가한다.

5. git commit -m "message"

- staged된 파일들을 로컬에서 커밋한다.

6. git push origin branch_name

- origin으로 저장된 원격 주소의 해당 브랜치에 commit을 올린다.
