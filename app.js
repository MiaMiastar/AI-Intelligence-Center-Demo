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
    tags: ["主数据治理", "国央企", "报表时效缩短"],
    oneLiner: "以数据治理和系统规划打通供应链决策闭环，缩短报表与决策周期。",
    trustLine: "服务国央企与制造集团",
    outcomeMetric: "主数据合规率提升至98%",
    bio: "专注供应链数字化路线规划与系统落地，推动流程标准化。\n擅长主数据治理、指标体系设计和看板建设。\n服务国央企与大型制造集团数字化升级。",
    specialties: ["主数据治理", "系统选型", "指标体系", "数据看板"],
    cases: [
      { name: "主数据治理项目", desc: "报表时效缩短60%。" },
      { name: "WMS/APS选型", desc: "3套系统成功落地。 " }
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

const projects = [
  {
    id: "p1",
    name: "产销协同能力 + 多工厂交付场景 + 优化",
    industry: "制造",
    problemTypes: ["S&OP 协同", "APS 排产"],
    duration: "6个月",
    background: "多工厂之间计划割裂，交付稳定性不足；需求波动大，人工排产响应慢。",
    challenges: ["交付稳定性不足", "排产响应慢", "协同流程不清晰"],
    solution: ["梳理产销协同与计划决策流程", "构建滚动需求预测与计划机制", "引入排产规则与约束模型"],
    outcomes: [
      { label: "OTIF 准交率", value: "提升至95%" },
      { label: "整体交付周期", value: "缩短20%" }
    ],
    reusableInsights: ["项目方案已在同类业务场景中复制应用"]
  },
  {
    id: "p2",
    name: "零售补货与库存分层优化",
    industry: "零售",
    problemTypes: ["需求预测", "库存策略", "促销协同"],
    duration: "4个月",
    background: "门店SKU多、促销频繁，库存结构失衡。",
    challenges: ["预测偏差大", "促销备货滞后", "库存周转慢"],
    solution: ["建立门店级预测模型", "库存ABC分层与补货策略", "促销前置备货流程"],
    outcomes: [
      { label: "库存周转天数", value: "减少12天" },
      { label: "缺货率", value: "下降4.8个百分点" },
      { label: "OTIF", value: "提升到94%" }
    ],
    reusableInsights: ["促销预测需要与市场计划同步校准", "分层策略需动态调整"]
  },
  {
    id: "p3",
    name: "区域仓网与配送时效升级",
    industry: "零售",
    problemTypes: ["仓配网络", "末端配送", "时效管理"],
    duration: "5个月",
    background: "配送半径过大导致时效不稳定。",
    challenges: ["仓网结构老旧", "末端履约成本高", "时效波动大"],
    solution: ["重构区域仓网布局", "末端配送线路优化", "时效SLA分级管理"],
    outcomes: [
      { label: "交付周期", value: "缩短1.5天" },
      { label: "运输成本", value: "降低10%" },
      { label: "仓内作业效率", value: "提升22%" }
    ],
    reusableInsights: ["仓网规划需与服务半径模型结合", "线路优化需持续复盘"]
  },
  {
    id: "p4",
    name: "供应链主数据治理与指标体系建设",
    industry: "制造",
    problemTypes: ["主数据治理", "指标体系", "系统集成"],
    duration: "3个月",
    background: "多系统数据口径不一致，指标难落地。",
    challenges: ["主数据缺失与重复", "指标定义不统一", "看板信息滞后"],
    solution: ["统一主数据字典", "建立指标口径标准", "搭建运营看板"],
    outcomes: [
      { label: "主数据合规率", value: "98%" },
      { label: "报表出具时效", value: "缩短60%" },
      { label: "OTIF", value: "提升到93%" }
    ],
    reusableInsights: ["指标口径需先于系统开发", "数据治理需设责任人"]
  },
  {
    id: "p5",
    name: "医药冷链仓储与追溯优化",
    industry: "医药",
    problemTypes: ["冷链管理", "仓配效率", "合规追溯"],
    duration: "6个月",
    background: "冷链品类增长快，追溯和合规压力加大。",
    challenges: ["温控监测不完整", "批次追溯断点", "仓内效率偏低"],
    solution: ["冷链温控流程标准化", "批次追溯机制重构", "波次拣选策略优化"],
    outcomes: [
      { label: "仓内作业效率", value: "提升28%" },
      { label: "报损率", value: "下降40%" },
      { label: "交付周期", value: "缩短18%" }
    ],
    reusableInsights: ["冷链监测需全链路可视化", "批次追溯应覆盖出入库"]
  },
  {
    id: "p6",
    name: "关键物料风险分级与双源策略",
    industry: "制造",
    problemTypes: ["风险韧性", "采购策略", "供应商管理"],
    duration: "4个月",
    background: "关键物料供应波动，生产计划受影响。",
    challenges: ["物料风险分级缺失", "供应商依赖度高", "替代方案不足"],
    solution: ["建立风险分级模型", "推进双源供应策略", "完善供应中断预案"],
    outcomes: [
      { label: "供应中断次数", value: "减少50%" },
      { label: "缺货率", value: "降低2.2个百分点" },
      { label: "交付周期", value: "缩短10%" }
    ],
    reusableInsights: ["关键物料需定期风险复盘", "双源供应要配套质量标准"]
  },
  {
    id: "p7",
    name: "新能源订单交付与产能负荷优化",
    industry: "能源",
    problemTypes: ["交期承诺", "产能负荷", "计划排产"],
    duration: "5个月",
    background: "订单高增长，产能瓶颈频发。",
    challenges: ["产能负荷测算不足", "交期承诺冲突", "异常处理滞后"],
    solution: ["引入产能负荷模型", "订单优先级策略", "异常快速决策机制"],
    outcomes: [
      { label: "OTIF", value: "提升至94%" },
      { label: "交付周期", value: "缩短16%" },
      { label: "缺货率", value: "下降3个百分点" }
    ],
    reusableInsights: ["产能负荷需周度滚动更新", "异常处理需设清晰决策权"]
  },
  {
    id: "p8",
    name: "仓配网络规划与数字化看板",
    industry: "制造",
    problemTypes: ["仓配网络", "数字化", "库存策略"],
    duration: "6个月",
    background: "多地仓库分散，库存难以统筹。",
    challenges: ["库存前置策略不清晰", "仓库利用率低", "缺少实时可视化"],
    solution: ["仓网布局优化", "库存前置策略设计", "端到端可视化看板"],
    outcomes: [
      { label: "库存周转天数", value: "减少9天" },
      { label: "仓库利用率", value: "提升18%" },
      { label: "运输成本", value: "下降8%" }
    ],
    reusableInsights: ["仓网重构需结合服务半径", "看板需与经营指标对齐"]
  },
  {
    id: "p9",
    name: "医药保供应急体系建设",
    industry: "医药",
    problemTypes: ["风险韧性", "应急保供", "库存策略"],
    duration: "3个月",
    background: "突发需求导致关键药品短缺。",
    challenges: ["安全库存策略缺失", "应急响应流程不清晰", "跨部门协同弱"],
    solution: ["建立应急保供流程", "关键药品安全库存模型", "保供演练机制"],
    outcomes: [
      { label: "缺货率", value: "降低3.8个百分点" },
      { label: "交付周期", value: "缩短12%" },
      { label: "OTIF", value: "提升至96%" }
    ],
    reusableInsights: ["应急流程需定期演练", "安全库存需考虑季节性波动"]
  },
  {
    id: "p10",
    name: "仓储自动化与WMS升级",
    industry: "制造",
    problemTypes: ["仓内效率", "数字化", "作业标准化"],
    duration: "5个月",
    background: "人工操作占比高，仓内效率低。",
    challenges: ["作业流程不标准", "系统功能老旧", "设备利用率不足"],
    solution: ["WMS系统升级", "作业流程标准化", "自动化设备引入"],
    outcomes: [
      { label: "仓内作业效率", value: "提升30%" },
      { label: "拣选准确率", value: "提升到99.2%" },
      { label: "运输成本", value: "降低6%" }
    ],
    reusableInsights: ["流程标准化是自动化前提", "设备布局需与拣选策略匹配"]
  }
];

const courses = [
  {
    id: "c1",
    title: "供应链端到端认知与指标体系",
    level: "入门认知",
    topics: ["供应链规划", "指标体系", "主数据治理"],
    audience: ["供应链新任负责人", "运营管理者"],
    format: "线上",
    duration: "2天",
    instructorExpertIds: ["e4", "e9"],
    outcomes: ["理解端到端流程", "掌握关键指标口径", "建立数据治理意识"]
  },
  {
    id: "c2",
    title: "S&OP协同与滚动计划实战",
    level: "方法工具",
    topics: ["S&OP", "计划排产", "需求预测"],
    audience: ["计划经理", "运营负责人"],
    format: "线下",
    duration: "3天",
    instructorExpertIds: ["e1", "e6"],
    outcomes: ["搭建S&OP会议机制", "形成滚动计划模板", "提升跨部门协同"]
  },
  {
    id: "c3",
    title: "采购成本拆解与供应商分级管理",
    level: "方法工具",
    topics: ["采购", "成本分析", "供应商管理"],
    audience: ["采购经理", "品类负责人"],
    format: "线上",
    duration: "1.5天",
    instructorExpertIds: ["e2", "e8"],
    outcomes: ["掌握成本拆解方法", "建立供应商分级标准", "提升议价效率"]
  },
  {
    id: "c4",
    title: "零售补货与库存分层策略",
    level: "实战案例",
    topics: ["库存策略", "需求预测", "促销协同"],
    audience: ["零售运营", "补货团队"],
    format: "混合",
    duration: "2天",
    instructorExpertIds: ["e11", "e9"],
    outcomes: ["构建门店预测框架", "制定库存分层策略", "提升促销备货准确率"]
  },
  {
    id: "c5",
    title: "仓配网络规划与时效管理",
    level: "方法工具",
    topics: ["仓配网络", "物流仓配", "时效管理"],
    audience: ["物流经理", "仓配负责人"],
    format: "线下",
    duration: "2.5天",
    instructorExpertIds: ["e7", "e3"],
    outcomes: ["掌握仓网规划思路", "优化配送时效", "提升仓配协同效率"]
  },
  {
    id: "c6",
    title: "医药冷链合规与追溯体系",
    level: "专项提升",
    topics: ["冷链管理", "合规追溯", "风险韧性"],
    audience: ["医药供应链", "质量管理"],
    format: "线下",
    duration: "2天",
    instructorExpertIds: ["e5"],
    outcomes: ["建立冷链合规流程", "完善批次追溯机制", "降低冷链报损率"]
  },
  {
    id: "c7",
    title: "供应链风险识别与应急预案",
    level: "专项提升",
    topics: ["风险韧性", "安全库存", "应急保供"],
    audience: ["供应链负责人", "风险管理者"],
    format: "线上",
    duration: "1天",
    instructorExpertIds: ["e8", "e5"],
    outcomes: ["建立风险分级模型", "制定应急响应流程", "优化安全库存策略"]
  },
  {
    id: "c8",
    title: "产能负荷测算与交期承诺管理",
    level: "实战案例",
    topics: ["计划排产", "交期承诺", "产能管理"],
    audience: ["计划经理", "生产负责人"],
    format: "混合",
    duration: "2天",
    instructorExpertIds: ["e6", "e10"],
    outcomes: ["构建产能负荷模型", "优化交期承诺规则", "提升订单准交率"]
  },
  {
    id: "c9",
    title: "WMS实施与仓内流程标准化",
    level: "方法工具",
    topics: ["物流仓配", "数字化", "仓内流程"],
    audience: ["仓储经理", "信息化负责人"],
    format: "线下",
    duration: "3天",
    instructorExpertIds: ["e12", "e3"],
    outcomes: ["梳理仓内流程标准", "掌握WMS实施步骤", "提升拣选与入库效率"]
  },
  {
    id: "c10",
    title: "主数据治理与可视化看板搭建",
    level: "方法工具",
    topics: ["主数据治理", "数字化", "指标体系"],
    audience: ["IT与数据团队", "供应链分析师"],
    format: "线上",
    duration: "2天",
    instructorExpertIds: ["e4", "e9"],
    outcomes: ["统一数据口径", "搭建运营看板", "提升数据可用性"]
  },
  {
    id: "c11",
    title: "仓配自动化与人机协同实践",
    level: "实战案例",
    topics: ["仓内效率", "自动化设备", "物流仓配"],
    audience: ["仓配运营", "工程改造团队"],
    format: "混合",
    duration: "2.5天",
    instructorExpertIds: ["e12"],
    outcomes: ["评估自动化投入产出", "优化人机协同流程", "提升设备利用率"]
  },
  {
    id: "c12",
    title: "供应链数字化路线图规划",
    level: "入门认知",
    topics: ["数字化", "供应链规划", "系统选型"],
    audience: ["供应链负责人", "信息化负责人"],
    format: "线上",
    duration: "1.5天",
    instructorExpertIds: ["e4", "e9"],
    outcomes: ["制定数字化阶段目标", "明确系统选型原则", "形成路线图框架"]
  }
];

const learningPaths = [
  {
    id: "lp1",
    title: "供应链负责人能力提升路径",
    forRole: "供应链负责人 / 运营负责人",
    steps: [
      { courseId: "c1", note: "统一端到端视角与指标口径" },
      { courseId: "c2", note: "搭建跨部门S&OP协同机制" },
      { courseId: "c7", note: "提升风险识别与应急能力" },
      { courseId: "c8", note: "完善交期承诺与产能负荷管理" }
    ]
  },
  {
    id: "lp2",
    title: "供应链数字化专项路径",
    forRole: "数字化负责人 / IT / 供应链分析师",
    steps: [
      { courseId: "c10", note: "主数据治理打基础" },
      { courseId: "c12", note: "规划数字化路线图" },
      { courseId: "c9", note: "仓储系统升级与流程标准化" },
      { courseId: "c11", note: "自动化与人机协同实践" }
    ]
  }
];

// ---------- 培训学院页面 Mock 数据（供应链主题） ----------
const featuredLive = {
  id: "fl1",
  title: "S&OP 协同与产销计划实战直播",
  subtitle: "链域智汇 · 培训学院",
  dateTime: "1月28日（星期三）15:00-16:00",
  cta: "马上观看"
};

const liveStreamPreviews = [
  { id: "ls1", title: "多工厂协同与 OTIF 提升", tag: "预告" },
  { id: "ls2", title: "需求预测与库存策略实战", tag: "预告" },
  { id: "ls3", title: "仓配网络规划与时效管理", tag: "预告" },
  { id: "ls4", title: "供应链风险识别与韧性建设", tag: "预告" }
];

const liveStreamReviews = [
  { id: "lr1", title: "S&OP 机制搭建与最佳实践", tag: "回顾", date: "2024-01-15" },
  { id: "lr2", title: "主数据治理与看板搭建", tag: "回顾", date: "2024-01-10" },
  { id: "lr3", title: "采购成本拆解与供应商分级", tag: "回顾", date: "2024-01-05" }
];

const knowledgeZoneItems = [
  { id: "kz1", category: "S&OP", title: "产销协同与滚动计划实操指南", views: 12580, date: "2023-10-18" },
  { id: "kz2", category: "需求预测", title: "需求预测方法与模型选型", views: 8920, date: "2023-11-02" },
  { id: "kz3", category: "仓配网络", title: "仓配网络规划与选址方法论", views: 15600, date: "2023-12-01" },
  { id: "kz4", category: "主数据", title: "供应链主数据治理与指标体系", views: 6780, date: "2023-09-20" }
];

const featuredCourseItems = [
  { id: "fc1", title: "供应链端到端认知与指标体系", instructor: "赵老师", summary: "建立端到端供应链视角，掌握核心指标与数据口径，形成体系化认知框架。", lessons: 24, enrollCount: 1286, tag: "热销", priceOriginal: 299, priceCurrent: 199, category: "入门", cover: "./图1.jpg" },
  { id: "fc2", title: "S&OP 协同与滚动计划实战", instructor: "周老师", summary: "搭建 S&OP 会议机制，形成滚动计划模板，提升产销协同与跨部门协作能力。", lessons: 18, enrollCount: 892, tag: "新课", priceOriginal: 399, priceCurrent: 299, category: "计划", cover: "./图1.jpg" },
  { id: "fc3", title: "仓配网络规划与时效管理", instructor: "丁老师", summary: "掌握仓网规划思路与时效 SLA 设计，优化配送半径与履约成本。", lessons: 30, enrollCount: 2150, tag: "热销", priceOriginal: 499, priceCurrent: 349, category: "仓配", cover: "./图1.jpg" },
  { id: "fc4", title: "采购成本拆解与供应商分级", instructor: "孙老师", summary: "掌握成本拆解方法，建立供应商分级标准，提升议价与供应稳定性。", lessons: 20, enrollCount: 756, tag: "新课", priceOriginal: 199, priceCurrent: 99, category: "采购", cover: "./图1.jpg" },
  { id: "fc5", title: "主数据治理与可视化看板搭建", instructor: "周老师", summary: "统一数据口径，搭建运营看板，提升主数据质量与报表时效。", lessons: 22, enrollCount: 1024, tag: "热销", priceOriginal: 359, priceCurrent: 259, category: "数字化", cover: "./图1.jpg" },
  { id: "fc6", title: "供应链新人必修课", instructor: "李老师", summary: "快速建立供应链基础认知，掌握核心概念与常见流程。", lessons: 12, enrollCount: 3580, tag: "免费", category: "新人", cover: "./图1.jpg" },
  { id: "fc7", title: "供应链风险识别与应急预案", instructor: "高老师", summary: "建立风险分级模型，制定应急响应流程，优化安全库存策略。", lessons: 16, enrollCount: 634, tag: "新课", priceOriginal: 259, priceCurrent: 199, category: "风险", cover: "./图1.jpg" }
];

const industryReportItems = [
  { id: "ir1", title: "2024 供应链韧性白皮书", downloads: 3280, updateDate: "2024-01-15", category: "运营", headerBg: "academy-report-bg-sky" },
  { id: "ir2", title: "S&OP 与需求预测专题报告", downloads: 4520, updateDate: "2024-01-10", category: "计划" },
  { id: "ir3", title: "仓配网络与履约效率数据洞察", downloads: 2150, updateDate: "2024-01-08", category: "仓配", headerBg: "academy-report-bg-pink" },
  { id: "ir4", title: "制造业供应链数据报告 Q4 2023", downloads: 5890, updateDate: "2023-12-28", category: "数据报告", headerBg: "academy-report-bg-green" },
  { id: "ir5", title: "主数据治理与系统选型指南", downloads: 3670, updateDate: "2024-01-05", category: "数字化" },
  { id: "ir6", title: "医药冷链与应急保供实践", downloads: 1890, updateDate: "2023-12-20", category: "运营" }
];

const COURSE_CATEGORIES = ["全部课程", "新人", "入门", "计划", "仓配", "采购", "数字化", "风险"];
const REPORT_CATEGORIES = ["全部", "运营", "计划", "仓配", "数字化", "数据报告"];

const app = document.getElementById("app");
const AUTH_KEY = "auth_user";

function getAuthUser() {
  try {
    return localStorage.getItem(AUTH_KEY);
  } catch {
    return null;
  }
}
function setAuthUser(account) {
  localStorage.setItem(AUTH_KEY, account);
}
function clearAuthUser() {
  localStorage.removeItem(AUTH_KEY);
}

function getNavLinks() {
  return Array.from(document.querySelectorAll(".nav-link"));
}

function setActiveNav(pathname) {
  getNavLinks().forEach((link) => {
    const route = link.getAttribute("data-route");
    link.classList.toggle("active", route === pathname);
  });
}

function updateNavAuth() {
  const el = document.getElementById("nav-actions");
  if (!el) return;
  const user = getAuthUser();
  if (user) {
    el.innerHTML = '<a class="btn" href="dashboard.html">工作台</a><button type="button" class="btn secondary" id="btn-logout">退出登录</button>';
    const btn = document.getElementById("btn-logout");
    if (btn) btn.addEventListener("click", () => { clearAuthUser(); window.location.hash = "#/home"; });
  } else {
    el.innerHTML = '<a class="btn" href="#/login">登录 / 注册</a>';
  }
}

function renderHome() {
  const featuredExperts = experts.slice(0, 6);
  const featuredProjects = projects.slice(0, 3);

  app.innerHTML = `
    <section class="hero section">
      <div class="container hero-grid">
        <div class="hero-copy">
          <h1>面向供应链行业的智能决策与能力赋能平台</h1>
          <p class="lead">专家智库驱动 · 项目方法沉淀 · 体系化培训赋能</p>
          <div class="btn-row" style="margin-top: 22px;">
            <a class="btn" href="#/experts">进入专家智库</a>
            <a class="btn secondary" href="#/projects">查看项目成果</a>
          </div>
        </div>
        <div class="hero-media" role="img" aria-label="供应链港口与物流场景背景"></div>
      </div>
    </section>

    <section class="section section-experts">
      <div class="section-block-inner">
      <div class="section-head">
        <div>
          <h2 class="section-title">专家智库</h2>
          <p class="section-subtitle">聚合供应链战略、运营、数字化与风险控制方向的专业力量。</p>
        </div>
        <a class="btn secondary" href="#/experts">进入专家智库</a>
      </div>
      <div id="homeExpertGrid" class="grid grid-3 expert-grid"></div>
      </div>
    </section>

    <section class="section section-projects">
      <div class="section-block-inner">
      <div class="section-head">
        <div>
          <h2 class="section-title">优秀项目</h2>
          <p class="section-subtitle">围绕关键业务指标，沉淀可规模化复制的供应链实践。</p>
        </div>
      </div>
      <div class="grid grid-3 project-card-grid">
        ${featuredProjects
          .map(
            (project) => `
          <article class="card project-card link-card" data-project-id="${project.id}">
            <div class="project-card__media">
              <img src="${project.cover || './图1.jpg'}" alt="" />
            </div>
            <div class="project-card__body">
              <span class="project-card__industry">${project.industry} · 项目成果</span>
              <h4>${project.name}</h4>
              <p class="project-summary">${getProjectSummary(project)}</p>
              <div class="project-metrics">
                ${(project.outcomes || [])
                  .slice(0, 2)
                  .map(
                    (o) => `
                  <div class="metric">
                    <div class="metric-label">${o.label}</div>
                    <div class="metric-value">${getMetricValue(o.value)}<span class="metric-unit">${getMetricUnit(o.value)}</span></div>
                  </div>
                `
                  )
                  .join("")}
              </div>
              <a href="#/projects?id=${project.id}" class="btn btn-ghost project-card__action" onclick="event.stopPropagation()">查看完整报告</a>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
      </div>
    </section>

    <section class="section section-academy">
      <div class="section-block-inner">
      <div class="section-head">
        <div>
          <h2 class="section-title">培训学院</h2>
          <p class="section-subtitle">针对供应链管理层与一线骨干，提供体系化训练。</p>
        </div>
        <a class="btn secondary" href="#/academy">查看所有课程</a>
      </div>
      <div class="grid grid-3 academy-card-grid">
        ${featuredCourseItems.slice(0, 3).map(
          (c) => `
        <article class="card academy-card link-card" data-course-id="${c.id}">
          <div class="academy-card__media">
            <img src="${c.cover || './图1.jpg'}" alt="" />
          </div>
          <div class="academy-card__body">
            <h3 class="academy-card__title">${c.title}</h3>
            <p class="academy-card__instructor">讲师：${c.instructor}</p>
            <p class="academy-card__summary">${c.summary || ''}</p>
            <div class="academy-card__footer">
              <span class="academy-card__enroll">${(c.enrollCount || 0).toLocaleString()} 人已报名</span>
              <a href="#/academy?course=${c.id}" class="btn secondary academy-card__btn" onclick="event.stopPropagation()">去报名</a>
            </div>
          </div>
        </article>
        `
        ).join('')}
      </div>
      </div>
    </section>
  `;

  mountHomeExperts(featuredExperts);

  app.querySelectorAll("[data-project-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project-id");
      window.location.hash = `#/projects?id=${projectId}`;
    });
  });

  app.querySelectorAll(".academy-card-grid .academy-card[data-course-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const courseId = card.getAttribute("data-course-id");
      window.location.hash = courseId ? `#/academy?course=${courseId}` : "#/academy";
    });
  });
}

