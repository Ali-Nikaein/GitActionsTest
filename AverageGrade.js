function calculateAverageGrade(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  const average = total / scores.length;
  let finalGrade;
  if (average >= 90) {
    finalGrade = "A";
  } else if (average >= 80) {
    finalGrade = "B";
  } else if (average >= 70) {
    finalGrade = "C";
  } else if (average >= 60) {
    finalGrade = "D";
  } else {
    finalGrade = "F";
  }
  console.log("The final grade is: " + finalGrade);
  return finalGrade;
}

function generateRandomScores(length, min, max) {
  const scores = [];
  for (let i = 0; i < length; i++) {
    scores.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return scores;
}

function main() {
  const scores = generateRandomScores(5, 50, 100);
  console.log("Scores:", scores);
  calculateAverageGrade(scores);
}

main();
