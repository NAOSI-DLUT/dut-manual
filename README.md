# DUTManual

大工人的一站式生存指南

## 贡献指南

- 请在 `src/content/docs` 目录下创建和修改你的 Markdown 文档。
- 建议编写文档时参考[中文排版指南](https://github.com/aaranxu/chinese-copywriting-guidelines)。可以使用 VSCode 的 Prettier 插件自动格式化文档。
- 所有文件的文件名都应该是简短的英文，并使用 kebab-case 命名法。使用中文会导致较长的 URL 链接。
- 图片请放置在 `src/assets/images` 内，Astro 会自动处理和压缩。引用时直接使用相对路径即可，例如 `![image](../../../assets/images/image.jpg)`。
- commit 消息不做强制要求，但请尽量使用有意义的 commit 消息，并尽量与其他人的风格保持一致。

本项目使用 [Astro](https://astro.build) 和 [Starlight](https://starlight.astro.build) 构建。文档内容使用 Markdown 和 MDX 编写。

### 组件用法

```mdx
import { Aside } from "@astrojs/starlight/components";

<Aside>这是一条提示信息。</Aside>
```

更多组件和用法请参阅 [使用组件 | Starlight](https://starlight.astro.build/zh-cn/components/using-components/)。

## 特别鸣谢

[![contributors](https://contrib.rocks/image?repo=NAOSI-DLUT/dut-manual&anon=1)](https://github.com/NAOSI-DLUT/dut-manual/graphs/contributors)

以及屏幕前的您！
