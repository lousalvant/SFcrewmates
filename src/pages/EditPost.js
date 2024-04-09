import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPost = ({data}) => {
    const { id } = useParams();
    const [post, setPost] = useState({ id: null, name: '', character: '', play_style: '', description: '' });
    const [characterImage, setCharacterImage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost(prev => ({
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

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .update({ name: post.name, character: post.character, play_style: post.play_style, description: post.description})
            .eq('id', id);
        window.location = "/";
    };

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);
        window.location = "http://localhost:3000/";
    };

    return (
        <div>
            <form onSubmit={EditPost}>
                <label htmlFor="name">Name:</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} />
                <br />
                <br />

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

                <label htmlFor="description">Description:</label> <br />
                <textarea id="description" name="description" value={post.description} onChange={handleChange} />
                <br />
                <br />

                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    );
};

export default EditPost;
