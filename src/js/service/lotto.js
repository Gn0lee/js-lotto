import ERROR_MESSAGE from '../constant/errorMessage.js';
import { LOTTO } from '../constant/lotto.js';
import lottoManager from '../model/lotto.js';
import { getRandomNumber } from '../util/random.js';

const generateLottoNumber = () => getRandomNumber(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);

export const issueRandomLotto = () => [...Array(LOTTO.NUMBER_AMOUNT)].map(generateLottoNumber);

export const isValidLottoInput = (answer) => {
  const answerValues = Object.values(answer);

  return (
    answerValues.every(
      (inputNumber) =>
        inputNumber && inputNumber >= LOTTO.MIN_NUMBER && inputNumber <= LOTTO.MAX_NUMBER
    ) && [...new Set(answerValues)].length === answerValues.length
  );
};

export const getAnswerErrorMessage = (answer) => {
  if (!lottoManager.amount) {
    return ERROR_MESSAGE.EMPTY_LOTTO;
  }

  if (!isValidLottoInput(answer)) {
    return ERROR_MESSAGE.INVALID_ANSWER_INPUT;
  }

  if (lottoManager.hasLeft()) {
    return ERROR_MESSAGE.LOTTO_LEFT;
  }
};