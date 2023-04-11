import axios, { AxiosError } from "axios";
import { ReactNode, createContext, useEffect, useReducer } from "react";

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

  const handleSearch = async () => {
    try {
      console.log("요청");
      const res = await axios.get("http://localhost:8000/api/search", {
        params: state.search,
      });
      console.log("결과", res);
      const datas = res.data;
      if (res.status === 200) {
        dispatch({ type: "setData", payload: datas });
      }
    } catch (e: unknown) {
      if (e instanceof AxiosError && e.response && e.response.data) {
        alert(e.response.data);
      } else {
        console.log(e);
        alert("오류가 발생했습니다.");
      }
    }
  };

  useEffect(() => {
    (async () => {
      await handleSearch();
    })();
  }, [state.search]);

  return (
    <CouponContext.Provider value={{ state, dispatch }}>
      {children}
    </CouponContext.Provider>
  );
};
