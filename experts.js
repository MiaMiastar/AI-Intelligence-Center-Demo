const experts = [
  {
    id: "e1",
    name: "赵启明",
    title: "供应链规划与S&OP负责人",
    avatar: null,
    tags: ["供应链规划", "国央企项目", "OTIF提升"],
    oneLiner: "以S&OP体系化推进多工厂协同，帮助制造企业显著提升OTIF与交付稳定性。",
    trustLine: "服务30+国央企与制造集团",
    outcomeMetric: "OTIF提升至95%，交付周期缩短20%",
    bio: "专注供应链规划与产销协同，擅长从战略到落地的流程重构。\n深耕制造业与能源行业，推动组织级计划机制升级。\n强调数据口径统一与跨部门协同闭环。",
    specialties: ["S&OP机制搭建", "产能约束排产", "跨工厂协同", "KPI体系设计"],
    cases: [
      { name: "多工厂协同项目", desc: "OTIF提升至95%，交付周期缩短20%。" },
      { name: "新能源产销协同", desc: "交期承诺一致性提升18个百分点。" }
    ],
    clientTypes: ["国央企", "制造", "能源"],
    recommendedScore: 92
  },
  {
    id: "e2",
    name: "孙奕",
    title: "采购与成本优化专家",
    avatar: null,
    tags: ["采购管理", "制造业", "成本下降"],
    oneLiner: "通过成本拆解与双源策略，帮助制造与零售企业构建稳健采购体系。",
    trustLine: "服务20+制造与零售企业",
    outcomeMetric: "采购成本平均下降8%",
    bio: "从采购策略到供应商治理的全链路优化实践者。\n善于搭建品类管理与风险预警模型，提升供应稳定性。\n具备大型制造与零售集团的采购体系经验。",
    specialties: ["供应商分级管理", "成本拆解", "双源策略", "合同条款优化"],
    cases: [
      { name: "关键物料双源建设", desc: "供应中断次数下降50%。" },
      { name: "品类成本优化", desc: "核心物料成本下降7.5%。" }
    ],
    clientTypes: ["制造", "零售"],
    recommendedScore: 88
  },
  {
    id: "e3",
    name: "李曼",
    title: "物流仓配运营专家",
    avatar: null,
    tags: ["仓配优化", "零售制造", "效率提升"],
    oneLiner: "以仓配网络重构带动时效与成本双改善，帮助零售与制造企业提升履约。",
    trustLine: "服务15+零售与制造企业",
    outcomeMetric: "仓内作业效率提升30%",
    bio: "深耕仓配网络与末端配送优化，强调时效与成本平衡。\n擅长波次拣选、运输路径与时效SLA设计。\n拥有多家零售与制造项目实战经验。",
    specialties: ["仓库布局优化", "运输路径规划", "拣选策略", "时效管理"],
    cases: [
      { name: "区域仓网升级", desc: "交付周期缩短1.5天。" },
      { name: "仓内效率提升", desc: "拣选效率提升28%。" }
    ],
    clientTypes: ["零售", "制造"],
    recommendedScore: 90
  },
  {
    id: "e4",
    name: "周骏",
    title: "供应链数字化转型顾问",
    avatar: null,
    tags: ["主数据治理", "国央企"],
    oneLiner: "以数据治理和系统规划打通供应链决策闭环，缩短报表与决策周期。",
    trustLine: "服务国央企与制造集团",
    outcomeMetric: "主数据合规率提升至98%",
    bio: "专注供应链数字化路线规划与系统落地，推动流程标准化。擅长主数据治理、指标体系设计和看板建设。服务国央企与大型制造集团数字化升级。",
    specialties: ["主数据治理", "系统选型", "指标体系", "数据看板"],
    specialtyDescriptions: {
      "主数据治理": "结合业务场景进行落地优化,建立标准规范。",
      "系统选型": "基于业务痛点与未来规划,提供客观的系统选型建议。",
      "指标体系": "搭建分层级的供应链监控指标,实现管理透明化。",
      "数据看板": "设计可视化决策大屏,实时反映运营健康度。"
    },
    cases: [
      { name: "主数据治理项目", desc: "报表时效缩短60%", detail: "聚焦交付质量与经营指标改善,重构物料与供应商主数据标准。" },
      { name: "WMS/APS选型", desc: "3套系统成功落地", detail: "主导多家工厂的仓储与排程系统选型及实施监理。" }
    ],
    clientTypes: ["国央企", "制造"],
    recommendedScore: 95
  },
  {
    id: "e5",
    name: "王晓宁",
    title: "医药供应链运营经理",
    avatar: null,
    tags: ["医药冷链", "国央企项目", "报损率降低"],
    oneLiner: "构建冷链合规与保供机制，帮助医药与政府客户降低供应风险与报损。",
    trustLine: "服务政府、医药、国央企",
    outcomeMetric: "冷链报损率降低40%",
    bio: "专注医药供应链合规与冷链运营，建立应急保供体系。\n擅长批次追溯与安全库存模型设计。\n在医药与政府保供项目中经验丰富。",
    specialties: ["冷链合规管理", "批次追溯", "应急保供", "安全库存策略"],
    cases: [
      { name: "医药冷链升级", desc: "报损率下降40%。" },
      { name: "应急保供体系", desc: "缺货率降低3.8个百分点。" }
    ],
    clientTypes: ["政府", "医药", "国央企"],
    recommendedScore: 87
  },
  {
    id: "e6",
    name: "陈启航",
    title: "计划排产与交期承诺专家",
    avatar: null,
    tags: ["计划排产", "新能源制造", "交付周期缩短"],
    oneLiner: "以产能负荷模型驱动交期承诺与生产节奏，提升OTIF与计划达成。",
    trustLine: "服务新能源与装备制造",
    outcomeMetric: "交付周期缩短20%",
    bio: "专注产销协同与排产优化，擅长订单优先级与产能约束模型。\n推进计划机制标准化，提升交期承诺准确率。\n服务新能源与装备制造客户。",
    specialties: ["产能负荷模型", "MRP优化", "交期承诺管理", "异常预警"],
    cases: [
      { name: "新能源产能优化", desc: "OTIF提升至94%。" },
      { name: "计划机制升级", desc: "缺料预警提前3周。" }
    ],
    clientTypes: ["制造", "能源"],
    recommendedScore: 89
  },
  {
    id: "e7",
    name: "丁筱",
    title: "仓配网络设计专家",
    avatar: null,
    tags: ["仓配网络", "零售制造", "运输成本下降"],
    oneLiner: "通过仓网重构与库存前置策略，帮助零售与制造集团提升履约、降低成本。",
    trustLine: "服务零售与制造集团",
    outcomeMetric: "运输成本下降10%",
    bio: "聚焦仓网规划与履约效率提升，强调服务半径与成本平衡。\n擅长库存前置、末端配送优化与网络建模。\n服务大型零售与制造集团。",
    specialties: ["网络规划", "库存前置", "末端配送优化", "服务半径测算"],
    cases: [
      { name: "全国仓网重构", desc: "库存前置成本下降9%。" },
      { name: "配送线路优化", desc: "运输成本下降10%。" }
    ],
    clientTypes: ["零售", "制造"],
    recommendedScore: 86
  },
  {
    id: "e8",
    name: "高雨",
    title: "供应链风控与韧性专家",
    avatar: null,
    tags: ["风险控制", "国央企", "供应中断减少"],
    oneLiner: "构建风险分级与替代方案，帮助国央企与制造客户提升供应链韧性。",
    trustLine: "服务国央企与高端制造",
    outcomeMetric: "供应中断次数减少50%",
    bio: "专注供应链风险识别与韧性建设，擅长情景建模。\n帮助客户建立安全库存与应急预案机制。\n服务国央企与高端制造客户。",
    specialties: ["风险分级模型", "安全库存策略", "供应中断预案", "关键物料替代"],
    cases: [
      { name: "风险情景库建设", desc: "供应中断次数减少50%。" },
      { name: "安全库存优化", desc: "缺货率下降2.2个百分点。" }
    ],
    clientTypes: ["国央企", "制造"],
    recommendedScore: 84
  },
  {
    id: "e9",
    name: "蒋晨",
    title: "供应链数据分析专家",
    avatar: null,
    tags: ["需求预测", "零售制造", "缺货率下降"],
    oneLiner: "以预测与指标体系提升供应链决策精度，帮助零售与制造降低缺货。",
    trustLine: "服务零售与制造行业",
    outcomeMetric: "预测准确率提升15%",
    bio: "专注数据治理与预测分析，构建端到端指标体系。\n擅长需求预测模型与运营看板设计。\n服务零售与制造行业数据化升级。",
    specialties: ["需求预测", "指标体系设计", "数据治理", "可视化看板"],
    cases: [
      { name: "零售预测项目", desc: "缺货率下降4.8个百分点。" },
      { name: "指标体系搭建", desc: "报表时效缩短60%。" }
    ],
    clientTypes: ["零售", "制造"],
    recommendedScore: 91
  },
  {
    id: "e10",
    name: "罗嘉",
    title: "仓储自动化与WMS专家",
    avatar: null,
    tags: ["WMS实施", "制造医药", "拣选准确率提升"],
    oneLiner: "以自动化与流程标准化提升仓内效率，帮助制造与医药客户降本增效。",
    trustLine: "服务制造与医药客户",
    outcomeMetric: "拣选准确率提升至99.2%",
    bio: "深耕仓储自动化与WMS实施，强调人机协同。\n擅长作业标准化与设备布局优化。\n服务制造与医药客户的仓内升级项目。",
    specialties: ["WMS实施", "自动化设备规划", "作业标准化", "人机协同"],
    cases: [
      { name: "WMS升级项目", desc: "上线周期缩短30%。" },
      { name: "自动化改造", desc: "仓内作业效率提升30%。" }
    ],
    clientTypes: ["制造", "医药"],
    recommendedScore: 83
  }
];

