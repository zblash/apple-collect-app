export const AppActions = (function () {
  function dropApples(appleCount: number) {
    return {
      type: "dropApple",
      payload: appleCount,
    };
  }

  function shakeTree() {
    return {
      type: "shakeTree",
    };
  }

  function appleDropped(id: string) {
    return {
      type: "appleDropped",
      payload: id,
    };
  }

  return { dropApples, shakeTree, appleDropped };
})();
