/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://taskin.studio',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ['/admin/*'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://taskin.studio/server-sitemap.xml',
        ],
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/*'],
            },
        ],
    },
}; 