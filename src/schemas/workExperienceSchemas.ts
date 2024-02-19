const experienceSchema = `
    type Experience {
        title: String
        date: String
        description: String
    }

    type Query {
        experience: [Experience]
    }
`;

const educationSchema = `
    type Education {
        title: String
        date: String
        description: String
    }

    type Query {
        education: [Education]
    }
`;

const certificateSchema = `
    type Certificate {
        title: String
        img: String
        type: String
    }

    type Query {
        certificate: [Certificate]
    }
`;

export default [experienceSchema, educationSchema, certificateSchema];
