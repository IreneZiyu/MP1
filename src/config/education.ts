
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Imperial College London',
      major: 'Transport and Business Management',
      logo: 'college',
      start: '2020',
      end: '2021'
    },
    {
      school: 'University of Liverpool',
      major: 'Economics', 
      logo: 'college',
      start: '2018',
      end: '2020'
    },
    {
      school: 'Xi'an Jiaotong Liverpool University',
      major: 'Econmics',
      logo: 'college',
      start: '2016',
      end: '2018'
    },
  ]
