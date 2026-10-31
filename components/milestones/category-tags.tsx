import { type Milestone, milestoneCategoryLabels } from '@/content';

export function CategoryTags({ categories }: { categories: Milestone['categories'] }) {
  return (
    <div className='flex flex-wrap gap-2'>
      {categories.map((category) => (
        <span key={category} className='rounded-[30px] bg-[#ebf3ec] px-3 py-1 font-sans text-[13px] font-bold text-green-dark'>
          {milestoneCategoryLabels[category]}
        </span>
      ))}
    </div>
  );
}
