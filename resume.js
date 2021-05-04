const axios = require('axios')

const CODE = 'JrSE'

const ELIJAH_SCIAMMAS_RESUME = {
  basics: {
    name: 'Elijah Sciammas',
    label: 'FullStack Software Engineer',
    picture: '',
    email: 'eli.sciammas@gmail.com',
    phone: '(925) 352-9036',
    website: '',
    summary:
      'Fullstack software engineer born from an obsession with decoding and translating ancient Chinese literature. Skilled in React, Redux, Angular, and beginning a journey into the depths of Python. Currently building a Chinese dictionary NPM Package. ',
    location: {
      address: '6 Delware Pl',
      postalCode: 'MA 02135',
      city: 'Boston',
      countryCode: 'US',
      region: 'Massachussets'
    },
    profiles: [
      {
        network: 'LinkedIn',
        username: 'elijahsciam',
        url: 'https://www.linkedin.com/in/elijahsciam/'
      },
      {
        network: 'GitHub',
        username: 'elijahsciam',
        url: 'https://github.com/elijahsciam'
      }
    ]
  },
  work: [
    {
      company: 'Chint Power Systems Americas',
      position: 'Jr. Analyst',
      location: 'Pleasanton, California, USA',
      startDate: '2019-10-25',
      endDate: '2021-01-09',
      summary:
        'Improved Salesforce efficiency by utilizing the Process Builder to customize quote generation to auto-populate product and price fields \n Key person in building a dynamic string sizer tool using Microsoft Excel VBA code, enabling customers to efficiently receive crucial data about their purchased products \n Translated technical documentation (Mandarin to English) and supervised product development request tracker, requiring frequent collaboration with the manufacturing plant in Shanghai, China \n Generated 100+ reports analyzing details of sales revenue, product development, and industry trends...'
    },
    {
      company: 'Young Mind Crayons Club',
      location: 'Chengdu, Sichuan, China',
      position: 'English Teacher',
      startDate: '2017-09-01',
      endDate: '2019-07-31',
      summary:
        'Instructed 3 English classes and 2 private tutoring sessions, children aged 4-11 years old \n Earned highest student retention rate in school (98%)'
    }
  ],
  education: [
    {
      institution: 'FullStack Academy',
      area: 'Software Development',
      startDate: '2021-01-11',
      endDate: '2021-04-09',
      gpa: 'N/A'
    },
    {
      institution: 'Sichuan Unviersity',
      area: 'Mandarin Chinese, Classical Chinese',
      startDate: '2017-08',
      gpa: '3.87'
    },
    {
      institution: 'Gustavus Adolphus College',
      area: 'Communication Studies',
      startDate: '2013-08',
      endDate: '2017-05',
      gpa: '3.355'
    }
  ],
  projects: [
    {
      name: 'rooted',
      releaseDate: '2021-04-09',
      website: 'https://rooted-4da8a.web.app/',
      summary:
        'During a three week sprint in a team of four, we developed an app focused on Indgenious land acknowledgment and language learning tailored to the user’s geolocation. I played a major role in developing data visualization and tackling database scalability.'
    }
  ],
  skills: [
    {
      name: 'JavaScript',
      libraries: [
        'React',
        'Redux',
        'Node',
        'Express',
        'TypeScript',
        'Angular',
        'TDD (Mocha, Chai, Jasmine)'
      ]
    },
    {
      name: 'Database/Industry Tools',
      libraries: [
        'PostgreSQL',
        'Cloud Firestore',
        'Git',
        'GitHub',
        'Tomcat',
        'MongoDB',
        'MySQL'
      ]
    },
    {
      name: 'Tools/Software',
      libraries: [
        'Adobe Premiere',
        'Adobe InDesign',
        'SalesForce',
        'SAP Business',
        'Microsoft Office'
      ]
    }
  ],
  languages: [
    {
      language: 'English',
      fluency: 'Native speaker'
    },
    {
      language: 'Mandarin Chinese',
      fluency: 'Business Proficiency, 8+ years experience'
    }
  ]
}

async function lala() {
  await axios
    .post(
      `https://jobs.funraise.dev/job/${CODE}/resume`,
      ELIJAH_SCIAMMAS_RESUME
    )
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
}
