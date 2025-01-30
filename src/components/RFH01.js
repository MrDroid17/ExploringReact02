import React from 'react'
import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';
let renderCount = 0;

const RFH01 = () => {

    const form = useForm({
        defaultValues: {
            username: "S Kumar",
            email: "test@test.com",
            channel: "Food Vlog",
            social: {
                github: "gihub.com/mrdroid",
                linkedin: "linkidin.in/sobhit"
            },
            phoneNumbers: []
        }
    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    renderCount++;

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='w-[30%] p-10 '>
            <p>
                <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwjmgBr1327BA5bVXoQH-w5s" target='/'>RHF Tutorial</a>
            </p>
            <p>

                <a href="https://react-hook-form.com/" target='/'>RHF Library</a>
            </p>
            <h1> React Hook Form {renderCount / 2}</h1>
            <form className='m-10 bg-gray-200' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='form-control'>
                    <label htmlFor="username">Username</label>
                    <input  className="bg-white" type="text" id="username" {...register("username", {
                        required: "username required"
                    })} />
                    <p className='error'>{errors.username?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" {...register("email", {
                        pattern: {
                            value: /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
                            message: "Email is invalid"
                        },
                        validate: {
                            invalidUser: (value) => value !== "admin@test.com" || "Enter a different Email Id",
                            invalidDomian: (value) => !value.endsWith("invalid.com") || "Domain not allowed"
                        }
                    })} />
                    <p className='error'>{errors.email?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" {...register("channel", {
                        required: {
                            value: true,
                            message: "Channel is required"
                        }
                    })} />
                    <p className='error'>{errors.channel?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="github">Github</label>
                    <input type="text" id="github" {...register("social.github")} />
                </div>

                <div className='form-control'>
                    <label htmlFor="linkedin">Linkedin</label>
                    <input type="text" id="linkedin" {...register("social.linkedin")} />
                </div>

                <div className='form-control'>
                    <label htmlFor="primary-contact">Primary No</label>
                    <input type="text" id="primary-contact" {...register("phoneNumber.0")} />
                </div>

                <div className='form-control'>
                    <label htmlFor="secondary-number">Secondary No</label>
                    <input type="text" id="secondary-number" {...register("phoneNumber.1")} />
                </div>

                <button type='submit'>Submit</button>
            </form>
            <DevTool control={control} />

        </div>
    )
}

export default RFH01;