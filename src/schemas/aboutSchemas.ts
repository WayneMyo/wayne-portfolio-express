const aboutTextSchema = `
    type AboutText {
        text: String
    }

    type Query {
        aboutText: AboutText
    }
`;

const counterSchema = `
    type Counter {
        icon: String
        title: String
        count: Int
    }

    type Query {
        counter: [Counter]
    }
`

const featureSkillSchema = `
    type featureSkill {
        icon: String
        title: String
        text: String
    }

    type Query {
        featureSkill: [featureSkill]
    }
`
export default [aboutTextSchema, counterSchema, featureSkillSchema];
