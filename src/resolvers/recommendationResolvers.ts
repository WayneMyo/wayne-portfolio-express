import { createResolver } from "../utils";

const recommendationResolver = createResolver('recommendation', '../src/data/recommendationData.json');

export default [recommendationResolver];
