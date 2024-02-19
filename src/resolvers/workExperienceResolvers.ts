import { createResolver } from "../utils";

const experienceResolver = createResolver('experience', '../src/data/workExperience/experienceData.json');
const educationResolver = createResolver('education', '../src/data/workExperience/educationData.json');
const certificateResolver = createResolver('certificate', '../src/data/workExperience/certificateData.json');

export default [experienceResolver, educationResolver, certificateResolver];
