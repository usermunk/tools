"use strict";

(() => {
    const SVG = require('../../src/svg'),
        Optimize = require('../../src/optimize/svgo');

    const fs = require('fs'),
        chai = require('chai'),
        expect = chai.expect,
        should = chai.should();

    describe('Testing SVGO optimization', () => {
        it('optimizing bpmn-default-flow.svg', done => {
            let svg = new SVG(fs.readFileSync('tests/files/bpmn-default-flow.svg', 'utf8'));

            Optimize(svg).then(() => {
                expect(svg.toMinifiedString()).to.be.equal('<svg xmlns="http://www.w3.org/2000/svg" height="2048" width="2048"><path d="M1866.407 206.692s-585.454 298.724-882.844 438.406c63.707 58.178 122.963 120.927 184.437 181.407-302.353 306.387-604.71 612.769-907.062 919.156 22.172 21.16 44.327 42.309 66.5 63.469 302.352-306.388 604.71-612.738 907.062-919.125 61.588 61.37 122.828 123.086 184.438 184.437 158.845-312.83 447.469-867.75 447.469-867.75z" style="text-indent:0;text-align:start;line-height:normal;text-transform:none;block-progression:tb;marker:none;-inkscape-font-specification:Sans" font-weight="400" color="#000" overflow="visible" font-family="Sans"/><path d="M-18.2 1050.713h5.931" style="isolation:auto;mix-blend-mode:normal" color="#000" overflow="visible" fill="none" stroke-width=".909" transform="matrix(125.07186 0 0 96.75291 2539.419 -100217.58)" stroke="#000"/></svg>');
                done();
            }).catch(err => {
                done(err);
            });
        });

        it('optimizing iwwa-star-o.svg', done => {
            let svg = new SVG(fs.readFileSync('tests/files/iwwa-star-o.svg', 'utf8'));

            Optimize(svg).then(() => {
                expect(svg.toMinifiedString()).to.be.equal('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="#1D1D1B" d="M31.293 37.879a.503.503 0 0 1-.274-.081L20 30.601 8.98 37.798a.5.5 0 0 1-.756-.55l3.437-12.704-10.247-8.257a.499.499 0 0 1 .288-.889l13.146-.656 4.686-12.298c.146-.389.787-.389.934 0l4.685 12.298 13.146.656a.5.5 0 0 1 .288.889L28.34 24.544l3.437 12.704a.5.5 0 0 1-.484.631zM20 29.505a.5.5 0 0 1 .273.081l10.194 6.657-3.18-11.753a.503.503 0 0 1 .169-.521l9.479-7.639-12.16-.606a.5.5 0 0 1-.441-.321L20 4.026l-4.335 11.377a.496.496 0 0 1-.441.321l-12.16.606 9.48 7.639a.502.502 0 0 1 .169.521l-3.18 11.753 10.194-6.657a.5.5 0 0 1 .273-.081z"/></svg>');
                done();
            }).catch(err => {
                done(err);
            });
        });

        it('optimizing u1F3CC-golfer.svg', done => {
            let svg = new SVG(fs.readFileSync('tests/files/u1F3CC-golfer.svg', 'utf8'));

            Optimize(svg).then(() => {
                expect(svg.toMinifiedString()).to.be.equal('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 509.04 509.04"><path fill="#BFBCAF" d="M437.734 119.681s-.377-2.186-2.449-3.958c-.982-.94-2.419-1.745-4.116-2.451-1.781-.621-3.588-1.378-5.562-1.967-3.865-1.261-8.055-2.197-11.384-2.712l-4.12-.525-1.664-.098a6.674 6.674 0 0 0-.693 0l-.026.003L82.32 1.291a4.408 4.408 0 0 0-5.582 2.824 4.428 4.428 0 0 0 2.824 5.582l322.697 105.795.023.396.525 4.12c.515 3.329 1.451 7.52 2.712 11.384.589 1.974 1.345 3.781 1.967 5.562.706 1.697 1.511 3.134 2.451 4.117 1.772 2.072 3.958 2.449 3.958 2.449 2.235.376 4.653.407 7.012 0 11.23-1.936 18.764-12.609 16.827-23.839z"/><path fill="#006652" d="M277.659 136.692c-5.359-6.384-41.094-15.949-45.36-6.743-4.266 9.206 19.984 16.84 19.984 16.84l25.377-2.975v-7.122z"/><path fill="#FFD3B6" d="M134.627 8.707c-6.399-4.02-14.846-2.091-18.866 4.308l-.227.362-.649 1.12a41.42 41.42 0 0 0-1.712 3.582c-.331.734-.613 1.553-.94 2.404a52.059 52.059 0 0 0-.913 2.712c-.268.958-.575 1.93-.803 2.951a49.633 49.633 0 0 0-.672 3.087c-.4 2.079-.681 4.19-.833 6.186-.095.988-.089 1.976-.067 2.906.013.925.086 1.811.2 2.637.105.822.252 1.575.386 2.24.163.674.331 1.258.48 1.737.158.481.285.854.397 1.111l.158.391c.352.866.876 1.71 1.555 2.432.272.289.565.544.868.783l2.16 6.314c1.533 4.477 22.324-1.344 20.398-6.975l-3.045-8.904a10.757 10.757 0 0 0-.808-1.788c.156-.235.305-.471.465-.706.867-1.319 1.767-2.614 2.585-3.819l2.22-3.245 1.469-2.176.205-.319.096-.14.118-.191.146-.237c3.936-6.385 1.995-14.764-4.371-18.763z"/><path fill="#68442A" d="M208.849 52.817a5.38 5.38 0 0 1-1.68-.27L79.262 10.614A5.389 5.389 0 1 1 82.619.373l127.907 41.934a5.389 5.389 0 0 1-1.677 10.51z"/><path fill="#BFBCAF" d="M291.176 489.647c-27.584-.374-3.958-39.514-2.85-43.111.418-5.566-2.878-5.559 2.737-8.042 7.388-3.267 15.02-11.435 22.088-1.088 7.068 10.347-1.29 18.394-1.198 25.218.153 11.306-11.314 27.151-20.777 27.023zm-112.452-2.169a12.132 12.132 0 0 0-.276 1.655c-.747 7.786 5.944 15.62 14.945 17.498 9.001 1.878 16.904-2.911 17.651-10.697l.385-4.012c.298-2.219-1.995-18.134-1.995-18.134-.642-4.873-4.51-9.595-10.14-11.712-7.408-2.786-15.06-.006-17.091 6.209 0 0-1.761 12.638-2.473 15.153l-.96 3.858-.046.182z"/><path fill="#C49270" d="M308.424 434.338c-3.079-12.655-6.211-20.307-9.474-32.808l-4.704-18.626c-.711-3.018-1.494-6.113-2.076-8.992-.314-1.462-.645-2.949-.841-4.233-.241-1.3-.548-3.076-.326-2.599.03-.165.005.29-.031-.357l-.04-1.23s.016.024.06.98l.001-.04-6.965-75.358v-7.456l-46.459-20.737-15.63-8.873h-.001l-6.419-1.684a29.079 29.079 0 0 0-4.914-.807c-15.842-1.222-29.676 10.63-30.898 26.472-1.123 14.566-2.025 29.172-3.331 43.706l-3.895 43.605-.366 4.103v.012s3.362 92.725 3.432 93.644c.781 10.219 37.786 14.847 37.005 4.629-.261-3.414.82-28.296.881-31.711-.11-3.414.18-6.828.309-10.242.344-6.828 1.057-13.656 1.567-20.484 0 0-1.666-69.66 12.746-69.66s13.162 37.751 18.91 52.116c5.748 14.365 8.896 17.238 11.85 23.27 5.659 12.173 11.61 24.004 18.433 35.653l.147.26c5.961 15.62 35.624 6.332 31.029-12.553z"/><path fill="#00B89C" d="M287.629 281.656c-1.318 11.847-24.033 19.043-58.747 15.18s-55.292-15.875-53.974-27.722c1.318-11.847 24.033-19.043 58.747-15.18 34.714 3.862 55.292 15.875 53.974 27.722z"/><ellipse transform="rotate(6.35 244.136 174.213)" fill="#00B89C" cx="244.18" cy="174.248" rx="52.927" ry="34.461"/><ellipse transform="rotate(6.35 254.24 150.382)" fill="#FFD3B6" cx="254.287" cy="150.412" rx="16.993" ry="8.497"/><path fill="#008E76" d="M228.614 139.686a6.004 6.004 0 0 0 .215 5.597l12.032 23.111 5.451-11.376a6.007 6.007 0 0 0 .068-5.042s-9.981-22.312-11.545-23.061c-1.563-.748-6.221 10.771-6.221 10.771z"/><path fill="#FFD3B6" d="M309.256 81.603c-.072-.019-.144-.028-.216-.045l.471-1.205c5.945-22.692-7.655-52.267-30.355-58.214-22.692-5.945-45.884 13.99-51.829 36.682l-.179 1.274c-.026-.007-.05-.017-.076-.024-4.973-1.303-10.066 1.677-11.37 6.652s1.674 10.07 6.647 11.372a9.317 9.317 0 0 0 2.228.295l-.391 2.786c-4.413 16.845 2.642 33.989 16.32 43.181a13.172 13.172 0 0 0-.772 3.167l-2.337 21.008 33.494 3.727 2.337-21.008c.058-.522.076-1.038.073-1.551 13.252-3.658 24.255-14.068 27.99-28.322l1.037-2.652a9.27 9.27 0 0 0 2.205.902c4.973 1.303 10.066-1.677 11.37-6.652 1.304-4.976-1.674-10.07-6.647-11.373z"/><path fill="#008E76" d="M278.615 149.093a6.004 6.004 0 0 1-2.613 4.955l-20.837 15.644v-12.614c0-1.762.774-3.436 2.117-4.576 0 0 18.642-15.809 20.376-15.809 1.734-.001.957 12.4.957 12.4z"/><path fill="#FFD3B6" d="M138.608 7.309c-2.059-.301-4.09.203-5.264 3.91.381-4.926-1.365-6.078-3.635-6.41-2.328-.341-4.519.266-5.561 5.443.133-4.243-1.542-5.284-3.681-5.597-2.505-.367-4.689.387-5.616 6.723-.927 6.336.833 8.481 3.338 8.848 2.331.341 4.483-.983 5.518-6.273-.138 4.458 1.576 6.113 3.724 6.427 2.049.3 3.96-.687 5.096-4.522-.322 4.959 1.549 6.692 3.803 7.022 2.505.367 4.806-1.185 5.733-7.521.927-6.335-.95-7.683-3.455-8.05z"/><path fill="#FFD3B6" d="M124.035 37.81l.394.048.05.006c.029.003.035.004-.023 0l-.241-.007a3.143 3.143 0 0 0-.846.126c-.029.01-.02.009-.032.015a.162.162 0 0 0-.04.042c-.036.047.099.001.159.018.118-.028.267-.064.445-.117.383-.139.872-.328 1.458-.633 2.347-1.163 5.756-3.554 8.821-6.227 3.093-2.671 5.89-5.697 7.494-8.032.409-.581.744-1.116 1.005-1.58.144-.236.249-.449.347-.645.103-.198.196-.38.254-.532.147-.32.233-.551.278-.699l.087-.238.223-.605a3.508 3.508 0 0 1 6.777 1.63l-.065.539a12.25 12.25 0 0 1-.255 1.47 11.22 11.22 0 0 1-.249.981c-.097.351-.206.728-.342 1.102a25.877 25.877 0 0 1-.978 2.463c-1.552 3.474-4.135 7.495-7.101 11.209-2.98 3.725-6.254 7.144-9.436 9.601a25.498 25.498 0 0 1-2.414 1.666c-.422.247-.842.476-1.254.685-.485.215-.835.397-1.337.568l-.698.227-.333.098-.584.114c-.38.064-.736.105-1.062.13l-.643.034a61.12 61.12 0 0 0-.397.024 6.778 6.778 0 1 1 .39-13.499l.148.018z"/><path fill="#2B3B47" d="M247.035 68.109l-1.506 5.747-.009-.002c-.002.009.004.018.004.018a4.227 4.227 0 1 1-8.175-2.147l.003-.012-.018-.005 1.506-5.747.049.013c.731-2.046 2.895-3.239 5.036-2.678 2.135.559 3.436 2.661 3.068 4.801l.042.012zm48.908 12.813c.369-2.141-.935-4.243-3.076-4.804-2.133-.559-4.3.634-5.028 2.68l-.049-.013-1.506 5.747.018.005-.003.012a4.227 4.227 0 0 0 3.007 5.161 4.227 4.227 0 0 0 5.159-3.017l.004-.016 1.506-5.747-.032-.008z"/><path fill="#FFF" d="M242.012 67.032l-.375 1.432-.001.004a1.053 1.053 0 0 1-2.036-.534l.001-.004-.002-.001.375-1.432.01.003a1.053 1.053 0 0 1 1.254-.667c.531.139.857.664.763 1.195l.011.004zm49.238 12.9a1.047 1.047 0 0 0-.763-1.195 1.053 1.053 0 0 0-1.254.667l-.01-.003-.375 1.432.002.001-.001.004a1.053 1.053 0 0 0 2.036.534l.001-.004.375-1.432-.011-.004z"/><path fill="#68442A" d="M302.766 22.873c-1.881-1.661 4.467-2.945 2.137-4.333-1.897-1.128-12.387-2.411-14.586-3.321a54.68 54.68 0 0 0-6.976-2.329c-29.098-7.624-47.776 11.268-52.081 27.702l-5.465 20.86c5.613 1.471 10.666-10.071 15.984-22.149 5.445-12.382 15.768-12.529 24.316-9.899 6.773 4.956 22.395 16.169 24.955 16.065 19.856-.802 13.358 35.265 18.961 36.732l5.143-19.63c3.106-11.853.323-28.489-12.388-39.698z"/><path fill="#E5AB83" d="M263.911 95.323c-.72 0-1.447-.093-2.168-.282-2.792-.733-4.969-2.786-5.823-5.49a1.81 1.81 0 0 1 3.45-1.09c.479 1.514 1.709 2.666 3.293 3.082 1.587.417 3.229.017 4.392-1.07a1.809 1.809 0 0 1 2.469 2.643 8.2 8.2 0 0 1-5.613 2.207zm5.291 14.336a1.89 1.89 0 0 0-2.666-2.677c-2.21 2.201-5.386 3.031-8.497 2.213-3.108-.815-5.469-3.093-6.313-6.093a1.893 1.893 0 0 0-2.331-1.307 1.891 1.891 0 0 0-1.307 2.331c1.212 4.304 4.574 7.565 8.992 8.724 1.113.292 2.231.435 3.335.435 3.28 0 6.415-1.263 8.787-3.626zm-18.826-50.081a1.81 1.81 0 1 0 1.442-3.318l-.511-.197c-.32-.119-.772-.278-1.32-.452a26.88 26.88 0 0 0-4.126-.984 15.776 15.776 0 0 0-2.333-.198c-.374-.022-.763.024-1.117.04-.353.012-.712.101-1.027.146-.315.039-.622.168-.882.238a3.22 3.22 0 0 0-.676.274l-.579.297a1.287 1.287 0 0 0 1.03 2.353l.281-.103.326-.12c.098-.044.221-.095.393-.117.171-.022.33-.095.559-.097.225-.005.445-.054.715-.035.268.016.536-.002.839.046a12.74 12.74 0 0 1 1.883.331c1.294.31 2.586.782 3.529 1.179.473.197.861.373 1.125.499l.403.197.046.021zm39.023 6.553a1.81 1.81 0 0 0-1.912 1.704 1.81 1.81 0 0 0 1.704 1.912l.045.003.448.026c.292.02.717.057 1.225.117 1.017.116 2.374.339 3.654.703.646.173 1.259.396 1.803.635.287.107.512.254.753.371.245.116.413.267.606.381.199.114.302.255.44.359.139.104.222.209.286.295l.225.264.194.228a1.288 1.288 0 0 0 2.052-1.545l-.359-.542a3.14 3.14 0 0 0-.455-.57c-.192-.188-.396-.451-.652-.64-.253-.194-.521-.447-.824-.631-.301-.187-.617-.418-.954-.583a15.739 15.739 0 0 0-2.13-.971c-1.466-.559-2.953-.934-4.078-1.165-.563-.117-1.035-.2-1.372-.253l-.542-.079a1.02 1.02 0 0 0-.157-.019z"/><path fill="#EDC0A2" d="M249.94 125.338a43.843 43.843 0 0 1-21.886-13.487c5.149 8.789 13.647 15.618 24.279 18.403 21.279 5.575 43.06-7.158 48.636-28.44l.641-1.915c-8.381 19.835-30.232 31.056-51.67 25.439z"/><path fill="#FFD3B6" d="M200.769 33.012a2.331 2.331 0 0 0-3-1.367l-3.871 1.447c-.02.007-.076.273-.326.798-.106.256-.295.586-.514.961-.232.378-.522.808-.883 1.275-.365.466-.783.97-1.281 1.489-.027.03-.061.06-.089.09.394-1.449.542-2.932.454-4.396.434-1.082.79-2.456 1.036-4.204.893-6.341-.991-7.679-3.497-8.032-1.74-.245-4.545-1.729-8.417-2.365a7.645 7.645 0 0 0-1.003-.141c-3.823-.444-6.196.307-8.736-.051-2.507-.353-4.687.413-5.58 6.753-.199 1.414-.259 2.608-.215 3.63a40.233 40.233 0 0 0-1.427 3.08c-.327.736-.605 1.556-.927 2.409a51.87 51.87 0 0 0-.898 2.717c-.263.96-.564 1.933-.787 2.955a48.866 48.866 0 0 0-.655 3.091 55.263 55.263 0 0 0-.8 6.191c-.089.989-.079 1.977-.051 2.906.018.925.095 1.811.214 2.636.11.822.261 1.573.398 2.238.167.673.338 1.256.489 1.734.16.48.29.852.402 1.109l.16.391a7.816 7.816 0 0 0 12.619 2.707l.853-.81.266-.253c.182-.163.413-.406.703-.709.281-.305.609-.673.956-1.092l.03-.035c.156-.019.306-.04.411-.062l.588-.133c.846-.196 1.612-.482 2.431-.827a23.256 23.256 0 0 0 2.397-1.221 39.253 39.253 0 0 0 4.872-3.389 52.956 52.956 0 0 0 4.782-4.36c1.526-1.578 2.966-3.239 4.207-4.938 1.242-1.695 2.293-3.413 3.066-5.031.387-.809.703-1.592.951-2.316.24-.734.43-1.384.538-1.964.128-.558.18-1.034.215-1.355l.053-.49a2.368 2.368 0 0 0-.134-1.066z"/><path fill="#00B89C" d="M283.164 178.585c1.466-6.383-.475-13.348-5.688-18.039-11.007-9.906-54.306-40.691-63.987-51.885l-2.432-4.126-4.107-6.891c-2.714-4.612-5.165-9.345-7.691-13.954-2.474-4.629-4.805-9.313-6.725-13.887-1.076-2.283-1.953-4.524-2.777-6.712-.822-2.226-1.423-4.24-2.05-6.231l-.583-1.864c-1.826-5.79-30.735-9.884-27.249 4.583.099 3.619.383 7.186.949 10.447.536 3.292 1.153 6.515 1.919 9.574 1.56 6.185 3.512 11.982 5.569 17.705 2 5.75 4.482 11.197 6.94 16.636l2.694 5.682c-7.947-5.292-15.91-10.565-23.932-15.766l-15.203-52.015c-.475-1.624-1.725-2.699-3.435-3.335l.167.489c1.926 5.631-18.865 11.451-20.398 6.975l-.99-2.893c-1.412 1.211-2.199 2.52-1.986 3.81 1.042 6.653 3.332 15.302 4.603 21.889 0 0 2.304 11.004 3.811 19.764 4.041 23.499 22.646 40.274 22.646 40.274 4.314 4.198 8.96 7.992 13.423 12.008 2.282 1.947 4.442 4.042 6.824 5.867l7.08 5.555c2.342 1.873 4.714 3.71 7.214 5.391 2.464 1.725 4.893 3.491 7.482 5.064l4.159 2.527c.31.188.631.343.948.512l-15.454 93.375 112.721 12.542 9.154-101.555-13.616-1.516z"/><path fill="#008E76" d="M253.184 189.728l-1.009-.535c-.665-.34-1.605-.881-2.812-1.577-1.198-.707-2.689-1.511-4.305-2.564l-5.456-3.507c-2.008-1.278-4.081-2.791-6.314-4.342-2.193-1.601-4.51-3.282-6.855-5.084-2.337-1.81-4.764-3.664-7.123-5.667-1.197-.984-2.394-1.977-3.553-3.038a119.15 119.15 0 0 1-3.526-3.228c-2.288-2.239-4.531-4.453-6.659-6.734l-6.23-6.677c-1.994-2.188-3.954-4.267-5.721-6.329l-4.971-5.815c-1.523-1.816-2.933-3.464-4.11-4.997a179.79 179.79 0 0 1-3.05-3.959 39.116 39.116 0 0 1-1.848-2.642c-.385-.651-.552-1.001-.552-1.001s.211.332.657.916c.471.566 1.17 1.388 2.106 2.393 1.86 2.021 4.588 4.843 7.911 8.179 6.66 6.658 15.645 15.437 24.985 23.832 2.334 2.1 4.746 4.111 7.094 6.119l6.931 5.857a689.768 689.768 0 0 0 12.432 10.212 466.154 466.154 0 0 0 8.966 7.007l3.447 2.599a.362.362 0 0 1-.387.608l-.048-.026z"/></svg>');
                done();
            }).catch(err => {
                done(err);
            });
        });
    });
})();
