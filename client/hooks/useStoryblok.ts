import { useQuery } from "@tanstack/react-query";
import { StoryblokStory, StoryblokStoriesResponse } from "@/lib/storyblok";

// Create a simple Storyblok client
const createStoryblokClient = () => {
  const accessToken =
    import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN || "RUrrypjWIgj7ECykW5sDdgtt";

  return {
    get: async (endpoint: string, params: any = {}) => {
      const url = new URL(`https://api.storyblok.com/v2/${endpoint}`);
      url.searchParams.set("token", accessToken);
      url.searchParams.set("version", "published");

      // Add other params
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.set(key, String(value));
        }
      });

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return { data: await response.json() };
    },
  };
};

// Hook to fetch a single story by slug
export function useStory(slug: string) {
  return useQuery({
    queryKey: ["story", slug],
    queryFn: async () => {
      try {
        const client = createStoryblokClient();
        const { data } = await client.get(`cdn/stories/${slug}`);
        return data as { story: StoryblokStory };
      } catch (error) {
        console.warn(`Failed to fetch story "${slug}":`, error);
        throw error;
      }
    },
    enabled: !!slug,
    retry: false, // Don't retry on failure, just show fallback content
  });
}

// Hook to fetch multiple stories by content type
export function useStories(contentType: string) {
  return useQuery({
    queryKey: ["stories", contentType],
    queryFn: async () => {
      try {
        const client = createStoryblokClient();
        const { data } = await client.get("cdn/stories", {
          content_type: contentType,
          per_page: 100,
        });
        return data as StoryblokStoriesResponse;
      } catch (error) {
        console.warn(
          `Failed to fetch stories of type "${contentType}":`,
          error,
        );
        throw error;
      }
    },
    retry: false, // Don't retry on failure, just show fallback content
  });
}

// Hook to fetch stories by slug pattern
export function useStoriesBySlug(slugPattern: string) {
  return useQuery({
    queryKey: ["stories", "slug", slugPattern],
    queryFn: async () => {
      try {
        const client = createStoryblokClient();
        const { data } = await client.get("cdn/stories", {
          starts_with: slugPattern,
          per_page: 100,
        });
        return data as StoryblokStoriesResponse;
      } catch (error) {
        console.warn(
          `Failed to fetch stories with slug pattern "${slugPattern}":`,
          error,
        );
        throw error;
      }
    },
    retry: false,
  });
}

// Hook to fetch the home page
export function useHomePage() {
  return useStory("home");
}

// Hook to fetch events
export function useEvents() {
  return useStories("event");
}

// Hook to fetch membership tiers
export function useMembershipTiers() {
  return useStories("membership_tier");
}

// Hook to fetch page by slug
export function usePage(slug: string) {
  return useStory(slug);
}
