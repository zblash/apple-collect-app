import { UIHelper } from "../../utils/helpers/ui-helper";

export interface AppStoreState {
  droppingAppleList: string[];
  isTreeShaking: boolean;
  isAppleDroping: boolean;
  basketItemList: string[];
}

const initialState: AppStoreState = {
  droppingAppleList: [],
  isTreeShaking: false,
  isAppleDroping: false,
  basketItemList: [],
};

export default function appReducer(
  state: AppStoreState = initialState,
  action: any,
) {
  switch (action.type) {
    case "shakeTree": {
      //shake tree for drop apples
      return {
        ...state,
        isTreeShaking: true,
      };
    }
    case "dropApple": {
      return {
        ...state,
        isAppleDroping: true,
        //Create Dropable Apples with id
        droppingAppleList: Array.from(Array(action.payload).keys()).map(
          (i) => `droppingApple-${i}-${UIHelper.getRandomInRange(1, 1000)}`,
        ),
      };
    }
    case "appleDropped": {
      //After any apple dropped calculate for will tree still shake and any apple will be appear at basket
      const dropingArr = state.droppingAppleList.filter(
        (apple) => apple !== action.payload,
      );
      return {
        ...state,
        droppingAppleList: dropingArr,
        basketItemList: [...state.basketItemList, action.payload],
        isTreeShaking: dropingArr.length > 0,
      };
    }
    default:
      return state;
  }
}
