import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm
            ('service_n3m9kxl',
                'template_2apx1bd',
                form.current,
                'kKTode4MqTpLhmaa_')
            .then((result) => {
                console.log(result.text);
                console.log('message send');

            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }
    return (
        <div className='mt-10 bg-[#FFF8F5]'>
            <div className='text-center text-3xl font-bold'>
                <h2>Let us handle your <br /> project, professionally.</h2>
                <hr className='w-1/2 mx-auto mt-4' />
            </div>
            <div className='mt-10 '>
                <form ref={form} onSubmit={sendEmail} className="container bg-[#f8e6de] w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow  ng-untouched ng-pristine ng-valid  mt-9">

                    <div>
                        <label for="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" name='name' type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 " />
                    </div>
                    <div>
                        <label for="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" name='email' type="text" placeholder="Your Email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 " />
                    </div>
                    <div>
                        <label for="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" name='message' type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 "></textarea>
                    </div>
                    <div>
                        <input className='w-full border-none  btn bg-[#F73E7B] hover:bg-pink-700 text-white font-extrabold' type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;