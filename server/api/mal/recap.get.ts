import { fetchMALUser, fetchAllAnimeList } from "../../services/mal.services";
import { filterAnimeByYear } from "../../utils/mal-filter";
import { calculateRecapStats } from "../../utils/mal-calculate";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "mal_access_token");

  // Default
  const year = "2025";
  // const year = getQuery(event).year || "all-time";

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Not authenticated",
    });
  }

  try {
    type MALUser = {
      name: string;
      picture: string;
    };

    const [userRaw, animeList] = await Promise.all([
      fetchMALUser(token),
      fetchAllAnimeList(token),
    ]);

    const user = userRaw as MALUser;

    const filtered = filterAnimeByYear(animeList, String(year));
    const stats = calculateRecapStats(filtered);

    return {
      meta: {
        mode: year,
      },
      user: {
        name: user.name,
        avatar: user.picture,
      },
      stats,
    };
  } catch (err: any) {
    if (err?.response?.status === 401) {
      throw createError({
        statusCode: 401,
        statusMessage: "Token expired",
      });
    }

    throw createError({
      statusCode: 502,
      statusMessage: "MyAnimeList data not found",
    });
  }
});
