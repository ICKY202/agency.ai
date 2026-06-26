type titleProps = {
  title: string;
  description: string;
};

export default function Title({ title, description }: Readonly<titleProps>) {
  return (
    <>
      <h2
        className="text-3xl sm:text-5xl font-medium"
        style={{ opacity: 1, transform: "none" }}
      >
        {title}
      </h2>
      <p
        className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6"
        style={{ opacity: 1, transform: "none" }}
      >
        {description}
      </p>
    </>
  );
}
