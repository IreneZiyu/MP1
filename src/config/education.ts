
// education 
export type EducationItemType = {
    school: string
    major: string
    department: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '帝国理工学院',
      major: '交通经济学',
      logo: 'college',
        department: '土木工程与环境学院',
      start: '2020',
      end: '2021'
    },
    {
      school: 'University of Chicago',
      major: 'Computer Science',
      logo: 'college',
      start: '2013',
      end: '2015'
    },
    {
      school: 'BUPT',
      major: 'Automation',
      logo: 'college',
      start: '2009',
      end: '2013'
    },
  ]
