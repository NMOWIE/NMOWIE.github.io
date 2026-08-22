/**
 * CalcVortex — calculator.js  (Phase 2)
 * A small self-contained scientific calculator.
 *
 * Design notes:
 * - Expressions are built as plain text (e.g. "sin(30)+2^3") and
 *   evaluated with a hand-written recursive-descent parser below —
 *   NOT with eval() or Function(), so the calculator never executes
 *   arbitrary code, even if someone types into the display.
 * - Angle mode (DEG/RAD) affects sin/cos/tan/asin/acos/atan only.
 * - History is kept in memory for the session (no storage/back-end).
 */

(function () {
  'use strict';

  /* ============================================================
     Tokenizer
     ============================================================ */
  const FUNCTIONS = ['asin', 'acos', 'atan', 'sin', 'cos', 'tan', 'log', 'ln', 'sqrt'];
  const CONSTANTS = { pi: Math.PI, e: Math.E };

  function tokenize(input) {
    const tokens = [];
    let i = 0;
    const s = input.replace(/\s+/g, '');

    while (i < s.length) {
      const ch = s[i];

      if (/[0-9.]/.test(ch)) {
        let num = ch;
        i++;
        while (i < s.length && /[0-9.]/.test(s[i])) { num += s[i]; i++; }
        tokens.push({ type: 'num', value: parseFloat(num) });
        continue;
      }

      if (/[a-zA-Z]/.test(ch)) {
        let word = '';
        while (i < s.length && /[a-zA-Z]/.test(s[i])) { word += s[i]; i++; }
        if (FUNCTIONS.includes(word)) {
          tokens.push({ type: 'func', value: word });
        } else if (word in CONSTANTS) {
          tokens.push({ type: 'num', value: CONSTANTS[word] });
        } else {
          throw new Error('unknown-token:' + word);
        }
        continue;
      }

      if ('+-*/%^()'.includes(ch)) {
        tokens.push({ type: 'op', value: ch });
        i++;
        continue;
      }

      throw new Error('unexpected-char:' + ch);
    }

    return tokens;
  }

  /* ============================================================
     Recursive-descent parser + evaluator
     Precedence (low → high): + -   * / %   unary -   ^ (right)   func/() 
     ============================================================ */
  function evaluate(input, angleMode) {
    const tokens = tokenize(input);
    let pos = 0;

    const peek = () => tokens[pos];
    const next = () => tokens[pos++];

    function parseExpression() {
      let value = parseTerm();
      while (peek() && peek().type === 'op' && (peek().value === '+' || peek().value === '-')) {
        const op = next().value;
        const rhs = parseTerm();
        value = op === '+' ? value + rhs : value - rhs;
      }
      return value;
    }

    function parseTerm() {
      let value = parseUnary();
      while (peek() && peek().type === 'op' && ['*', '/', '%'].includes(peek().value)) {
        const op = next().value;
        const rhs = parseUnary();
        if (op === '*') value *= rhs;
        else if (op === '/') value /= rhs;
        else value %= rhs;
      }
      return value;
    }

    function parseUnary() {
      if (peek() && peek().type === 'op' && peek().value === '-') {
        next();
        return -parseUnary();
      }
      return parsePower();
    }

    function parsePower() {
      const base = parsePrimary();
      if (peek() && peek().type === 'op' && peek().value === '^') {
        next();
        const exp = parseUnary(); // right-associative
        return Math.pow(base, exp);
      }
      return base;
    }

    function parsePrimary() {
      const tok = peek();
      if (!tok) throw new Error('unexpected-end');

      if (tok.type === 'num') { next(); return tok.value; }

      if (tok.type === 'func') {
        next();
        if (!peek() || peek().value !== '(') throw new Error('expected-paren-after-func');
        next(); // consume '('
        const arg = parseExpression();
        if (!peek() || peek().value !== ')') throw new Error('expected-closing-paren');
        next(); // consume ')'
        return applyFunction(tok.value, arg, angleMode);
      }

      if (tok.type === 'op' && tok.value === '(') {
        next();
        const value = parseExpression();
        if (!peek() || peek().value !== ')') throw new Error('expected-closing-paren');
        next();
        return value;
      }

      throw new Error('unexpected-token:' + tok.value);
    }

    const result = parseExpression();
    if (pos !== tokens.length) throw new Error('trailing-tokens');
    if (typeof result !== 'number' || Number.isNaN(result) || !Number.isFinite(result)) {
      throw new Error('non-finite-result');
    }
    return result;
  }

  function applyFunction(name, arg, angleMode) {
    const toRad = (deg) => (deg * Math.PI) / 180;
    const toDeg = (rad) => (rad * 180) / Math.PI;

    switch (name) {
      case 'sin': return Math.sin(angleMode === 'DEG' ? toRad(arg) : arg);
      case 'cos': return Math.cos(angleMode === 'DEG' ? toRad(arg) : arg);
      case 'tan': return Math.tan(angleMode === 'DEG' ? toRad(arg) : arg);
      case 'asin': { const r = Math.asin(arg); return angleMode === 'DEG' ? toDeg(r) : r; }
      case 'acos': { const r = Math.acos(arg); return angleMode === 'DEG' ? toDeg(r) : r; }
      case 'atan': { const r = Math.atan(arg); return angleMode === 'DEG' ? toDeg(r) : r; }
      case 'log': return Math.log10(arg);
      case 'ln': return Math.log(arg);
      case 'sqrt': return Math.sqrt(arg);
      default: throw new Error('unknown-function:' + name);
    }
  }

  /* ============================================================
     UI wiring
     ============================================================ */
  const displayEl = document.getElementById('calc-display');
  const historyListEl = document.getElementById('history-list');
  const angleModeBtn = document.getElementById('angle-mode-btn');
  const secondBtn = document.getElementById('second-btn');
  const clearHistoryBtn = document.getElementById('clear-history-btn');

  if (!displayEl) return; // calculator UI not on this page

  let expr = '';
  let angleMode = 'DEG';
  let secondActive = false;
  let history = [];
  let justEvaluated = false;

  function renderDisplay() {
    displayEl.textContent = expr || '0';
  }

  function renderHistory() {
    if (history.length === 0) {
      historyListEl.innerHTML = '<li class="history-empty">ยังไม่มีประวัติการคำนวณ</li>';
      return;
    }
    historyListEl.innerHTML = history
      .slice()
      .reverse()
      .map((h, idx) => `
        <li class="history-item" data-idx="${history.length - 1 - idx}">
          <span class="h-expr">${h.expr}</span>
          <span class="h-result">= ${h.result}</span>
        </li>
      `)
      .join('');
  }

  function pushHistory(expression, result) {
    history.push({ expr: expression, result: formatResult(result) });
    if (history.length > 50) history.shift();
    renderHistory();
  }

  function formatResult(n) {
    if (Math.abs(n) > 1e12 || (Math.abs(n) < 1e-9 && n !== 0)) return n.toExponential(6);
    return parseFloat(n.toFixed(10)).toString();
  }

  function insert(text) {
    if (justEvaluated && /^[0-9.]/.test(text)) {
      expr = ''; // start fresh number after "="
    }
    justEvaluated = false;
    expr += text;
    renderDisplay();
  }

  function insertFunction(fnName) {
    justEvaluated = false;
    expr += fnName + '(';
    renderDisplay();
  }

  function clearAll() {
    expr = '';
    justEvaluated = false;
    renderDisplay();
  }

  function backspace() {
    justEvaluated = false;
    expr = expr.slice(0, -1);
    renderDisplay();
  }

  function doEquals() {
    if (!expr) return;
    try {
      const result = evaluate(expr, angleMode);
      pushHistory(expr, result);
      expr = formatResult(result);
      justEvaluated = true;
      renderDisplay();
    } catch (err) {
      displayEl.textContent = 'ข้อผิดพลาด';
      justEvaluated = true;
      setTimeout(() => { expr = ''; renderDisplay(); }, 900);
    }
  }

  document.querySelectorAll('[data-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-key');
      switch (key) {
        case 'clear': clearAll(); break;
        case 'back': backspace(); break;
        case 'equals': doEquals(); break;
        case 'x2': insert('^2'); break;
        case 'xy': insert('^'); break;
        case 'sqrt': insertFunction('sqrt'); break;
        case 'pi': insert('pi'); break;
        case 'e': insert('e'); break;
        case 'percent': insert('%'); break;
        case 'sin': insertFunction(secondActive ? 'asin' : 'sin'); break;
        case 'cos': insertFunction(secondActive ? 'acos' : 'cos'); break;
        case 'tan': insertFunction(secondActive ? 'atan' : 'tan'); break;
        case 'log': insertFunction('log'); break;
        case 'ln': insertFunction('ln'); break;
        default: insert(key);
      }
    });
  });

  angleModeBtn.addEventListener('click', () => {
    angleMode = angleMode === 'DEG' ? 'RAD' : 'DEG';
    angleModeBtn.textContent = angleMode;
  });

  secondBtn.addEventListener('click', () => {
    secondActive = !secondActive;
    secondBtn.classList.toggle('active', secondActive);
    document.getElementById('lbl-sin').textContent = secondActive ? 'sin⁻¹' : 'sin';
    document.getElementById('lbl-cos').textContent = secondActive ? 'cos⁻¹' : 'cos';
    document.getElementById('lbl-tan').textContent = secondActive ? 'tan⁻¹' : 'tan';
  });

  clearHistoryBtn.addEventListener('click', () => {
    history = [];
    renderHistory();
  });

  historyListEl.addEventListener('click', (e) => {
    const item = e.target.closest('.history-item');
    if (!item) return;
    const idx = Number(item.getAttribute('data-idx'));
    expr = history[idx].expr;
    justEvaluated = false;
    renderDisplay();
  });

  // Keyboard support
  window.addEventListener('keydown', (e) => {
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
    const k = e.key;
    if (/[0-9.+\-*/%^()]/.test(k)) { insert(k); return; }
    if (k === 'Enter' || k === '=') { e.preventDefault(); doEquals(); return; }
    if (k === 'Backspace') { backspace(); return; }
    if (k === 'Escape') { clearAll(); return; }
  });

  renderDisplay();
  renderHistory();
})();
