import axios, { AxiosError } from "axios";
import { ReactNode, createContext, useEffect, useReducer } from "react";

interface ICoupon {
  name: string;
  phone: string;
  couponId: string;
  createdAtFormat: string;
}

interface InitialStateType {
  data: ICoupon[];
  search: string;
  category: "name" | "phone" | "*";
  currentPage: number;
  totalPage: number;
}

const initialState: InitialStateType = {
  data: [],
  search: "",
  category: "*",
  currentPage: 1,
  totalPage: 1,
};

type ActionType =
  | {
      type: "SEARCH_UPDATE";
      payload: string;
    }
  | {
      type: "DATA_UPDATE";
      payload: ICoupon[];
    }
  | {
      type: "CATEGORY_UPDATE";
      payload: "name" | "phone" | "*";
    }
  | { type: "CURPAGE_UPDATE"; payload: number }
  | { type: "TOTALPAGE_UPDATE"; payload: number };

const reducer = (
  state: InitialStateType,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "SEARCH_UPDATE":
      return {
        ...state,
        search: action.payload,
      };
    case "DATA_UPDATE":
      return {
        ...state,
        data: action.payload,
      };
    case "CATEGORY_UPDATE":
      return {
        ...state,
        category: action.payload,
      };
    case "CURPAGE_UPDATE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "TOTALPAGE_UPDATE":
      return {
        ...state,
        totalPage: action.payload,
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
  const { search, category, currentPage } = state;

  const handleSearch = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/search", {
        params: {
          search,
          category,
          currentPage,
        },
      });
      const { docs, totalPages } = res.data;
      if (res.status === 200) {
        dispatch({ type: "DATA_UPDATE", payload: docs });
        dispatch({ type: "TOTALPAGE_UPDATE", payload: totalPages });
      }
    } catch (e: unknown) {
      if (
        e instanceof AxiosError &&
        e.response &&
        Object.keys(e.response.data).length > 0
      ) {
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
  }, [search, currentPage]);

  return (
    <CouponContext.Provider value={{ state, dispatch }}>
      {children}
    </CouponContext.Provider>
  );
};