const DEFAULT_AVATAR = "./图3.jpg";

/** 筛选维度：每个选项对应专家 tags 的匹配集合 */
const FILTER_OPTIONS = [
  { value: "国央企", label: "国央企" },
  { value: "制造业", label: "制造业" },
  { value: "零售", label: "零售" },
  { value: "仓配", label: "仓配·物流" },
  { value: "数字化", label: "数字化转型" },
  { value: "医药", label: "医药" }
];

const CATEGORY_TAGS = {
  "国央企": ["国央企", "国央企项目"],
  "制造业": ["制造业", "制造", "制造医药", "新能源制造"],
  "零售": ["零售制造"],
  "仓配": ["仓配优化", "仓配网络", "WMS实施"],
  "数字化": ["主数据治理", "报表时效缩短"],
  "医药": ["医药冷链", "制造医药"]
};

const FAVORITES_KEY = "expert_favorites";
const COOPERATED_KEY = "expert_cooperated";
let expertFavorites = new Set();
let expertCooperated = new Set();
try {
  const s = localStorage.getItem(FAVORITES_KEY);
  if (s) expertFavorites = new Set(JSON.parse(s));
} catch (_) {}
try {
  const s = localStorage.getItem(COOPERATED_KEY);
  if (s) expertCooperated = new Set(JSON.parse(s));
} catch (_) {}
function saveExpertFavorites() {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...expertFavorites]));
  } catch (_) {}
}
function saveExpertCooperated() {
  try {
    localStorage.setItem(COOPERATED_KEY, JSON.stringify([...expertCooperated]));
  } catch (_) {}
}

