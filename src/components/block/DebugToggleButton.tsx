"use client"

export default function DebugToggleButton() {
    const toggleDebug = () => {
        const bodyElement = document.getElementById("body");
        if (bodyElement?.classList.contains("debug")) {
          bodyElement.classList.remove("debug");
        } else {
          bodyElement?.classList.add("debug");
        }
      };

    return (
        <button
        onClick={toggleDebug}
        className="fixed bottom-4 right-4 bg-red-300 text-white px-4 py-2 rounded-full shadow-lg hover:opacity-30 focus:outline-none"
      >
        Debug on/off
      </button>
    )
}