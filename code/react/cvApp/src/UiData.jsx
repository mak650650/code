import { v4 as uuidv4 } from 'uuid';

const arr = [
    [   
        {sectionLable:"General info"},
        {
            id: uuidv4(),
            label:"Name",
            placeholder:"Enter your name",
            type:"text"
        },
        {
            id: uuidv4(),
            label:"Email",
            placeholder:"Enter your email address",
            type:"text"
        },
        {
            id: uuidv4(),
            label:"Phone number",
            placeholder:"Enter your phone number",
            type:"text"
        },
      
    ],
    [   
        {sectionLable:"Educational experience"},
        {
            id: uuidv4(),
            label:"School name",
            placeholder:"Enter your school name",
            type:"text"
        },
        {
            id: uuidv4(),
            label:"Title of study",
            placeholder:"Enter your title of study",
            type:"text"
        },
        {
            id: uuidv4(),
            label:"Date of study",
            placeholder:"Enter your date of study",
            type:"text"
        },
      
        ],
    [
        {sectionLable:"Practical experience"},
        {
            id: uuidv4(),
            label:"Company name",
            placeholder:"Enter your company name",
            type:"text"
        },
        {
            id: uuidv4(),
            label:"Position/Title",
            placeholder:"Enter your position in company",
            type:"text"
        },
        {
            id: uuidv4(),
            label:"Responsibility",
            placeholder:"Enter your main responsibility of your job",
            type:"text"
        },
        {
            id: uuidv4(),
            label:"Timeline",
            placeholder:"Enter your job timeline",
            type:"date"
        },
    ],
  ]
export default arr