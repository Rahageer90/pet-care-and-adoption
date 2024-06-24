import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setUser(response.data.user);
                setName(response.data.user.name);
                setAddress(response.data.user.address);
                setContactNumber(response.data.user.contact_number);
            } catch (error) {
                setError(error.response.data.message);
            }
        };

        fetchProfile();
    }, []);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/update-profile', {
                name,
                address,
                contact_number: contactNumber
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setUser(response.data.user);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    if (!user) return null;

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <form onSubmit={handleUpdateProfile}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
                {error && <p className="error">{error}</p>}
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
