export const useRouter = () => {
  const push = (path: string) => {
    console.log(path);
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return { push };
};
