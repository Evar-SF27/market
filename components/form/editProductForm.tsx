"use client"

import { useState, Key } from 'react'
import { useAppSelector } from '@/redux/store'
import { CategoryProps, ProductProps } from '@/types'
import useAxiosPrivate from '@/hooks/useAxiosPrivate'

const EditProductForm = ({ product }: { product: ProductProps }) => {
    const axios = useAxiosPrivate()
    const [errorMessage, setErrorMessage] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [productName, setProductName] = useState(product.product_name)
    const [selectedFile, setSelectedFile] = useState<any>(product.product_image)
    const [selectedFiles, setSelectedFiles] = useState<any>(product.photo_gallery)
    const [price, setPrice] = useState(product.price as unknown as string)
    const [discount, setDiscount] = useState(product.discount as unknown as string)
    const [quantity, setQuantity] = useState(product.quantity as unknown as string)
    const [unit, setUnit] = useState(product?.unit ? product.unit : '')
    const [brand, setBrand] = useState(product?.brand ? product.brand : '')
    const [color, setColor] = useState(product?.color ? product.color : '')
    const [description, setDescription] = useState(product?.description ? product.description : '')
    const [shortDescription, setShortDescription] = useState(product?.short_description ? product.short_description : '')
    const [store] = useState(useAppSelector((state) => state.persistedStoreReducer.store._id))
    
    var categories = useAppSelector((state) => state.persistedCategoryReducer.categories)
    var accessToken = useAppSelector((state) => state.persistedAuthReducer.value.access_token)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0])
        }
    }

    const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFiles([...selectedFiles, e.target.files[0]])
        }
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductCategory(e.target.value)
    }

    const editCategory = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("id", product._id)
        formData.append("product_name", productName)
        formData.append("product_category", productCategory)
        formData.append("price", price)
        formData.append("discount", discount)
        formData.append("quantity", quantity)
        formData.append("unit", unit)
        formData.append("brand", brand)
        formData.append("color", color)
        formData.append("description", description)
        formData.append("short_description", shortDescription)
        formData.append("store", store)
        formData.append("image", selectedFile)
        formData.append("images", selectedFiles)
        
        try {
            await axios.put(
                "/product/edit",
                formData
            )
            
        } catch (err: any) {
            if (!err?.response) {
                setErrorMessage(err.message)
            } else if (err.response?.status === 409) {
                setErrorMessage("Product already exists")
            } else {
                setErrorMessage("Create Product failed")
            }
        }
    }

    const resetError = () => {
        setErrorMessage("")
    }

  return (
    <div className="h-[100%] my-6">
        <div className="flex justify-center items-center h-[100%]">
            <div className="flex flex-col h-fit bg-white w-[100%]">
                <div>
                    <div className="flex flex-col items-center justify-center py-8">
                        <h1 className="text-primary font-bold text-[3rem] max-sm:text-[1.5rem]">MarketPlace</h1>
                        <p className="text-center">Complete the fields to edit the product</p>
                    </div>
                    <div>
                        <form onSubmit={editCategory} encType="multipart/form-data">
                            <div className="mx-8">
                                <div className={`${!errorMessage && "hidden"} bg-red-100 rounded-[5px] h-fit py-4 px-4 mb-6 text-red-500`}>
                                    <span className="text-red-600 font-bold">Error: </span>{errorMessage}
                                </div>
                                <input 
                                    placeholder="Product Name"
                                    className="input_2"
                                    type="text"
                                    onChange={(e) => setProductName(e.target.value)}
                                    onClick={resetError}
                                    value={productName}
                                    name="product_name"
                                />
                                <div className='flex gap-2'>
                                    <input 
                                        placeholder="Price"
                                        className="input_2"
                                        type="text"
                                        onChange={(e) => setPrice(e.target.value)}
                                        onClick={resetError}
                                        value={price}
                                        name="price"
                                    />
                                    <input 
                                        placeholder="Quantity"
                                        className="input_2"
                                        type="text"
                                        onChange={(e) => setQuantity(e.target.value)}
                                        onClick={resetError}
                                        value={quantity}
                                        name="quantity"
                                    />
                                    <input 
                                        placeholder="Discount"
                                        className="input_2"
                                        type="text"
                                        onChange={(e) => setDiscount(e.target.value)}
                                        onClick={resetError}
                                        value={discount}
                                        name="discount"
                                    />
                                </div>
                                <textarea 
                                    placeholder="Product Summary"
                                    className="input_3 w-[100%] h-[80px] py-2"
                                    onChange={(e) => setShortDescription(e.target.value)}
                                    onClick={resetError}
                                    value={shortDescription}
                                    name="description"
                                />
                                <textarea 
                                    placeholder="Product Description"
                                    className="input_3 w-[100%] h-[130px] py-2"
                                    onChange={(e) => setDescription(e.target.value)}
                                    onClick={resetError}
                                    value={description}
                                    name="description"
                                />
                                <div className="mb-4">
                                    <label htmlFor="product_category" className="mr-4 mb-4">Parent Category:</label>
                                    <select className="input_2 px-4" key={productCategory} value={productCategory} onChange={handleSelectChange}>
                                        <option value="none">No Category</option>
                                        {categories.map((category: CategoryProps) => <option key={category.id as Key} value={category.category_slug}>{category.category_name}</option>)}
                                    </select>
                                </div>
                                <p>{productCategory}</p>
                                <div className="mb-4">
                                    <label htmlFor="category_name" className="mr-4">Product Image:</label>
                                    <input 
                                        placeholder="Choose Category Image"
                                        type="file"
                                        accept="images/"
                                        onChange={handleFileChange}
                                        onClick={resetError}
                                        name="image"
                                    />
                                </div>
                                <input 
                                    placeholder="Unit"
                                    className="input_2"
                                    type="text"
                                    onChange={(e) => setUnit(e.target.value)}
                                    onClick={resetError}
                                    value={unit}
                                    name="unit"
                                />
                                <input 
                                    placeholder="Brand"
                                    className="input_2"
                                    type="text"
                                    onChange={(e) => setBrand(e.target.value)}
                                    onClick={resetError}
                                    value={brand}
                                    name="brand"
                                />
                                <input 
                                    placeholder="Color"
                                    className="input_2"
                                    type="text"
                                    onChange={(e) => setColor(e.target.value)}
                                    onClick={resetError}
                                    value={color}
                                    name="color"
                                />
                                <button
                                    type="submit"
                                    className="mt-8 bg-primary w-[100%] py-4 rounded-[5px] text-white text-[18px] font-semibold"
                                >
                                    Edit Product
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProductForm