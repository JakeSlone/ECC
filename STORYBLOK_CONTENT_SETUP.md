# Storyblok Content Setup Guide

This guide will help you set up all the content for the Edmonton Chess Club website in Storyblok using the updated UI.

## Content Types Setup

### 1. Home Page Content Type

**Name**: `home_page`
**Fields**:

- `title` (Text) - Main heading
- `subtitle` (Text) - Subtitle text
- `description` (Richtext) - Main description
- `cta_primary` (Link) - Primary call-to-action button
- `cta_secondary` (Link) - Secondary call-to-action button
- `highlights` (Blocks) - Array of highlight cards
- `visit_section` (Block) - Visit the club section
- `contact_info` (Block) - Contact information

**Highlight Block**:

- `title` (Text)
- `subtitle` (Text)
- `description` (Text)

**Visit Section Block**:

- `title` (Text)
- `description` (Richtext)
- `tags` (Text array)

**Contact Info Block**:

- `label` (Text)
- `email` (Text)
- `button_text` (Text)

### 2. Page Content Type

**Name**: `page`
**Fields**:

- `title` (Text)
- `description` (Richtext)
- `additional_content` (Richtext, optional)
- `seo_title` (Text, optional)
- `seo_description` (Text, optional)

### 3. About Page Content Type

**Name**: `about_page`
**Fields**:

- `title` (Text)
- `description` (Richtext)
- `additional_content` (Richtext, optional)
- `offerings` (Block) - What we offer section

**Offerings Block**:

- `title` (Text)
- `list` (Richtext)

### 4. Contact Page Content Type

**Name**: `contact_page`
**Fields**:

- `title` (Text)
- `description` (Richtext)
- `contact_methods` (Blocks) - Array of contact methods
- `primary_email` (Text)
- `cta_text` (Text)

**Contact Method Block**:

- `title` (Text)
- `type` (Text) - "email", "phone", or "address"
- `value` (Text)

### 5. Events Page Content Type

**Name**: `events_page`
**Fields**:

- `title` (Text)
- `description` (Richtext)

### 6. Event Content Type

**Name**: `event`
**Fields**:

- `title` (Text)
- `date` (Text)
- `description` (Text)
- `location` (Text, optional)
- `registration_required` (Boolean, optional)
- `featured` (Boolean, optional)

### 7. Membership Page Content Type

**Name**: `membership_page`
**Fields**:

- `title` (Text)
- `description` (Richtext)

### 8. Membership Tier Content Type

**Name**: `membership_tier`
**Fields**:

- `name` (Text)
- `price` (Text)
- `description` (Text, optional)
- `perks` (Richtext)
- `perks_list` (Text array, optional)
- `button_text` (Text, optional)
- `featured` (Boolean, optional)

## Content Creation

### 1. Home Page Story

**Slug**: `home`
**Content Type**: `home_page`

```json
{
  "title": "Edmonton Chess Club",
  "subtitle": "Edmonton, Alberta • Since 1922",
  "description": "A welcoming home for players of all ages and levels. Whether you're a beginner looking to learn or an experienced player seeking competition, our club offers something for everyone.",
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
      "description": "Casual play, coaching, and analysis. Drop in and play a game."
    },
    {
      "title": "Tournaments",
      "subtitle": "Monthly Rated Events",
      "description": "CFC-rated classical and rapid events for all sections."
    },
    {
      "title": "Learn & Grow",
      "subtitle": "Beginner Friendly",
      "description": "Intro sessions and lectures to help you improve your game."
    }
  ],
  "visit_section": {
    "title": "Visit the Club",
    "description": "Join us for weekly club nights and special events. Our friendly community welcomes players of all skill levels.",
    "tags": ["Tue & Thu • 6:30–10:00 PM", "Casual & Rated Play"]
  },
  "contact_info": {
    "label": "Questions?",
    "email": "contact@edmontonchessclub.ca",
    "button_text": "Get in touch"
  }
}
```

### 2. About Page Story

**Slug**: `about`
**Content Type**: `about_page`

