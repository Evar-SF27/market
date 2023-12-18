const removeBackground = async ({ image_url }: { image_url: string | File}) => {
  try {
    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_url: image_url,
        size: 'auto', // You can customize the output size
      }),
    })

    if (response.ok) {
      const result = await response.json()
      console.log(result.data.result_url)
      // The result.data.result_url contains the URL of the image with the background removed
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`)
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

export default removeBackground
