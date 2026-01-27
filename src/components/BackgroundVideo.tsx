const BackgroundVideo = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-5 overflow-hidden bg-[#131124]">
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    background: 'radial-gradient(circle at 20% 30%, #8c3193 0%, transparent 50%), radial-gradient(circle at 80% 70%, #532b76 0%, transparent 50%), radial-gradient(circle at 50% 50%, #252358 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    animation: 'pulse-bg 15s ease-in-out infinite alternate'
                }}
            />
            <style>
                {`
                @keyframes pulse-bg {
                    0% { transform: scale(1) translate(0, 0); }
                    50% { transform: scale(1.1) translate(2%, 2%); }
                    100% { transform: scale(1) translate(0, 0); }
                }
                `}
            </style>
            <div className="absolute inset-0 bg-[#131124]/40"></div>
        </div>
    );
};

export default BackgroundVideo;
