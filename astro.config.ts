import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

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
      plugins: [
        starlightSidebarTopics([
          {
            label: "生活指南",
            icon: "open-book",
            link: "/intro/",
            items: [
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
                label: "学生组织与活动",
                autogenerate: { directory: "organizations" },
              },
              { slug: "contributing" },
            ],
          },
          {
            label: "课程攻略",
            icon: "pencil",
            link: "/course/",
            items: [
              { slug: "course" },
              { slug: "course/course-selection" },
              { slug: "course/exam" },
              { slug: "course/pan" },
              { slug: "life/graduate" },
              {
                label: "公共课程",
                autogenerate: { directory: "course/common" },
                collapsed: true,
              },
              {
                label: "软件学院",
                autogenerate: { directory: "course/se" },
                collapsed: true,
              },
              {
                label: "国际信息与软件学院",
                autogenerate: { directory: "course/ise" },
                collapsed: true,
              },
              {
                label: "集成电路学院",
                autogenerate: { directory: "course/ic" },
                collapsed: true,
              },
              {
                label: "计算机科学与技术学院",
                autogenerate: { directory: "course/cs" },
                collapsed: true,
              },
              {
                label: "求实书院",
                autogenerate: { directory: "course/qiushi" },
                collapsed: true,
              },
              {
                label: "机械工程学院",
                autogenerate: { directory: "course/mechanical-engineering" },
                collapsed: true,
              },
              {
                label: "厚德书院",
                autogenerate: { directory: "course/houde" },
                collapsed: true,
              },
              {
                label: "校外课程",
                autogenerate: { directory: "course/external" },
                collapsed: true,
              },
            ],
          },
          {
            label: "飞跃手册",
            icon: "rocket",
            link: "/leap/",
            items: [
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
            ],
          },
        ]),
      ],
    }),
  ],
});
