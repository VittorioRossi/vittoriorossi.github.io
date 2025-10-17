import { techIcons } from './assets.js'

export const skillCategories = [
  {
    id: 'machine-learning',
    title: 'Machine learning',
    skills: [
      { name: 'Python', icon: techIcons.python },
      { name: 'Tensorflow', icon: techIcons.tensorflow },
      { name: 'Scikit Learn', icon: techIcons.scikit }
    ]
  },
  {
    id: 'backend', 
    title: 'Back-end',
    skills: [
      { name: 'Django', icon: techIcons.django },
      { name: 'Flask', icon: techIcons.flask },
      { name: 'FastApi', icon: techIcons.fastapi }
    ]
  },
  {
    id: 'frontend',
    title: 'Front-end', 
    skills: [
      { name: 'JavaScript', icon: techIcons.javascript },
      { name: 'Vue.js', icon: techIcons.vue },
      { name: 'CSS', icon: techIcons.css }
    ]
  }
]

export default skillCategories