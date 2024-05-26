import { ItemGrid } from '@/components/ui/ItemGrid'
import { items } from './items'

export default function Home() {
  return (
    <div className="stack gap-10">
      <p className="text-4xl">Available</p>
      <ItemGrid items={items.filter((item) => !item.isSold)} />
    </div>
  )
}
