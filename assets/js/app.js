(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const STORAGE_KEY = "math-adventure-sd-profiles-v1";
  const THEME_KEY = "math-adventure-theme-v1";
  const BANK = window.MathAdventureBank;
  const LETTERS = ["A", "B", "C", "D"];

  const dom = {
    welcomeScreen: $("#welcomeScreen"),
    materialScreen: $("#materialScreen"),
    quizScreen: $("#quizScreen"),
    resultScreen: $("#resultScreen"),
    loginForm: $("#loginForm"),
    playerNameInput: $("#playerNameInput"),
    playerAgeInput: $("#playerAgeInput"),
    loginError: $("#loginError"),
    playerSummary: $("#playerSummary"),
    headerPlayerName: $("#headerPlayerName"),
    headerGrade: $("#headerGrade"),
    headerScore: $("#headerScore"),
    themeToggle: $("#themeToggle"),
    themeIcon: $("#themeIcon"),
    welcomePlayerName: $("#welcomePlayerName"),
    gradeDescription: $("#gradeDescription"),
    gradeStamp: $("#gradeStamp"),
    materialCount: $("#materialCount"),
    overallScore: $("#overallScore"),
    overallProgressText: $("#overallProgressText"),
    overallProgressBar: $("#overallProgressBar"),
    materialGrid: $("#materialGrid"),
    switchPlayerFromMaterials: $("#switchPlayerFromMaterials"),
    backToMaterials: $("#backToMaterials"),
    exitQuizButton: $("#exitQuizButton"),
    quizPlayerName: $("#quizPlayerName"),
    quizGradeLabel: $("#quizGradeLabel"),
    quizScore: $("#quizScore"),
    quizMaterialIcon: $("#quizMaterialIcon"),
    quizMaterialEyebrow: $("#quizMaterialEyebrow"),
    quizMaterialTitle: $("#quizMaterialTitle"),
    questionLevel: $("#questionLevel"),
    progressDone: $("#progressDone"),
    progressTotal: $("#progressTotal"),
    progressPercent: $("#progressPercent"),
    questionProgressBar: $("#questionProgressBar"),
    questionNumberBadge: $("#questionNumberBadge"),
    questionPrompt: $("#questionPrompt"),
    questionVisual: $("#questionVisual"),
    questionInstruction: $("#questionInstruction"),
    answerGrid: $("#answerGrid"),
    answerFeedback: $("#answerFeedback"),
    feedbackEmoji: $("#feedbackEmoji"),
    feedbackTitle: $("#feedbackTitle"),
    feedbackText: $("#feedbackText"),
    attemptHint: $("#attemptHint"),
    nextQuestionButton: $("#nextQuestionButton"),
    resultPlayerName: $("#resultPlayerName"),
    resultDescription: $("#resultDescription"),
    resultMaterialIcon: $("#resultMaterialIcon"),
    resultMaterialTitle: $("#resultMaterialTitle"),
    resultScore: $("#resultScore"),
    resultCorrect: $("#resultCorrect"),
    resultAccuracy: $("#resultAccuracy"),
    resultBestScore: $("#resultBestScore"),
    replayMaterialButton: $("#replayMaterialButton"),
    resultMaterialsButton: $("#resultMaterialsButton"),
    currentYear: $("#currentYear"),
    toast: $("#toast"),
    toastMessage: $("#toastMessage"),
  };

  const state = {
    store: { profiles: {} },
    profileKey: null,
    profile: null,
    materials: [],
    material: null,
    questions: [],
    session: null,
    toastTimer: null,
  };

  function safeParse(raw, fallback) {
    try {
      const value = JSON.parse(raw);
      return value && typeof value === "object" ? value : fallback;
    } catch (error) {
      console.warn("Data Math Adventure tidak dapat dibaca.", error);
      return fallback;
    }
  }

  function loadStore() {
    try {
      const parsed = safeParse(
        localStorage.getItem(STORAGE_KEY) || "null",
        null,
      );
      if (!parsed || !parsed.profiles || typeof parsed.profiles !== "object") {
        return { profiles: {} };
      }
      return { profiles: parsed.profiles };
    } catch (error) {
      console.warn("Penyimpanan browser tidak tersedia.", error);
      return { profiles: {} };
    }
  }

  function saveStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.store));
      return true;
    } catch (error) {
      console.warn("Progres belum dapat disimpan.", error);
      showToast(
        "Penyimpanan browser tidak tersedia. Progres mungkin tidak tersimpan.",
      );
      return false;
    }
  }

  function normalizeName(name) {
    return String(name || "")
      .trim()
      .replace(/\s+/g, " ")
      .toLocaleLowerCase("id-ID");
  }

  function makeProfile(name, age, grade) {
    return {
      name,
      age,
      grade,
      sessions: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  function makeSession(bestScore = 0) {
    return {
      started: false,
      currentQuestion: 0,
      attempts: 0,
      totalAttempts: 0,
      answered: false,
      selectedAnswer: null,
      feedback: null,
      completedCount: 0,
      correctCount: 0,
      incorrectCount: 0,
      score: 0,
      bestScore: Number(bestScore) || 0,
      completed: false,
      streak: 0,
      updatedAt: null,
      completedAt: null,
    };
  }

  function ensureSession(materialId) {
    if (!state.profile.sessions[materialId]) {
      state.profile.sessions[materialId] = makeSession();
    }
    const session = state.profile.sessions[materialId];
    const defaults = makeSession(session.bestScore);
    Object.keys(defaults).forEach((key) => {
      if (typeof session[key] === "undefined") session[key] = defaults[key];
    });
    return session;
  }

  function persistCurrentSession() {
    if (!state.profile || !state.material || !state.session) return;
    state.session.updatedAt = new Date().toISOString();
    state.profile.sessions[state.material.id] = state.session;
    state.profile.updatedAt = new Date().toISOString();
    saveStore();
    updateHeader();
  }

  function totalProfileScore() {
    if (!state.profile) return 0;
    return Object.values(state.profile.sessions || {}).reduce(
      (sum, session) => sum + Number(session.score || 0),
      0,
    );
  }

  function totalBestScore() {
    if (!state.profile) return 0;
    return Object.values(state.profile.sessions || {}).reduce(
      (sum, session) => sum + Number(session.bestScore || 0),
      0,
    );
  }

  function getMaterialTotal() {
    return BANK.questionCountForGrade(state.profile.grade);
  }

  function getCompletedCount(session) {
    return Number(session?.completedCount || 0);
  }

  function showScreen(screenName) {
    const screens = {
      welcome: dom.welcomeScreen,
      materials: dom.materialScreen,
      quiz: dom.quizScreen,
      result: dom.resultScreen,
    };
    Object.entries(screens).forEach(([name, element]) => {
      element.hidden = name !== screenName;
    });
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function updateHeader() {
    if (!state.profile) {
      dom.playerSummary.hidden = true;
      return;
    }
    dom.playerSummary.hidden = false;
    dom.headerPlayerName.textContent = state.profile.name;
    dom.headerGrade.textContent = `Kelas ${state.profile.grade} SD`;
    dom.headerScore.textContent = totalProfileScore().toLocaleString("id-ID");
  }

  function updateThemeButton() {
    const isDark = document.body.classList.contains("theme-dark");
    dom.themeIcon.textContent = isDark ? "☀️" : "🌙";
    dom.themeToggle.setAttribute(
      "aria-label",
      isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap",
    );
  }

  function applySavedTheme() {
    try {
      const theme = localStorage.getItem(THEME_KEY);
      document.body.classList.toggle("theme-dark", theme === "dark");
    } catch (error) {}
    updateThemeButton();
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle("theme-dark");
    try {
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    } catch (error) {
      /* ignore */
    }
    updateThemeButton();
  }

  function showToast(message) {
    window.clearTimeout(state.toastTimer);
    dom.toastMessage.textContent = message;
    dom.toast.classList.remove("show");
    requestAnimationFrame(() => dom.toast.classList.add("show"));
    state.toastTimer = window.setTimeout(
      () => dom.toast.classList.remove("show"),
      2800,
    );
  }

  function startPlayer(name, age) {
    const grade = BANK.gradeFromAge(age);
    if (!grade) {
      dom.loginError.textContent =
        "Pilih umur 6 sampai 12 tahun agar materi sesuai dengan kelas SD.";
      dom.loginError.hidden = false;
      dom.playerAgeInput.focus();
      return;
    }
    if (name.trim().length < 2) {
      dom.loginError.textContent =
        "Nama pemain minimal terdiri dari 2 karakter.";
      dom.loginError.hidden = false;
      dom.playerNameInput.focus();
      return;
    }

    const key = `${normalizeName(name)}::${age}`;
    let profile = state.store.profiles[key];
    if (!profile)
      profile = makeProfile(
        name.trim().replace(/\s+/g, " "),
        Number(age),
        grade,
      );
    profile.name = name.trim().replace(/\s+/g, " ");
    profile.age = Number(age);
    profile.grade = grade;
    profile.sessions =
      profile.sessions && typeof profile.sessions === "object"
        ? profile.sessions
        : {};

    state.profileKey = key;
    state.profile = profile;
    state.materials = BANK.getMaterials(grade);
    state.material = null;
    state.questions = [];
    state.session = null;
    state.store.profiles[key] = profile;
    saveStore();

    dom.loginError.hidden = true;
    updateHeader();
    renderMaterials();
    showScreen("materials");
  }

  function renderMaterials() {
    if (!state.profile) return;
    const grade = state.profile.grade;
    const count = BANK.questionCountForGrade(grade);
    dom.welcomePlayerName.textContent =
      state.profile.name.toLocaleUpperCase("id-ID");
    dom.gradeDescription.textContent = `Kamu berada di Kelas ${grade} SD. Pilih materi Matematika dan mulai tantanganmu!`;
    dom.gradeStamp.innerHTML = `<span>🎒</span><strong>KELAS ${grade} SD</strong><small>USIA ${state.profile.age} TAHUN</small>`;
    dom.materialCount.textContent = `${state.materials.length} Materi`;

    const totalQuestions = state.materials.length * count;
    let completedQuestions = 0;
    let activeScore = 0;
    state.materials.forEach((material) => {
      const session = state.profile.sessions[material.id];
      if (session) {
        completedQuestions += getCompletedCount(session);
        activeScore += Number(session.score || 0);
      }
    });
    const overallPercent = totalQuestions
      ? Math.round((completedQuestions / totalQuestions) * 100)
      : 0;
    dom.overallScore.textContent = `${totalBestScore().toLocaleString("id-ID")} Poin`;
    dom.overallProgressText.textContent = `${overallPercent}% selesai`;
    dom.overallProgressBar.style.width = `${overallPercent}%`;

    dom.materialGrid.innerHTML = state.materials
      .map((material) => {
        const session = state.profile.sessions[material.id];
        const done = session ? getCompletedCount(session) : 0;
        const percent = Math.round((done / count) * 100);
        const isCompleted = Boolean(session?.completed);
        const isStarted = Boolean(session?.started || done > 0);
        const statusClass = isCompleted ? "done" : isStarted ? "started" : "";
        const statusText = isCompleted
          ? "✓ SELESAI"
          : isStarted
            ? "◷ DALAM PROSES"
            : "✦ BELUM MULAI";
        const cta = isCompleted
          ? "Lihat hasil ↗"
          : isStarted
            ? "Lanjutkan ↗"
            : "Mulai belajar ↗";
        const scoreLine = session
          ? `Skor sesi ${Number(session.score || 0).toLocaleString("id-ID")} · Terbaik ${Number(session.bestScore || 0).toLocaleString("id-ID")}`
          : `${count} soal tantangan`;
        return `
        <button type="button" class="material-card" data-material-id="${material.id}" data-color="${material.color}" aria-label="Buka materi ${material.title}">
          <span class="material-card-top">
            <span class="material-icon" aria-hidden="true">${material.icon}</span>
            <span class="material-status ${statusClass}">${statusText}</span>
          </span>
          <h3>${escapeHTML(material.title)}</h3>
          <p class="material-card-description">${escapeHTML(material.description)}</p>
          <span class="material-skill">${escapeHTML(material.skill)}</span>
          <span class="material-progress-area">
            <span class="material-progress-meta"><span>${done} / ${count} soal selesai</span><strong>${percent}%</strong></span>
            <span class="material-progress-track"><span style="width:${percent}%"></span></span>
          </span>
          <span class="material-card-bottom"><span>${scoreLine}</span><strong class="material-card-cta">${cta}</strong></span>
        </button>`;
      })
      .join("");
    updateHeader();
  }

  function escapeHTML(value) {
    return String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character],
    );
  }

  function openMaterial(materialId, forceReplay = false) {
    const material = state.materials.find((item) => item.id === materialId);
    if (!material) return;
    state.material = material;
    const existing = ensureSession(material.id);
    if (forceReplay) {
      state.session = makeSession(existing.bestScore);
      state.session.started = true;
      state.profile.sessions[material.id] = state.session;
      persistCurrentSession();
    } else {
      state.session = existing;
      if (state.session.completed) {
        renderResult();
        showScreen("result");
        return;
      }
      state.session.started = true;
      persistCurrentSession();
    }

    state.questions = BANK.generateQuestions(
      state.profile.grade,
      material.id,
      getMaterialTotal(),
    );
    renderQuizHeader();
    renderQuestion();
    showScreen("quiz");
  }

  function renderQuizHeader() {
    if (!state.profile || !state.material || !state.session) return;
    dom.quizPlayerName.textContent = state.profile.name;
    dom.quizGradeLabel.textContent = `Kelas ${state.profile.grade}`;
    dom.quizScore.textContent = Number(state.session.score || 0).toLocaleString(
      "id-ID",
    );
    dom.quizMaterialIcon.textContent = state.material.icon;
    dom.quizMaterialEyebrow.textContent = `MATEMATIKA KELAS ${state.profile.grade} SD`;
    dom.quizMaterialTitle.textContent = state.material.title;
    const index = Math.min(
      state.session.currentQuestion,
      state.questions.length - 1,
    );
    dom.questionLevel.textContent = `${String(index + 1).padStart(2, "0")} / ${state.questions.length}`;
  }

  function updateQuestionProgress() {
    const total = state.questions.length;
    const done = Math.min(getCompletedCount(state.session), total);
    const percent = total ? Math.round((done / total) * 100) : 0;
    dom.progressDone.textContent = done;
    dom.progressTotal.textContent = total;
    dom.progressPercent.textContent = `${percent}%`;
    dom.questionProgressBar.style.width = `${percent}%`;
  }

  function renderQuestion() {
    if (!state.session || !state.material || !state.questions.length) return;
    const index = state.session.currentQuestion;
    if (index >= state.questions.length) {
      finishMaterial();
      return;
    }
    const question = state.questions[index];
    const session = state.session;
    dom.questionLevel.textContent = `${String(index + 1).padStart(2, "0")} / ${state.questions.length}`;
    dom.questionNumberBadge.textContent = `SOAL ${index + 1}`;
    dom.questionPrompt.textContent = question.prompt;
    dom.questionVisual.hidden = !question.visual;
    dom.questionVisual.textContent = question.visual || "";
    dom.questionInstruction.textContent = session.answered
      ? "Jawaban sudah tersimpan. Lanjutkan ke soal berikutnya, ya!"
      : "Pilih satu jawaban yang paling tepat.";

    dom.answerGrid.innerHTML = question.options
      .map((option, optionIndex) => {
        const isCorrect = option === question.answer;
        const isSelected = option === session.selectedAnswer;
        let className = "answer-option";
        if (session.answered && isCorrect) className += " correct";
        if (session.answered && isSelected && !isCorrect)
          className += " incorrect";
        return `<button type="button" class="${className}" data-option-index="${optionIndex}" ${session.answered ? "disabled" : ""}>
        <span class="option-letter">${LETTERS[optionIndex]}</span><span>${escapeHTML(option)}</span>
      </button>`;
      })
      .join("");

    if (session.feedback) {
      dom.answerFeedback.hidden = false;
      dom.answerFeedback.className =
        `answer-feedback ${session.feedback.type || ""}`.trim();
      dom.feedbackEmoji.textContent = session.feedback.emoji || "🌟";
      dom.feedbackTitle.textContent = session.feedback.title || "Info";
      dom.feedbackText.textContent = session.feedback.text || "";
    } else {
      dom.answerFeedback.hidden = true;
      dom.answerFeedback.className = "answer-feedback";
      dom.feedbackText.textContent = "";
    }

    dom.nextQuestionButton.hidden = !session.answered;
    dom.nextQuestionButton.innerHTML =
      index === state.questions.length - 1
        ? 'Lihat Hasil <span aria-hidden="true">🏆</span>'
        : 'Soal Berikutnya <span aria-hidden="true">➜</span>';

    if (session.answered) {
      dom.attemptHint.textContent = "Bagus! Jawabanmu sudah dicatat. 🌟";
    } else {
      const left = 3 - Number(session.attempts || 0);
      dom.attemptHint.textContent = `Kesempatan tersisa: ${left}. Kamu pasti bisa! 💪`;
    }

    updateQuestionProgress();
    renderQuizHeader();
  }

  function selectAnswer(optionIndex) {
    if (!state.session || state.session.answered) return;
    const question = state.questions[state.session.currentQuestion];
    const option = question.options[optionIndex];
    if (typeof option === "undefined") return;

    const session = state.session;
    session.attempts += 1;
    session.totalAttempts += 1;
    session.selectedAnswer = option;

    if (option === question.answer) {
      const earned = [100, 70, 40][Math.min(session.attempts - 1, 2)];
      session.score += earned;
      session.correctCount += 1;
      session.streak = session.attempts === 1 ? session.streak + 1 : 0;
      let bonus = 0;
      if (session.streak > 0 && session.streak % 5 === 0) {
        bonus = 20;
        session.score += bonus;
      }
      session.answered = true;
      session.completedCount = Math.max(
        session.completedCount,
        session.currentQuestion + 1,
      );
      session.feedback = {
        type: "",
        emoji: session.attempts === 1 ? "🌟" : "👏",
        title:
          session.attempts === 1
            ? "Hebat! Jawaban benar!"
            : "Bagus, kamu berhasil!",
        text: `${question.explanation} Kamu mendapat ${earned}${bonus ? ` + ${bonus} poin bonus` : ""} poin.`,
      };
    } else {
      session.streak = 0;
      if (session.attempts >= 3) {
        session.answered = true;
        session.incorrectCount += 1;
        session.completedCount = Math.max(
          session.completedCount,
          session.currentQuestion + 1,
        );
        session.feedback = {
          type: "retry",
          emoji: "💛",
          title: "Tidak apa-apa, terus belajar!",
          text: `Jawaban yang tepat adalah ${question.answer}. ${question.explanation}`,
        };
      } else {
        session.feedback = {
          type: "warning",
          emoji: "🤔",
          title: "Hampir benar! Coba lagi, ya.",
          text: `${question.hint || "Perhatikan kembali pertanyaannya."} Ini kesempatan ke-${session.attempts} dari 3.`,
        };
      }
    }

    persistCurrentSession();
    renderQuestion();
  }

  function nextQuestion() {
    if (!state.session || !state.session.answered) return;
    if (state.session.currentQuestion >= state.questions.length - 1) {
      finishMaterial();
      return;
    }
    state.session.currentQuestion += 1;
    state.session.attempts = 0;
    state.session.answered = false;
    state.session.selectedAnswer = null;
    state.session.feedback = null;
    persistCurrentSession();
    renderQuestion();
  }

  function finishMaterial() {
    const session = state.session;
    if (!session || session.completed) {
      renderResult();
      showScreen("result");
      return;
    }
    session.completed = true;
    session.bestScore = Math.max(
      Number(session.bestScore || 0),
      Number(session.score || 0),
    );
    session.completedAt = new Date().toISOString();
    session.completedCount = state.questions.length;
    persistCurrentSession();
    renderResult();
    showScreen("result");
  }

  function renderResult() {
    if (!state.profile || !state.material || !state.session) return;
    const session = state.session;
    const total = state.questions.length || getMaterialTotal();
    const accuracy = total
      ? Math.round((session.correctCount / total) * 100)
      : 0;
    dom.resultPlayerName.textContent = state.profile.name.split(/\s+/)[0];
    dom.resultDescription.textContent =
      session.correctCount === total
        ? "Sempurna! Semua jawabanmu benar. Kamu luar biasa!"
        : "Kamu sudah menyelesaikan tantangan ini. Terus berlatih agar semakin jago Matematika!";
    dom.resultMaterialIcon.textContent = state.material.icon;
    dom.resultMaterialTitle.textContent = state.material.title;
    dom.resultScore.textContent = Number(session.score || 0).toLocaleString(
      "id-ID",
    );
    dom.resultCorrect.textContent = `${session.correctCount}/${total}`;
    dom.resultAccuracy.textContent = `${accuracy}%`;
    dom.resultBestScore.textContent = `🏅 Skor terbaik materi ini: ${Number(session.bestScore || 0).toLocaleString("id-ID")} poin`;
  }

  function backToMaterialList() {
    if (state.profile && state.material && state.session)
      persistCurrentSession();
    renderMaterials();
    showScreen("materials");
  }

  function switchPlayer() {
    if (state.profile && state.material && state.session)
      persistCurrentSession();
    state.profileKey = null;
    state.profile = null;
    state.material = null;
    state.questions = [];
    state.session = null;
    dom.playerNameInput.value = "";
    dom.playerAgeInput.value = "";
    dom.loginError.hidden = true;
    updateHeader();
    showScreen("welcome");
    dom.playerNameInput.focus();
  }

  function initializeEvents() {
    dom.loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      startPlayer(dom.playerNameInput.value, dom.playerAgeInput.value);
    });

    dom.materialGrid.addEventListener("click", (event) => {
      const card = event.target.closest("[data-material-id]");
      if (!card) return;
      openMaterial(card.dataset.materialId);
    });

    dom.answerGrid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-option-index]");
      if (!button || button.disabled) return;
      selectAnswer(Number(button.dataset.optionIndex));
    });

    dom.nextQuestionButton.addEventListener("click", nextQuestion);
    dom.backToMaterials.addEventListener("click", backToMaterialList);
    dom.exitQuizButton.addEventListener("click", backToMaterialList);
    dom.switchPlayerFromMaterials.addEventListener("click", switchPlayer);
    dom.resultMaterialsButton.addEventListener("click", backToMaterialList);
    dom.replayMaterialButton.addEventListener("click", () => {
      if (!state.material) return;
      openMaterial(state.material.id, true);
    });
    dom.themeToggle.addEventListener("click", toggleTheme);

    document.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "m") {
        event.preventDefault();
        if (state.profile) backToMaterialList();
      }
    });
  }

  function initialize() {
    state.store = loadStore();
    applySavedTheme();
    dom.currentYear.textContent = new Date().getFullYear();
    initializeEvents();
    updateHeader();
    showScreen("welcome");
  }

  initialize();
})();
