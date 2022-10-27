var diem = 6.5;
if (diem < 0 || diem > 10 || typeof diem !== "number") {
  console.log(
    "Điểm là giá trị số và thuộc từ 0 đến 10. Mời nhập lại điểm của học sinh."
  );
} else if (diem <= 5) {
  console.log("Học lực trung bình");
} else if (diem <= 6) {
  console.log("Học lực khá");
} else if (diem <= 8) {
  console.log("Học lực khá giỏi");
} else console.log("Học lực giỏi");
