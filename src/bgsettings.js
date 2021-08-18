const bgsettings = {
    particles: {
        number: {
            value: 3000
        },
        color: {
            value: "#000000"
        },
        shape: {
            type: "circle",
                stroke: {
                width: 1,
                    color: "#ccc"
            }
        },
        opacity: {
            value: 0.2,
                random: true,
                    anim: {
                enable: false,
                    speed: 1
            }
        },
        size: {
            value: 5,
                random: false,
                    anim: {
                enable: false,
                    speed: 30
            }
        },
        line_linked: {
            enable: true,
                distance: 120,
                    color: "#000000",
                        width: 1
        },
        move: {
            enable: true,
                speed: 2,
                    direction: "none",
                        straight: false
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                    mode: "repulse"
            },
            onclick: {
                enable: true,
                    mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 50,
                    duration: 0.4
            },
            bubble: {
                distance: 100,
                    size: 10
            }
        }
    }
};

export default bgsettings