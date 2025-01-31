import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useFetch = <T, ParamsT = object>(
  key: QueryKey,
  options?: UseQueryOptions<T, ParamsT>,
) => {
  return useQuery({
    queryKey: key,
    ...options,
  });
};
