#### 시멘틱웹

**SEO(검색엔진 최적화: Search Engine Optimization)같은 마케팅 도구를 사용하여 검색엔진이 본인의 웹사이트를 검색하기 알맞은 구조로 웹사이트를 조정하기도 하는데,  
이것은 기본적으로 검색엔진이 웹사이트 정보를 어떻게 수집하는지 아는 것으로 부터 시작된다.**

**검색엔진은 로봇(Robot)이라는 프로그램을 이용해 매일 전세계의 웹사이트 정보를 수집한다.(이것을 크롤링이라 하며 검색엔진의 크롤러가 이를 수행한다.)  
그리고 검색 사이트 이용자가 검색할 만한 키워드를 미리 예상하여 검색 키워드에 대응하는 인덱스(색인)을 만들어 둔다.(이것을 인덱싱이라 하며 검색엔진의 인덱서가 이를 수행한다.)  
인덱스를 생성할 때 사용되는 정보는 검색 로봇이 수집한 정보인데 결국 웹사이트의 HTML 코드이다.**

**즉, 검색 엔진은 HTML 코드 만으로 그 의미를 인지하여야 하는데 이때 시맨틱 요소(Semantic element)를 해석하게 된다.
검색엔진은 대체로 h1 요소 내의 콘텐츠를 웹문서의 중요한 제목으로 인식하고 인덱스에 포함시킬 확률이 높다  
시맨틱 요소로 구성되어 있는 웹페이지는 검색엔진에 보다 의미론적으로 문서 정보를 전달할 수 있고 검색엔진 또한 시맨틱 요소를 이용하여 보다 효과적인 크롤링과 인덱싱이 가능해졌다**

**즉, 시맨틱 태그란 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할을 한다.
시맨틱 태그에 의해 컴퓨터가 HTML 요소의 의미를 보다 명확히 해석하고 그 데이터를 활용할 수 있는 시맨틱 웹이 실현될 수 있다.
시맨틱 웹이란 웹에 존재하는 수많은 웹페이지들에 메타데이터(Metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.**

HTML 요소는 non-semantic 요소, semantic 요소로 구분할 수 있다.  
_non-semantic 요소_  
div, span 등이 있으며 이들 태그는 content에 대하여 어떤 설명도 하지 않는다.

_semantic 요소_  
form, table, img 등이 있으며 이들 태그는 content의 의미를 명확히 설명한다,

<img src="https://poiemaweb.com/img/building-structure.png" width="400" style="background: white">

---

#### 텍스트 관련 태그

1. 제목 (Headings) 태그  
   시맨틱 웹의 의미를 살려서 제목 이외에는 사용하지 않는 것이 좋다. 검색엔진은 제목 태그를 중요한 의미로 받아들일 가능성이 크다.

2. 글자 형태 (Text Formatting) 태그  
   2.1 b: bold체. 제목 태그와 같이 의미론적(Semantic) 중요성의 의미는 없다  
   2.2 strong: b tag와 동일하게 bold체를 지정한다. 하지만 의미론적(Semantic) 중요성의 의미를 갖는다.  
   2.3 i: Italic체를 지정한다. 의미론적(Semantic) 중요성의 의미는 없다.  
   2.4 em: emphasized(강조, 중요한) text를 지정한다. i tag와 동일하게 Italic체로 표현된다. 의미론적(Semantic) 중요성의 의미를 갖는다.  
   2.5 small: small text를 지정한다.  
   2.6 mark: highlighted text를 지정한다.  
   2.7 del: deleted (removed) text를 지정한다.  
   2.8 ins: inserted (added) text를 지정한다.  
   2.9 sub / sup: sub 태그는 subscripted(아래에 쓰인) text를 sup 태그는 superscripted(위에 쓰인) text를 지정한다.

3. 본문 태그  
   3.1 p: 단락 (Paragraphs)을 지정한다.  
   3.2 br: br tag는 (강제)개행 (line break)을 지정한다. br tag는 빈 요소(empty element)로 종료태그가 없다.  
   3.3 pre: 형식화된(preformatted) text를 지정한다. pre 태그 내의 content는 작성된 그대로 브라우저에 표시된다.  
   3.4 hr: 수평줄을 삽입한다.

#### HTML의 핵심 개념 Hyperlink

한 텍스트에서 다른 텍스트로 건너뛰어 읽을 수 있는 이 기능을 하이퍼링크(hyper link)라 한다.  
HTML link는 hyperlink를 의미하며 a(anchor) tag가 그 역할을 담당한다.

target 어트리뷰트는 링크를 클릭했을 때 윈도우를 어떻게 오픈할 지를 지정한다.

| Value   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| \_self  | 링크를 클릭했을 때 연결문서를 현재 윈도우에서 오픈한다 (기본값) |
| \_blank | 링크를 클릭했을 때 연결문서를 새로운 윈도우나 탭에서 오픈한다   |

#### 목록(List)와 표(Table) 형식 표현을 위한 태그

1. 목록 (List)  
   1.1 순서없는 목록 (Unordered List)  
   1.2 순서있는 목록 (Ordered List)

2. 테이블  
   표(table)를 만들 때 사용하는 태그이다.

| tag   | Description                       |
| ----- | --------------------------------- |
| table | 표를 감싸는 태그                  |
| tr    | 표 내부의 행 (table row)          |
| th    | 행 내부의 제목 셀 (table heading) |
| td    | 행 내부의 일반 셀 (table data)    |

<img src="https://poiemaweb.com/img/html_table_structure.gif" width=400>

```html
<table border="1">
  <tr>
    <th>First name</th>
    <th>Last name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>
```

테이블 태그의 어트리뷰트  
|attribute|Description|
|--|--|
|border|표 테두리 두께 지정|
|rowspan|해당 셀이 점유하는 행의 수 지정|
|colspan|해당 셀이 점유하는 열의 수 지정|

#### Forms

1. form태그

**form 태그는 사용자가 입력한 데이터를 수집하기 위해 사용되며 input, textarea, button, select, checkbox, radio button, submit button 등의 입력 양식 태그를 포함할 수 있다.**

| attribute | Value      | Description                              |
| --------- | ---------- | ---------------------------------------- |
| action    | URL        | 입력 데이터(form data)가 전송될 URL 지정 |
| method    | get / post | 입력 데이터(form data) 전달 방식 지정    |

GET과 POST는 HTTP 프로토콜을 이용해서 사용자 입력 데이터를 서버에 전달하는 방식을 나타내며 HTTP request method라 한다

#### GET

- GET 방식은 전송 URL에 입력 데이터를 쿼리스트링으로 보내는 방식이다.  
  예) http://jsonplaceholder.typicode.com/posts?userId=1&id=1
