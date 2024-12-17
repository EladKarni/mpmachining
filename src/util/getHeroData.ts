import { getPayload } from "payload";
import config from "@payload-config";

export const getHeroData = async () => {
  const payload = await getPayload({ config });
  const globalData = await payload.findGlobal({
    slug: "hero",
  });
  return globalData;
};
