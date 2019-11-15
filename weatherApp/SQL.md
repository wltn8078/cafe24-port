## 데이터 가져오기
# 구문
```sql
-- 가져오기
SELECT 컬럼명, 컬럼명 ... FROM gbook
SELECT * FROM gbook
-- 데이터 정렬해서 가져오기
-- 오름차순
SELECT * FROM gbook ORDER BY id ASC
-- 내림차순
SELECT * FROM gbook ORDER BY id DESC

-- 원하는 데이터만 가져오기
SELECT * FROM gbook WHERE id=5
SELECT * FROM gbook WHERE wtime > '2019-09-01 00:00:00' ORDER BY wtime DESC
SELECT * FROM gbook WHERE comment = '하이'
SELECT * FROM gbook WHERE comment LIKE '%하이%' ORDER BY id DESC
-- %가 붙은 곳이 내용 추가
-- [%가 앞에 붙으면 앞에 내용이 / %가 뒤에 붙으면 뒤에 내용이] 들어가는 테이터를 찾는다 .

-- 원하는 갯수만 가져오기
SELECT * FROM gbook WHERE comment LIKE '%기자%' ORDER BY id DESC LIMIT 0, 5
SELECT * FROM gbook WHERE comment LIKE '%기자%' ORDER BY id DESC LIMIT 10, 5

```


### 데이터 삭제 

### 데이터 수정