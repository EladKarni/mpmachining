import { getPayload } from "payload";
import config from "@payload-config";

export const getContactData = async () => {
  const payload = await getPayload({ config });
  const globalData = await payload.findGlobal({
    slug: "contact",
  });
  return globalData;
};
