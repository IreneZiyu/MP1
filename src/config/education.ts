
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
      department: '土木工程与环境学院',  
      logo: 'college',
      start: '2020',
      end: '2021'
    },
    {
      school: '利物浦大学',
      major: '经济学',
      department: '商学院', 
      logo: 'college',
      start: '2018',
      end: '2020'
    },
    {
      school: 'BUPT',
      major: 'Automation',
      department: '商学院',
      logo: 'college',
      start: '2009',
      end: '2013'
    },
  ]