```json
{
  "title": "About the Edmonton Chess Club",
  "description": "Founded in 1922, the Edmonton Chess Club has been a cornerstone of the local chess community for over a century. We provide a welcoming environment for players of all ages and skill levels to learn, play, and grow in the game of chess.",
  "additional_content": "Our club is affiliated with the Chess Federation of Canada (CFC) and regularly hosts rated tournaments, coaching sessions, and social events. We believe chess is a game for everyone and work to make it accessible to all members of our community.",
  "offerings": {
    "title": "What we offer",
    "list": "• Weekly club nights and casual play\n• USCF/CFC-rated tournaments and leagues\n• Coaching, lectures, and analysis sessions\n• Junior programs and scholastic events"
  }
}
```

### 3. Contact Page Story

**Slug**: `contact`
**Content Type**: `contact_page`

```json
{
  "title": "Contact Us",
  "description": "Get in touch with us for questions about membership, events, or general inquiries. We'd love to hear from you!",
  "contact_methods": [
    {
      "title": "Email",
      "type": "email",
      "value": "contact@edmontonchessclub.ca"
    },
    {
      "title": "Visit",
      "type": "address",
      "value": "118 Avenue NW, Edmonton, AB • Tue & Thu 6:30–10:00 PM"
    }
  ],
  "primary_email": "contact@edmontonchessclub.ca",
  "cta_text": "Send us an email"
}
```

### 4. Events Page Story

**Slug**: `events`
**Content Type**: `events_page`

```json
{
  "title": "Events & Tournaments",
  "description": "Join us for regular club nights, rated tournaments, and special events throughout the year. All events are open to members and visitors."
}
```

### 5. Membership Page Story

**Slug**: `membership`
**Content Type**: `membership_page`

```json
{
  "title": "Membership",
  "description": "Join the Edmonton Chess Club and become part of our vibrant chess community. Choose the membership tier that works best for you and your family."
}
```

### 6. Event Stories

Create multiple event stories with content type `event`:

**Event 1**:

```json
{
  "title": "Tuesday Rapid League",
  "date": "Every Tuesday • 7:00 PM",
  "description": "5+0 rapid games. All levels welcome. Swiss pairings.",
  "location": "Edmonton Chess Club",
  "registration_required": false,
  "featured": true
}
```

**Event 2**:

```json
{
  "title": "Monthly Rated Tournament",
  "date": "First Saturday • 10:00 AM",
  "description": "CFC-rated classical event. Registration required.",
  "location": "Edmonton Chess Club",
  "registration_required": true,
  "featured": false
}
```

**Event 3**:

```json
{
  "title": "Beginner Night & Coaching",
  "date": "Every Thursday • 6:30 PM",
  "description": "Friendly instruction and casual games for newcomers.",
  "location": "Edmonton Chess Club",
  "registration_required": false,
  "featured": false
}
```

### 7. Membership Tier Stories

Create multiple membership tier stories with content type `membership_tier`:

**Adult Tier**:

```json
{
  "name": "Adult",
  "price": "$60 / year",
  "description": "Full access to all club activities",
  "perks_list": [
    "Access to club nights",
    "League participation",
    "Discounted tournaments"
  ],
  "button_text": "Join Adult",
  "featured": false
}
```

**Student Tier**:

```json
{
  "name": "Student",
  "price": "$40 / year",
  "description": "Special pricing for students",
  "perks_list": ["All Adult perks", "Junior coaching included"],
  "button_text": "Join Student",
  "featured": true
}
```

**Family Tier**:

```json
{
  "name": "Family",
  "price": "$120 / year",
  "description": "Perfect for families with multiple chess players",
  "perks_list": ["Up to 4 household members", "All club benefits included"],
  "button_text": "Join Family",
  "featured": false
}
```

## Setup Steps

1. **Create Space**: Go to [Storyblok](https://app.storyblok.com) and create a new space
2. **Create Content Types**: Follow the content type definitions above
3. **Create Stories**: Create all the stories with the provided content
4. **Publish**: Make sure to publish all stories
5. **Test**: Verify the content appears correctly on your website

## Notes

- All content includes fallback values in the React components
- Rich text fields support formatting and links
- The app gracefully handles missing content by showing static fallbacks
- Content is cached using React Query for optimal performance
