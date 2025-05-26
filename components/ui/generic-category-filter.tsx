interface GenericCategoryFilterProps<T extends string> {
  selectedCategory: T | "All";
  onCategoryChange: (category: T | "All") => void;
  categories: T[];
  className?: string;
}

export function GenericCategoryFilter<T extends string>({
  selectedCategory,
  onCategoryChange,
  categories,
  className = "",
}: GenericCategoryFilterProps<T>) {
  const allCategories: (T | "All")[] = ["All", ...categories];

  return (
    <div className={`flex flex-wrap gap-2 mb-8 ${className}`}>
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 