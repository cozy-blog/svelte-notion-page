module.exports = async (page, scenario, viewport, isReference, browserContext) => {
  await import('./loadCookies')(browserContext, scenario);
};
