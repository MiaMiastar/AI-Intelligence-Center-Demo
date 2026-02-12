(function () {
  const AUTH_KEY = "auth_user";

  function getAuthUser() {
    try {
      return localStorage.getItem(AUTH_KEY);
    } catch {
      return null;
    }
  }

  function init() {
    const user = getAuthUser();
    if (!user) {
      window.location.href = "index.html#/login";
      return;
    }

    var avatarEl = document.getElementById("dashboard-avatar-letter");
    if (avatarEl) avatarEl.textContent = (user.charAt(0) || "?").toUpperCase();
  }

  init();
})();
