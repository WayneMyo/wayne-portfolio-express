import { createResolver } from "../utils";

const aboutTextResolver = createResolver('aboutText', '../src/data/about/aboutTextData.json');
const counterResolver = createResolver('counter', '../src/data/about/counterData.json');
const featureSkillResolver = createResolver('featureSkill', '../src/data/about/featureSkillData.json');

export default [aboutTextResolver, counterResolver, featureSkillResolver];
