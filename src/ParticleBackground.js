import React from "react";
import Particles from "react-particles-js"
import bgsettings from "./bgsettings"

export default function ParticleBackground() {
    return (
        <Particles params={bgsettings}></Particles>
    );
}