type ErrorProps = {
  message: string;
};

export default function Error({ message }: ErrorProps) {
  return (
    <div className="bg-red-200 text-center py-5 px7 rounded-lg mx-10 my-10">
      <h1 className="font-bold text-2xl text-red-500">Error: {message}</h1>
    </div>
  );
}
