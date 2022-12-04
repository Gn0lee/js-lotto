const formSelector = '[data-cy="purchase-form"]';
const inputSelector = '[data-cy="purchase-amount"]';
const buttonSelector = '[data-cy="purchase-button"]';
const spanSelector = '[data-cy="purchase-span"]';
const listSelector = ".lotto-number";

describe("로또 구매기능 테스트", () => {
  beforeEach(() => {
    cy.visit("../../index.html");
  });

  it("로또 구입 금액을 입력할 input 태그가 존재한다.", () => {
    cy.get(inputSelector).should("exist");
  });

  it("로또 금액을 입력하면 화면에 입력한 금액이 그대로 보여진다", () => {
    cy.get(inputSelector).type("1000");
    cy.get(inputSelector).should("have.value", "1000");
  });

  it("로또 금액은 숫자만 입력 가능하다.", () => {
    cy.get(inputSelector).type("1000a");
    cy.get(inputSelector).should("have.value", "1000");
  });

  it("클릭할 확인 버튼이 존재한다.", () => {
    cy.get(buttonSelector).should("exist");
  });

  it("로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급해야 한다.", () => {
    cy.get(inputSelector).type("1000").should("have.value", "1000");
  });

  it("금액을 입력하지 않고 확인버튼을 누를 시 로또가 발급되지 않는다.", () => {
    cy.get(formSelector)
      .submit()
      .then(() => {
        cy.get(spanSelector).should("have.text", "0");
      });
  });
});

describe("로또 번호표시 테스트", () => {
  beforeEach(() => {
    cy.visit("../../index.html");
  });
  it("토글버튼이 있어야한다.", () => {
    cy.get(buttonSelector).should("exist");
  });

  it("로또를 구매해야 로또 번호를 볼 수 있다.", () => {
    cy.get(inputSelector).type("500");
    cy.get(formSelector)
      .submit()
      .then(() => {
        cy.get(spanSelector).should("have.text", "0");
      });
  });

  it("구매한 로또에 자동 생성된 로또 번호가 있어야한다.", () => {
    cy.get(inputSelector).type("2000");
    cy.get(buttonSelector)
      .click()
      .then(() => {
        cy.get(listSelector).should("exist");
      });
  });
});
