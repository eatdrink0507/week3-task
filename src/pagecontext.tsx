import { createContext, useContext } from 'react';

export type basic = {
  detailData: object;
  setDetailData: (c: object) => void;
};

export const PageContext = createContext<basic>({
  detailData: {},
  setDetailData: () => {},
});

export const usePageContext = () => useContext(PageContext);
