import useData from "./useData";
// import { type Platform } from "./useGames";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => useData<Platform>("platforms/lists/parents");

export default usePlatform;
