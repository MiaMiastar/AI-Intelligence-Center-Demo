(function () {
  const AUTH_KEY = "auth_user";

  function getAuthUser() {
    try {
      return localStorage.getItem(AUTH_KEY);
    } catch {
      return null;
    }
  }

  function clearAuthUser() {
    localStorage.removeItem(AUTH_KEY);
  }

  function escapeHtml(str) {
    if (str == null) return "";
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  const DASHBOARD_EXPERTS = [
    { name: "赵启明", title: "供应链规划与S&OP负责人", oneLiner: "以S&OP体系化推进多工厂协同，帮助制造企业显著提升OTIF与交付稳定性。" },
    { name: "孙奕", title: "采购与成本优化专家", oneLiner: "通过成本拆解与双源策略，帮助制造与零售企业构建稳健采购体系。" },
    { name: "李曼", title: "物流仓配运营专家", oneLiner: "以仓配网络重构带动时效与成本双改善，帮助零售与制造企业提升履约。" },
    { name: "周骏", title: "供应链数字化转型顾问", oneLiner: "以数据治理和系统规划打通供应链决策闭环，缩短报表与决策周期。" }
  ];

  const DASHBOARD_PROJECTS = [
    { id: "p1", name: "产销协同能力 + 多工厂交付场景 + 优化", industry: "制造", duration: "6个月" },
    { id: "p2", name: "零售补货与库存分层优化", industry: "零售", duration: "4个月" },
    { id: "p3", name: "区域仓网与配送时效升级", industry: "零售", duration: "5个月" }
  ];

  function renderRoute() {
    const hash = window.location.hash || "";
    const path = hash.replace(/^#\/?/, "").trim();
    if (path === "experts") {
      window.location.replace("dashboard-experts.html");
      return;
    }
  }

  function init() {
    const user = getAuthUser();
    if (!user) {
      window.location.href = "index.html#/login";
      return;
    }

    document.getElementById("dashboard-username").textContent = escapeHtml(user);

    var sidebarNameEl = document.getElementById("dashboard-sidebar-username");
    if (sidebarNameEl) sidebarNameEl.textContent = user;

    var avatarEl = document.getElementById("dashboard-avatar-letter");
    if (avatarEl) avatarEl.textContent = (user.charAt(0) || "?").toUpperCase();

    const expertsEl = document.getElementById("dashboard-experts");
    if (expertsEl) {
      expertsEl.innerHTML = DASHBOARD_EXPERTS.map(
        (e) => `
        <a href="dashboard-experts.html" class="card expert-card link-card">
          <div class="expert-card-header">
            <div class="expert-card-avatar-wrap">
              <div class="expert-card-avatar"><span class="expert-card-avatar-ph">${escapeHtml((e.name || "专").charAt(0))}</span></div>
            </div>
            <div class="expert-card-meta">
              <h3 class="expert-card-name">${escapeHtml(e.name)}</h3>
              <p class="expert-card-identity">${escapeHtml(e.title)}</p>
            </div>
          </div>
          <p class="expert-card-oneliner">${escapeHtml(e.oneLiner || "")}</p>
        </a>
      `
      ).join("");
    }

    const projectsEl = document.getElementById("dashboard-projects");
    if (projectsEl) {
      projectsEl.innerHTML = DASHBOARD_PROJECTS.map(
        (p) => `
        <li><a href="index.html#/projects?id=${escapeHtml(p.id)}" class="card link-card dashboard-project-item">
          <strong>${escapeHtml(p.name)}</strong>
          <span class="muted">${escapeHtml(p.industry)} · ${escapeHtml(p.duration)}</span>
        </a></li>
      `
      ).join("");
    }

    function doLogout() {
      clearAuthUser();
      window.location.href = "index.html";
    }
    var sidebarLogoutBtn = document.getElementById("dashboard-sidebar-logout");
    if (sidebarLogoutBtn) sidebarLogoutBtn.addEventListener("click", doLogout);

    renderRoute();
    window.addEventListener("hashchange", renderRoute);
  }

  init();
})();
