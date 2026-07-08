# 🧰 我的工具箱 - 使用指南

> 收录优质AI工具，助力效率提升

## 🎯 功能特性

- 🔍 **实时搜索** - 输入关键词即时筛选工具
- 📂 **分类浏览** - 6大AI工具分类：对话、图像、写作、编程、视频、音频
- 📱 **响应式设计** - 完美适配电脑、手机、平板
- ⚡ **轻量快速** - 纯静态页面，秒开无压力
- 🎨 **美观简洁** - 深色护眼主题

## 📂 项目结构

```
my-tools/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 交互脚本
├── data/
│   └── tools.json      # ⭐ 工具数据配置文件
└── docs/
    └── README.md       # 本使用指南
```

## ✏️ 如何添加/修改工具

编辑 `data/tools.json` 文件即可增删AI工具。

### 配置说明

```json
{
  "meta": {
    "siteName": "网站名称",
    "siteDescription": "网站描述",
    "author": "作者名"
  },
  "categories": [
    {
      "id": "chatbot",           // 分类ID（唯一）
      "name": "AI对话",           // 分类名称
      "icon": "💬",               // 分类图标（emoji）
      "description": "智能对话助手", // 分类描述
      "tools": [
        {
          "name": "ChatGPT",      // 工具名称
          "url": "https://...",   // ⭐ 工具网址
          "description": "描述",   // 工具简介
          "icon": "https://..."   // 工具图标（可选）
        }
      ]
    }
  ]
}
```

### 添加新工具步骤

1. 打开 `data/tools.json`
2. 找到对应分类
3. 在 `tools` 数组中添加新对象
4. 保存文件，刷新页面即可看到更新

### 添加新分类

1. 在 `categories` 数组中新增一个分类对象
2. 设置唯一ID、名称、图标、描述
3. 在该分类下添加 `tools` 数组

## 🚀 部署方式

### 方式1：GitHub Pages（免费，推荐）

1. 创建 GitHub 仓库
2. 上传所有文件到仓库
3. 进入 Settings → Pages
4. Source 选择 `main` 分支和 `/ (root)`
5. 等待部署完成，访问 `https://你的用户名.github.io/仓库名`

### 方式2：Vercel（免费，推荐）

1. 注册 [Vercel](https://vercel.com)
2. Import 你的 GitHub 仓库
3. 无需任何配置，直接 Deploy
4. 获得免费域名访问

### 方式3：直接打开本地预览

直接在浏览器打开 `index.html` 文件即可预览。

> ⚠️ 注意：本地打开可能无法加载 `data/tools.json`（跨域限制），
> 建议使用本地服务器预览。

**使用 Python 启动本地服务器：**
```bash
cd D:\projects\my-tools
python -m http.server 8080
# 然后访问 http://localhost:8080
```

## 🔧 自定义修改

### 修改网站标题

编辑 `data/tools.json` 中的 `meta.siteName` 和 `meta.siteDescription`

### 修改颜色主题

编辑 `styles.css` 文件顶部的 `:root` CSS 变量：
- `--primary`: 主色调
- `--bg-dark`: 背景色
- `--text-primary`: 主文字色

### 修改背景渐变

编辑 `styles.css` 中的 `.bg-gradient` 选择器

## 📝 注意事项

1. **图标加载**：如果工具图标链接失效，会自动显示🤖占位符
2. **搜索功能**：搜索是实时进行的，输入即可看到结果
3. **分类筛选**：点击分类按钮可按类型筛选
4. **外链安全**：所有工具链接都是 `target="_blank"` 且加了 `rel="noopener noreferrer"`

## 💡 常见问题

**Q: 为什么本地打开 index.html 看不到工具？**
A: 浏览器安全限制不允许直接读取本地 JSON 文件。请使用本地服务器（见上方）或部署到 GitHub Pages/Vercel。

**Q: 如何删除一个工具？**
A: 在 `data/tools.json` 中找到对应工具，删除整个对象即可。

**Q: 如何修改分类顺序？**
A: 直接调整 `categories` 数组中对象的顺序即可。

---

Made with ❤️ by libaofeng
