import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await supabase
                    .from('Posts')
                    .select()
                    .order('created_at', { ascending: true });

                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error.message);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                    posts.map((post, index) =>
                        <Card
                            key={post.id}
                            id={post.id}
                            name={post.name}
                            character={post.character}
                            play_style={post.play_style}
                            characterImage={getCharacterImageUrl(post.character)} // Pass character image URL
                        />
                    ) : <h2>{'There are no profiles!'}</h2>
            }
        </div>
    )
}

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

export default ReadPosts;
