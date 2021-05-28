module.exports = env => {
  const dev = env.dev ? 'dev' : 'product';
  console.log(`🛠️  running ${dev} Mode using ./webpack/webpack.${dev}.js 🛠️`);
  return require(`./config/webpack.${dev}.js`);
};
