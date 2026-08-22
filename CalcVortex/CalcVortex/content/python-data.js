/**
 * CalcVortex — Python curriculum data (Phase 4)
 * -----------------------------------------------------
 * PYTHON_CURRICULUM is an ordered array of 12 introductory topics.
 * Each topic has: description, one or more example code blocks with
 * their real output, and a short exercise. All example outputs
 * below were worked out by hand to match what the code actually
 * prints — nothing here is guessed.
 */

const PYTHON_CURRICULUM = [
  {
    id: "py-intro",
    order: 1,
    title: "Introduction to Python",
    lesson: {
      description: "Python เป็นภาษาโปรแกรมมิ่งที่อ่านง่ายและเรียนรู้ได้เร็ว นิยมใช้ทั้งในงานวิทยาศาสตร์ข้อมูล เว็บ และระบบอัตโนมัติ คำสั่งพื้นฐานที่สุดคือ print() ซึ่งใช้แสดงข้อความออกทางหน้าจอ",
      examples: [
        { code: `print("สวัสดี CalcVortex")\nprint("เริ่มต้นเรียน Python กันเลย!")`, output: `สวัสดี CalcVortex\nเริ่มต้นเรียน Python กันเลย!` }
      ],
      exercise: "จงเขียนโปรแกรมแสดงชื่อและระดับชั้นของตัวเองออกทางหน้าจอ 2 บรรทัด"
    }
  },
  {
    id: "py-variables",
    order: 2,
    title: "Variables",
    lesson: {
      description: "ตัวแปร (variable) คือชื่อที่ใช้เก็บค่าข้อมูลไว้ใช้งานภายหลัง ในภาษา Python ไม่ต้องประกาศชนิดข้อมูลล่วงหน้า สามารถกำหนดค่าด้วยเครื่องหมาย = ได้ทันที",
      examples: [
        { code: `name = "พีระ"\nscore = 85\nprint(name, "ได้คะแนน", score)`, output: `พีระ ได้คะแนน 85` }
      ],
      exercise: "จงสร้างตัวแปร age เก็บอายุของตัวเอง แล้วพิมพ์ประโยค \"ฉันอายุ ... ปี\""
    }
  },
  {
    id: "py-datatypes",
    order: 3,
    title: "Data Types",
    lesson: {
      description: "ชนิดข้อมูลพื้นฐานใน Python ได้แก่ int (จำนวนเต็ม), float (ทศนิยม), str (ข้อความ), และ bool (ค่าจริง/เท็จ) สามารถตรวจสอบชนิดข้อมูลได้ด้วยฟังก์ชัน type()",
      examples: [
        { code: `a = 10\nb = 3.14\nc = "คณิตศาสตร์"\nd = True\nprint(type(a), type(b), type(c), type(d))`, output: `<class 'int'> <class 'float'> <class 'str'> <class 'bool'>` }
      ],
      exercise: "จงประกาศตัวแปร 4 ตัวให้ครบทั้ง int, float, str, bool แล้วพิมพ์ชนิดข้อมูลของแต่ละตัว"
    }
  },
  {
    id: "py-io",
    order: 4,
    title: "Input / Output",
    lesson: {
      description: "ฟังก์ชัน input() ใช้รับค่าจากผู้ใช้ (ได้ผลลัพธ์เป็น string เสมอ) ส่วน print() ใช้แสดงผลลัพธ์ หากต้องการนำค่าที่รับมาไปคำนวณ ต้องแปลงชนิดข้อมูลด้วย int() หรือ float() ก่อน",
      examples: [
        { code: `name = input("กรุณาใส่ชื่อของคุณ: ")\nprint("ยินดีต้อนรับ", name)`, output: `กรุณาใส่ชื่อของคุณ: ธนา\nยินดีต้อนรับ ธนา` }
      ],
      exercise: "จงเขียนโปรแกรมรับตัวเลขจากผู้ใช้ 1 ตัว แล้วพิมพ์ค่ากำลังสองของตัวเลขนั้น"
    }
  },
  {
    id: "py-if-else",
    order: 5,
    title: "If / Else",
    lesson: {
      description: "คำสั่ง if / elif / else ใช้ตัดสินใจเลือกทำงานตามเงื่อนไข โดยโค้ดในแต่ละบล็อกต้องเยื้อง (indent) ให้ตรงกันเสมอ",
      examples: [
        { code: `score = 72\nif score >= 80:\n    print("เกรด A")\nelif score >= 70:\n    print("เกรด B")\nelse:\n    print("ต้องพัฒนาเพิ่มเติม")`, output: `เกรด B` }
      ],
      exercise: "จงเขียนโปรแกรมตรวจสอบว่าตัวเลขที่กำหนดเป็นจำนวนคู่หรือคี่ โดยใช้ if / else"
    }
  },
  {
    id: "py-for-loop",
    order: 6,
    title: "For Loop",
    lesson: {
      description: "for loop ใช้ทำงานซ้ำตามจำนวนรอบที่กำหนด มักใช้ร่วมกับฟังก์ชัน range() เพื่อวนซ้ำตามลำดับตัวเลข",
      examples: [
        { code: `for i in range(1, 6):\n    print("รอบที่", i)`, output: `รอบที่ 1\nรอบที่ 2\nรอบที่ 3\nรอบที่ 4\nรอบที่ 5` }
      ],
      exercise: "จงเขียนโปรแกรมใช้ for loop พิมพ์สูตรคูณแม่ 5 ตั้งแต่ 5×1 ถึง 5×12"
    }
  },
  {
    id: "py-while-loop",
    order: 7,
    title: "While Loop",
    lesson: {
      description: "while loop ใช้ทำงานซ้ำตราบเท่าที่เงื่อนไขยังเป็นจริง ต้องระวังอัปเดตตัวแปรควบคุมภายในลูป มิเช่นนั้นจะเกิดการวนซ้ำไม่รู้จบ",
      examples: [
        { code: `count = 1\nwhile count <= 3:\n    print("นับ", count)\n    count += 1`, output: `นับ 1\nนับ 2\nนับ 3` }
      ],
      exercise: "จงเขียนโปรแกรมใช้ while loop นับถอยหลังจาก 5 ถึง 1 แล้วพิมพ์คำว่า \"เริ่ม!\""
    }
  },
  {
    id: "py-list",
    order: 8,
    title: "List",
    lesson: {
      description: "list คือโครงสร้างข้อมูลที่เก็บค่าหลายค่าไว้ในตัวแปรเดียว เข้าถึงสมาชิกได้ด้วยดัชนี (index) เริ่มจาก 0 และสามารถเพิ่ม/ลบสมาชิกได้ด้วย append() และ remove()",
      examples: [
        { code: `scores = [78, 85, 92, 66]\nscores.append(100)\nprint(scores)\nprint("สมาชิกตัวแรก:", scores[0])`, output: `[78, 85, 92, 66, 100]\nสมาชิกตัวแรก: 78` }
      ],
      exercise: "จงสร้าง list เก็บชื่อวิชาที่เรียน 4 วิชา แล้วพิมพ์วิชาตัวสุดท้ายในลิสต์"
    }
  },
  {
    id: "py-string",
    order: 9,
    title: "String",
    lesson: {
      description: "string คือข้อมูลชนิดข้อความ สามารถต่อกันด้วยเครื่องหมาย + ตัดบางส่วนด้วย slicing [start:end] และใช้เมธอดอย่าง .upper(), .lower(), .split() ได้",
      examples: [
        { code: `text = "CalcVortex"\nprint(text.upper())\nprint(text[0:5])\nprint(len(text))`, output: `CALCVORTEX\nCalcV\n10` }
      ],
      exercise: "จงเขียนโปรแกรมรับชื่อ-นามสกุล 1 บรรทัด แล้วพิมพ์เฉพาะตัวอักษรตัวแรกของชื่อด้วย slicing"
    }
  },
  {
    id: "py-dictionary",
    order: 10,
    title: "Dictionary",
    lesson: {
      description: "dictionary เก็บข้อมูลแบบคู่ key-value เหมาะกับการเก็บข้อมูลที่มีชื่อกำกับชัดเจน เข้าถึงค่าได้ด้วย key แทนดัชนีตัวเลข",
      examples: [
        { code: `student = {"name": "มานี", "grade": "ม.5", "score": 88}\nprint(student["name"], "-", student["grade"])`, output: `มานี - ม.5` }
      ],
      exercise: "จงสร้าง dictionary เก็บข้อมูลวิชา (ชื่อวิชา, จำนวนหน่วยกิต) แล้วพิมพ์จำนวนหน่วยกิตออกมา"
    }
  },
  {
    id: "py-function",
    order: 11,
    title: "Function",
    lesson: {
      description: "ฟังก์ชันคือกลุ่มคำสั่งที่ตั้งชื่อไว้ใช้งานซ้ำได้ ประกาศด้วยคำสั่ง def และสามารถรับค่าพารามิเตอร์พร้อมส่งค่ากลับด้วย return",
      examples: [
        { code: `def add(a, b):\n    return a + b\n\nresult = add(7, 5)\nprint("ผลรวมคือ", result)`, output: `ผลรวมคือ 12` }
      ],
      exercise: "จงเขียนฟังก์ชัน is_even(n) ที่คืนค่า True ถ้า n เป็นจำนวนคู่ และ False ถ้าเป็นจำนวนคี่"
    }
  },
  {
    id: "py-problem-solving",
    order: 12,
    title: "Basic Problem Solving",
    lesson: {
      description: "บทนี้รวมแนวคิดจากบทก่อนหน้ามาใช้แก้ปัญหาจริง เช่น การวนลูปร่วมกับเงื่อนไขเพื่อคัดกรองข้อมูล หรือใช้ฟังก์ชันร่วมกับลิสต์เพื่อคำนวณค่าทางสถิติอย่างง่าย",
      examples: [
        { code: `scores = [55, 80, 45, 90, 62]\npassed = [s for s in scores if s >= 60]\nprint("ผู้ที่ผ่านเกณฑ์:", passed)\nprint("จำนวนที่ผ่าน:", len(passed))`, output: `ผู้ที่ผ่านเกณฑ์: [80, 90, 62]\nจำนวนที่ผ่าน: 3` }
      ],
      exercise: "จงเขียนโปรแกรมหาผลรวมของจำนวนคู่ทั้งหมดตั้งแต่ 1 ถึง 50 โดยใช้ for loop และ if"
    }
  }
];

function findPythonTopicById(topicId) {
  return PYTHON_CURRICULUM.find(t => t.id === topicId) || null;
}
