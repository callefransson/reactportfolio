import React, { useEffect, useState } from 'react';

const ChangeBackgroundColor = () => {
    const [color, setColor] = useState();
    const [isColorChanged, setIsColorChanged] = useState(false);

    useEffect(() => {
        const mainElement = document.querySelector('main');
        mainElement.style.backgroundColor = color;
    }, [color]);

    const changeColor = () => {
        if (isColorChanged) {
            setColor('#0d1114');
        } else {
            setColor('#273036');
        }
        setIsColorChanged(!isColorChanged);
    };

    return (
        <> 
            <section className="container-fluid">
                <h2 className="display-2 text-white text-center pt-5" onClick={changeColor}>Mina senaste projekt</h2>
            </section>
        </>
    );
}

export default ChangeBackgroundColor;
