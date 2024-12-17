import { getPayload } from "payload";
import config from "@payload-config";

export const getGlobalData = async (globalSlug: 'about' | 'hero') => {
    const payload = await getPayload({ config });
    const globalData = await payload.findGlobal({
        slug: globalSlug,
    });
    return globalData;
}