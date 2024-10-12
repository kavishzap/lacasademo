'use client'
import Head from 'next/head';
import React from 'react';

const ContactForm = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Let Team Up!</title>
        <meta name="description" content="Tell us more about your project, and let's collaborate." />
      </Head>
      <div className="container">
        
        <div className="contact-form">
          <h2 className='text-white'>Got ideas? We ve got the skills. Lets team up.</h2>
          <p className='text-white'> Tell us more about yourself and what you re working on.</p>
          <form>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="you@company.com" required />
            <textarea placeholder="Tell us a little about the project..." required></textarea>
            <button type="submit" className="btn">List Property</button>
          </form>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            max-width: 1200px;
            margin: 0 auto;
            background-color: #a9871c;
            border-radius: 10px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            flex-wrap: wrap;
          }

          .contact-form {
            padding: 40px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .contact-form h2 {
            margin-bottom: 20px;
            font-size: 24px;
            color: #333;
          }

          .contact-form form {
            display: flex;
            flex-direction: column;
          }

          .contact-form input,
          .contact-form textarea {
          background-color: #333;
            padding: 15px;
            margin-bottom: 20px;
            border: none;
            border-radius: 5px;
            width: 100%;
            font-size: 16px;
            color:white;
          }

          .contact-form textarea {
            height: 150px;
            resize: none;
          }

          .btn {
            padding: 15px;
            background-color: #333;
            color: white;
            font-size: 16px;
            text-align: center;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          /* Responsive Design */
          @media screen and (max-width: 768px) {
            .container {
              flex-direction: column;
            }

            .contact-info,
            .contact-form {
              width: 100%;
            }

            .contact-form {
              padding: 20px;
            }

            .contact-info {
              padding: 20px;
            }
          }

          @media screen and (max-width: 576px) {
            .contact-info p {
              font-size: 14px;
            }

            .contact-form input,
            .contact-form textarea {
              font-size: 14px;
            }

            .btn {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default ContactForm;
