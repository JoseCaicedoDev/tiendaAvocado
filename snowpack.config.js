/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: 'git@github.com:JoseCaicedoDev/tiendaAvocado.git',
  },
}
