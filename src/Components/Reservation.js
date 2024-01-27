import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import image from '../Assets/Images/Reservation-Banner-2.jpg';
import './Reservation.css';
import { FaCreditCard } from "react-icons/fa6";
import { FaCheck, FaPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoEnter } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Loading from '../Assets/Images/loading.gif'
import { FaDownload } from "react-icons/fa";
import { PiKeyReturnFill } from "react-icons/pi";

const Reservation = () => {
  const { hotelId, roomId , personnes } = useParams();
  const [Hotel,setHotelDetails] = useState();
  const [Room,setRoomDetails] = useState();
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [bookingDetails,setBookingDetails] = useState();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isCreditCardValid, setisCreditCardValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(
      <>
      <div className='d-flex justify-cotent-center gap-2 align-items-center 6'>
        <img src={Loading} style={{ width: '30px', height: '30px' }}/>
        {content}
        </div>
      </>
    );
    setShowModal(true);
  };
  const openModalWithCheckIcon = (content) => {
    setModalContent(
      <>
      <div className='d-flex gap-2 justify-content-center align-items-center'>
          <FaCheck size={30} className="text-success mr-2" />
          {content}
        </div>
        <div className=''>
          <button className='d-flex gap-2 justify-content-center align-items-center btn btn-outline-primary' onClick={handleDownload}><FaDownload />Télécharger Votre Facture ici</button>
        </div>
        <div className=''>
          <button className='d-flex gap-2 justify-content-center align-items-center btn btn-outline-danger' onClick={handleReturn}><PiKeyReturnFill />Return</button>
        </div>
      </>
    );
    setShowModal(true);
  };
  const handleDownload = () => {
    console.log("Download Facture");
  };
  const handleReturn = () => {
    navigate("/");
  }

  const handlePaymentButtonClick = () => {
    
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const confirmationEmail = document.getElementById('confirmationEmail').value;
    const telephone = document.getElementById('telephone').value;

    const isInputValid = nom && prenom && email && confirmationEmail && telephone;

    setIsFormValid(isInputValid);
    if(isInputValid)
    {
    setShowPaymentDetails(true);
    setIsFormSubmitted(true);
  
    // Use setTimeout to delay the scroll operation
    setTimeout(() => {
      const paymentDetailsSection = document.getElementById('paymentDetailsSection');
      if (paymentDetailsSection) {
        paymentDetailsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
    }
    else 
     {
      window.alert('Veuillez compléter toutes les informations obligatoires.');
     }
  };
  

  useEffect(() => {
    // Fetch hotel details
    axios.get(`http://localhost:8080/hotels/${hotelId}`)
      .then(response => {
        setHotelDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotel details:', error);
      });
  
    // Fetch room details
    axios.get(`http://localhost:8080/hotels/${hotelId}/rooms/${roomId}`)
      .then(response => {
        setRoomDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching room details:', error);
      });
  }, [hotelId, roomId]);


  useEffect(() => {
    // Fetch booking details
    axios.get(`http://localhost:8080/bookings/1`)
      .then(response => {
        console.log(response.data);
  
        // Assuming response.data.checkInDate and response.data.checkOutDate are milliseconds
        const checkInDate = new Date(response.data.checkInDate);
        const checkOutDate = new Date(response.data.checkOutDate);
  
        setBookingDetails({
          checkInDate,
          checkOutDate,
        });
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
      });
  }, []);
  
  const handleCancel = () => {
    navigate(`/hotelroom/${encodeURIComponent(hotelId)}?personnes=${encodeURIComponent(personnes)}`);
  };

  const handlePayment = () => {
    let isInfoValid = false;
    if(selectedPaymentMethod === 'creditCard')
    {
      const card_owner = document.getElementById('card_owner').value;
      const card_number = document.getElementById('card_number').value;
      const card_month = document.getElementById('card_month').value;
      const card_year = document.getElementById('card_year').value;
      const cvv = document.getElementById('cvv').value;

       isInfoValid = card_month && card_number && card_owner && card_year && cvv ;
    }

    console.log(isInfoValid);

    if(isInfoValid || selectedPaymentMethod === 'paypal')
    {
      openModal('Loading...');
    // Gather client information from the form
    const clientData = {
      nom: document.getElementById('nom').value,
      prenom: document.getElementById('prenom').value,
      email: document.getElementById('email').value,
      telephone: document.getElementById('telephone').value,
    };

    console.log("client", JSON.stringify(clientData));
  
    // Create a new client
    axios.post('http://localhost:8080/client', JSON.stringify(clientData), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Extract the client ID from the response
        const clientId = response.data.id;
  
        // Create reservation data
        const reservationData = {
          dateReservation: moment(bookingDetails.checkInDate).format('YYYY-MM-DD'), 
          dateFinReservation: moment(bookingDetails.checkOutDate).format('YYYY-MM-DD'), 
        };
  
        // Make a reservation
        axios.post(`http://localhost:8080/reservations/${roomId}/${clientId}`, reservationData)
          .then(reservationResponse => {
            // Handle successful reservation creation
            console.log('Reservation created:', reservationResponse.data);
            setTimeout(() => {
              // Close loading modal
              setShowModal(false);
          
              // Open success modal with check icon
              openModalWithCheckIcon('Reservation créée avec succès!');
            }, 2500);
          })
          .catch(reservationError => {
            console.error('Error creating reservation:', reservationError);
            window.alert('Error creating reservation. Please try again.');
          });
      })
      .catch(clientError => {
        console.error('Error creating client:', clientError);
        window.alert('Error creating client. Please try again.');
      });
    }
    else
    {
      window.alert('Veuillez compléter toutes les informations obligatoires.');
    }
  };
  

  

  return (
    <div className="container mt-5">
      <div className="card-group border shadow-lg p-3 mb-5 bg-white rounded">
        {/* Image Card */}
        <div className="card border-2">
          {image && (
          <img src={image} alt="Sample photo" className="card-img-top Reservation-image" />
          )
          }
        </div>

        {/* Reservation Form Card */}
        <div className="card border-0">
          <div className="card-body d-flex flex-column justify-content-between">
            <div className='align-items-start'>
            <h3 className="mb-5 title">Informations de contact</h3>

            <div className="mb-4 youare">
              <p>Je suis</p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="jeSuis"
                  id="monsieur"
                  value="monsieur"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="monsieur">
                  Monsieur
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="jeSuis"
                  id="madame"
                  value="madame"
                />
                <label className="form-check-label" htmlFor="madame">
                  Madame
                </label>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <div className="form-outline">
                  <label className="d-flex form-label" htmlFor="prenom">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    placeholder="prénom"
                    className="form-control form-control-lg CustomInput"
                    disabled={isFormSubmitted}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-outline">
                  <label className="d-flex form-label" htmlFor="nom">
                    Nom
                  </label>
                  <input  
                    type="text"
                    id="nom"
                    placeholder="nom"
                    className="form-control form-control-lg CustomInput"
                    disabled={isFormSubmitted}
                  />
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
                      <label className="d-flex form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder='Ex : example@domain.com'
                          className="form-control form-control-lg CustomInput"
                          disabled={isFormSubmitted}
                        />
                      </div>
  
                      <div className="form-outline mb-4">
                      <label className="d-flex form-label" htmlFor="confirmationEmail">
                          Confirmation de l'Email
                        </label>
                        <input
                          type="email"
                          id="confirmationEmail"
                          placeholder="Confirmer l'e-mail"
                          className="form-control form-control-lg CustomInput"
                          disabled={isFormSubmitted}
                        />
                        
                      </div>
  
                      <div className="form-outline mb-4">
                      <label className="d-flex form-label" htmlFor="telephone">
                        N° de téléphone 
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <select className="form-select select-selector" id="countryCode">
                              <option value="+1">+212 Maroc</option>
                              <option value="+355">+355 Albania</option>
                              <option value="+376">+376 Andorra</option>
                              <option value="+43">+43 Austria</option>
                              <option value="+32">+32 Belgium</option>
                              <option value="+387">+387 Bosnia and Herzegovina</option>
                              <option value="+359">+359 Bulgaria</option>
                              <option value="+385">+385 Croatia</option>
                              <option value="+357">+357 Cyprus</option>
                              <option value="+420">+420 Czech Republic</option>
                              <option value="+45">+45 Denmark</option>
                              <option value="+372">+372 Estonia</option>
                              <option value="+358">+358 Finland</option>
                              <option value="+33">+33 France</option>
                              <option value="+49">+49 Germany</option>
                              <option value="+30">+30 Greece</option>
                              <option value="+36">+36 Hungary</option>
                              <option value="+354">+354 Iceland</option>
                              <option value="+353">+353 Ireland</option>
                              <option value="+39">+39 Italy</option>
                              <option value="+371">+371 Latvia</option>
                              <option value="+423">+423 Liechtenstein</option>
                              <option value="+370">+370 Lithuania</option>
                              <option value="+352">+352 Luxembourg</option>
                              <option value="+389">+389 North Macedonia</option>
                              <option value="+356">+356 Malta</option>
                              <option value="+377">+377 Monaco</option>
                              <option value="+382">+382 Montenegro</option>
                              <option value="+31">+31 Netherlands</option>
                              <option value="+47">+47 Norway</option>
                              <option value="+48">+48 Poland</option>
                              <option value="+351">+351 Portugal</option>
                              <option value="+40">+40 Romania</option>
                              <option value="+7">+7 Russia</option>
                              <option value="+378">+378 San Marino</option>
                              <option value="+381">+381 Serbia</option>
                              <option value="+421">+421 Slovakia</option>
                              <option value="+386">+386 Slovenia</option>
                              <option value="+34">+34 Spain</option>
                              <option value="+46">+46 Sweden</option>
                              <option value="+41">+41 Switzerland</option>
                              <option value="+90">+90 Turkey</option>
                              <option value="+380">+380 Ukraine</option>
                              <option value="+44">+44 United Kingdom</option>
                            </select>
                          </div>
                          <input
                            type="tel"
                            id="telephone"
                            placeholder="Mon téléphone"
                            className="form-control form-control-lg CustomInput"
                            disabled={isFormSubmitted}
                          />
                        </div>
                      </div>

            <div className="d-flex flex-column justify-content-center pt-4">
              <h6 className='title'>Votre Reservation :</h6>
              <div className='card panier'>
                <div className='d-flex flex-column'>
                  <div className=''>
                    <label className='d-flex gap-2 align-items-center panier-hotel'><FaHotel size={25} /> Hotel {Hotel?.nom}</label>
                    <label className='d-flex gap-2 align-items-center panier-hotel pt-2'><MdOutlineBedroomParent size={25} /> Room {Room?.nom}</label>
                  </div>
                <div className='d-flex justify-content-between align-items-end mt-3'>
                  <div className='d-flex flex-column'>
                  <label className='d-flex align-items-c  enter gap-2 panier-date'>
  <IoEnter /> Check in : {bookingDetails && bookingDetails.checkInDate instanceof Date ? bookingDetails.checkInDate.toLocaleDateString() : 'N/A'}
</label>
<label className='d-flex align-items-center gap-2 panier-date'>
  <IoLogOutSharp />Check out : {bookingDetails && bookingDetails.checkOutDate instanceof Date ? bookingDetails.checkOutDate.toLocaleDateString() : 'N/A'}
</label>
                  </div>
                  <label className='panier-prix'>{Room?.prix} DH</label>
                </div>
                </div>
              </div>
            </div>
            </div>


            <div className='d-flex justify-content-end align-items-center gap-3'>
            <a className='customLink' onClick={handleCancel}>
              Annuler
            </a>
            <button className='customButton' onClick={handlePaymentButtonClick}>
              Je passe au paiement
            </button>
            </div>

          </div>
        </div>
      </div>

    { showPaymentDetails && (
    <div id="paymentDetailsSection" className="container py-5">
    <div className="card border shadow-lg">
    <h3 className="m-5 title">Details de Paiement</h3>
            <div className="card-header bg-white shadow-sm pt-4 pl-2 pr-2 pb-2 border-0">
            <label className="form-check-label mb-2" htmlFor="madame">
                  Select Payment Method
                </label>
              <ul className="nav bg-light nav-pills rounded nav-fill mb-3">
                <li className="nav-item">
                  <a data-toggle="pill" href="#credit-card"  className={`nav-link ${selectedPaymentMethod === 'creditCard' ? 'active' : ''}`} onClick={() => setSelectedPaymentMethod('creditCard')}>
                  <FaCreditCard />
                  Credit Card
                  </a>
                </li>
                <li className="nav-item">
                  <a data-toggle="pill" href="#paypal" className={`nav-link ${selectedPaymentMethod === 'paypal' ? 'active' : ''}`} onClick={() => setSelectedPaymentMethod('paypal')} >
                  <FaPaypal />Paypal
                  </a>
                </li>
              </ul>
           </div>
           {selectedPaymentMethod === 'creditCard' && (
           <div className='d-flex flex-column gap-2 p-3'>

            <div className='border-bottom'>

            <div className='d-flex flex-column form-group mb-1'>
            <label className='d-flex border-0 m-2'><h6>Card Owner</h6></label>
            <input type="text" name="username" id="card_owner" placeholder="Card Owner Name" required className="payement-input" />
            </div>

            <div className='d-flex flex-column form-group mb-1'>
            <label className='d-flex border-0 m-2'><h6>Card Number</h6></label>
            <div className='d-flex'>
            <input type="text" name="username" id="card_number" placeholder="Valid Card Number" required className="payement-input w-100" />
            <span className='d-flex justify-content-center align-items-center gap-2 span-icons'><FaCcVisa size={35} /><FaCcMastercard size={35}/></span>
            </div>
            </div>

            <div className='d-flex justify-content-center gap-5'>
            <div className="form-group">
                        <label>
                          <span className="hidden-xs"><h6>Expiration Date</h6></span>
                        </label>
                        <div className="input-group">
                          <input type="number" id="card_month" placeholder="MM" name="" className="form-control" required />
                          <input type="number" id="card_year" placeholder="YY" name="" className="form-control" required />
                        </div>
            </div>

            <div className="form-group mb-4">
                        <label title="Three digit CV code on the back of your card"><h6>CVV</h6></label>
                        <input type="text" id="cvv" required className="form-control" />
            </div>

            </div>
            </div>
            <button className='btn btn-outline-primary pay-button' onClick={handlePayment}>
              Confirmer le paiement
            </button>

           </div>
           )}
           {selectedPaymentMethod === 'paypal' && (
                <div className='d-flex flex-column gap-2 p-3'>
                  <label className='d-flex border-0 m-2'><h6>Select your paypal account type</h6></label>
                  <div className="d-flex mb-4 youare">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paypal-type"
                        id="Domestic"
                        value="Domestic"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="Domestic">
                        Domestic
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paypal-type"
                        id="International"
                        value="International"
                      />
                      <label className="form-check-label" htmlFor="International">
                        International
                      </label>
                    </div>
                  </div>
                  <button className='btn btn-outline-primary pay-button' onClick={handlePayment}>
                    Se connecter à PayPal
                  </button>
                </div>
              )}
    </div>
    </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Body className='d-flex flex-column gap-3 justify-content-center align-items-center h6' >{modalContent}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={() => setShowModal(false)}>
          Fermer
        </button>
      </Modal.Footer>
    </Modal>

    </div>
  );
};

export default Reservation;