function renderExperts() {
  app.innerHTML = `
    <section class="section">
      <div class="section-head">
        <div>
          <h1 class="section-title">专家智库</h1>
          <p class="section-subtitle">按能力方向与经验标签快速定位合适专家。</p>
        </div>
      </div>
      <div class="expert-toolbar">
        <input id="expertSearch" class="input" type="search" placeholder="搜索专家姓名/领域标签/关键词" />
        <div class="chip-group" id="expertFilters">
          ${["国央企经验", "制造业经验", "数字化转型"]
            .map((label) => `<button class="chip" data-value="${label}">${label}</button>`)
            .join("")}
        </div>
        <div class="select-row">
          <label class="select-label">排序</label>
          <select id="expertSort" class="select">
            <option value="recommended">推荐度</option>
            <option value="name">姓名</option>
          </select>
        </div>
      </div>
      <div id="expertState"></div>
      <div id="expertGrid" class="grid grid-3 expert-grid"></div>
    </section>
  `;

  mountExpertList();
}

function renderProjects() {
  app.innerHTML = `
    <section class="card">
      <h1>项目成果</h1>
      <p class="muted">这里将展示项目成果与详情信息。</p>
    </section>
  `;
}

let academyLiveTab = "预告";
let academyMainTab = "精品课程";
let academyCourseCategory = "全部课程";
let academyReportCategory = "全部";

