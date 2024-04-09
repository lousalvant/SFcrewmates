import React, { useState } from 'react';
import './CreatePost.css';
import { supabase } from '../client';

const CreatePost = () => {
    const [post, setPost] = useState({ name: '', character: '', play_style: '', description: '' });
    const [characterImage, setCharacterImage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Set character image URL based on selected character
        if (name === 'character') {
            setCharacterImage(getCharacterImageUrl(value));
        }
    };

    const getCharacterImageUrl = (character) => {
        switch (character) {
            case 'Ryu':
                return 'https://sfgalleries.net/art/sf2/sf2ww/series1/ryu.gif';
            case 'Ken':
                return 'https://sfgalleries.net/art/sf2/sf2ww/series1/ken.gif';
            case 'E. Honda':
                return 'https://sfgalleries.net/art/sf2/sf2ww/series1/ehonda.gif';
            case 'Chun-Li':
                return 'https://sfgalleries.net/art/sf2/sf2ww/series1/chunli.gif';
            case 'Blanka':
                return 'https://sfgalleries.net/art/sf2/sf2ww/series1/blanka.gif';
            case 'Guile':
                return 'https://sfgalleries.net/art/sf2/sf2ww/series1/guile.gif';
            case 'Dhalsim':
                return 'https://sfgalleries.net/art/sf2/sf2ww/series1/dhalsim.gif';
            // Add image URLs for other characters
            default:
                return '';
        }
    };

    const createPost = async (event) => {
        event.preventDefault();

        await supabase.from('Posts').insert(post);

        alert('Profile successfully created!');
        // Clear input fields after submission
        setPost({ name: '', character: '', play_style: '', description: '' });
        setCharacterImage('');
        window.location = "http://localhost:3000/";
    };

    return (
        <div className='form-container'>
            <form onSubmit={createPost}>
                <div className='name-container'>
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" id="name" name="name" value={post.name} onChange={handleChange} />
                    <br />
                    <br />
                </div>

                <div className='character-container'>
                    <label htmlFor="character">Character:</label> <br />
                    <select id="character" name="character" value={post.character} onChange={handleChange}>
                        <option value="">Select Character</option>
                        <option value="Ryu">Ryu</option>
                        <option value="Ken">Ken</option>
                        <option value="E. Honda">E. Honda</option>
                        <option value="Chun-Li">Chun-Li</option>
                        <option value="Blanka">Blanka</option>
                        <option value="Guile">Guile</option>
                        <option value="Dhalsim">Dhalsim</option>
                    </select>
                    {characterImage && <img src={characterImage} alt="Character" />}
                    <br />
                    <br />
                </div>

                <div className='playstyle-container'>
                    <label>Play Style:</label> <br />
                    <label>
                        <input type="radio" name="play_style" value="All-around" checked={post.play_style === 'All-around'} onChange={handleChange} />
                        All-around
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="play_style" value="Rushdown" checked={post.play_style === 'Rushdown'} onChange={handleChange} />
                        Rushdown
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="play_style" value="Zoning" checked={post.play_style === 'Zoning'} onChange={handleChange} />
                        Zoning
                    </label>
                    <br />
                    <br />
                </div>

                <div className='description-container'>
                    <label htmlFor="description">What do you have to say?</label> <br />
                    <textarea id="description" name="description" value={post.description} onChange={handleChange} />
                    <br />
                    <br />
                </div>

                <button type="submit">Create Profile</button>
            </form>
        </div>
    );
};

export default CreatePost;
