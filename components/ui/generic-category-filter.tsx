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
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 