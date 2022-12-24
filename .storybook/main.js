module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  core: {
    builder: "webpack5"
  }
}