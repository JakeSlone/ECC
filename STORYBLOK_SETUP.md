# Storyblok CMS Integration

This application has been converted to use Storyblok CMS for content management. All pages now fetch content from Storyblok while maintaining fallback to static content.

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the root directory with your Storyblok access token:

```bash
VITE_STORYBLOK_ACCESS_TOKEN=your_storyblok_access_token_here
```

The current token `RUrrypjWIgj7ECykW5sDdgtt` is already configured as a fallback.

### 2. Storyblok Space Setup

1. Go to [Storyblok](https://app.storyblok.com) and create a new space
2. In the new Storyblok UI, navigate to **Settings** → **Content Types** → **Create new**
3. Create the following content types:

#### Page Content Type

- **Name**: `page`
- **Fields**:
  - `title` (Text)
  - `description` (Richtext)
  - `seo_title` (Text, optional)
  - `seo_description` (Text, optional)

#### Home Page Content Type

- **Name**: `home_page`
- **Fields**:
  - `title` (Text)
  - `subtitle` (Text)
  - `description` (Richtext)
  - `cta_primary` (Link)
  - `cta_secondary` (Link)
  - `highlights` (Blocks)
  - `visit_section` (Block)
  - `contact_info` (Block)

#### Event Content Type

- **Name**: `event`
- **Fields**:
  - `title` (Text)
  - `date` (Text)
  - `description` (Text)
  - `location` (Text, optional)
  - `registration_required` (Boolean, optional)
  - `featured` (Boolean, optional)

#### Membership Tier Content Type

- **Name**: `membership_tier`
- **Fields**:
  - `name` (Text)
  - `price` (Text)
  - `description` (Text, optional)
  - `perks` (Richtext)
  - `perks_list` (Text array, optional)
  - `button_text` (Text, optional)
  - `featured` (Boolean, optional)

### 3. Create Stories

Create the following stories in your Storyblok space:

1. **Home Page** (slug: `home`)
2. **About Page** (slug: `about`)
3. **Events Page** (slug: `events`)
4. **Membership Page** (slug: `membership`)
5. **Contact Page** (slug: `contact`)
6. **Event Stories** (content type: `event`)
7. **Membership Tier Stories** (content type: `membership_tier`)

### 4. Content Structure Examples

#### Home Page Content Structure

```json
{
  "title": "Edmonton Chess Club",
  "subtitle": "Edmonton, Alberta • Since 1922",
  "description": "A welcoming home for players of all ages and levels...",
  "cta_primary": {
    "text": "Join the Club",
    "link": "/membership"
  },
  "cta_secondary": {
    "text": "See Events",
    "link": "/events"
  },
  "highlights": [
    {
      "title": "Club Nights",
      "subtitle": "Tuesdays & Thursdays",
      "description": "Casual play, coaching, and analysis..."
    }
  ]
}
```

#### Event Content Structure

```json
{
  "title": "Tuesday Rapid League",
  "date": "Every Tuesday • 7:00 PM",
  "description": "Fast-paced 5+0 rounds with Swiss pairings...",
  "location": "Edmonton Chess Club",
  "registration_required": false,
  "featured": true
}
```

### 5. Features

- **Dynamic Content**: All pages fetch content from Storyblok
- **Fallback Content**: Static content displays if Storyblok content is unavailable
- **Loading States**: Skeleton loaders while content loads
- **Rich Text Support**: Richtext fields are rendered with proper styling
- **Type Safety**: TypeScript interfaces for all content types
- **Caching**: React Query handles caching and refetching

### 6. Development

The app will work with or without Storyblok content. If no content is found, it falls back to the original static content, ensuring the site always functions.

### 7. Content Management

Content editors can:

- Update page titles and descriptions
- Modify event information
- Change membership tiers and pricing
- Update contact information
- Add rich text content with formatting
- Preview changes before publishing

### 8. API Endpoints

The app uses the following Storyblok API endpoints:

- `GET /cdn/stories/{slug}` - Fetch single story
- `GET /cdn/stories` - Fetch multiple stories by content type
- `GET /cdn/stories?starts_with={pattern}` - Fetch stories by slug pattern

All requests use the published version of content for production use.
