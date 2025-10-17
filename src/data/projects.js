// Direct imports to avoid circular dependency issues
import GreenLogoImage from '../assets/icons/new-dark.png'
import UniversalImage from '../assets/icons/universal-dot-white.png'
import ContentModImage from '../assets/icons/content-moderation.png'
import PortfolioImage from '../assets/picture/portfolio-website.jpeg'
import RecommendationImage from '../assets/picture/recommedation-project.jpeg'
import ContentModerationImage from '../assets/picture/content-moderation.jpeg'
import JsImage from '../assets/icons/js.png'
import VueImage from '../assets/icons/Vue.png'
import CSSImage from '../assets/icons/css.png'
import PythonImage from '../assets/icons/python.png'
import TensorflowImage from '../assets/icons/tensorflow.png'

const projects = [
  {
    id: 'project1',
    title: 'My portfolio',
    description: 'My portfolio website to present myself to clients and recruiter',
    icon: GreenLogoImage,
    image: PortfolioImage,
    imageStyle: 'transform: translateY(-30%);',
    skills: [
      { name: 'JavaScript', icon: JsImage },
      { name: 'Vue.js', icon: VueImage },
      { name: 'CSS', icon: CSSImage }
    ],
    content: {
      description: `This project had the goal to create a protfolio website to showcase my work.
It also turned out to be a nice challenge in order to test and improve my front-end skills.`,
      links: [
        { 
          label: 'Code', 
          url: 'https://github.com/VittorioRossi/portfolio',
          type: 'primary'
        }
      ]
    }
  },
  {
    id: 'project2', 
    title: 'Task matching',
    description: 'A NLP based recommendation system to match task to freelancers',
    icon: UniversalImage,
    image: RecommendationImage,
    imageStyle: 'transform: translateY(-50px);',
    skills: [
      { name: 'Python', icon: PythonImage },
      { name: 'Tensorflow', icon: TensorflowImage }
    ],
    content: {
      description: `The UniversalDot foundation hired me to build a robust recommendation system that could match freelancer's profiles with task organisation published.
The team decided to use several natural language processing techniques in order to address this problem, coming up with the following pipeline:`,
      features: [
        'Preprocessing with Spacy',
        'Keyword extraction', 
        'Embedding',
        'Indexing with ScaNN model'
      ],
      additionalInfo: 'I have worked on the development, training, fine-tunning and serving of the ScaNN model that allowed to search the space of tasks with a text input.',
      links: [
        {
          label: 'My code',
          url: 'https://github.com/UniversalDot/tensorflow',
          type: 'primary'
        },
        {
          label: 'Model on TF hub',
          url: 'https://tfhub.dev/universaldot/udot_scann/1', 
          type: 'secondary'
        }
      ]
    }
  },
  {
    id: 'project3',
    title: 'Text moderation', 
    description: 'A content moderation piepline built with Spacy and served with FastApi',
    icon: ContentModImage,
    image: ContentModerationImage,
    imageStyle: 'transform: translateY(-150px);',
    skills: [],
    content: {
      description: 'Work in progress',
      links: []
    }
  }
]

export default projects