function getFilteredCourses() {
  if (academyCourseCategory === "全部课程") return featuredCourseItems;
  return featuredCourseItems.filter((c) => c.category === academyCourseCategory);
}

function getFilteredReports() {
  if (academyReportCategory === "全部") return industryReportItems;
  return industryReportItems.filter((r) => r.category === academyReportCategory);
}

function renderAcademy() {
  const liveList = academyLiveTab === "预告" ? liveStreamPreviews : liveStreamReviews;
  const coursesFiltered = getFilteredCourses();
  const reportsFiltered = getFilteredReports();

  app.innerHTML = `
    <div class="academy-page">
      <!-- 顶部横幅（与首页主色一致） -->
      <section class="academy-hero">
        <div class="container academy-hero-inner">
          <div class="academy-hero-promo">
            <div class="academy-hero-promo-head">
              <span class="academy-hero-brand">链域智汇</span>
              <span class="academy-hero-badge">供应链培训学院</span>
            </div>
            <div class="academy-hero-tags">
              <span class="academy-hero-tag">体系化课程</span>
              <span class="academy-hero-tag academy-hero-tag-alt">新人专享</span>
              <span class="academy-hero-tag academy-hero-tag-alt">专家辅导</span>
            </div>
            <p class="academy-hero-qr-label">以专业方法构建韧性供应链</p>
            <div class="academy-hero-qr"></div>
          </div>
          <div class="academy-hero-checkin">
            <div class="academy-checkin-head">
              <span class="academy-checkin-icon">📅</span>
              <span class="academy-checkin-title">学习签到</span>
            </div>
            <p class="academy-checkin-days">连续签到 2 天</p>
            <button type="button" class="academy-checkin-btn">立即签到</button>
          </div>
        </div>
      </section>

      <div class="container academy-content">
        <!-- 热门直播 -->
        <section class="academy-section">
          <h2 class="academy-section-title">热门直播</h2>
          <p class="academy-section-sub">精选直播预告与精彩回顾</p>
          <div class="academy-live-grid">
            <div class="academy-live-main">
              <div class="academy-live-main-sub">${featuredLive.subtitle}</div>
              <h3 class="academy-live-main-title">${featuredLive.title}</h3>
              <p class="academy-live-main-time">${featuredLive.dateTime}</p>
              <div class="academy-live-main-icon">🛡️</div>
              <button type="button" class="academy-live-main-cta">${featuredLive.cta}</button>
            </div>
            <div class="academy-live-sidebar">
              <div class="academy-live-tabs">
                <button type="button" class="academy-tab ${academyLiveTab === "预告" ? "active" : ""}" data-academy-live-tab="预告">直播预告</button>
                <button type="button" class="academy-tab ${academyLiveTab === "回顾" ? "active" : ""}" data-academy-live-tab="回顾">精彩回顾</button>
              </div>
              <ul class="academy-live-list">
                ${liveList
                  .map(
                    (item) => `
                  <li class="academy-live-item">
                    <span class="academy-live-dot"></span>
                    <span class="academy-live-item-title">${item.title}</span>
                    <span class="academy-live-item-tag">${item.tag}</span>
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        </section>

        <!-- 知识专区 -->
        <section class="academy-section">
          <h2 class="academy-section-title">知识专区</h2>
          <p class="academy-section-sub">行业知识与实操指南</p>
          <div class="academy-knowledge-grid">
            ${knowledgeZoneItems
              .map(
                (item) => `
              <article class="academy-knowledge-card">
                <div class="academy-knowledge-icon">${item.category.slice(0, 1)}</div>
                <div class="academy-knowledge-body">
                  <p class="academy-knowledge-cat">${item.category}</p>
                  <h3 class="academy-knowledge-title">${item.title}</h3>
                  <p class="academy-knowledge-meta">浏览量 ${item.views.toLocaleString()} · ${item.date}</p>
                </div>
              </article>
            `
              )
              .join("")}
          </div>
          <div class="academy-more-wrap">
            <button type="button" class="academy-more-btn">查看更多</button>
          </div>
        </section>

        <!-- 培训学院（精品课程 / 行业报告 Tab） -->
        <section class="academy-section">
          <div class="academy-section-head">
            <div>
              <h2 class="academy-section-title">培训学院</h2>
              <p class="academy-section-sub">${academyMainTab === "精品课程" ? "体系化课程，助力能力提升" : "数据洞察与行业白皮书"}</p>
            </div>
            <div class="academy-main-tabs">
              <button type="button" class="academy-main-tab ${academyMainTab === "精品课程" ? "active" : ""}" data-academy-main-tab="精品课程">精品课程</button>
              <button type="button" class="academy-main-tab ${academyMainTab === "行业报告" ? "active" : ""}" data-academy-main-tab="行业报告">行业报告</button>
            </div>
          </div>
          ${academyMainTab === "精品课程" ? `
          <div class="academy-category-tabs">
            ${COURSE_CATEGORIES.map(
              (cat) => `
            <button type="button" class="academy-cat-tab ${academyCourseCategory === cat ? "active" : ""}" data-academy-course-cat="${cat}">${cat}</button>
          `
            ).join("")}
          </div>
          <div class="academy-course-grid">
            ${coursesFiltered
              .map(
                (c) => `
              <div class="academy-course-card">
                <div class="academy-course-cover">
                  <span class="academy-course-cover-emoji">📚</span>
                  <span class="academy-course-tag ${c.tag === "热销" ? "hot" : c.tag === "新课" ? "new" : "free"}">${c.tag}</span>
                </div>
                <div class="academy-course-body">
                  <h3 class="academy-course-title">${c.title}</h3>
                  <p class="academy-course-meta">${c.instructor} · 共${c.lessons}节</p>
                  <div class="academy-course-price">
                    ${c.tag === "免费" ? '<span class="academy-price-free">免费</span>' : `
                      ${c.priceOriginal != null ? `<span class="academy-price-old">¥${c.priceOriginal.toFixed(2)}</span>` : ""}
                      ${c.priceCurrent != null ? `<span class="academy-price-curr">¥${c.priceCurrent.toFixed(2)}</span>` : ""}
                    `}
                  </div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
          ` : `
          <div class="academy-category-tabs">
            ${REPORT_CATEGORIES.map(
              (cat) => `
            <button type="button" class="academy-cat-tab ${academyReportCategory === cat ? "active" : ""}" data-academy-report-cat="${cat}">${cat}</button>
          `
            ).join("")}
          </div>
          <div class="academy-report-grid">
            ${reportsFiltered
              .map(
                (r) => `
              <div class="academy-report-card">
                <div class="academy-report-header ${r.headerBg || ""}">PDF</div>
                <div class="academy-report-body">
                  <h3 class="academy-report-title">${r.title}</h3>
                  <p class="academy-report-meta">下载量 ${r.downloads.toLocaleString()} · 更新日期 ${r.updateDate}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
          `}
          <div class="academy-more-wrap">
            <button type="button" class="academy-more-btn">查看更多</button>
          </div>
        </section>
      </div>
    </div>
  `;

  app.querySelectorAll("[data-academy-live-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      academyLiveTab = btn.getAttribute("data-academy-live-tab");
      renderAcademy();
    });
  });
  app.querySelectorAll("[data-academy-main-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      academyMainTab = btn.getAttribute("data-academy-main-tab");
      renderAcademy();
    });
  });
  app.querySelectorAll("[data-academy-course-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      academyCourseCategory = btn.getAttribute("data-academy-course-cat");
      renderAcademy();
    });
  });
  app.querySelectorAll("[data-academy-report-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      academyReportCategory = btn.getAttribute("data-academy-report-cat");
      renderAcademy();
    });
  });
}

function getCourseTitle(courseId) {
  const course = courses.find((item) => item.id === courseId);
  return course ? course.title : "未命名课程";
}

function getProjectHeaderClass(industry) {
  const map = {
    "制造": "header-manufacture",
    "零售": "header-retail",
    "医药": "header-med",
    "能源": "header-energy"
  };
  return map[industry] || "header-default";
}

function getProjectSummary(project) {
  if (project.background) {
    return project.background.replace(/；/g, "，");
  }
  return `聚焦${project.problemTypes?.slice(0, 2).join(" / ") || "供应链核心"}，形成可复制的优化方案。`;
}

function getMetricValue(valueText) {
  const match = String(valueText).match(/[-\d.]+/);
  return match ? match[0] : valueText;
}

function getMetricUnit(valueText) {
  const match = String(valueText).match(/[%天]|个百分点/);
  return match ? match[0] : "";
}

const DEFAULT_AVATAR = "./图1.jpg";

function renderExpertCard(expert) {
  const identity = (expert.title || "").slice(0, 16);
  const avatarSrc = expert.avatar || DEFAULT_AVATAR;
  const avatarEl = `<img src="${avatarSrc}" alt="" class="expert-card-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><span class="expert-card-avatar-ph" style="display:none">${expert.name.slice(0, 1)}</span>`;
  return `
    <div class="card expert-card link-card" data-expert-id="${expert.id}">
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

function mountHomeExperts(initialExperts) {
  const grid = document.getElementById("homeExpertGrid");

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

  const renderCards = (list) => {
    if (list.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <p>未找到匹配的专家，请尝试调整筛选条件。</p>
          <button class="btn secondary" id="homeExpertReset">刷新列表</button>
        </div>
      `;
      document.getElementById("homeExpertReset").addEventListener("click", () => {
        renderCards(initialExperts);
      });
      return;
    }

    grid.innerHTML = list.map((expert) => renderExpertCard(expert)).join("");

    grid.querySelectorAll("[data-expert-id]").forEach((card) => {
      card.addEventListener("click", () => openExpertModal(card.getAttribute("data-expert-id")));
    });
  };

  renderSkeleton();
  setTimeout(() => {
    renderCards(initialExperts);
  }, 600);
}

