# DUTManual

[![Netlify Status](https://api.netlify.com/api/v1/badges/ec787c93-a097-4516-892d-a9afdab8cee4/deploy-status)](https://app.netlify.com/projects/dutmanual/deploys)

大工人的一站式生存指南

## 贡献指南

本项目使用 [Astro](https://astro.build) 和 [Starlight](https://starlight.astro.build) 构建。文档内容使用 Markdown 和 MDX 编写。

### 文档规范

- 请在 `src/content/docs` 目录下创建和修改你的 Markdown 文档。
- 文章目录项统一使用文档开头的 `title`，修改文章名称时只需修改 `title`；不要在导航配置或文档的 `sidebar.label` 中另设显示名称。导航中的 `label` 仅用于分类分组。
- 建议编写文档时参考[中文排版指南](https://github.com/aaranxu/chinese-copywriting-guidelines)。可以使用 VSCode 的 Prettier 插件自动格式化文档。
- 所有文件的文件名都应该是简短的英文，并使用 kebab-case 命名法。使用中文会导致较长的 URL 链接。
- 图片请放置在 `src/assets/images` 内，Astro 会自动处理和压缩。引用时直接使用相对路径即可，例如 `![image](../../../assets/images/image.jpg)`。
- commit 消息不做强制要求，但请尽量使用有意义的 commit 消息，并尽量与其他人的风格保持一致。

### 内容目录

| 源文件目录 | 内容归属 |
| --- | --- |
| `src/content/docs/freshman/` | 入学导读、防诈与新生常见问题 |
| `src/content/docs/course/` | 选课、考试、课程资料、各开课单位的课程攻略及毕业离校 |
| `src/content/docs/services/` | 校园网络、图书馆、证明证件、论文查重及投诉报修 |
| `src/content/docs/services/rewards/` | 资助奖励 |
| `src/content/docs/lingshui/` | 凌水校区的住宿、餐饮、交通与生活设施等 |
| `src/content/docs/kaifaqu/` | 开发区校区的住宿、餐饮、交通与生活设施等 |
| `src/content/docs/panjin/` | 盘锦校区的住宿、餐饮、交通与生活设施等 |
| `src/content/docs/organizations/` | 学生组织、社团及活动 |
| `src/content/docs/leap/` | 分流转专业、竞赛科研、考研留学与就业 |

网站目录与源文件夹逐层对应：每篇文章只出现在所属文件夹对应的章节中，不再跨章节引用同一篇文章作为目录项。三个校区各自对应顶层文件夹和独立大章；`course/` 下的开课单位及其他子文件夹，在网站目录中也保持相同的嵌套关系。校区对照导航放在 `freshman/campuses.mdx` 中，课程攻略排在盘锦校区之后。

文章显示名取自 `title`；顺序可通过 frontmatter 的 `sidebar.order` 调整。部分旧文章使用 `slug` 保留原有网址，因此网址中仍可能出现旧的 `life/` 路径，内容归属以实际文件位置为准。旧的 `/study/` 入口会跳转到校园服务。

### 组件用法

```mdx
import { Aside } from "@astrojs/starlight/components";

<Aside>这是一条提示信息。</Aside>
```

更多组件和用法请参阅 [使用组件 | Starlight](https://starlight.astro.build/zh-cn/components/using-components/)。

### 本地预览

您需要首先安装 [Node.js](https://nodejs.org/zh-cn) 环境。

本项目使用 npm 作为包管理器。在项目根目录下运行以下命令安装依赖：

```bash
npm install
```

最后，运行以下命令启动本地服务器：

```bash
npm run dev
```

## 特别鸣谢

[![contributors](https://contrib.rocks/image?repo=NAOSI-DLUT/dut-manual)](https://github.com/NAOSI-DLUT/dut-manual/graphs/contributors)

以及屏幕前的您！
