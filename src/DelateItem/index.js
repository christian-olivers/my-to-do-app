import React from 'react';
import './DelateItem.css'

function DelateItem() {
    return (
        <label>
            <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Eliminar tarea</title>
                <path fill="none"/>
                <path className='Trash' fill=''d="m6.187 8h11.625l-.695 11.125c-.067 1.055-.94 1.875-1.997 1.875h-6.24c-1.057 0-1.93-.82-1.997-1.875zm12.813-3v2h-14v-2h3v-1c0-1.105.895-2 2-2h4c1.105 0 2 .895 2 2v1zm-9 0h4v-1h-4z"/>
            </svg>
        </label>
    );
}

export { DelateItem };