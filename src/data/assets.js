// Centralized asset imports
// Technology Icons
import FlaskImage from '../assets/icons/flask.png'
import JsImage from '../assets/icons/js.png'
import PythonImage from '../assets/icons/python.png'
import VueImage from '../assets/icons/Vue.png'
import CSSImage from '../assets/icons/css.png'
import DjangoImage from '../assets/icons/django.jpg'
import ScikitImage from '../assets/icons/scikit.png'
import TensorflowImage from '../assets/icons/tensorflow.png'
import FastApiImage from '../assets/icons/fastapi.svg'

// Project Icons
import GreenLogoImage from '../assets/icons/new-dark.png'
import UniversalImage from '../assets/icons/universal-dot-white.png'
import ContentModImage from '../assets/icons/content-moderation.png'

// Project Images  
import PortfolioImage from '../assets/picture/portfolio-website.jpeg'
import RecommendationImage from '../assets/picture/recommedation-project.jpeg'
import ContentModerationImage from '../assets/picture/content-moderation.jpeg'

export const techIcons = {
  flask: FlaskImage,
  javascript: JsImage,
  python: PythonImage,
  vue: VueImage,
  css: CSSImage,
  django: DjangoImage,
  scikit: ScikitImage,
  tensorflow: TensorflowImage,
  fastapi: FastApiImage
}

export const projectIcons = {
  portfolio: GreenLogoImage,
  universal: UniversalImage,
  contentMod: ContentModImage
}

export const projectImages = {
  portfolio: PortfolioImage,
  recommendation: RecommendationImage,
  contentModeration: ContentModerationImage
}

// Legacy exports for backward compatibility during migration
export {
  FlaskImage,
  JsImage,
  PythonImage,
  VueImage,
  CSSImage,
  DjangoImage,
  ScikitImage,
  TensorflowImage,
  FastApiImage,
  GreenLogoImage,
  UniversalImage,
  ContentModImage
}