import { createResolver } from "../utils";

const homeTextResolver = createResolver('homeText', '../src/data/home/homeTextData.json');
const socialLinkResolver = createResolver('socialLink', '../src/data/home/socialLinkData.json');

export default [homeTextResolver, socialLinkResolver];