function mountExpertList() {
  const searchInput = document.getElementById("expertSearch");
  const filterWrap = document.getElementById("expertFilters");
  const sortSelect = document.getElementById("expertSort");
  const grid = document.getElementById("expertGrid");
  const state = document.getElementById("expertState");
  const activeFilters = new Set();

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

  const matches = (expert, keyword, filters) => {
    const content = [
      expert.name,
      expert.title,
      expert.oneLiner,
      expert.tags.join(" ")
    ]
      .join(" ")
      .toLowerCase();
    const keywordOk = !keyword || content.includes(keyword);
    const filterOk = filters.size === 0 || [...filters].every((tag) => expert.tags.includes(tag));
    return keywordOk && filterOk;
  };

  const sortList = (list) => {
    const mode = sortSelect.value;
    if (mode === "name") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name, "zh"));
    }
    return [...list].sort((a, b) => b.recommendedScore - a.recommendedScore);
  };

  const renderCards = (list) => {
    if (list.length === 0) {
      state.innerHTML = `
        <div class="empty-state">
          <p>未找到匹配的专家，请尝试调整筛选条件。</p>
          <button class="btn secondary" id="expertReset">重置筛选</button>
        </div>
      `;
      grid.innerHTML = "";
      document.getElementById("expertReset").addEventListener("click", () => {
        activeFilters.clear();
        searchInput.value = "";
        filterWrap.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
        applyFilters();
      });
      return;
    }
    state.innerHTML = "";
    grid.innerHTML = list.map((expert) => renderExpertCard(expert)).join("");

    grid.querySelectorAll("[data-expert-id]").forEach((card) => {
      card.addEventListener("click", () => openExpertModal(card.getAttribute("data-expert-id")));
    });
  };

  const applyFilters = () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const filtered = experts.filter((expert) => matches(expert, keyword, activeFilters));
    const sorted = sortList(filtered);
    renderCards(sorted);
  };

  renderSkeleton();
  setTimeout(() => {
    applyFilters();
  }, 600);

  searchInput.addEventListener("input", applyFilters);
  sortSelect.addEventListener("change", applyFilters);
  filterWrap.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const value = chip.getAttribute("data-value");
      if (activeFilters.has(value)) {
        activeFilters.delete(value);
        chip.classList.remove("active");
      } else {
        activeFilters.add(value);
        chip.classList.add("active");
      }
      applyFilters();
    });
  });
}

