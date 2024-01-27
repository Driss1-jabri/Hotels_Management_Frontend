import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Hairdry from '../Assets/hairdryer.png';
import UmbrellaBeach from '../Assets/chair.png'
import {
    FaHotTub, FaSoap, FaShower, FaVolumeUp, FaTableTennis,
    FaBaby, FaFan, FaThermometerHalf, FaWifi,
    FaRefrigerator, FaTable, FaDoorOpen, FaGlobe,
    FaFireAlt, FaSwimmingPool, FaLuggageCart, FaClock, FaKey,
    FaStar, FaExclamationTriangle, FaFireExtinguisher, FaFirstAid,
    FaCouch, FaSun, FaHome, FaBurn, FaPaw, FaBackpack, FaBed,
    FaChair, FaHiking, FaWarehouse, FaClipboardList,
    FaCog, FaUserShield
  } from 'react-icons/fa';  
import { GiWashingMachine } from 'react-icons/gi';
import { BiCloset } from "react-icons/bi";
import { MdOutlineIron, MdOutlineDryCleaning } from 'react-icons/md';
import { FaHouseChimneyCrack } from "react-icons/fa6";
import { MdDinnerDining } from "react-icons/md";
import { RiParkingBoxLine } from "react-icons/ri";

const AmenitiesPopup = ({ show, handleClose }) => {
  const iconSize = 20; // You can adjust this value

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Services Additionnels</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '600px', overflowY: 'auto' }}>

          <h4>Salle de bain</h4>
          <div style={{ fontSize: '1.2em' }}>
          <p><FaHotTub size={iconSize} /> Baignoire</p>
          <p><img src={Hairdry} style={{ width: '19px' }} alt="Hairdryer" /> Sèche-cheveux</p>
          <p><FaSoap size={iconSize} /> Shampooing</p>
          <p><FaHotTub size={iconSize} /> Eau chaude</p>
          <p><FaShower size={iconSize} /> Gel douche</p>
          </div>

          <h4>Chambre et linge</h4>
          <div style={{ fontSize: '1.2em' }}>
          <p><GiWashingMachine size={iconSize} /> Lave-linge</p>
          <p><FaClipboardList size={iconSize} /> Équipements de base</p>
          <p><FaBed size={iconSize} /> Serviettes, draps, savon et papier toilette</p>
          <p><FaChair size={iconSize} /> Cintres</p>
          <p><FaClipboardList size={iconSize} /> Draps</p>
          <p><FaBed size={iconSize} /> Oreillers et couvertures supplémentaires</p>
          <p><MdOutlineIron size={iconSize} /> Fer à repasser</p>
          <p><MdOutlineDryCleaning size={iconSize} /> Étendoir à linge</p>
          <p><BiCloset size={iconSize} /> Espace de rangement pour les vêtements : placard</p>
          </div>

          <h4>Divertissement</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><FaVolumeUp size={iconSize} /> Système audio</p>
          <p><FaTableTennis size={iconSize} /> Table de ping pong</p>
        </div>

        <h4>Famille</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><FaBaby size={iconSize} /> Lit pour bébé</p>
          <p><FaBaby size={iconSize} /> Lit parapluie</p>
          <p><FaChair size={iconSize} /> Chaise haute</p>
        </div>

        <h4>Chauffage et climatisation</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><FaThermometerHalf size={iconSize} /> Chauffage</p>
        </div>

        <h4>Cheminée</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><FaHouseChimneyCrack  size={iconSize} /> Cheminée</p>
        </div>

        <h4>Ventilation</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><FaFan size={iconSize} /> Ventilateur de plafond</p>
          <p><FaFan size={iconSize} /> Ventilateurs portables</p>
        </div>

        <h4>Sécurité à la maison</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><FaFireExtinguisher size={iconSize} /> Extincteur</p>
          <p><FaFirstAid size={iconSize} /> Kit de premiers secours</p>
        </div>

        <h4>Internet et bureau</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><FaWifi size={iconSize} /> Wifi</p>
        </div>


        <h4>Extérieur</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><FaSun size={iconSize} /> Patio ou balcon</p>
          <p><FaHome size={iconSize} /> Arrière-cour</p>
          <p><FaBurn size={iconSize} /> Espace ouvert généralement recouvert d'herbe</p>
          <p><FaFireAlt size={iconSize} /> Brasero</p>
          <p><MdDinnerDining  size={iconSize} /> Mobilier d'extérieur</p>
          <p><FaHiking size={iconSize} /> Hamac</p>
          <p><MdDinnerDining  size={iconSize} /> Espace repas en plein air</p>
          <p><FaFireAlt size={iconSize} /> Barbecue</p>
          <p><img src={UmbrellaBeach} style={{ width: '19px' }} /> Chaises longues</p>
        </div>

        <h4>Parking et installations</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><RiParkingBoxLine size={iconSize} /> Parking gratuit sur place</p>
          <p><FaSwimmingPool size={iconSize} /> Piscine Privé</p>
          <p><FaWarehouse size={iconSize} /> Logement de plain-pied</p>
          <p><FaUserShield size={iconSize} /> Pas d'escaliers dans le logement</p>
        </div>

        <h4>Services</h4>
        <div style={{ fontSize: '1.2em' }}>
          <p><FaPaw size={iconSize} /> Animaux acceptés</p>
          <p><FaUserShield size={iconSize} /> Les animaux d'assistance sont toujours autorisés</p>
          <p><FaLuggageCart size={iconSize} /> Dépôt de bagages autorisé</p>
          <p><FaClock size={iconSize} /> Pour le confort des voyageurs en cas d'arrivée anticipée ou de départ tardif</p>
          <p><FaCog size={iconSize} /> Séjours longue durée autorisés</p>
          <p><FaCog size={iconSize} /> Séjours de 28 jours ou plus autorisés</p>
          <p><FaKey size={iconSize} /> Clés remises par l'hôte</p>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="btn btn-primary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AmenitiesPopup;
