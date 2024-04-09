import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'; // Import Supabase client instance

// Function to get character image URL based on character name
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

const CharacterInfoPage = () => {
    const { id } = useParams();
    const [characterInfo, setCharacterInfo] = useState(null);

    useEffect(() => {
        const fetchCharacterInfo = async () => {
            try {
                const { data, error } = await supabase
                    .from('Posts')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) {
                    throw error;
                }

                setCharacterInfo(data);
            } catch (error) {
                console.error('Error fetching character info:', error.message);
            }
        };

        fetchCharacterInfo();
    }, [id]);

    return (
        <div>
            <h2>Character Profile:</h2>
            {characterInfo ? (
                <div>
                    <h3>{characterInfo.name}</h3>
                    <p>Character: {characterInfo.character}</p>
                    <p>Play Style: {characterInfo.play_style}</p>
                    <img src={getCharacterImageUrl(characterInfo.character)} alt={characterInfo.character} />
                    <p>Description: {characterInfo.description}</p>
                    {/* Add more details as needed */}
                    
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CharacterInfoPage;
