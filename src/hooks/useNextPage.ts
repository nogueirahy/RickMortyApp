import { useState, useEffect, useCallback } from 'react';

interface IProps {
  callback: (page: number) => void;
  totalPages: number;
}

const DEFAULT_NEXT_PAGE = 2;

export default ({ callback, totalPages }: IProps) => {
  const [page, setPage] = useState(DEFAULT_NEXT_PAGE);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const isEndPage = page === totalPages;

  useEffect(() => {
    if (isEndPage) {
      setCanLoadMore(false);
    }
  }, [page, canLoadMore, isEndPage]);

  return useCallback(() => {
    if (canLoadMore) {
      callback(page);
      setPage(page + 1);
    }
  }, [callback, canLoadMore, page]);
};
