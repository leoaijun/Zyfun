export default {
  name: '实验室',
  nav: {
    staticFilter: '静态筛选',
    fileDiff: '文件对比',
    jsEdit: '写源工具',
    aiBrain: '人工智脑',
    dataCrypto: '数据编码',
    snifferPlay: '嗅探播放',
    pluginCenter: '插件中心',
  },
  req: {
    title: '请求参数',
    reqEncode: '编码',
    reqHeader: '请求头',
    reqBody: '请求体',
    contentType: '类型',
  },
  jsEdit: {
    import: '导入',
    export: '导出',
    bug: '调试',
    delete: '删除用例',
    cache: '缓存',
    encode: '编码',
    decode: '解码',
    file: '目录',
    help: '帮助',
    other: '其他',
    doc: '文档',
    ai: '智脑',
    tool: '工具',
    title: '写源工具',
    template: '模板',
    templateTip: '选择一个要编辑的默认模板',
    encodeTip: '选择一个需要编码的方法',
    run: '运行',
    fileManage: '文件',
    sift: '筛选',
    editSource: '写源',
    placeholder: {
      reqHeader: '{ "User-Agent": "Mozilla/5.0 zyfun" }',
      reqBody: '{ "key": "01b9b7" }',
      proxyUpload: '请输入三元组, [响应吗, 响应头, 响应体]',
    },
    rule: {
      pdfa: '列表',
      pdfh: '节点',
      try: '执行',
      url: '地址',
      wd: '关键词',
      pg: '页',
      t: '类',
      f: '过滤',
      ids: '标识',
      flag: '线路',
      play: '选集',
    },
    bar: {
      title: '编辑器参数',
      theme: '主题',
      language: '语言',
      eol: '行尾符',
      wordWrap: '换行',
      disable: '禁用',
      enable: '启用',
      autoInit: '自动初始化',
    },
    action: {
      init: '初始化',
      mode: '模式',
      status: '状态',
      manual: '手动',
      auto: '自动',
      log: '日志',
      t3js: 'T3Js',
      t3py: 'T3Py',
      t4: 'T4',
      source: '源码',
      obtain: '获取',
      classify: '分类',
      home: '首页',
      list: '列表',
      detail: '详情',
      search: '搜索',
      play: '播放',
      proxy: '代理',
      proxyUpload: '代理上传',
      player: '播放器',
      sniffer: '嗅探',
    },
    select: {
      control: '控制',
      log: '日志',
      debug: '调试',
      source: '源码',
      rule: '规则',
      f12: 'F12',
      clear: '清理日志',
      reset: '重置',
      format: '格式化',
      copy: '复制',
      play: '播放',
      upload: '上传',
    },
    console: {
      title: '控制台',
      clear: '清理',
    },
    editor: {
      js: '编辑器',
      html: '源码',
    },
    debug: {
      preview: '预览',
      dom: '节点',
      data: '数据',
    },
    message: {
      openDevTools: '目前只能通过开发者工具->控制台查看日志',
      modeT4: 'T4模式需配合插件使用, 请先确认已安装插件, 且插件目录为drpy-node, 并启动运行状态',
      modeT3py: 'T3-Py模式需配合python环境使用, 请先确认已安装python环境, 并安装依赖',
      htmlNoUrl: '地址为空',
      ruleNoHtml: '必须先获取源代码',
      ruleNoRule: '规则为空',
      initNoData: '编辑器内容为空',
      initNoDebugId: '请先初始化获取标识',
      listNoT: '参数t为空',
      detailNoIds: '参数ids为空',
      searchNoWd: '参数wd为空',
      playNoFlag: '参数flag为空',
      playNoPlay: '参数play为空',
      proxyNoUrl: '参数url为空',
      proxyUploadNoData: '参数uplpad为空',
      proxyUploadNoJson: '参数不是三元组',
      playerNoUrl: '参数url为空',
    },
  },
  staticFilter: {
    title: '静态筛选',
    source: '写源',
    demo: '示例',
    action: {
      source: '源码',
    },
    rule: {
      class: '大类',
      className: '类名',
      classUrl: '类标识',
      cateExclude: '排除',
      link: '链接',
      filter: '筛选',
      filterInfo: '详细',
      excludeKeys: '键移除',
      try: '执行',
      ctry: '分类执行',
      br: '组合结果',
      tf: '当前筛选',
      ms: '生成筛选列表',
      reg: '正则',
      plot: '剧情',
      area: '地区',
      lang: '语言',
      year: '年份',
      letter: '字母',
      sort: '排序',
    },
    select: {
      debug: '调试',
      source: '源码',
      reset: '重置',
      format: '格式化',
      copy: '复制',
      encode: '编码',
      reg: '正则',
    },
    placeholder: {
      classNameTip: '补充类名(如 电影&剧集)',
      classUrlTip: '补充类标识(如 movie&plot)',
      classParseTip: '选择器(如 list;title;url;match)',
      cateExcludeTip: '排除(如 首页｜留言｜APP)',
      linkTip: '拼接fyclass(如 /id/fyclass.html)',
      filterTip: '选择器(如 body&&.scroll-content) 同一类型用;分割 不同类型换行',
      filterInfoTip: '详细筛选(key;name;type;title;url) 一行对应一个',
    },
    message: {
      htmlNoUrl: '地址为空',
      inputNoClassParse: '参数大类为空',
      sourceFirst: '必须先获取源代码',
      inputNoFilterAndFilterInfo: '参数筛选或筛选详细为空',
      classResultisEmpty: '请先进行大类处理',
    },
  },
  aiBrain: {
    title: 'Ai-创想无限',
    declare: '内容由 AI 大模型生成，请仔细甄别',
    params: 'OpenAI参数',
    server: '接口',
    key: '密钥',
    model: '模型',
    tip1: 'OpenAI官方的APIKey',
    tip2: '免费的APIKey',
    filter: '筛选',
    cssSelector: 'css选择器',
    qa: '问答',
    save: '保存',
    copy: '复制',
    codeSnippet: '代码片段',
    demand: '需求',
    result: '结果',
    instructionLibrary: '指令库',
    fetch: '发送',
    fetchTip: '输入一些需求...',
    codeSnippetTip: '输入html代码片段',
    setting: '设置',
    reason: '推理',
    reasoning: '推理中...',
    reasoned: '已深度思考',
    message: {
      contentEmpty: '内容为空',
      aiParmsEmpty: 'AI参数为空',
    },
    placeholder: {
      send: '给 AI 发送消息',
      input: '请输入内容...',
    },
    platform: {
      title: '平台',
      openai: 'OpenAI',
      deepseek: '深度',
      kimi: '月之暗面',
      free: '免费',
    },
    chat: {
      modelChange: '由 {model} 模型提供服务'
    }
  },
  dataCrypto: {
    nav: {
      hashCalculation: '哈希计算',
      encodeDecode: '加密解密',
      codeConversion: '编码转换',
    },
    input: '输入',
    output: '输出',
    action: '操作',
    generate: '生成',
    encode: '编码',
    decode: '解码',
    message: {
      copySuccess: '复制成功',
      copyFail: '复制失败',
      copyEmpty: '复制内容为空',
      inputEmpty: '输入内容为空',
    },
    codeConversion: {
      unicode: 'UniCode',
      base64: 'Base64',
      html: 'Html',
      url: 'URL',
      hex: 'Hex',
      gzip: 'Gzip',
    },
    hashCalculation: {
      nav: {
        hash: 'Hash',
        hmac: 'Hmac',
      },
      content: '内容',
      key: '密钥',
      hash: {
        md516: 'MD5-16',
        md532: 'MD5-32',
        sha1: 'SHA1',
        sha224: 'SHA224',
        sha256: 'SHA256',
        sha3: 'SHA3',
        sha384: 'SHA384',
        sha512: 'SHA512',
        sha512_224: 'SHA512/224',
        sha512_256: 'SHA512/256',
      },
    },
    encodeDecode: {
      content: '内容',
      rsa: {
        name: 'RSA',
        padding: '填充',
        encode: '编码',
        base64: 'Base64',
        hex: 'Hex',
        oaep: 'RSA-OAEP',
        pkcs1: 'RSAES-PKCS1-V1_5',
        raw: 'RAW',
        key: '证书',
        certType: '证书类型',
        publickKey: '公钥',
        privateKey: '私钥',
        long: '分段',
        normal: '普通',
        section: '分段',
        block: 'Block',
        default: '默认',
        auto: '自动',
      },
      rc4: {
        name: 'RC4',
        key: '密钥',
      },
      aes: {
        name: 'AES',
      },
      des: {
        name: 'DES',
      },
      tripleDES: {
        name: '3DES',
      },
      rabbit: {
        name: 'Rabbit',
      },
      rabbitLegacy: {
        name: 'RabbitLegacy',
      },
      sm4: {
        name: 'SM4',
      },
      crypto: {
        iv: '偏移',
        padding: '填充',
        encode: '编码',
        inputEncode: '输入编码',
        outputEncode: '输出编码',
        mode: '运算',
        key: '密钥',
        base64: 'Base64',
        hex: 'Hex',
        utf8: 'Utf8',
        latin1: 'Latin1',
        cbc: 'CBC',
        ctr: 'CTR',
        cfb: 'CFB',
        ofb: 'OFB',
        ecb: 'ECB',
        pkcs7: 'PKCS7',
        zeroPadding: 'ZeroPadding',
        ansiX923: 'AnsiX923',
        iso10126: 'Iso10126',
        iso97971: 'iso97971',
        noPadding: 'NoPadding',
        message: {
          encodeNotUtf8: '编码不支持utf8作为输出格式',
          decodeNotUtf8: '解码不支持utf8作为输入格式',
        },
      },
    },
  },
  snifferPlay: {
    sniffer: '嗅探',
    player: '播放器',
    play: '播放',
    clear: '清除',
    result: '结果',
    preview: '预览',
    snifferUrl: '嗅探地址',
    playUrl: '播放地址',
    mediaType: '媒体类型',
    initScript: '初始参数',
    runScript: '运行参数',
    customRegex: '正则匹配',
    snifferExclude: '正则排除',
    headers: '请求头',
    message: {
      playerNoUrl: '播放地址为空',
      snifferNoUrl: '嗅探地址为空',
      headersNoJson: '请求头不是字典格式',
      mediaNoType: '媒体类型获取失败, 请手动选择',
    },
    tooltip: {
      playHeaders: '仅Hls支持支持请求头',
    },
  },
  pluginCenter: {
    title: '插件中心',
    server: '服务',
    file: '目录',
    empty: '空空如也',
    info: {
      title: '应用信息',
      author: '作者',
      desc: '描述',
      status: '状态',
      stop: '停止',
      start: '启动',
      error: '出错',
    },
    control: {
      title: '控制中心',
      start: '启动服务',
      stop: '停止服务',
      devtool: '开发者工具',
      upgrade: '升级',
      update: '更新',
      install: '安装',
      uninstall: '卸载',
      uninstallTip: '卸载后将无法使用, 请谨慎操作',
      cancelTip: '当前插件存在未执行完命令, 请稍后',
      devtoolDomAttchErrTip: '打开开发者工具失败, DOM未挂载到页面上',
      loadUiEntryError: '加载入口失败',
    },
    content: {
      title: 'README',
    },
    webview: {
      title: '内容视图',
    },
    installDialog: {
      tip: {
        tip1: '将项目放入指定目录中, 文件名不可有特殊字符(如已放入则忽略)',
        tip2: '输入项目名进行安装(项目文件名)',
      },
      step: '步骤',
      goDir: '前往指定目录',
      confirm: '安装',
    },
  },
  fileDiff: {
    file: '文件',
    origin: '原始',
    target: '目标',
    diff: '对比',
  },
};
