const homeTextSchema = `
    type HomeText {
        text: String
        animationStrings: [String]
    }

    type Query {
        homeText: HomeText
    }
`;

const socialLinkSchema = `
    type SocialLink {
        key: String
        icon: String
        link: String
        title: String
    }

    type Query {
        socialLink: [SocialLink]
    }
`;

export default [homeTextSchema, socialLinkSchema];
