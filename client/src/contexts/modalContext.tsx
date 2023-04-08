import { ReactNode, createContext, useReducer } from "react";

interface StateType {
  title: string;
  content: React.ReactElement;
  buttons: {
    cancel?: { label: string };
    confirm?: {
      label: string;
      onClick: (data: any) => void;
    };
  };
}

interface InitialStateType extends StateType {
  isOpen: boolean;
}

const initialState: InitialStateType = {
  isOpen: false,
  title: "",
  content: <></>,
  buttons: {},
};

type ActionType =
  | {
      type: "open";
      payload: StateType;
    }
  | {
      type: "close";
    };

const reducer = (
  state: InitialStateType,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "open":
      // const {title, content, buttons} = action.payload
      return {
        ...state,
        ...action.payload,
        isOpen: true,
      };
    case "close":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
};

export const ModalContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
