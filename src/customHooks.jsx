import { useQuery } from '@tanstack/react-query';
import { customFetch } from './custom';

export const useFetchGallery = (searchTerm) => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['search', searchTerm], // Añade el término de búsqueda al queryKey para que React Query pueda rastrear cambios en el término de búsqueda
    queryFn: async () => {
      // Construye la URL de búsqueda de manera dinámica utilizando el término de búsqueda
      const { data } = await customFetch.get(
        `?query=${encodeURIComponent(searchTerm)}`
      );
      return data;
    },
  });
  return { isLoading, data, isError };
};
