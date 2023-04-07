import { ReactNode, createContext, useReducer } from "react";

interface InitialStateType {
  isOpen: boolean;
  modalId: string;
}

const initialState: InitialStateType = {
  isOpen: false,
  modalId: "",
};

type ActionType =
  | {
      type: "open";
      payload: string;
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
      return {
        ...state,
        isOpen: true,
        modalId: action.payload,
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
