export const CSS = `.gc-dialog {
    z-index: 4000;
}

.gc-alert {
    z-index: 4500;
}
.gc-menu {
    z-index: 3000;
}
.gc-dropdown {
    z-index: 2800;
}
.gc-normal {
    z-index: 2500;
}

@keyframes fade-out-animation {
    to {
        opacity: 0;
    }
}
@keyframes fade-in-animation {
    to {
        opacity: 1;
    }
}

.fade-out {
    opacity: 1;
    animation: fade-out-animation 2s forwards 500ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

.fade-in {
    opacity: 0;
    animation: fade-in-animation 2s forwards 500ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black; /* Optional underline for clarity */
}

.tooltip .tooltiptext {
    visibility: hidden;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    opacity: 0;
    transition: opacity 2s;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
.tooltiptext-bottom::after {
    top: 85%;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
}

.tooltiptext-up::after {
    top: -16%;
    left: 45%;
    transform: translateX(-50%) rotate(360deg);
}

.tooltiptext-right::after {
    top: 40%;
    left: 104%;
    transform: translateX(-50%) rotate(90deg);
}

.tooltiptext-left::after {
    top: 40%;
    left: -3%;
    transform: translateX(-50%) rotate(270deg);
}

.tooltiptext::after {
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #f2f2f2 transparent;
}

[class*='gc-zoomable-zoom-lens-'] {
    position: absolute;
    border-radius: 50%;
    z-index: 20;
    border: 10px solid #fff;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
    cursor: crosshair;

    display: none;
}

[class*='gc-zoomable-']:hover [class*='gc-zoomable-zoom-lens-'] {
    display: block;
}

.progress-bar-container {
    height: 14px;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.progress-bar {
    position: absolute;
    top: 0;
    height: 100%;
    transition: width 1s ease-in-out;
}

.progress-text {
    position: absolute;
    top: -4px;
    left: 45%;
    font-size: 13px;
    margin-left: 10px;
    font-weight: bold;
}
@keyframes move-progress-bar {
    from {
        transform: translateX(-10%);
    }

    to {
        transform: translateX(110%);
    }
}

.move-progress {
    animation: move-progress-bar 2s forwards 10ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
}

.slide-container {
    position: relative;
}

.slide-item {
    position: relative;
    width: 100%;
    height: 100%;
}
.slide-item img {
    position: relative;
    width: 100%;
    height: 100%;
    border: none;
    object-fit: contain;
}
.step-container {
    height: 60px;
    position: relative;
}

.timeline_rope {
    position: absolute;
    border: 1px solid;
    height: 100%;
    left: 28%;
    z-index: 2;
    top: 20%;
}

[class*='gc-context-menu-pop-'] {
    display: none;
    position: absolute;
    padding: 5px;
}
`;

export const LoadCss = () => {
    const style = document.createElement('style');
    style.innerHTML = CSS;
    document.head.appendChild(style);
};
