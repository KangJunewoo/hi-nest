# NestJS
노마드코더와 함께하는 nestjs 입문

* 컨트롤러 : url을 가져와 함수를 실행하는 역할
* 서비스 : 나머지 비즈니스 로직 담당. 실제 function

cli 명령어로 대부분의 것들을 할 수 있음.  
```bash
nest g co
```
로 컨트롤러 생성.  

자세한 건 매우 쉬워서 코드 봐도 알 수 있을 것이다.
역시 :id 제일 밑으로 내려야 하는 건 같음.


single-responsiblility principle
하나의 모듈, 클래스, 함수가 하나의 기능은 꼭 책임져야 한다.

```bash
$ nest g s
```
로 서비스 생성.

수동import는 하지 않음.
요청을 할 뿐.

DTO : Data Transfer Object
타입이 어플리케이션이 움직일 때도 도움을 준다.
코드를 더욱 간결하게 만들어 주기도 하고
들어오는 쿼리에 대해 유효성 검사를 해주기도 함.

DTO 사용을 위해선 class-validator, class-transformer 설치해야 함.

또한 @nestjs/mapped-types
: 타입을 변환시키고 사용할 수 있게 해주는 패키지
도 설치해야.