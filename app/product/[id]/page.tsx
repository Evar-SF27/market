import { ReviewComponent } from "@/components"
import { fetchProductBySlug } from "@/services/products.services"

interface PageProps {
    params: { id: String }
  }

const ProductPage = ({ params }: PageProps) => {
    const slug = params.id
    const product = fetchProductBySlug(slug)
  return (
    <div>
      <div>
        <div>Image</div>
        <div>Other Information</div>
      </div>
      <ReviewComponent />
      <div>Related Products</div>
    </div>
  )
}

export default ProductPage
