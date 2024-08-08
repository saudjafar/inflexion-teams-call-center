import { useCallback } from 'react';

const useTrackButtonClick = (buttonName) => {
    return useCallback(() => {
        if (window.fbq) {
            window.fbq('trackCustom', 'ButtonClick', { buttonName });
        }
        console.log(`"${buttonName}" event triggered.`);
    }, [buttonName]);
};

export default useTrackButtonClick;
