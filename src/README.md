# Lotto step2

- [x] 결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.
- [x] 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- [x] 다시 시작하기 버튼을 누르면 초기화 되서 다시 구매를 시작할 수 있다.

## 테스트 코드

### UI

- [x] 당첨번호 input 자리수 두자리로 제한
  - [x] 3자리 수를 입력한 후 2자리 수 value를 체크한다.
  - [x] 두자리 수를 모두 입력하면 자동적으로 next input으로 넘어간다.
- [x] 당첨번호 중복숫자에 따른 ui 변화 (alert 로또 번호에는 중복된 숫자를 입력할 수 없습니다.)
  - [x] input value를 가져오면서 도메인에서 중복값을 체크되면 있다면 alert창 체크
- [x] 도메인에서 받은 데이터를 바탕으로 당첨 갯수, 수익률을 모달창에 표시
  - [x] 한 로또 티켓에서 당첨 번호와 같은 숫자의 갯수가 일치 개수와 같은 값이 있는 당첨 갯수 칸에 +1을 해준다

### Domain

- [x] 각 Input 마다 중복값 체크
- [x] 작성한 당첨번호와 보너스번호 그리고 구매한 티켓의 번호의 일치 여부를 확인.
- [x] 결과에 따라 종합하여 수익률을 계산한다.
- [x] 확인 결과에 따라 당첨 통계(당첨갯수, 수익률)을 ui에 전달해준다.