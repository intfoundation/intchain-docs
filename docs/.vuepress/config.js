const glob = require("glob");
const markdownIt = require("markdown-it");
const meta = require("markdown-it-meta");
const fs = require("fs");
const _ = require("lodash");

const sidebar = (directory, array) => {
    return array.map(i => {
        const children = _.sortBy(
            glob
                .sync(`./${directory}/${i[1]}/*.md`)
                .map(path => {
                    const md = new markdownIt();
                    const file = fs.readFileSync(path, "utf8");
                    md.use(meta);
                    md.render(file);
                    const order = md.meta.order;
                    return { path, order };
                })
                .filter(f => f.order !== false),
            ["order", "path"]
        )
            .map(f => f.path)
            .filter(f => !f.match("README"));

        return {
            title: i[0],
            children
        };
    });
};

module.exports = {
    base: "/",
    head: [
        ["link", { rel: "icon", href: "public/int.ico"}]
    ],
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ],
    locales: {
        "/": {
            lang: "en-US",
            title: "INT Chain 4.0 Documents",
            description: "INT Chain 4.0 Documents",
        },
        "/zh/": {
            lang: "简体中文",
            title: "INT Chain 4.0 文档",
            description: "INT Chain 4.0 文档",
        },
        "/fr/": {
            lang: "fr-FR",
            title: "Documentation INT Chain 4.0",
            description: "Documentation INT Chain 4.0",
        }
    },
    themeConfig: {
        repo: "intfoundation/intchain-docs",
        docsDir: "docs",
        editLinks: true,
        docsBranch: "master",
        editLinkText: 'Help us improve this page!',
        locales: {
            "/": {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Help us improve this page!',
                nav: [
                    {
                        text: 'Back to INT Chain',
                        link: 'https://intchain.io'
                    }
                ],
                sidebar: sidebar("", [
                    ["Getting Started", "getting-started"],
                    ["Basic Concepts", "concepts"],
                    ["Common Features", "features"],
                    ["Using INTChain", "using-intchain"],
                    ["JSON RPC", "json-rpc"]
                ])
            },
            "/zh/": {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '帮助我们完善此文档',
                nav: [{
                    text: 'INT Chain 官网',
                    link: 'https://intchain.io'
                }],
                sidebar: sidebar("", [
                    ["快速开始", "/zh/getting-started"]
                ])
            },
            "/fr/": {
                selectText: 'Langues',
                label: 'Français',
                editLinkText: 'Aidez-nous à améliorer cette page !',
                nav: [
                    {
                        text: 'Site INT Chain',
                        link: 'https://intchain.io'
                    }
                ],
                sidebar: sidebar("", [
                    ["Pour Commencer", "/fr/getting-started"],
                    ["Concepts de Base", "/fr/concepts"],
                    ["Généralités", "/fr/features"],
                    ["Utiliser INTChain", "/fr/using-intchain"],
                    ["JSON RPC", "/fr/json-rpc"]
                ])
            }
        },
    }
};
