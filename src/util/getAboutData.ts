import { getPayload } from "payload";
import config from "@payload-config";

export const getAboutData = async () => {
  const payload = await getPayload({ config });
  const globalData = await payload.findGlobal({
    slug: "about",
  });
  return globalData;
};