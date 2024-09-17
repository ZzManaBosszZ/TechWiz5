import { useState, useEffect } from "react";
function Loading() {
    const [opacity, setOpacity] = useState(1);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let timeoutId;

        if (opacity > 0) {
            timeoutId = setTimeout(() => {
                setOpacity(opacity - 0.05);
            }, 60);
        } else {
            setVisible(false);
        }

        return () => clearTimeout(timeoutId);
    }, [opacity]);
    return (
        visible && (
            <div class="loader-box">
                <div class="loader" style={{ opacity }}>
                    <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
                        <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round" />
                        <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round" />
                        <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round" />
                        <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        )
    );
}
export default Loading;