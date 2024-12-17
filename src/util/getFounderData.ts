import { getPayload } from "payload";
import config from "@payload-config";

export const getFounderData = async () => {
  const payload = await getPayload({ config });
  const globalData = await payload.findGlobal({
    slug: "founder",
  });
  return globalData;
};
