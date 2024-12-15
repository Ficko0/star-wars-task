import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ArrowPathIcon className="animate-spin size-12" />
    </div>
  );
}
