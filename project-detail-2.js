(function () {
  'use strict';
  var anchorLinks = document.querySelectorAll('.apply-anchor__link');

  function getQueryId() {
    var m = /[?&]id=([^&]+)/.exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  function setValue(field, text) {
    var el = document.querySelector('[data-field="' + field + '"]');
    if (el) el.textContent = (text != null && String(text).trim() !== '') ? String(text) : '—';
  }

  var PROJECTS_BY_ID = {
    p1: {
      projectName: '某汽车零部件采购与供应商协同',
      projectCode: 'PRJ-2024-AUTO-001',
      belongUnit: '某汽车 Tier1 集团',
      applyDept: '供应链管理部',
      projectLeader: '张某某',
      contactPerson: '李某某',
      contactInfo: '010-12345678',
      applyTime: '2024-06-15',
      projectBackground: '汽车零部件采购涉及多级供应商，订单与交付不透明。',
      projectGoal: '建立供应商协同平台与绩效体系。',
      projectDesc: '面向汽车零部件制造，基于供应商协同平台与绩效体系，解决订单交付不透明与成本质量平衡难题。',
      techRoute: '需求调研 → 流程梳理 → 平台选型与实施 → 试点推广。',
      techInnovation: '供应商门户与订单协同、绩效指标与考核体系。',
      keyProblems: '订单状态不透明、交付准时率低。',
      trlLevel: 'TRL 7',
      projectStage: '商业化',
      resultType: '软件系统、平台产品、技术方案',
      techArch: 'B/S 架构，支持多租户；与 ERP/MES 集成。',
      deployForm: '混合',
      perfMetrics: '响应时间 < 2s，并发 500+。',
      testResult: '通过第三方性能与安全测试。',
      testReport: '已上传：测试报告_202406.pdf',
      userManual: '已上传：用户手册_v1.2.pdf',
      techDoc: '已上传：技术方案说明.pdf',
      patentInfo: '发明专利 1 项申请中。',
      softwareCopyright: '软著登记号 2024SRxxxxxx。',
      paperPublish: '内部技术报告 2 篇。',
      ipOwnership: '归属申报单位。',
      ipDispute: '否',
      appScenario: '汽车 Tier1 采购、供应商准入与绩效、订单协同与交付跟踪。',
      targetIndustry: '汽车',
      typicalClient: '某整车厂 Tier1 供应商',
      landingCase: '3 个落地案例，OTIF 从 78% 提升至 92%。',
      marketScale: '汽车零部件采购数字化市场规模持续增长。',
      competitor: '国内外部分供应商管理平台。',
      bizModel: 'SaaS 订阅 + 实施服务。',
      economicEffect: '预计年节省采购与质量成本约 15%。',
      socialEffect: '提升产业链协同效率。',
      selfConclusion: '成果达到商业化阶段，具备推广价值。',
      selfLevel: 'A',
      evalCategory: '供应链数字化',
      evalDimensions: '技术成熟度、应用效果、可复制性。',
      extraNote: '无。'
    }
  };

  function fillFromListProject(p) {
    setValue('projectName', p.name);
    setValue('belongUnit', p.belongUnit);
    setValue('applyTime', p.applyTime);
    setValue('trlLevel', p.trlLevel);
    setValue('projectStage', p.projectStage);
    setValue('selfLevel', p.selfLevel);
    setValue('deployForm', p.deployForm);
    setValue('targetIndustry', p.industry);
    setValue('typicalClient', p.typicalClient);
    setValue('projectDesc', p.valueProposition);
    setValue('resultType', Array.isArray(p.resultTypes) ? p.resultTypes.join('、') : (p.resultTypes || ''));
    if (p.landingCaseCount != null) setValue('landingCase', p.landingCaseCount + ' 个落地案例');
    if (p.keyMetric) setValue('perfMetrics', p.keyMetric);
  }

  var PROJECTS_LIST = [
    { id: "p1", name: "某汽车零部件采购与供应商协同", belongUnit: "某汽车 Tier1 集团", applyTime: "2024-06-15", trlLevel: "TRL 7", projectStage: "商业化", selfLevel: "A", deployForm: "混合", industry: "汽车", typicalClient: "某整车厂 Tier1 供应商", valueProposition: "面向汽车零部件制造，基于供应商协同平台与绩效体系，解决订单交付不透明与成本质量平衡难题。", resultTypes: ["软件系统", "平台产品", "技术方案"], landingCaseCount: 3, keyMetric: "OTIF 78%→92%" },
    { id: "p2", name: "快消企业 S&OP 与需求预测体系", belongUnit: "某快消企业供应链中心", applyTime: "2024-05-20", trlLevel: "TRL 8", projectStage: "商业化", selfLevel: "A", deployForm: "云", industry: "快消", typicalClient: "某区域乳品企业", valueProposition: "面向快消多 SKU 多渠道场景，基于需求预测与 S&OP 流程，解决产销协同不足与库存缺货矛盾。", resultTypes: ["算法模型", "软件系统"], landingCaseCount: 5, keyMetric: "预测准确率提升至 85%" },
    { id: "p3", name: "电商仓配网络与 WMS 实施", belongUnit: "某电商物流科技公司", applyTime: "2024-07-01", trlLevel: "TRL 8", projectStage: "商业化", selfLevel: "A", deployForm: "云", industry: "电商", typicalClient: "某服饰电商", valueProposition: "面向电商履约场景，基于多仓布局与 WMS 流程再造，解决单仓瓶颈与大促爆仓、拣货效率低问题。", resultTypes: ["软件系统", "平台产品"], landingCaseCount: 8, keyMetric: "仓内作业效率提升 40%" },
    { id: "p4", name: "医药流通供应链网络与库存优化", belongUnit: "某医药流通企业", applyTime: "2024-04-10", trlLevel: "TRL 6", projectStage: "试点", selfLevel: "B", deployForm: "混合", industry: "医药", typicalClient: "某省医药商业公司", valueProposition: "面向医药多级分销与温控合规场景，基于区域 DC 与多级库存策略，解决网络响应慢与库存服务水平兼顾。", resultTypes: ["技术方案", "软件系统", "算法模型"], landingCaseCount: 2, keyMetric: "库存周转下降 18 天" },
    { id: "p5", name: "制造企业主数据与流程治理", belongUnit: "某制造集团信息中心", applyTime: "2024-03-22", trlLevel: "TRL 7", projectStage: "商业化", selfLevel: "A", deployForm: "本地", industry: "制造", typicalClient: "某装备制造集团", valueProposition: "面向制造多系统多部门场景，基于主数据治理与流程 RACI，解决主数据混乱与系统集成困难。", resultTypes: ["技术方案", "软件系统"], landingCaseCount: 4, keyMetric: "主数据准确率 72%→98%" },
    { id: "p6", name: "全球供应链风险与韧性建设", belongUnit: "某制造企业采购中心", applyTime: "2024-08-05", trlLevel: "TRL 6", projectStage: "试点", selfLevel: "B", deployForm: "云", industry: "制造", typicalClient: "", valueProposition: "面向全球化采购与生产场景，基于供应风险地图与多源近岸策略，解决供应集中与应急响应缺失。", resultTypes: ["技术方案", "算法模型"], landingCaseCount: 1, keyMetric: "供应中断恢复 30 天→10 天" },
    { id: "p7", name: "零售企业采购与品类管理", belongUnit: "某零售连锁总部", applyTime: "2024-02-14", trlLevel: "TRL 7", projectStage: "商业化", selfLevel: "A", deployForm: "混合", industry: "零售", typicalClient: "某区域超市连锁", valueProposition: "面向零售多品类多供应商场景，基于品类策略与采购补货联动，解决品类策略不清与滞销缺货并存。", resultTypes: ["软件系统", "技术方案", "算法模型", "平台产品"], landingCaseCount: 6, keyMetric: "库存周转下降 10 天" },
    { id: "p8", name: "电子制造需求与生产计划联动", belongUnit: "某电子制造企业计划部", applyTime: "2024-06-28", trlLevel: "TRL 7", projectStage: "商业化", selfLevel: "A", deployForm: "本地", industry: "电子", typicalClient: "某消费电子代工", valueProposition: "面向电子制造订单波动大、交期短场景，基于需求预测与主计划 MPS 联动，解决计划与生产脱节。", resultTypes: ["软件系统", "算法模型"], landingCaseCount: 3, keyMetric: "交付周期缩短 25%" },
    { id: "p9", name: "冷链物流仓配与运输优化", belongUnit: "某冷链物流企业", applyTime: "2024-05-08", trlLevel: "TRL 8", projectStage: "商业化", selfLevel: "A", deployForm: "云", industry: "食品", typicalClient: "某生鲜电商", valueProposition: "面向冷链温控与时效场景，基于仓配网络与路由优化、温控监控，解决成本与质量时效兼顾。", resultTypes: ["软件系统", "技术方案"], landingCaseCount: 7, keyMetric: "运输成本单位降 12%" },
    { id: "p10", name: "集团供应链数字化规划与试点", belongUnit: "某集团供应链管理部", applyTime: "2024-07-18", trlLevel: "TRL 6", projectStage: "试点", selfLevel: "B", deployForm: "混合", industry: "制造", typicalClient: "某多元化集团", valueProposition: "面向多业态多系统集团场景，基于数字化战略与主数据试点，解决系统孤岛与业务 IT 目标不一致。", resultTypes: ["技术方案", "软件系统", "平台产品"], landingCaseCount: 2, keyMetric: "核心场景 5 个上线" }
  ];

  function initData() {
    var id = getQueryId();
    var data = PROJECTS_BY_ID[id];
    if (data) {
      Object.keys(data).forEach(function (k) { setValue(k, data[k]); });
    } else if (id) {
      var p = PROJECTS_LIST.filter(function (x) { return x.id === id; })[0];
      if (p) fillFromListProject(p);
    }
    var editBtn = document.getElementById('btnEdit');
    if (editBtn && id) editBtn.href = 'project-achievement-apply.html?id=' + encodeURIComponent(id);
  }

  function setActiveAnchor() {
    var hash = window.location.hash || '#panel-1';
    anchorLinks.forEach(function (link) {
      link.classList.toggle('apply-anchor__link--active', link.getAttribute('href') === hash);
    });
  }

  function initAnchors() {
    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        var href = link.getAttribute('href');
        if (href && href.indexOf('#') === 0) {
          var el = document.getElementById(href.slice(1));
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    window.addEventListener('hashchange', setActiveAnchor);
    setActiveAnchor();
  }

  initData();
  initAnchors();
})();
