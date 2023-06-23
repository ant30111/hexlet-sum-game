// Получает рандомное целое число от 0 до 10
const getNumber = () => Math.round(Math.random() * 10);

// Описывает логику раунда игры
const playRound = () => {
  const number1 = getNumber();
  const number2 = getNumber();
	
	// Получает сумму рандомных чисел
  const sum = number1 + number2;
  
	// Фиксирует пользовательский ввод
  const userAnswer = prompt(`Найдите сумму данных чисел: ${number1} и ${number2}`);
  const correctAnswer = sum.toString();
  
  if (userAnswer === null) {
    return false; // Убирает alert при отказе от игры (пользователь нажимает Отмена)
  } else if (!userAnswer) {
    alert('Введите ответ!');
    return false; // Подскаживает о вводе ответа, при не заполнении ответа
 } else if (userAnswer === correctAnswer) {
    alert('Правильно!'); // Правильный ответ
    return true;
  } else {
    alert(`Неправильно! Ответ: ${correctAnswer}`);
    return false; // Неправильный ответ
  }
}
  
// Для победы необходимо выиграть 3 раунда
const playGame = () => {
  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  
  alert('Вы выиграли!');
}

const startButton = document.querySelector('button'); // Находит кнопку
startButton.addEventListener('click', playGame); // Запускает игру при клике на кнопку
