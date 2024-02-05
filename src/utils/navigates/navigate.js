export const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    return path;
};
  