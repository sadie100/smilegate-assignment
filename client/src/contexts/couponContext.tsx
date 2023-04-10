import { ReactNode, createContext, useReducer } from "react";

interface ICoupon {
  name: string;
  phone: string;
  couponId: string;
}

interface InitialStateType {
  data: ICoupon[];
  search: string;
}

const initialState: InitialStateType = {
  data: [],
  search: "",
};

type ActionType =
  | {
      type: "setSearch";
      payload: string;
    }
  | {
      type: "setData";
      payload: ICoupon[];
    };

const reducer = (
  state: InitialStateType,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "setSearch":
      return {
        ...state,
        search: action.payload,
      };
    case "setData":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
};

export const CouponContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const CouponProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CouponContext.Provider value={{ state, dispatch }}>
      {children}
    </CouponContext.Provider>
  );
};
