interface ChinTitleProps {
  prefix?: string;
  suffix: string;
  tagline?: string;
  showHackyComment?: boolean;
}

export default function ChinTitle({ 
  prefix = "Ch", 
  suffix,
  tagline = "codes, writes and says",
  showHackyComment = true
}: ChinTitleProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-8xl sm:text-12xl font-bold text-gray-900 dark:text-white mb-6">
        {prefix}<span className="text-emerald-500 dark:text-emerald-400 text-8xl sm:text-12xl">{suffix}</span>
      </h1>
      <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-bold">
        {tagline}
        {showHackyComment && (
          <span className="font-mono ml-2 text-xl sm:text-2xl text-green-500 dark:text-green-400 not-italic opacity-70">{`//hacky but works`}</span>
        )}
      </p>
    </div>
  );
}