/** 根据需求描述计算专家匹配得分（越高越匹配） */
function scoreExpertByNeed(expert, needText) {
  if (!needText || !needText.trim()) return 0;
  const text = needText.trim().toLowerCase();
  const terms = text.split(/[\s,，、；;]+/).filter(Boolean);
  if (terms.length === 0) return 0;

  const fields = [
    { str: (expert.tags || []).join(" "), weight: 3 },
    { str: expert.title || "", weight: 2 },
    { str: expert.oneLiner || "", weight: 2 },
    { str: (expert.specialties || []).join(" "), weight: 2 },
    { str: (expert.clientTypes || []).join(" "), weight: 1.5 },
    { str: expert.bio || "", weight: 1 },
    { str: (expert.cases || []).map((c) => c.name + " " + (c.desc || "")).join(" "), weight: 1 }
  ];
  const content = fields.map((f) => f.str).join(" ").toLowerCase();

  let score = 0;
  for (const term of terms) {
    if (term.length < 2) continue;
    const idx = content.indexOf(term);
    if (idx === -1) continue;
    for (const f of fields) {
      if (f.str.toLowerCase().indexOf(term) !== -1) score += f.weight;
    }
  }
  return score;
}

function renderExpertCard(expert) {
  const identity = (expert.title || "").slice(0, 16);
  const avatarSrc = expert.avatar || DEFAULT_AVATAR;
  const avatarEl = `<img src="${avatarSrc}" alt="" class="expert-card-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><span class="expert-card-avatar-ph" style="display:none">${expert.name.slice(0, 1)}</span>`;
  const isFav = expertFavorites.has(expert.id);
  const favIcon = isFav
    ? `<span class="expert-card-fav expert-card-fav--on" aria-label="已收藏"><svg class="expert-card-fav-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>`
    : "";
  return `
    <div class="card expert-card link-card" data-expert-id="${expert.id}" role="listitem" tabindex="0">
      ${favIcon}
      <div class="expert-card-header">
        <div class="expert-card-avatar-wrap">
          <div class="expert-card-avatar">${avatarEl}</div>
          <span class="expert-card-badge" aria-label="已认证专家">✓</span>
        </div>
        <div class="expert-card-meta">
          <h3 class="expert-card-name">${expert.name}</h3>
          ${identity ? `<p class="expert-card-identity">${identity}</p>` : ""}
          <span class="expert-card-trust">${expert.trustLine}</span>
        </div>
      </div>
      <div class="expert-card-tags">
        ${(expert.tags || []).slice(0, 4).map((t) => `<span class="expert-card-tag">${t}</span>`).join("")}
      </div>
      <p class="expert-card-oneliner">${expert.oneLiner || ""}</p>
      ${expert.outcomeMetric ? `<div class="expert-card-metric">${expert.outcomeMetric}</div>` : ""}
    </div>
  `;
}

