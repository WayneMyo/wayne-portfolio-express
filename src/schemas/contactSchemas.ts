const contactTextSchema = `
    type ContactText {
        text: String
    }

    type Query {
        contactText: ContactText
    }
`;

const contactDetailSchema = `
    type ContactDetail {
        icon: String
        title: String
        text: String
        link: String
    }

    type Query {
        contactDetail: [ContactDetail]
    }
`;

export default [contactTextSchema, contactDetailSchema];