function openExpertModal(expertId) {
  const expert = experts.find((item) => item.id === expertId);
  if (!expert) return;

  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal expert-modal" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="关闭">×</button>
      <div class="expert-modal__header">
        <div class="avatar xl">${expert.name.slice(0, 1)}</div>
        <div class="expert-modal__identity">
          <h3 class="expert-name">${expert.name}</h3>
          <p class="expert-title">${expert.title}</p>
          <div class="tag-row">
            ${expert.tags.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="expert-modal__content">
        <div class="expert-modal__left">
          <div class="info-block">
            <h4>个人简介</h4>
            <p class="info-text">${expert.bio.replace(/\n/g, "<br />")}</p>
          </div>
          <div class="info-block">
            <h4>擅长方向</h4>
            <ul class="expertise-list">
              ${expert.specialties
                .map((item) => `<li><strong>${item}</strong><span>结合业务场景进行落地优化。</span></li>`)
                .join("")}
            </ul>
          </div>
          <div class="info-block">
            <h4>服务客户类型</h4>
            <div class="tag-row">
              ${expert.clientTypes.map((item) => `<span class="tag">${item}</span>`).join("")}
            </div>
          </div>
        </div>
        <div class="expert-modal__right">
          <div class="achievement-panel">
            <h4>代表项目 / 成果</h4>
            <div class="achievement-list">
              ${expert.cases
                .map(
                  (item) => `
                <div class="achievement-card">
                  <div class="achievement-title">${item.name}</div>
                  <div class="achievement-metric">${item.desc}</div>
                  <div class="achievement-note">聚焦交付质量与经营指标改善。</div>
                </div>
              `
                )
                .join("")}
            </div>
            <div class="cta-group">
              <button class="btn">预约咨询</button>
              <button class="btn secondary">加入项目</button>
            </div>
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
  modal.querySelector(".modal-close").addEventListener("click", close);
  document.addEventListener("keydown", onKeyDown);
}

function getAuthBrandPanel() {
  return `
    <div class="auth-brand-panel">
      <a href="#/home" class="auth-brand-logo">
        <span class="auth-brand-logo-mark"></span>
        <span class="auth-brand-logo-text">链域智汇</span>
      </a>
      <div class="auth-brand-copy">
        <h1 class="auth-brand-title">面向供应链行业的智能决策与能力赋能平台</h1>
        <p class="auth-brand-lead">专家智库驱动 · 项目方法沉淀 · 体系化培训赋能</p>
      </div>
    </div>
  `;
}

function renderLogin() {
  if (getAuthUser()) {
    window.location.href = "dashboard.html";
    return;
  }
  document.body.classList.add("auth-fullpage");
  app.innerHTML = `
    <div class="auth-layout">
      ${getAuthBrandPanel()}
      <div class="auth-form-side">
        <div class="auth-card card">
          <div class="auth-tabs">
            <button type="button" class="auth-tab active" data-auth-tab="code">验证码登录</button>
            <button type="button" class="auth-tab" data-auth-tab="password">密码登录</button>
          </div>
          <form class="auth-form" id="loginForm" novalidate>
            <div class="auth-tab-pane" id="loginPaneCode">
              <div class="form-group">
                <div class="auth-input-wrap auth-input-underline">
                  <span class="auth-input-icon" aria-hidden="true">📱</span>
                  <span class="auth-input-prefix">+86</span>
                  <input type="tel" id="loginPhone" class="form-input" name="phone" placeholder="手机号" autocomplete="tel" />
                </div>
              </div>
              <div class="form-group">
                <div class="auth-code-row auth-input-underline">
                  <span class="auth-input-icon" aria-hidden="true">🔒</span>
                  <input type="text" id="loginCode" class="form-input" name="code" placeholder="请填写验证码" maxlength="6" />
                  <span class="auth-code-divider" aria-hidden="true"></span>
                  <button type="button" class="auth-get-code" id="loginGetCode">获取验证码</button>
                </div>
              </div>
            </div>
            <div class="auth-tab-pane" id="loginPanePassword" style="display:none">
              <div class="form-group">
                <div class="auth-input-wrap auth-input-underline">
                  <span class="auth-input-icon" aria-hidden="true">📱</span>
                  <input type="text" id="loginAccount" class="form-input" name="account" placeholder="手机号 / 邮箱" autocomplete="username" />
                </div>
              </div>
              <div class="form-group">
                <div class="auth-input-wrap auth-input-underline">
                  <span class="auth-input-icon" aria-hidden="true">🔒</span>
                  <input type="password" id="loginPassword" class="form-input" name="password" placeholder="请输入密码" autocomplete="current-password" />
                </div>
              </div>
            </div>
            <div class="auth-options">
              <label>
                <input type="checkbox" name="remember" checked />
                14天内免登录
              </label>
              <a href="#">忘记密码</a>
            </div>
            <button type="submit" class="btn-submit">登录</button>
          </form>
          <p class="auth-agreement">
            未注册的手机号验证并登录后将自动完成注册，注册即代表您同意并接受
            <a href="#">《平台服务协议》</a><a href="#">《个人信息保护政策》</a>
          </p>
        </div>
      </div>
    </div>
  `;
  const tabs = app.querySelectorAll(".auth-tab");
  const paneCode = document.getElementById("loginPaneCode");
  const panePassword = document.getElementById("loginPanePassword");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const isCode = tab.getAttribute("data-auth-tab") === "code";
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      paneCode.style.display = isCode ? "" : "none";
      panePassword.style.display = isCode ? "none" : "";
    });
  });
  const getCodeBtn = document.getElementById("loginGetCode");
  if (getCodeBtn) {
    getCodeBtn.addEventListener("click", () => {
      const phone = document.getElementById("loginPhone").value.trim();
      if (!phone) {
        alert("请先输入手机号");
        return;
      }
      alert("验证码为演示功能，请对接短信接口。");
    });
  }
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const activeTab = app.querySelector(".auth-tab.active");
    let account = "";
    if (activeTab.getAttribute("data-auth-tab") === "code") {
      const phone = document.getElementById("loginPhone").value.trim();
      const code = document.getElementById("loginCode").value.trim();
      if (!phone || !code) return;
      account = phone;
    } else {
      account = document.getElementById("loginAccount").value.trim();
      const password = document.getElementById("loginPassword").value;
      if (!account || !password) return;
    }
    setAuthUser(account);
    window.location.href = "dashboard.html";
  });
}

