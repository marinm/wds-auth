"use client";

export function IncrementButton() {
  async function handleClick() {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  }
  return (
    <button type="button" onClick={() => handleClick()}>
      +1
    </button>
  );
}
