import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ArrowPathIcon className="size-14 animate-spin" />
    </div>
  );
}
