import {z} from 'zod'
import {useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './input'


const SignUpFormShema = z.object({
    email: z.string().email('Enter a valid email') ,
    password: z.string().min(3,'Your password must be at least two characters long ')
})
export const FormItem = ()=>{
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: zodResolver(SignUpFormShema)
    })
    const handleSignUpForm = ()=>{
        alert('enviando')
    }
    
    return(
        <form onSubmit={handleSubmit(handleSignUpForm)} className='flex flex-col gap-4'>
            
                <label>
                    <p className='font-semibold'>Email</p>
                    <Input {...register('email')} placeholder='m@example.com' type='email' className='outline-none'/>
                    {errors.email && <p className='text-xs'>{errors.email.message as string}</p>}
                    </label>
                <label>
                    <p className='font-semibold'>Password</p>
                    <Input {...register('password')} type='password'/>
                    {errors.password && <p className='text-xs'>{errors.password.message as string}</p>}
                    </label>

            <Input type='submit' className='cursor-pointer dark:bg-white dark:text-black bg-black text-white font-semibold flex items-center justify-center hover:bg-black/85'></Input>
            





        </form>
    )
}