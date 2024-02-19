const recommendationSchema = `
    type Recommendation {
        img: String
        name: String
        designation: String
        say: [String]
    }

    type Query {
        recommendation: [Recommendation]
    }
`;

export default [recommendationSchema];
