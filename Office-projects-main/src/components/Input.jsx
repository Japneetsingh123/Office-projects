import cn from 'classnames'
import { findInputError, isFormInvalid } from './utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'


export const Input = ({label , type , id , placeholder}) => {
return(
<div className="flex flex-col w-full gap2">
  <div className="flex justify-between" >
    <label htmLFor={id}className="font-semibold capitalize ">{label}
   </label>
  </div>
 < Input
 id={id}
 type={type}
 className="w-full p-5 font-medium border rounded-md border-slate 300placeholder:cp opacity:60"
 placeholder={placeholder}
 />
 </div>
)


}

const InputError = () => {
  return <div>error</div>
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}
