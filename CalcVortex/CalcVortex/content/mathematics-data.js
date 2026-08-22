/**
 * CalcVortex — Mathematics curriculum data (ม.1–ม.6)
 * -----------------------------------------------------
 * This file is the single source of truth for the Mathematics section.
 * Each grade has a list of topics. Topics with a `lesson` object have
 * full lesson content (summary, formulas, worked examples, tips,
 * exercises) and are ready to view. Topics without one are marked
 * "กำลังจัดทำ" (in progress) so the site never shows fabricated content.
 *
 * To add a new lesson: add a `lesson` object to any topic below,
 * following the same shape as the existing ones.
 */

const MATH_CURRICULUM = {
  "m1": {
    label: "ม.1",
    fullLabel: "มัธยมศึกษาปีที่ 1",
    topics: [
      { id: "m1-integers", title: "จำนวนเต็ม" },
      { id: "m1-fractions", title: "เศษส่วนและทศนิยม" },
      { id: "m1-algebra-intro", title: "พื้นฐานพีชคณิต" },
      { id: "m1-equations", title: "สมการเชิงเส้นตัวแปรเดียว" },
      { id: "m1-geometry-basic", title: "รูปเรขาคณิตเบื้องต้น" },
    ]
  },
  "m2": {
    label: "ม.2",
    fullLabel: "มัธยมศึกษาปีที่ 2",
    topics: [
      { id: "m2-linear-eq", title: "สมการเชิงเส้นสองตัวแปร" },
      { id: "m2-inequality", title: "อสมการเชิงเส้น" },
      { id: "m2-pythagoras", title: "ทฤษฎีบทพีทาโกรัส" },
      { id: "m2-parallel", title: "เส้นขนาน" },
      { id: "m2-statistics-intro", title: "สถิติเบื้องต้น" },
    ]
  },
  "m3": {
    label: "ม.3",
    fullLabel: "มัธยมศึกษาปีที่ 3",
    topics: [
      { id: "m3-quadratic", title: "สมการกำลังสอง" },
      { id: "m3-parabola", title: "กราฟพาราโบลา" },
      { id: "m3-similarity", title: "ความคล้าย" },
      { id: "m3-trig-ratio", title: "อัตราส่วนตรีโกณมิติเบื้องต้น" },
      { id: "m3-probability-intro", title: "ความน่าจะเป็นเบื้องต้น" },
    ]
  },
  "m4": {
    label: "ม.4",
    fullLabel: "มัธยมศึกษาปีที่ 4",
    topics: [
      {
        id: "m4-set",
        title: "เซต",
        lesson: {
          summary: "เซตคือการรวมกลุ่มของสิ่งต่าง ๆ ที่มีลักษณะเฉพาะเจาะจง เรียกสิ่งที่อยู่ในเซตว่า “สมาชิก” เราใช้เซตเป็นพื้นฐานในการอธิบายความสัมพันธ์ระหว่างกลุ่มข้อมูล และเป็นรากฐานของคณิตศาสตร์เกือบทุกแขนง ตั้งแต่ตรรกศาสตร์ไปจนถึงความน่าจะเป็น",
          formulas: [
            { name: "จำนวนสมาชิกของยูเนียน", expr: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)" },
            { name: "คอมพลีเมนต์", expr: "n(A′) = n(U) − n(A)" },
            { name: "เซตกำลัง", expr: "|P(A)| = 2ⁿ เมื่อ n = n(A)" },
          ],
          examples: [
            {
              problem: "กำหนด U = {1,2,3,...,10}, A = {2,4,6,8,10}, B = {1,2,3,5,8} จงหา n(A ∪ B)",
              approach: "ใช้สูตรยูเนียนโดยหา n(A), n(B) และ n(A ∩ B) ก่อน",
              solution: "n(A) = 5, n(B) = 5, A ∩ B = {2,8} → n(A ∩ B) = 2\nn(A ∪ B) = 5 + 5 − 2 = 8",
              answer: "n(A ∪ B) = 8"
            },
            {
              problem: "เซต A มีสมาชิก 4 ตัว จงหาจำนวนสับเซตทั้งหมดของ A",
              approach: "ใช้สูตรเซตกำลัง 2ⁿ",
              solution: "n = 4 → 2⁴ = 16",
              answer: "มีสับเซตทั้งหมด 16 เซต"
            }
          ],
          tips: [
            "แยกให้ออกระหว่าง “สับเซต” (⊆) กับ “สมาชิก” (∈) ข้อสอบมักสลับใช้สองคำนี้เพื่อหลอก",
            "เซตว่าง (∅) เป็นสับเซตของทุกเซตเสมอ รวมถึงตัวมันเองด้วย",
            "วาดแผนภาพเวนน์ทุกครั้งที่โจทย์ซับซ้อนเกิน 2 เซต จะช่วยลดความผิดพลาดได้มาก",
          ],
          exercises: [
            { question: "ถ้า A = {x | x เป็นจำนวนคี่บวกที่น้อยกว่า 10} จงเขียน A แบบแจกแจงสมาชิก", answer: "{1,3,5,7,9}", hint: "แจงจำนวนคี่บวกตั้งแต่ 1 ถึง 9" },
            { question: "กำหนด n(A) = 12, n(B) = 9, n(A ∩ B) = 4 จงหา n(A ∪ B)", answer: "17", hint: "ใช้สูตร n(A)+n(B)−n(A∩B)" },
            { question: "จงหาจำนวนสับเซตทั้งหมดของเซต {a, b, c, d, e}", answer: "32", hint: "ใช้สูตร 2ⁿ เมื่อ n=5" },
          ]
        }
      },
      { id: "m4-logic", title: "ตรรกศาสตร์" },
      { id: "m4-real-numbers", title: "จำนวนจริง" },
      { id: "m4-functions", title: "ฟังก์ชัน" },
      { id: "m4-counting", title: "หลักการนับ" },
      { id: "m4-probability", title: "ความน่าจะเป็น" },
      { id: "m4-sequences", title: "ลำดับและอนุกรม" },
      { id: "m4-analytic-geometry", title: "เรขาคณิตวิเคราะห์" },
    ]
  },
  "m5": {
    label: "ม.5",
    fullLabel: "มัธยมศึกษาปีที่ 5",
    topics: [
      {
        id: "m5-trigonometry",
        title: "ตรีโกณมิติ",
        lesson: {
          summary: "ตรีโกณมิติศึกษาความสัมพันธ์ระหว่างมุมและด้านของรูปสามเหลี่ยม รวมถึงพฤติกรรมของฟังก์ชัน sin, cos, tan บนวงกลมหนึ่งหน่วย เป็นเครื่องมือสำคัญที่ใช้ต่อยอดไปถึงฟิสิกส์ วิศวกรรม และแคลคูลัสในระดับสูงขึ้น",
          formulas: [
            { name: "เอกลักษณ์พีทาโกรัส", expr: "sin²θ + cos²θ = 1" },
            { name: "อัตราส่วนแทนเจนต์", expr: "tan θ = sin θ / cos θ" },
            { name: "มุมรวม (sin)", expr: "sin(A ± B) = sinA cosB ± cosA sinB" },
            { name: "มุมรวม (cos)", expr: "cos(A ± B) = cosA cosB ∓ sinA sinB" },
            { name: "กฎของไซน์", expr: "a / sinA = b / sinB = c / sinC" },
            { name: "กฎของโคไซน์", expr: "c² = a² + b² − 2ab·cosC" },
          ],
          examples: [
            {
              problem: "ถ้า sin θ = 3/5 และ θ อยู่ในควอดรันต์ที่ 1 จงหา cos θ",
              approach: "ใช้เอกลักษณ์พีทาโกรัส sin²θ + cos²θ = 1 แล้วแทนค่า",
              solution: "cos²θ = 1 − (3/5)² = 1 − 9/25 = 16/25\ncos θ = 4/5 (บวก เพราะอยู่ควอดรันต์ที่ 1)",
              answer: "cos θ = 4/5"
            },
            {
              problem: "สามเหลี่ยม ABC มี a = 7, b = 9, มุม C = 60° จงหาความยาวด้าน c",
              approach: "ใช้กฎของโคไซน์ เพราะรู้สองด้านและมุมระหว่างด้าน",
              solution: "c² = 7² + 9² − 2(7)(9)cos60°\nc² = 49 + 81 − 126(0.5) = 130 − 63 = 67\nc = √67 ≈ 8.19",
              answer: "c ≈ 8.19 หน่วย"
            }
          ],
          tips: [
            "จำค่ามุมพิเศษ 30°, 45°, 60° ให้แม่น จะช่วยให้ทำโจทย์ได้เร็วขึ้นมาก",
            "ก่อนใช้กฎของไซน์หรือโคไซน์ ให้เช็คก่อนว่าโจทย์ให้ข้อมูลแบบไหน (มุม-ด้าน-มุม, ด้าน-มุม-ด้าน ฯลฯ)",
            "ระวังเรื่องเครื่องหมาย + / − ของ sin, cos ในแต่ละควอดรันต์ ใช้กฎ “All Students Take Calculus” ช่วยจำ",
          ],
          exercises: [
            { question: "ถ้า cos θ = 5/13 และ θ อยู่ในควอดรันต์ที่ 4 จงหาค่า sin θ (ทศนิยม 4 ตำแหน่ง หรือเศษส่วน)", answer: "-12/13", hint: "ใช้ sin²θ+cos²θ=1 แล้วเลือกเครื่องหมายลบเพราะควอดรันต์ 4" },
            { question: "สามเหลี่ยม ABC มีมุม A = 40°, มุม B = 60°, ด้าน a = 10 จงหาด้าน b ด้วยกฎของไซน์ (ทศนิยม 2 ตำแหน่ง)", answer: "13.47", hint: "b = a·sinB/sinA" },
            { question: "จงพิสูจน์เอกลักษณ์ (1 − cos²θ) / sinθ = sinθ (พิมพ์คำว่า พิสูจน์แล้ว เมื่อทำเสร็จ)", answer: "พิสูจน์แล้ว", hint: "แทน 1−cos²θ ด้วย sin²θ จากเอกลักษณ์พีทาโกรัส" },
          ]
        }
      },
      { id: "m5-matrix", title: "เมทริกซ์" },
      { id: "m5-vectors", title: "เวกเตอร์" },
      { id: "m5-complex-numbers", title: "จำนวนเชิงซ้อน" },
      { id: "m5-functions-extra", title: "ฟังก์ชันเพิ่มเติม" },
    ]
  },
  "m6": {
    label: "ม.6",
    fullLabel: "มัธยมศึกษาปีที่ 6",
    topics: [
      {
        id: "m6-calculus",
        title: "แคลคูลัส",
        lesson: {
          summary: "แคลคูลัสเบื้องต้นศึกษาอัตราการเปลี่ยนแปลง (อนุพันธ์) และพื้นที่ใต้กราฟ (ปริพันธ์) เป็นเครื่องมือสำคัญที่ใช้อธิบายการเคลื่อนที่ ความชันของกราฟ และการหาค่าสูงสุด-ต่ำสุดของฟังก์ชัน",
          formulas: [
            { name: "อนุพันธ์ของ xⁿ", expr: "d/dx (xⁿ) = n·xⁿ⁻¹" },
            { name: "อนุพันธ์ของผลคูณ", expr: "d/dx (uv) = u′v + uv′" },
            { name: "ปริพันธ์ไม่จำกัดเขต", expr: "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ −1" },
            { name: "ทฤษฎีบทหลักมูลของแคลคูลัส", expr: "∫ₐᵇ f(x) dx = F(b) − F(a)" },
          ],
          examples: [
            {
              problem: "จงหาอนุพันธ์ของ f(x) = 3x⁴ − 5x² + 2x − 7",
              approach: "ใช้กฎอนุพันธ์ของ xⁿ กับแต่ละพจน์",
              solution: "f′(x) = 3(4)x³ − 5(2)x + 2 − 0\nf′(x) = 12x³ − 10x + 2",
              answer: "f′(x) = 12x³ − 10x + 2"
            },
            {
              problem: "จงหาค่า ∫₁³ (2x + 1) dx",
              approach: "หาปฏิยานุพันธ์ก่อน แล้วแทนค่าขอบเขตบนลบขอบเขตล่าง",
              solution: "∫(2x+1)dx = x² + x + C\n[x²+x] จาก 1 ถึง 3 = (9+3) − (1+1) = 12 − 2 = 10",
              answer: "ค่าของอินทิกรัลเท่ากับ 10"
            }
          ],
          tips: [
            "เมื่อหาค่าสูงสุด-ต่ำสุด ให้หา f′(x) = 0 ก่อนเสมอ แล้วตรวจสอบด้วย f″(x) หรือตารางเครื่องหมาย",
            "จำสูตรอนุพันธ์ของ sin, cos, eˣ, ln x ให้แม่น เพราะมักออกร่วมกับโจทย์ประยุกต์",
            "ในการหาพื้นที่ใต้กราฟ ให้ระวังช่วงที่กราฟติดลบ ต้องใช้ค่าสัมบูรณ์หรือแยกอินทิกรัลเป็นช่วง ๆ",
          ],
          exercises: [
            { question: "จงหาอนุพันธ์ของ f(x) = (2x + 1)(x − 3) ในรูป ax+b (พิมพ์เฉพาะสัมประสิทธิ์ เช่น 4x-5)", answer: "4x-5", hint: "กระจายก่อนแล้วดิฟแต่ละพจน์: f(x)=2x²−5x−3" },
            { question: "f(x) = x³ − 3x² + 2 มีจุดต่ำสุดที่ x เท่าใด", answer: "2", hint: "หา f′(x)=0 แล้วตรวจด้วย f″(x)" },
            { question: "จงหาค่า ∫₀² (3x² − 4x + 1) dx", answer: "2", hint: "หาปฏิยานุพันธ์ x³−2x²+x แล้วแทนค่า 2 ลบ 0" },
          ]
        }
      },
      { id: "m6-statistics", title: "สถิติ" },
      { id: "m6-probability-adv", title: "ความน่าจะเป็น" },
      { id: "m6-extra", title: "เนื้อหาคณิตศาสตร์เพิ่มเติมตามหลักสูตร" },
    ]
  },
};

// Flat lookup helper: find a topic (and its grade) by topic id
function findTopicById(topicId) {
  for (const gradeKey in MATH_CURRICULUM) {
    const grade = MATH_CURRICULUM[gradeKey];
    const topic = grade.topics.find(t => t.id === topicId);
    if (topic) return { gradeKey, grade, topic };
  }
  return null;
}
