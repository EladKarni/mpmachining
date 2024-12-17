import { getPayload } from "payload";
import config from "@payload-config";

export const getFeaturedData = async () => {
  const payload = await getPayload({ config });
  const globalData = await payload.findGlobal({
    slug: "features",
  });
  return globalData;
};
