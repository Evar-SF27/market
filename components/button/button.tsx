import './styles/index.css'

const CustomButton = ({ text, icon, className }: { text: string, icon: any, className: string }) => {
  return (
    <button className={`learn-more ${className}`}>
        <span className='circle' aria-hidden='true'>
        <span className='icon arrow'></span>
        </span>
        <span className='button-text flex gap-1 items-center'>{text}{icon}</span>
    </button>
  )
}

export default CustomButton
