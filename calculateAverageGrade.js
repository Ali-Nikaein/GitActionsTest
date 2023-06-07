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
  

  
  