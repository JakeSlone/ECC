import { useHomePage, useEvents } from "@/hooks/useStoryblok";

export default function DebugInfo() {
  const homeQuery = useHomePage();
  const eventsQuery = useEvents();

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded text-xs max-w-sm">
      <div>
        Home:{" "}
        {homeQuery.isLoading
          ? "Loading"
          : homeQuery.error
            ? "Error"
            : homeQuery.data
              ? "Success"
              : "No data"}
      </div>
      <div>
        Events:{" "}
        {eventsQuery.isLoading
          ? "Loading"
          : eventsQuery.error
            ? "Error"
            : eventsQuery.data
              ? "Success"
              : "No data"}
      </div>
      {homeQuery.error && <div>Home Error: {String(homeQuery.error)}</div>}
      {eventsQuery.error && (
        <div>Events Error: {String(eventsQuery.error)}</div>
      )}
    </div>
  );
}