function openExpertModal(expertId) {
  const expert = experts.find((item) => item.id === expertId);
  if (!expert) return;

  const caseCount = (expert.cases || []).length;
  const getSpecialtyDesc = (name) =>
    (expert.specialtyDescriptions && expert.specialtyDescriptions[name]) || "结合业务场景进行落地优化。";
  const getCaseDetail = (c) => (c.detail != null ? c.detail : "聚焦交付质量与经营指标改善。");

  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal expert-modal" role="dialog" aria-modal="true">
      <button class="modal-close expert-modal__close" aria-label="关闭">×</button>
      <div class="expert-modal__content">
        <div class="expert-modal__left">
          <div class="expert-modal__identity-block">
            <div class="expert-modal__avatar-wrap">
              <div class="avatar avatar--modal">${expert.name.slice(0, 1)}</div>
            </div>
            <div class="expert-modal__identity">
              <h3 class="expert-modal__name">${expert.name}</h3>
              <p class="expert-modal__title">${expert.title}</p>
              <div class="expert-modal__tags">
                ${(expert.tags || []).slice(0, 4).map((tag) => `<span class="tag tag--accent">${tag}</span>`).join("")}
              </div>
            </div>
          </div>
          <section class="expert-modal__section">
            <h4 class="expert-modal__section-title">个人简介</h4>
            <p class="expert-modal__bio">${(expert.bio || "").replace(/\n/g, "<br />")}</p>
          </section>
          <section class="expert-modal__section">
            <h4 class="expert-modal__section-title">擅长方向</h4>
            <ul class="expert-modal__specialties">
              ${(expert.specialties || [])
                .map(
                  (item) =>
                    `<li><strong>${item}</strong><span>${getSpecialtyDesc(item)}</span></li>`
                )
                .join("")}
            </ul>
          </section>
          <section class="expert-modal__section">
            <h4 class="expert-modal__section-title">服务客户类型</h4>
            <div class="expert-modal__client-tags">
              ${(expert.clientTypes || []).map((t) => `<span class="tag tag--muted">${t}</span>`).join("")}
            </div>
          </section>
        </div>
        <div class="expert-modal__right">
          <section class="expert-modal__section">
            <h4 class="expert-modal__section-title">代表项目 / 成果</h4>
            <div class="expert-modal__achievements">
              ${(expert.cases || [])
                .map(
                  (c) => `
                <div class="achievement-card">
                  <div class="achievement-card__title">${c.name}</div>
                  <div class="achievement-card__metric">${c.desc}</div>
                  <span class="achievement-card__label">关键成果</span>
                  <p class="achievement-card__desc">${getCaseDetail(c)}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </section>
          <div class="expert-modal__actions">
            <button type="button" class="btn btn--primary expert-modal__btn expert-modal__btn-join" data-expert-id="${expert.id}">
              <svg class="expert-modal__btn-icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
              加入项目
            </button>
            <button type="button" class="btn btn--outline expert-modal__btn expert-modal__btn-fav" data-expert-id="${expert.id}" aria-label="${expertFavorites.has(expert.id) ? "取消收藏" : "收藏"}">
              <svg class="expert-modal__btn-icon expert-modal__btn-fav-icon" viewBox="0 0 24 24" stroke="currentColor" fill="${expertFavorites.has(expert.id) ? "currentColor" : "none"}" stroke-width="2" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ${expertFavorites.has(expert.id) ? "已收藏" : "收藏"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const close = () => {
    modal.remove();
    document.removeEventListener("keydown", onKeyDown);
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") close();
  };

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  modal.querySelector(".expert-modal__close").addEventListener("click", close);
  document.addEventListener("keydown", onKeyDown);

  const favBtn = modal.querySelector(".expert-modal__btn-fav");
  if (favBtn) {
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (expertFavorites.has(expert.id)) {
        expertFavorites.delete(expert.id);
      } else {
        expertFavorites.add(expert.id);
      }
      saveExpertFavorites();
      window.dispatchEvent(new CustomEvent("expertFavoritesChanged"));
      close();
    });
  }
  const joinBtn = modal.querySelector(".expert-modal__btn-join");
  if (joinBtn) {
    joinBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      expertCooperated.add(expert.id);
      saveExpertCooperated();
      window.dispatchEvent(new CustomEvent("expertCooperatedChanged"));
      close();
    });
  }
}

function mountExpertList() {
  const searchInput = document.getElementById("expertSearch");
  const filterWrap = document.getElementById("expertFilters");
  const sortSelect = document.getElementById("expertSort");
  const needInput = document.getElementById("expertNeedInput");
  const recommendBtn = document.getElementById("expertRecommendBtn");
  const grid = document.getElementById("expertGrid");
  const state = document.getElementById("expertState");
  const statusFilterWrap = document.getElementById("expertStatusFilters");
  const activeFilters = new Set();
  const statusFilters = { favorited: false, cooperated: false };

  const renderSkeleton = () => {
    grid.innerHTML = Array.from({ length: 6 })
      .map(
        () => `
        <div class="card skeleton-card">
          <div class="skeleton avatar"></div>
          <div class="skeleton line"></div>
          <div class="skeleton line short"></div>
          <div class="skeleton chips"></div>
          <div class="skeleton line"></div>
          <div class="skeleton line short"></div>
          <div class="skeleton button"></div>
        </div>
      `
      )
      .join("");
  };

  const matches = (expert, keyword, filters, status) => {
    const content = [
      expert.name,
      expert.title,
      expert.oneLiner,
      expert.tags.join(" ")
    ]
      .join(" ")
      .toLowerCase();
    const keywordOk = !keyword || content.includes(keyword);
    const filterOk =
      filters.size === 0 ||
      [...filters].every((cat) =>
        (CATEGORY_TAGS[cat] || []).some((tag) => expert.tags.includes(tag))
      );
    const statusOk =
      (!status.favorited && !status.cooperated) ||
      (status.favorited && expertFavorites.has(expert.id)) ||
      (status.cooperated && expertCooperated.has(expert.id));
    return keywordOk && filterOk && statusOk;
  };

  const sortList = (list, needText) => {
    if (needText) {
      return [...list].sort(
        (a, b) => scoreExpertByNeed(b, needText) - scoreExpertByNeed(a, needText)
      );
    }
    const mode = sortSelect ? sortSelect.value : "recommended";
    if (mode === "name") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name, "zh"));
    }
    return [...list].sort((a, b) => b.recommendedScore - a.recommendedScore);
  };

  const updateResultCount = (count) => {
    const el = document.getElementById("expertResultCount");
    if (el) el.textContent = count === 0 ? "暂无匹配" : `共 ${count} 位`;
  };

  const renderCards = (list) => {
    if (list.length === 0) {
      state.innerHTML = `
        <div class="empty-state">
          <p class="empty-state__text">未找到匹配的专家，请尝试调整关键词或筛选条件。</p>
          <button type="button" class="btn secondary" id="expertReset">清除筛选</button>
        </div>
      `;
      grid.innerHTML = "";
      updateResultCount(0);
      const resetBtn = document.getElementById("expertReset");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          activeFilters.clear();
          statusFilters.favorited = false;
          statusFilters.cooperated = false;
          searchInput.value = "";
          if (needInput) needInput.value = "";
          if (sortSelect && sortSelect.options.length) sortSelect.value = "recommended";
          if (filterWrap) filterWrap.querySelectorAll(".chip").forEach((c) => {
            c.classList.remove("active");
            c.setAttribute("aria-pressed", "false");
          });
          if (statusFilterWrap) statusFilterWrap.querySelectorAll(".chip--status").forEach((c) => {
            c.classList.remove("active");
            c.setAttribute("aria-pressed", "false");
          });
          applyFilters();
        });
      }
      return;
    }
    state.innerHTML = "";
    updateResultCount(list.length);
    grid.innerHTML = list.map((expert) => renderExpertCard(expert)).join("");

    grid.querySelectorAll("[data-expert-id]").forEach((card) => {
      card.addEventListener("click", () => openExpertModal(card.getAttribute("data-expert-id")));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openExpertModal(card.getAttribute("data-expert-id"));
        }
      });
    });
  };

  const applyFilters = () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const needText = needInput ? needInput.value.trim() : "";
    const filtered = experts.filter((expert) =>
      matches(expert, keyword, activeFilters, statusFilters)
    );
    const sorted = sortList(filtered, needText);
    renderCards(sorted);
  };

  renderSkeleton();
  setTimeout(() => {
    applyFilters();
  }, 280);

  if (statusFilterWrap) {
    statusFilterWrap.querySelectorAll(".chip--status").forEach((chip) => {
      chip.addEventListener("click", () => {
        const statusKey = chip.getAttribute("data-status");
        if (statusKey !== "favorited" && statusKey !== "cooperated") return;
        statusFilters[statusKey] = !statusFilters[statusKey];
        chip.classList.toggle("active", statusFilters[statusKey]);
        chip.setAttribute("aria-pressed", statusFilters[statusKey] ? "true" : "false");
        applyFilters();
      });
    });
  }

  if (filterWrap) {
    filterWrap.innerHTML = FILTER_OPTIONS.map(
      (opt) => `<button type="button" class="chip" data-value="${opt.value}" aria-pressed="false">${opt.label}</button>`
    ).join("");
    filterWrap.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const value = chip.getAttribute("data-value");
        if (activeFilters.has(value)) {
          activeFilters.delete(value);
          chip.classList.remove("active");
          chip.setAttribute("aria-pressed", "false");
        } else {
          activeFilters.add(value);
          chip.classList.add("active");
          chip.setAttribute("aria-pressed", "true");
        }
        applyFilters();
      });
    });
  }

  searchInput.addEventListener("input", applyFilters);
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);
  if (recommendBtn) recommendBtn.addEventListener("click", applyFilters);
  window.addEventListener("expertFavoritesChanged", applyFilters);
  window.addEventListener("expertCooperatedChanged", applyFilters);
  if (needInput) {
    let needDebounce;
    needInput.addEventListener("input", () => {
      clearTimeout(needDebounce);
      needDebounce = setTimeout(applyFilters, 320);
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountExpertList);
} else {
  mountExpertList();
}
