import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';
import axios from 'axios';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Spinner icon
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';
import useLanguage from '../locale/useLanguage';

// Fix for marker icons (Leaflet's icons are not bundled automatically in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Set the root element for the modal
Modal.setAppElement('#root');

const Contact = () => {

    const translate = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '', // Champ organisation (société)
        message: '',
        acceptedRules: false,
    });

    const successMessage = 'Message sent successfully. We will contact you as soon as possible.';
    const failureMessage = 'Message not sent. Please try again. There was an issue with the connection.';

    const [modalIsOpen, setModalIsOpen] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false); // New state for button disabling

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Updated phone validation
    const validatePhone = (phone) => {
        const phonePattern = /^(\+?\d{1,3}|\d{1})[\d\s]+$/;
        return phonePattern.test(phone);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true); // Disable the button when submitting

        if (!validatePhone(formData.phone)) {
            alert('Le numéro de téléphone doit commencer par un "0" ou "+" et peut contenir des espaces.');
            setIsSubmitting(false);
            return;
        }

        if (!formData.acceptedRules) {
            alert('Vous devez accepter les règles avant de soumettre le formulaire.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post('http://smtp.mondial-sampling.com/api/contact/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.status === 'success') {
                setModalIsOpen(1);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                    acceptedRules: false,
                });
            } else {
                setModalIsOpen(2);
            }
        } catch (error) {
            console.log('Error:', error);
            setModalIsOpen(2);
        } finally {
            setIsSubmitting(false);
        }
    };

    const formAnimation = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(-20px)' },
        delay: 300,
    });

    const imageAnimation = useSpring({
        to: { opacity: 1, transform: 'translateX(0)' },
        from: { opacity: 0, transform: 'translateX(-20px)' },
        delay: 600,
    });

    const handleOkClick = () => {
        setModalIsOpen(0);
    };

    const position = [53.5511, 9.9937]; // Coordinates for Hamburg, Germany


    let modalContent;
    if (modalIsOpen === 1) {
        modalContent = (
            <>
                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Message sent successfully
                </Dialog.Title>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">{successMessage}</p>
                </div>
            </>
        );
    } else if (modalIsOpen === 2) {
        modalContent = (
            <>
                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Message not sent
                </Dialog.Title>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">{failureMessage}</p>
                </div>
            </>
        );
    }

    return (
        <div id="containerContact">
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:flex sm:items-center sm:justify-between">
                    {/* This animated div now contains the map instead of the image */}
                    <animated.div style={imageAnimation} className="sm:flex-1">
                        <h1 className="text-3xl dark:text-gray-100 my-8">{translate('our_location')}</h1>
                        <div style={{ height: '400px', width: '100%' }}>
                            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={position}>
                                    <Popup>Our office is located here.</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </animated.div>

                    {/* Contact Form */}
                    <animated.div style={formAnimation} className="max-w-xl mx-auto mt-8 mb-0 space-y-4 sm:ml-8 sm:mt-0 sm:flex-1">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
                                {translate('need_assistance_contact_us')}
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {translate('full_name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {translate('phone_number')}
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+49 0000 111 00 11"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {translate('organization')}
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {translate('email_address')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {translate('message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="8"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="acceptedRules"
                                        checked={formData.acceptedRules}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                    />
                                    <span className="ml-2 dark:text-gray-100"> {translate('data_consent')} </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-sky-600 border border-transparent rounded-md shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                disabled={isSubmitting} // Disable button during submission
                            >
                                {isSubmitting ? (
                                    <>
                                        <AiOutlineLoading3Quarters className="animate-spin mr-2" /> Sending...
                                    </>
                                ) : (
                                    translate('send_message')
                                )}
                            </button>
                        </form>
                    </animated.div>
                </div>
            </section>

            {/* Modal */}
            <Transition.Root show={modalIsOpen !== 0} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={() => setModalIsOpen(0)}>
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-transparent px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div
                                            className={classNames('mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full', {
                                                'bg-green-100': modalIsOpen === 1,
                                                'bg-red-100': modalIsOpen === 2,
                                            })}
                                        >
                                            <svg
                                                className={classNames('h-6 w-6', {
                                                    'text-green-600': modalIsOpen === 1,
                                                    'text-red-600': modalIsOpen === 2,
                                                })}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                {modalIsOpen === 1 ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 18L18 6M6 6l12 12" />
                                                )}
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">{modalContent}</div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className={classNames('w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2', {
                                            'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500': modalIsOpen === 1,
                                            'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500': modalIsOpen === 2,
                                        })}
                                        onClick={handleOkClick}
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default Contact;