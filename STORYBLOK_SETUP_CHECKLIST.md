# Storyblok Setup Checklist

## Phase 1: Space Setup

### ✅ Create Storyblok Space

1. Go to [Storyblok](https://app.storyblok.com)
2. Click "Create new space"
3. Choose "Start from scratch"
4. Name it "Edmonton Chess Club"

### ✅ Get Access Token

1. Go to **Settings** → **Access Tokens**
2. Copy the **Public** token
3. Add it to your `.env` file: `VITE_STORYBLOK_ACCESS_TOKEN=your_token_here`

## Phase 2: Content Types

### ✅ Create Content Types

Navigate to **Settings** → **Content Types** → **Create new**

#### 1. Home Page Content Type

- **Name**: `home_page`
- **Fields**:
  - `title` (Text)
  - `subtitle` (Text)
  - `description` (Richtext)
  - `cta_primary` (Link)
  - `cta_secondary` (Link)
  - `highlights` (Blocks) → Create "highlight" block
  - `visit_section` (Block) → Create "visit_section" block
  - `contact_info` (Block) → Create "contact_info" block

#### 2. Page Content Type

- **Name**: `page`
- **Fields**:
  - `title` (Text)
  - `description` (Richtext)
  - `additional_content` (Richtext, optional)
  - `seo_title` (Text, optional)
  - `seo_description` (Text, optional)

#### 3. About Page Content Type

- **Name**: `about_page`
- **Fields**:
  - `title` (Text)
  - `description` (Richtext)
  - `additional_content` (Richtext, optional)
  - `offerings` (Block) → Create "offerings" block

#### 4. Contact Page Content Type

- **Name**: `contact_page`
- **Fields**:
  - `title` (Text)
  - `description` (Richtext)
  - `contact_methods` (Blocks) → Create "contact_method" block
  - `primary_email` (Text)
  - `cta_text` (Text)

#### 5. Events Page Content Type

- **Name**: `events_page`
- **Fields**:
  - `title` (Text)
  - `description` (Richtext)

#### 6. Event Content Type

- **Name**: `event`
- **Fields**:
  - `title` (Text)
  - `date` (Text)
  - `description` (Text)
  - `location` (Text, optional)
  - `registration_required` (Boolean, optional)
  - `featured` (Boolean, optional)

#### 7. Membership Page Content Type

- **Name**: `membership_page`
- **Fields**:
  - `title` (Text)
  - `description` (Richtext)

#### 8. Membership Tier Content Type

- **Name**: `membership_tier`
- **Fields**:
  - `name` (Text)
  - `price` (Text)
  - `description` (Text, optional)
  - `perks` (Richtext)
  - `perks_list` (Text array, optional)
  - `button_text` (Text, optional)
  - `featured` (Boolean, optional)

### ✅ Create Block Types

For the blocks referenced above:

#### Highlight Block

- `title` (Text)
- `subtitle` (Text)
- `description` (Text)

#### Visit Section Block

- `title` (Text)
- `description` (Richtext)
- `tags` (Text array)

#### Contact Info Block

- `label` (Text)
- `email` (Text)
- `button_text` (Text)

#### Offerings Block

- `title` (Text)
- `list` (Richtext)

#### Contact Method Block

- `title` (Text)
- `type` (Text)
- `value` (Text)

## Phase 3: Create Stories

### ✅ Home Page

1. Go to **Content** → **Create new**
2. Choose **home_page** content type
3. Set slug to `home`
4. Fill in content (see STORYBLOK_CONTENT_SETUP.md)
5. **Publish**

### ✅ About Page

1. Create new story
2. Choose **about_page** content type
3. Set slug to `about`
4. Fill in content
5. **Publish**

### ✅ Contact Page

1. Create new story
2. Choose **contact_page** content type
3. Set slug to `contact`
4. Fill in content
5. **Publish**

### ✅ Events Page

1. Create new story
2. Choose **events_page** content type
3. Set slug to `events`
4. Fill in content
5. **Publish**

### ✅ Membership Page

1. Create new story
2. Choose **membership_page** content type
3. Set slug to `membership`
4. Fill in content
5. **Publish**

### ✅ Event Stories

Create 3+ event stories:

1. Create new story
2. Choose **event** content type
3. Set appropriate slug (e.g., `tuesday-rapid-league`)
4. Fill in content
5. **Publish**

### ✅ Membership Tier Stories

Create 3 membership tier stories:

1. Create new story
2. Choose **membership_tier** content type
3. Set appropriate slug (e.g., `adult-membership`)
4. Fill in content
5. **Publish**

## Phase 4: Testing

### ✅ Test Content Loading

1. Start your development server: `pnpm dev`
2. Visit each page to ensure content loads
3. Check that fallback content shows if Storyblok is unavailable
4. Verify rich text formatting works correctly

### ✅ Test Content Management

1. Edit content in Storyblok
2. Publish changes
3. Verify changes appear on the website
4. Test preview mode if available

## Troubleshooting

### Content Not Loading

- Check access token is correct
- Verify stories are published
- Check browser console for errors
- Ensure content type names match exactly

### Rich Text Not Rendering

- Verify richtext fields are using richtext type
- Check StoryblokContent component is working
- Test with simple text first

### Fallback Content Issues

- Check that fallback content is properly defined in components
- Verify error handling in useStoryblok hooks
- Test with network disconnected

## Next Steps

Once all content is set up:

1. Customize styling if needed
2. Add more content types as required
3. Set up content workflows
4. Train content editors
5. Set up staging/production environments
