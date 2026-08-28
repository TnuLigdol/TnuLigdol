export type { Article, ArticleCategory } from './articles';
export {
  articles,
  categoryLabels,
  getArticleBySlug,
  getArticlesByCategory,
  getRecentArticles,
} from './articles';
export type {
  Device,
  DeviceFeatures,
  DevicePrice,
  DeviceSpecs,
  ExtraDetail,
  ExtraDetailType,
} from './devices';
export { devices, getDeviceBySlug } from './devices';
export { homepage } from './homepage';
export type { LegalDocument } from './legal';
export { legalDocuments } from './legal';
export type { MediaCoverage } from './media';
export { mediaCoverage } from './media';
export { phoneGuide } from './phone-guide';
export { siteConfig } from './site';
export type { Story, StoryBlock } from './stories';
export { getRecentStories, getStoryBySlug, stories } from './stories';
export type { Supplier } from './suppliers';
export {
  getSupplierByCode,
  getSuppliersForDevice,
  suppliers,
} from './suppliers';
export type { TeamMember } from './team';
export { team } from './team';
