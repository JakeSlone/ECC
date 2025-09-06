import { useEffect, useState } from "react";

export function CacheBuster() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if this is a new version
    const currentVersion = "2.0.0";
    const storedVersion = localStorage.getItem("ecc-version");

    if (storedVersion !== currentVersion) {
      setShowBanner(true);
      localStorage.setItem("ecc-version", currentVersion);
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white p-3 text-center">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-sm">🎉 New website version available!</span>
        <div className="flex gap-2">
          <button
            onClick={() => {
              window.location.reload();
              setShowBanner(false);
            }}
            className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
          >
            Refresh
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="text-white hover:text-gray-200"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
