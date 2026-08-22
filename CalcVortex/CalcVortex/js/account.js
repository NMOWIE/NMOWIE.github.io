/**
 * CalcVortex — account.js  (Phase 5)
 * -----------------------------------------------------
 * Lightweight demo account system that runs entirely in the browser
 * using localStorage. There is no server, so this is NOT secure
 * authentication — good enough for tracking one student's own
 * progress and bookmarks on their own device, not for handling
 * real passwords or private data. A production version of
 * CalcVortex should replace this with real backend authentication.
 *
 * Exposes a single global: CVAccount
 */

const CVAccount = (function () {
  const KEY_USER = 'cv_user';
  const KEY_PROGRESS = 'cv_progress';
  const KEY_BOOKMARKS = 'cv_bookmarks';

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function writeJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
  }

  /* ---------- Account (demo only) ---------- */
  function getUser() {
    return readJSON(KEY_USER, null);
  }
  function signIn(name) {
    const trimmed = (name || '').trim();
    if (!trimmed) return null;
    const user = { name: trimmed, joinedAt: getUser()?.joinedAt || new Date().toISOString() };
    writeJSON(KEY_USER, user);
    return user;
  }
  function signOut() {
    localStorage.removeItem(KEY_USER);
  }

  /* ---------- Progress tracking ---------- */
  function getProgress() {
    return readJSON(KEY_PROGRESS, { completedLessons: [], quizScores: {} });
  }
  function markLessonComplete(topicId) {
    const p = getProgress();
    if (!p.completedLessons.includes(topicId)) p.completedLessons.push(topicId);
    writeJSON(KEY_PROGRESS, p);
    return p;
  }
  function unmarkLessonComplete(topicId) {
    const p = getProgress();
    p.completedLessons = p.completedLessons.filter(id => id !== topicId);
    writeJSON(KEY_PROGRESS, p);
    return p;
  }
  function isLessonComplete(topicId) {
    return getProgress().completedLessons.includes(topicId);
  }
  function saveQuizScore(topicId, score, total) {
    const p = getProgress();
    p.quizScores[topicId] = { score, total, date: new Date().toISOString() };
    writeJSON(KEY_PROGRESS, p);
    return p;
  }

  /* ---------- Bookmarks ---------- */
  function getBookmarks() {
    return readJSON(KEY_BOOKMARKS, []);
  }
  function isBookmarked(topicId) {
    return getBookmarks().includes(topicId);
  }
  function toggleBookmark(topicId) {
    let marks = getBookmarks();
    if (marks.includes(topicId)) {
      marks = marks.filter(id => id !== topicId);
    } else {
      marks.push(topicId);
    }
    writeJSON(KEY_BOOKMARKS, marks);
    return marks;
  }

  return {
    getUser, signIn, signOut,
    getProgress, markLessonComplete, unmarkLessonComplete, isLessonComplete, saveQuizScore,
    getBookmarks, isBookmarked, toggleBookmark,
  };
})();

// Reflect sign-in state in the navbar link on every page that includes this script.
document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('nav-account-link');
  if (!link) return;
  const user = CVAccount.getUser();
  link.textContent = user ? `👤 ${user.name}` : 'เข้าสู่ระบบ';
});
