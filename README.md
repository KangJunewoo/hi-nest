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
