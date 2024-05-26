import { ItemGrid } from '@/components/ui/ItemGrid'
import { Category, items } from './items'
import { capitalizeFirstLetter } from '@/lib/utils'

export default function Home() {
  return (
    <div className="stack gap-10">
      {Object.values(Category).map((category) => {
        return (
          <div key={category} className="stack gap-5">
            <p className="text-2xl font-bold" id={category}>
              {capitalizeFirstLetter(category)}
            </p>
            <ItemGrid
              items={items.filter((item) => item.category === category)}
            />
          </div>
        )
      })}
    </div>
  )
}
