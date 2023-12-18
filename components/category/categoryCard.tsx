import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CategoryCard = ({ photo_url, category_name, category_slug }: { photo_url: string | File, category_name: string, category_slug: string }) => {
    const router = useRouter()
    return (
    <div className="col-flex-v">
        <div 
            onClick={() => router.push('/')}
            className="row-flex category-bg-v">
            <Image 
                src={`http://localhost:5000/uploads/${photo_url}`}
                alt={`${category_slug}`}
                width={150}
                height={150}
            />
        </div>
        <div className="my-2 flex justify-center items-center">
            <h3 className="text-primary font-sans text-[18px] max-sm:text-[14px] font-bold">{category_name}</h3>
        </div>
    </div>
  )
}

export default CategoryCard
