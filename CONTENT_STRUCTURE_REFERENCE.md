# Content Structure Reference

This document shows the exact content structure that your React components expect from Storyblok.

## Home Page Structure

**Content Type**: `home_page`
**Slug**: `home`

```json
{
  "title": "Edmonton Chess Club",
  "subtitle": "Edmonton, Alberta • Since 1922",
  "description": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "A welcoming home for players of all ages and levels. Whether you're a beginner looking to learn or an experienced player seeking competition, our club offers something for everyone."
          }
        ]
      }
    ]
  },
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
    "description": {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Join us for weekly club nights and special events. Our friendly community welcomes players of all skill levels."
            }
          ]
        }
      ]
    },
    "tags": ["Tue & Thu • 6:30–10:00 PM", "Casual & Rated Play"]
  },
  "contact_info": {
    "label": "Questions?",
    "email": "contact@edmontonchessclub.ca",
    "button_text": "Get in touch"
  }
}
```

## About Page Structure

**Content Type**: `about_page`
**Slug**: `about`

```json
{
  "title": "About the Edmonton Chess Club",
  "description": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Founded in 1922, the Edmonton Chess Club has been a cornerstone of the local chess community for over a century. We provide a welcoming environment for players of all ages and skill levels to learn, play, and grow in the game of chess."
          }
        ]
      }
    ]
  },
  "additional_content": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Our club is affiliated with the Chess Federation of Canada (CFC) and regularly hosts rated tournaments, coaching sessions, and social events. We believe chess is a game for everyone and work to make it accessible to all members of our community."
          }
        ]
      }
    ]
  },
  "offerings": {
    "title": "What we offer",
    "list": {
      "type": "doc",
      "content": [
        {
          "type": "bullet_list",
          "content": [
            {
              "type": "list_item",
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "text": "Weekly club nights and casual play"
                    }
                  ]
                }
              ]
            },
            {
              "type": "list_item",
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "text": "USCF/CFC-rated tournaments and leagues"
                    }
                  ]
                }
              ]
            },
            {
              "type": "list_item",
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "text": "Coaching, lectures, and analysis sessions"
                    }
                  ]
                }
              ]
            },
            {
              "type": "list_item",
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "text": "Junior programs and scholastic events"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## Contact Page Structure

**Content Type**: `contact_page`
**Slug**: `contact`

```json
{
  "title": "Contact Us",
  "description": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Get in touch with us for questions about membership, events, or general inquiries. We'd love to hear from you!"
          }
        ]
      }
    ]
  },
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

## Events Page Structure

**Content Type**: `events_page`
**Slug**: `events`

```json
{
  "title": "Events & Tournaments",
  "description": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Join us for regular club nights, rated tournaments, and special events throughout the year. All events are open to members and visitors."
          }
        ]
      }
    ]
  }
}
```

## Membership Page Structure

**Content Type**: `membership_page`
**Slug**: `membership`

```json
{
  "title": "Membership",
  "description": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "Join the Edmonton Chess Club and become part of our vibrant chess community. Choose the membership tier that works best for you and your family."
          }
        ]
      }
    ]
  }
}
```

## Event Stories Structure

**Content Type**: `event`
**Slugs**: `tuesday-rapid-league`, `monthly-rated-tournament`, `beginner-night-coaching`

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

## Membership Tier Stories Structure

**Content Type**: `membership_tier`
**Slugs**: `adult-membership`, `student-membership`, `family-membership`

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

## Important Notes

1. **Rich Text Fields**: Use the richtext field type in Storyblok for `description`, `additional_content`, and `list` fields
2. **Link Fields**: Use the link field type for `cta_primary` and `cta_secondary`
3. **Block Fields**: Use blocks for `highlights`, `visit_section`, `contact_info`, `offerings`, and `contact_methods`
4. **Boolean Fields**: Use boolean fields for `registration_required` and `featured`
5. **Array Fields**: Use text array fields for `tags` and `perks_list`

## Field Mapping

| React Component                   | Storyblok Field       | Type     |
| --------------------------------- | --------------------- | -------- |
| `homeContent.title`               | `title`               | Text     |
| `homeContent.subtitle`            | `subtitle`            | Text     |
| `homeContent.description`         | `description`         | Richtext |
| `homeContent.cta_primary.text`    | `cta_primary.text`    | Link     |
| `homeContent.cta_primary.link`    | `cta_primary.link`    | Link     |
| `homeContent.highlights[].title`  | `highlights[].title`  | Block    |
| `homeContent.visit_section.title` | `visit_section.title` | Block    |
| `homeContent.contact_info.email`  | `contact_info.email`  | Block    |
