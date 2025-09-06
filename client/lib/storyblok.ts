import { richTextResolver } from "@storyblok/richtext";

// Storyblok configuration
export const STORYBLOK_CONFIG = {
  accessToken:
    import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN || "RUrrypjWIgj7ECykW5sDdgtt",
  region: "us", // or 'eu' for EU region
};

// Rich text renderer
export const renderRichTextContent = (content: any) => {
  return richTextResolver(content, {
    // Custom renderers for specific node types if needed
  });
};

// Storyblok types
export interface StoryblokStory {
  id: number;
  name: string;
  slug: string;
  content: any;
  created_at: string;
  updated_at: string;
  published_at: string;
  full_slug: string;
  parent_id: number;
  uuid: string;
  is_startpage: boolean;
  position: number;
  meta_data: any;
  group_id: string;
  first_published_at: string;
  release_id: number;
  lang: string;
  path: string;
  alternates: any[];
  default_full_slug: string;
  translated_slugs: any[];
}

export interface StoryblokResponse {
  story: StoryblokStory;
  cv: number;
  rels: any[];
  links: any[];
}

export interface StoryblokStoriesResponse {
  stories: StoryblokStory[];
  cv: number;
  rels: any[];
  links: any[];
  per_page: number;
  total: number;
  sort_by: string;
  is_last_page: boolean;
}

// Content types
export interface PageContent {
  title: string;
  description?: string;
  content?: any;
  seo_title?: string;
  seo_description?: string;
}

export interface EventContent {
  title: string;
  date: string;
  description: string;
  location?: string;
  registration_required?: boolean;
  featured?: boolean;
}

export interface MembershipTierContent {
  name: string;
  price: string;
  description?: string;
  perks: string[];
  featured?: boolean;
}

export interface HeroContent {
  title: string;
  subtitle?: string;
  description: string;
  cta_primary?: {
    text: string;
    link: string;
  };
  cta_secondary?: {
    text: string;
    link: string;
  };
  background_image?: any;
}

export interface HighlightContent {
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
}

export interface ContactInfoContent {
  email: string;
  address: string;
  hours: string;
  phone?: string;
}