function renderRegister() {
  document.body.classList.add("auth-fullpage");
  app.innerHTML = `
    <div class="auth-layout">
      ${getAuthBrandPanel()}
      <div class="auth-form-side">
        <div class="auth-card card">
          <h2 style="margin:0 0 8px;font-size:1.35rem;color:var(--text)">注册</h2>
          <p class="auth-subtitle" style="margin:0 0 24px;font-size:0.9rem;color:var(--muted)">创建链域智汇账号，获取专家智库与培训资源</p>
          <form class="auth-form" id="registerForm" novalidate>
            <div class="form-group">
              <label class="form-label" for="regAccount">手机号 / 邮箱</label>
              <div class="auth-input-wrap">
                <span class="auth-input-icon" aria-hidden="true">📱</span>
                <input type="text" id="regAccount" class="form-input" name="account" placeholder="请输入手机号或邮箱" required autocomplete="username" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="regPassword">密码</label>
              <div class="auth-input-wrap">
                <span class="auth-input-icon" aria-hidden="true">🔒</span>
                <input type="password" id="regPassword" class="form-input" name="password" placeholder="请设置 6 位以上密码" required minlength="6" autocomplete="new-password" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="regPasswordConfirm">确认密码</label>
              <div class="auth-input-wrap">
                <span class="auth-input-icon" aria-hidden="true">🔒</span>
                <input type="password" id="regPasswordConfirm" class="form-input" name="passwordConfirm" placeholder="请再次输入密码" required autocomplete="new-password" />
              </div>
            </div>
            <div class="auth-extra">
              <a href="#/login">已有账号？去登录</a>
            </div>
            <button type="submit" class="btn-submit">注册</button>
          </form>
          <p class="auth-footer">
            已有账号？<a href="#/login">立即登录</a>
          </p>
        </div>
      </div>
    </div>
  `;
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const account = document.getElementById("regAccount").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regPasswordConfirm").value;
    if (!account || !password || !confirm) return;
    if (password !== confirm) {
      alert("两次输入的密码不一致，请重新输入。");
      return;
    }
    if (password.length < 6) {
      alert("密码长度至少 6 位。");
      return;
    }
    alert("注册功能为演示，请对接后端接口。");
  });
}

function renderRoute() {
  const hash = window.location.hash || "#/home";
  const [path] = hash.replace("#", "").split("?");
  const pathname = path === "/" ? "/home" : path;

  if (pathname === "/login" || pathname === "/register") {
    document.body.classList.add("auth-fullpage");
  } else {
    document.body.classList.remove("auth-fullpage");
  }

  updateNavAuth();
  setActiveNav(pathname);

  switch (pathname) {
    case "/home":
      renderHome();
      break;
    case "/experts":
      renderExperts();
      break;
    case "/login":
      renderLogin();
      break;
    case "/register":
      renderRegister();
      break;
    case "/dashboard":
      renderDashboard();
      break;
    case "/projects":
      renderProjects();
      break;
    case "/academy":
      renderAcademy();
      break;
    default:
      window.location.hash = "#/home";
  }
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
