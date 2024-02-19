import { createResolver } from "../utils";

const contactTextResolver = createResolver('contactText', '../src/data/contact/contactTextData.json');
const contactDetailResolver = createResolver('contactDetail', '../src/data/contact/contactDetailData.json');

export default [contactTextResolver, contactDetailResolver];
