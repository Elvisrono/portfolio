import React, { useState } from "react";
import emailjs from "@emailjs/browser"


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    // service id and tepmplate id
    const serviceId = 'service_6zuhvij'
    const templateId ='template_xjou9na'
    const publicKey = 'seI6qCeoXP-t6dMfw'

    // create a new object that contains dynamic template
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Elvis Rono',
      subject: subject,
      message: message,
    }
  


  // send email using emailjs
  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
    console.log('Email sent succesfully!', response)
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  })
  .catch((error) =>{
    console.error('Error sending email:', error)
  })

}
 
  return (
    <section id="contact" className="pb-16 ">
      <div className="container">
        <h2 className="text-headingColor text-center font-[700] text-2[2.5rem] mb-8">
          Get In Touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8177883749836!2d36.81988707332369!3d-1.2831742356192901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5d2a8bf2f%3A0x584569be8b3354cc!2sNation%20Centre%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1687028911513!5m2!1sen!2ske"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-teal-50 px-4 lg:px-8 py-8">
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-5">
                    <input 
                        className="w-full p-3 focus:outline-none rounded-[5px]"
                        type="text"
                        name="user_name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-5">
                    <input 
                        className="w-full p-3 focus:outline-none rounded-[5px]"
                        placeholder="Enter your email"
                        type="email" 
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-5">
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                />
              </div>

              <div className="mb-5">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message"
                  rows={3}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
