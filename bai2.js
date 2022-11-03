var point = 6.5;
if (typeof point !== "number" || point < 0 || point > 10) {
  console.log(
    "Điểm là giá trị số và thuộc từ 0 đến 10. Mời nhập lại điểm của học sinh."
  );
} else if (point <= 5) {
  console.log("Học lực trung bình");
} else if (point <= 6) {
  console.log("Học lực khá");
} else if (point <= 8) {
  console.log("Học lực khá giỏi");
} else console.log("Học lực giỏi");
