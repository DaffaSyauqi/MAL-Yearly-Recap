export const useJikan = () => {
  const baseUrl = process.env.JIKAN_API_URL;

  const getAnimeByYear = async (year: number) => {
    return await $fetch(`${baseUrl}/anime`, {
      query: {
        start_date: `${year}-01-01`,
        end_date: `${year}-12-31`,
        limit: 25,
      },
    });
  };

  return { getAnimeByYear };
};