- 전송 URL 바로 뒤에 ‘?’를 통해 데이터의 시작을 알려주고, key-value형태의 데이터를 추가한다. 1개 이상의 전송 데이터는 ‘&’로 구분한다.
- URL에 전송 데이터가 모두 노출되기 때문에 보안에 문제가 있으며 전송할 수 있는 데이터의 한계가 있다. (최대 255자).
- REST API에서 GET 메소드는 모든 또는 특정 리소스의 조회를 요청한다.

#### POST

- POST 방식은 Request Body에 담아 보내는 방식이다.  
  예) http://jsonplaceholder.typicode.com/posts
- URL에 전송 데이터가 모두 노출되지 않지만 GET에 비해 속도가 느리다.
- REST API에서 POST 메소드는 특정 리소스의 생성을 요청한다.

```html
<form action="http://jsonplaceholder.typicode.com/users" method="get">
  ID: <input type="text" name="id" value="1" /><br />
  username: <input type="text" name="username" value="Bret" /><br />
  <input type="submit" value="Submit" />
</form>
```

submit button이 클릭되면 input 태그에 입력된 데이터가 form 태그의 method 어트리뷰트에 지정된 방식으로 action 어트리뷰트에 지정된 서버측의 처리 로직에 전달된다.

2. input태그

input 태그는 form 태그 중에서 가장 중요한 태그로 사용자로부터 데이터를 입력받기 위해 사용된다.

input 태그는 다양한 종류가 있는데 type 어트리뷰트에 의해 구분된다.  
form 태그 내에 존재하여야 입력 데이터를 전송할 수 있으나 ajax를 사용할 시에는 form 태그 내에 존재하지 않아도 된다.

<img src="https://eastflag.co.kr/wp-content/uploads/2018/06/spa2.png" width="600">

**서버에 전송되는 데이터는 name 어트리뷰트를 키로, value 어트리뷰트를 값으로하여 key=value의 형태로 전송된다.**

| type 어트리뷰트값 | Description                    |
| ----------------- | ------------------------------ |
| button            | 버튼 생성                      |
| checkbox          | checkbox 생성                  |
| color             | 컬러 선택 생성                 |
| date              | date control (년월일) 생성     |
| datetime          | date & time control            |
| datetime-local    | 지역 date & time control       |
| email             | 이메일 입력 form               |
| file              | 파일 선택 form 생성            |
| hidden            | 감추어진 입력 form 생성        |
| image             | 이미지로 된 submit button 생성 |
| month             | 월 선택 form 생성              |
| number            | 숫자 입력 form 생성            |
| password          | password 입력 form 생성        |
| radio             | radio button 생성              |
| range             | 범위 선택 form 생성            |
| reset             | 초기화 button 생성             |
| search            | 검색어 입력 form 생성          |
| submit            | 제출 button 생성               |
| tel               | 전화번호 입력 form 생성        |
| text              | 텍스트 입력 form 생성          |
| time              | 시간 선택 form 생성            |
| url               | url 입력 form 생성             |
| week              | 주 선택 입력 form 생성         |

3. select태그

복수개의 리스트에서 복수개의 아이템을 선택할 때 사용한다

서버에 전송되는 데이터는 select 요소의 name 어트리뷰트를 키로, option 요소의 value 어트리뷰트를 값으로하여 key=value의 형태로 전송된다.

| tag      | Description         |
| -------- | ------------------- |
| select   | select form 생성    |
| option   | option 생성         |
| optgroup | option을 그룹화한다 |

4. textarea

```html
<textarea name="message" rows="10" cols="30">Write something here</textarea>
```

5. button

button 태그는 클릭할 수 있는 버튼을 생성한다  
`<input type="button">`과 유사하지만 input 태그는 빈 태그인 반면 button 태그는 그렇지 않다.  
따라서 button 요소에는 텍스트나 이미지 같은 콘텐츠를 사용할 수 있다.

button 태그는 어트리뷰트만을 받아들이는 input 태그와 달리 콘텐츠로 문자열은 물론 HTML 요소를 받을 수도 있다는 장점이 있다

type 어트리뷰트는 반드시 지정하는 것이 바람직하며 어트리뷰트값으로 button, reset, submit를 지정할 수 있다.
