import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://man.naosi.org",
  redirects: {
    "/course/curricula-variable": "/course/course-selection/",
    "/course/course-selection-strategy": "/course/course-selection/",
    "/study": "/services/",
    "/campus/development": "/kaifaqu/",
    "/campus/kaifaqu": "/kaifaqu/",
    "/campus/lingshui": "/lingshui/",
    "/campus/panjin": "/panjin/",
  },
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
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/NAOSI-DLUT/dut-manual",
        },
        { icon: "rocket", label: "NAOSI", href: "https://naosi.org" },
      ],
      // Each group below matches a source directory in src/content/docs.
      // Article names come from title; nested directories are grouped in place.
      sidebar: [
        { slug: "intro" },
        {
          label: "新生入学",
          autogenerate: { directory: "freshman" },
        },
        {
          label: "校园服务",
          items: [
            { slug: "services" },
            { slug: "life/service/network" },
            { slug: "life/service/library" },
            { slug: "life/service/proof" },
            { slug: "life/service/verify" },
            { slug: "life/service/feedback" },
            {
              label: "资助奖励",
              autogenerate: { directory: "services/rewards" },
            },
          ],
        },
        {
          label: "凌水校区",
          autogenerate: { directory: "lingshui" },
        },
        {
          label: "开发区校区",
          autogenerate: { directory: "kaifaqu" },
        },
        {
          label: "盘锦校区",
          autogenerate: { directory: "panjin" },
        },
        {
          label: "课程攻略",
          items: [
            { slug: "course" },
            { slug: "course/course-selection" },
            { slug: "course/exam" },
            { slug: "course/pan" },
            { slug: "life/graduate" },
            {
              label: "公共基础与通识课程",
              autogenerate: { directory: "course/common" },
            },
            {
              label: "求实书院",
              autogenerate: { directory: "course/qiushi" },
            },
            {
              label: "软件学院",
              autogenerate: { directory: "course/se" },
            },
            {
              label: "国际信息与软件学院",
              autogenerate: { directory: "course/ise" },
            },
          ],
        },
        {
          label: "学生组织与活动",
          autogenerate: { directory: "organizations" },
        },
        {
          label: "升学与就业（飞跃手册）",
          items: [
            { slug: "leap" },
            { slug: "leap/competition" },
            { slug: "leap/research" },
            { slug: "leap/notice" },
            {
              label: "专业分流与转专业",
              autogenerate: { directory: "leap/major" },
            },
            {
              label: "保研考研",
              autogenerate: { directory: "leap/postgraduate" },
            },
            {
              label: "出国留学",
              autogenerate: { directory: "leap/aboard" },
            },
            {
              label: "实习就业",
              autogenerate: { directory: "leap/career" },
            },
          ],
        },
        { slug: "contributing" },
      ],
    }),
  ],
});
