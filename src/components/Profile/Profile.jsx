import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
// import AboutSection from '../../AboutSection/AboutSections';
// import ButtonGroup from '../../ButtonGroup/ButtonGroups'
// import FormCardSection from '../../FormCardSection/FormCardSections'
// import SearchTabFormSection from '../../SearchTabFormSection/SearchTabFormSections';
import ProfileForm from './ProfileForm';
// import BannerSection from '../BannerSection/BannerSections';
// import InsuranceThumbnailSection from '../InsuranceThumbnailSection/InsuranceThumbnailSections'

class Profile extends Component {
    render() {
        return (
            <div>
                
                <ProfileForm />
                <br/>
            </div>
        );
    }
}

export default Profile;