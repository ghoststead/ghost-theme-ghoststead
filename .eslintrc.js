module.exports = {
    env: {
        browser: true,
    },
    globals: {
        jarallax: true,
        BigPicture: true,
        EasyPieChart: true,
        GhostFinder: true,
        Isotope: true,
        particlesJS: true,
        Swiper: true,
        Timer: true,
        module: true,
        define: true
    },
    extends: 'eslint:recommended',
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    }
};
