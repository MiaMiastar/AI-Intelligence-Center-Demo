(function () {
  var COURSES = [
    {
      id: "ml1",
      title: "【Coze官方教程】玩转Coze",
      thumbText: "Coze your way to AI bot creation",
      thumbSubtext: "玩转扣子 · 带你手把手搭建专属 AI Bot",
      thumbBadge: "VOL. 01",
      learned: 1,
      total: 9,
      status: "进行中",
      courseType: "随到随学",
    },
    {
      id: "ml2",
      title: "供应链端到端认知与指标体系",
      thumbText: "供应链 · 入门",
      thumbSubtext: "体系化认知与 KPI 设计",
      thumbBadge: "热销",
      learned: 5,
      total: 24,
      status: "进行中",
      courseType: "付费课",
    },
    {
      id: "ml3",
      title: "S&OP 协同与滚动计划实战",
      thumbSubtext: "产销协同与计划体系",
      learned: 0,
      total: 18,
      status: "未开课",
      courseType: "付费课",
    },
  ];

  var REPORTS = [
    { id: "r1", title: "2024 供应链韧性白皮书", downloads: 3280, updateDate: "2024-01-15", category: "运营", headerBg: "dashboard-learning-report-header--sky" },
    { id: "r2", title: "S&OP 与需求预测专题报告", downloads: 4520, updateDate: "2024-01-10", category: "计划" },
    { id: "r3", title: "仓配网络与履约效率数据洞察", downloads: 2150, updateDate: "2024-01-08", category: "仓配", headerBg: "dashboard-learning-report-header--pink" },
    { id: "r4", title: "制造业供应链数据报告 Q4 2023", downloads: 5890, updateDate: "2023-12-28", category: "数据报告", headerBg: "dashboard-learning-report-header--green" },
    { id: "r5", title: "主数据治理与系统选型指南", downloads: 3670, updateDate: "2024-01-05", category: "数字化" },
    { id: "r6", title: "医药冷链与应急保供实践", downloads: 1890, updateDate: "2023-12-20", category: "运营" },
  ];

  function escapeHtml(str) {
    if (str == null) return "";
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderCourses(list, container, stateEl) {
    if (list.length === 0) {
      stateEl.innerHTML =
        '<p class="dashboard-learning-empty">暂无课程</p>';
      stateEl.classList.add("dashboard-learning-state--visible");
      container.innerHTML = "";
    } else {
      stateEl.innerHTML = "";
      stateEl.classList.remove("dashboard-learning-state--visible");
      container.innerHTML = list
        .map(function (c) {
          var badge = c.thumbBadge
            ? '<span class="dashboard-learning-card__badge">' +
              escapeHtml(c.thumbBadge) +
              "</span>"
            : "";
          var thumbTitle = c.thumbText
            ? '<p class="dashboard-learning-card__thumb-title">' +
              escapeHtml(c.thumbText) +
              "</p>"
            : "";
          var thumbSub = c.thumbSubtext || c.title;
          var banner = c.thumbBanner
            ? '<span class="dashboard-learning-card__thumb-banner">' +
              escapeHtml(c.thumbBanner) +
              "</span>"
            : "";
          return (
            '<article class="dashboard-learning-card" role="listitem">' +
            '<div class="dashboard-learning-card__thumb">' +
            badge +
            "<div>" +
            thumbTitle +
            '<p class="dashboard-learning-card__thumb-sub">' +
            escapeHtml(thumbSub) +
            "</p>" +
            "</div>" +
            banner +
            "</div>" +
            '<div class="dashboard-learning-card__body">' +
            '<h3 class="dashboard-learning-card__title">' +
            escapeHtml(c.title) +
            "</h3>" +
            '<p class="dashboard-learning-card__progress">' +
            "已学习 " +
            c.learned +
            "/" +
            c.total +
            " 课时</p>" +
            '<button type="button" class="dashboard-learning-card__btn">进入学习</button>' +
            "</div>" +
            "</article>"
          );
        })
        .join("");
    }
  }

  function renderReports(container) {
    if (!container) return;
    container.innerHTML = REPORTS
      .map(function (r) {
        var headerClass = r.headerBg || "dashboard-learning-report-header--default";
        return (
          '<article class="dashboard-learning-report-card" role="listitem">' +
          '<div class="dashboard-learning-report-card__header ' + escapeHtml(headerClass) + '">' +
          '<span class="dashboard-learning-report-card__pdf">PDF</span>' +
          "</div>" +
          '<div class="dashboard-learning-report-card__body">' +
          '<h3 class="dashboard-learning-report-card__title">' + escapeHtml(r.title) + "</h3>" +
          '<p class="dashboard-learning-report-card__meta">' +
          "下载量 " + (r.downloads || 0).toLocaleString() + " · 更新 " + escapeHtml(r.updateDate || "") +
          "</p>" +
          '<button type="button" class="dashboard-learning-report-card__btn">查看报告</button>' +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function initMainTabs() {
    var tabs = document.querySelectorAll(".dashboard-learning-main-tab");
    var panelCourses = document.getElementById("learningTabCourses");
    var panelReports = document.getElementById("learningTabReports");
    if (!tabs.length || !panelCourses || !panelReports) return;

    function showTab(tabName) {
      tabs.forEach(function (t) {
        var isActive = t.getAttribute("data-learning-tab") === tabName;
        t.classList.toggle("dashboard-learning-main-tab--active", isActive);
        t.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      panelCourses.classList.toggle("dashboard-learning-tab-panel--hidden", tabName !== "courses");
      panelReports.classList.toggle("dashboard-learning-tab-panel--hidden", tabName !== "reports");
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        showTab(tab.getAttribute("data-learning-tab"));
      });
    });
  }

  function init() {
    var gridEl = document.getElementById("learningGrid");
    var stateEl = document.getElementById("learningState");
    var reportsGrid = document.getElementById("learningReportsGrid");

    initMainTabs();
    renderCourses(COURSES, gridEl, stateEl);
    renderReports(reportsGrid);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
