/**
 * CalcVortex — search.js  (Phase 3)
 * Builds a simple in-memory search index from the site's content
 * data (mathematics + python) and searches topic titles, formulas,
 * and worked-example problems by keyword. Pure client-side —
 * no server round-trip needed since all content is already local.
 */

function buildSearchIndex() {
  const index = [];

  if (typeof MATH_CURRICULUM !== 'undefined') {
    Object.entries(MATH_CURRICULUM).forEach(([gradeKey, grade]) => {
      grade.topics.forEach(topic => {
        index.push({
          type: 'lesson',
          typeLabel: `คณิตศาสตร์ · ${grade.label}`,
          title: topic.title,
          id: topic.id,
          url: topic.lesson ? `lesson.html?topic=${topic.id}` : null,
          ready: Boolean(topic.lesson),
          searchText: topic.title,
        });
        if (topic.lesson) {
          topic.lesson.formulas.forEach(f => {
            index.push({
              type: 'formula',
              typeLabel: `สูตร · ${topic.title}`,
              title: f.name,
              sub: f.expr,
              url: `lesson.html?topic=${topic.id}`,
              ready: true,
              searchText: `${f.name} ${f.expr} ${topic.title}`,
            });
          });
          topic.lesson.examples.forEach((ex, i) => {
            index.push({
              type: 'example',
              typeLabel: `ตัวอย่างโจทย์ · ${topic.title}`,
              title: ex.problem,
              url: `lesson.html?topic=${topic.id}`,
              ready: true,
              searchText: `${ex.problem} ${topic.title}`,
            });
          });
        }
      });
    });
  }

  if (typeof PYTHON_CURRICULUM !== 'undefined') {
    PYTHON_CURRICULUM.forEach(topic => {
      index.push({
        type: 'python',
        typeLabel: 'Python',
        title: topic.title,
        id: topic.id,
        url: topic.lesson ? `python-lesson.html?topic=${topic.id}` : null,
        ready: Boolean(topic.lesson),
        searchText: topic.title,
      });
    });
  }

  // Tools are always available
  index.push({ type: 'tool', typeLabel: 'เครื่องมือ', title: 'เครื่องคิดเลขวิทยาศาสตร์', url: 'calculator.html', ready: true, searchText: 'เครื่องคิดเลข calculator sin cos tan log' });
  index.push({ type: 'tool', typeLabel: 'เครื่องมือ', title: 'Python Online Editor', url: 'python-editor.html', ready: true, searchText: 'python editor compiler รันโค้ด' });
  index.push({ type: 'tool', typeLabel: 'เครื่องมือ', title: 'AI ช่วยเรียน', url: 'ai-assistant.html', ready: true, searchText: 'ai ผู้ช่วย ถาม ตอบ โจทย์' });

  return index;
}

function runSearch(index, rawQuery) {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return [];
  return index
    .filter(item => item.searchText.toLowerCase().includes(q))
    .slice(0, 30);
}
