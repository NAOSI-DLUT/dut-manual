import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
  site: "https://man.naosi.org",
  integrations: [
    starlight({
      title: "DUTManual",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      components: {
        Footer: "./src/components/Footer.astro",
      },
      editLink: {
        baseUrl: "https://github.com/NAOSI-DLUT/dut-manual/edit/main/",
      },
      lastUpdated: true,
      social: {
        github: "https://github.com/NAOSI-DLUT/dut-manual",
        discourse: "javascript:void(0)",
      },
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: "horizontalList",
          },
        }),
      ],
      sidebar: [
        {
          label: "生活指南",
          collapsed: true,
          items: [
            { slug: "intro" },
            {
              label: "新生入学",
              autogenerate: { directory: "life/freshman" },
            },
            {
              label: "校园生活",
              autogenerate: { directory: "life/campus" },
            },
            {
              label: "资助奖励",
              autogenerate: { directory: "life/rewards" },
            },
            {
              label: "校园服务",
              autogenerate: { directory: "life/service" },
            },
            { slug: "life/graduate" },
          ],
        },
        {
          label: "课程攻略",
          items: [
            { slug: "course" },
            { slug: "course/pan" },
            { slug: "course/curricula-variable" },
            { slug: "course/exam" },
            {
              label: "公共基础与通识课程",
              autogenerate: { directory: "course/common" },
            },
            { label: "软件学院", autogenerate: { directory: "course/se" } },
            {
              label: "国际信息与软件学院",
              autogenerate: { directory: "course/ise" },
            },
            { label: "集成电路学院", autogenerate: { directory: "course/ic" } },
          ],
        },
        {
          label: "飞跃手册",
          items: [
            { slug: "leap" },
            {
              label: "专业分流与转专业",
              autogenerate: { directory: "leap/major" },
            },
            {
              slug: "leap/competition",
            },
            {
              slug: "leap/research",
            },
            {
              label: "保研考研",
              autogenerate: { directory: "leap/postgraduate" },
            },
            { label: "出国留学", autogenerate: { directory: "leap/abroad" } },
            { label: "实习就业", autogenerate: { directory: "leap/career" } },
          ],
        },
      ],
    }),
  ],
});
