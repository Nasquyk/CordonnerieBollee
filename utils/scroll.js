export const handleScroll = (bgColorClass, textColorClass, props) => {
  if (window.scrollY > window.innerHeight) {
    bgColorClass.value = props.bgColor
    textColorClass.value = 'text-white'
  } else {
    bgColorClass.value = 'bg-transparent'
    textColorClass.value = 'text-white'
  }
}
