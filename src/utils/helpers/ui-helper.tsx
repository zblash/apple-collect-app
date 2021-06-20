export interface PositionProps {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export const UIHelper = (function () {
  function findPathPos(pathSelector) {
    const element = document.querySelector(pathSelector);
    const elementRect = element.getBoundingClientRect();

    return Object.freeze({
      top: elementRect.top,
      bottom: elementRect.bottom,
      left: elementRect.left,
      right: elementRect.right,
    });
  }

  function combinePathPositions(...pathSelectors) {
    return pathSelectors
      .map((pathSelector) => findPathPos(pathSelector))
      .reduce((el, i) => {
        return {
          top: el.top,
          bottom: el.bottom,
          left: el.left < i.left ? el.left : i.left,
          right: el.right > i.right ? el.right : i.right,
        };
      });
  }

  function getRandomInRange(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  return { findPathPos, combinePathPositions, getRandomInRange };
})();
