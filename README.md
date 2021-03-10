#### 시멘틱웹

SEO(검색엔진 최적화: Search Engine Optimization)같은 마케팅 도구를 사용하여 검색엔진이 본인의 웹사이트를 검색하기 알맞은 구조로 웹사이트를 조정하기도 하는데,  
이것은 기본적으로 검색엔진이 웹사이트 정보를 어떻게 수집하는지 아는 것으로 부터 시작된다.  
검색엔진은 로봇(Robot)이라는 프로그램을 이용해 매일 전세계의 웹사이트 정보를 수집한다.(이것을 크롤링이라 하며 검색엔진의 크롤러가 이를 수행한다.)  
그리고 검색 사이트 이용자가 검색할 만한 키워드를 미리 예상하여 검색 키워드에 대응하는 인덱스(색인)을 만들어 둔다.(이것을 인덱싱이라 하며 검색엔진의 인덱서가 이를 수행한다.)  
인덱스를 생성할 때 사용되는 정보는 검색 로봇이 수집한 정보인데 결국 웹사이트의 HTML 코드이다.  
_즉, 검색 엔진은 HTML 코드 만으로 그 의미를 인지하여야 하는데 이때 시맨틱 요소(Semantic element)를 해석하게 된다._  
검색엔진은 대체로 h1 요소 내의 콘텐츠를 웹문서의 중요한 제목으로 인식하고 인덱스에 포함시킬 확률이 높다  
시맨틱 요소로 구성되어 있는 웹페이지는 검색엔진에 보다 의미론적으로 문서 정보를 전달할 수 있고 검색엔진 또한 시맨틱 요소를 이용하여 보다 효과적인 크롤링과 인덱싱이 가능해졌다  
_즉, 시맨틱 태그란 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할을 한다._
_시맨틱 태그에 의해 컴퓨터가 HTML 요소의 의미를 보다 명확히 해석하고 그 데이터를 활용할 수 있는 시맨틱 웹이 실현될 수 있다._  
_시맨틱 웹이란 웹에 존재하는 수많은 웹페이지들에 메타데이터(Metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다._

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
   과거에는 테이블 태그를 사용하여 레이아웃을 구성하기도 하였으나 모던 웹에서는 주로 공간 분할 태그인 div 태그를 사용하여 레이아웃을 구성한다.

| tag   | Description                       |
| ----- | --------------------------------- |
| table | 표를 감싸는 태그                  |
| tr    | 표 내부의 행 (table row)          |
| th    | 행 내부의 제목 셀 (table heading) |
| td    | 행 내부의 일반 셀 (table data)    |

<img src="https://poiemaweb.com/img/html_table_structure.gif" width=400>
