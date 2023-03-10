import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function EduNode(props) {
	const [image, setImage] = useState(false);

	useEffect(() => {
		if (props.src !== undefined){
			setImage(true);
		}
	}, [props.src]);

    const { t } = useTranslation();

	return (
		<div className="lg:w-1/3 lg:flex justify-center">
            <div>
                <h2 className="text-2xl text-white text-center font-bold mb-2 tracking-widest">{props.school}</h2>
                <p className="text-light text-center">{t(props.place)}</p>
                <p className="text-light text-center">{props.yrs}</p>
                <p className="text-light text-center">{t(props.spec)}</p>
            </div>
            { image && <img src={props.src} alt="logo" loading="lazy" className="h-20 w-auto lg:mx-10 mx-auto lg:mt-0 mt-5" />}
        </div>
    );
}

export default EduNode;
