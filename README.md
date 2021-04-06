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


app.module은 원래 appcontroller랑 appprovider만가지고있어야함. 바로 moviecontroller, movieprovider가 나와선 안됨.

```bash
nest g mo
```

로 모듈 생성.

```bash
nest g co
```
친 다음에 app이라는 컨트롤러 생성.
app.controller.ts만 밖으로 빼주고 나머지는 삭제.

nest는 기본적으로 express 위에서 돌아감.
fastify에서 돌아가도록 할 수도 있음.

.spec 붙은 거는 그걸 테스트하는 파일임.  
jest가 .spec.ts를 찾아다닌다고 생각하면 됨.

단위테스트: 모든 함수를 따로 테스트하는거  
e2e 테스트 : 모든 시스템을 테스트하는거. 약간 사용자 관점의 테스트.  


```bash
$ npm run test:cov
```
로 테스트 커버리지를 측정할 수 있고,

```bash
$ npm run test:watch
```
로 테스트를 실행하며 모니터링 할 수 있음.


단위테스트는 생각보다 간단하고  

e2e는 beforeEach, afterAll 등으로 뭐 생성한 거를 싹 날린다거나.. 하는 전처리 후처리 등을 해줄 수 있음.  
