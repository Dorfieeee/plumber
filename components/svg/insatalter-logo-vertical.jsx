import { chakra } from "@chakra-ui/react";

const ChakraSVG = chakra("svg");

const Logo = ({ fill, ...rest }) => {
    return (
        <ChakraSVG
            id="navbarLogo"
            version="1.1"
            viewBox="0 0 250 166.82"
            sx={{
                "& > g": {
                    fill: fill || "secondary",
                },
            }}
            {...rest}
        >
            <g>
                <g
                    id="SvgjsG7194"
                    transform="matrix(.9377 0 0 .9377 81.908 -1.1245)"
                    featurekey="symbolFeature-0"
                >
                    <g id="g11">
                        <path
                            id="path3"
                            d="m20.3 70.2c1.2 0 2.1-0.9 2.1-2.1s-0.9-2.1-2.1-2.1h-5.5v-40.2l30.9-20 30.9 20v40.2h-5.3c-1.2 0-2.1 0.9-2.1 2.1s0.9 2.1 2.1 2.1h14.9c1.2 0 2.1-0.9 2.1-2.1s-0.9-2.1-2.1-2.1h-5.3v-37.5l6.1 4c1 0.6 2.3 0.4 2.9-0.6s0.4-2.3-0.6-2.9l-42.5-27.4c-0.7-0.4-1.6-0.4-2.3 0l-17 11v-9.3c0-1.2-0.9-2.1-2.1-2.1h-12.5c-1.2 0-2.1 0.9-2.1 2.1v20.1l-8.7 5.6c-1 0.6-1.2 1.9-0.6 2.9 0.4 0.6 1.1 1 1.8 1 0.4 0 0.8-0.1 1.1-0.3l6.2-4v37.4h-5.2c-1.2 0-2.1 0.9-2.1 2.1s0.9 2.1 2.1 2.1zm-5.4-64.8h8.3v9.9l-8.3 5.4v-15.3z"
                        />
                        <path
                            id="path5"
                            d="m65.4 69.8c0-10.2-16.3-28.8-18.1-30.9-0.4-0.4-1-0.7-1.6-0.7s-1.2 0.3-1.6 0.7c-1.8 2.1-18.1 20.7-18.1 30.9 0 10.9 8.8 19.7 19.7 19.7 10.8 0 19.7-8.9 19.7-19.7zm-35.2 0c0-6.6 10.1-19.9 15.5-26.3 5.4 6.4 15.5 19.7 15.5 26.3 0 8.5-7 15.5-15.5 15.5-8.6 0-15.5-7-15.5-15.5z"
                        />
                        <path
                            id="path7"
                            d="m54.4 74.6c-0.7-0.9-2-1.2-2.9-0.5-3.4 2.4-8.2 2.5-11.6 0.2-1-0.6-2.3-0.4-2.9 0.6s-0.4 2.3 0.6 2.9c2.4 1.6 5.2 2.4 8 2.4 3 0 5.9-0.9 8.3-2.7 0.9-0.7 1.1-2 0.5-2.9z"
                        />
                        <path
                            id="path9"
                            d="m52.7 26.6c0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c3.8 0 7-3.2 7-7zm-9.9 0c0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8z"
                        />
                    </g>
                </g>
                <g
                    id="SvgjsG7195"
                    transform="matrix(1.3461 0 0 1.3461 -3.5019 88.677)"
                    featurekey="nameFeature-0"
                >
                    <path
                        id="path14"
                        d="m26.52 40h-6.32l-10.12-13.92h-2.28v13.92h-5.2v-28.48h10.2c1.92 0 3.72 0.76 5.12 2.16s2.16 3.2 2.16 5.12c0 2.84-1.68 5.4-4.16 6.6zm-18.72-19.12h5c1.12 0 2.08-0.92 2.08-2.08s-0.96-2.08-2.08-2.08h-5v4.16zm30.336 19.56c-2.48 0-4.92-1-6.8-2.8-1.8-1.88-2.8-4.32-2.8-6.8 0-2.52 1-4.96 2.8-6.8 1.84-1.76 4.24-2.76 6.8-2.76 2.64 0 5.04 1 6.76 2.76 1.84 1.84 2.84 4.24 2.84 6.8s-1 4.96-2.84 6.8c-1.8 1.8-4.2 2.8-6.76 2.8zm0-14.6c-2.68 0-4.88 2.24-4.88 5s2.2 5 4.88 5c2.72 0 4.92-2.24 4.92-5s-2.2-5-4.92-5zm20.896 14.32c-0.56 0-1.16-0.08-1.88-0.2-2-0.4-3.88-1.28-5.36-2.6l-0.6-0.48 3-3.32 0.56 0.52c1.76 1.48 3.2 1.76 4.12 1.76 0.68 0 1.16-0.08 1.64-0.32 0.6-0.24 0.88-0.64 0.88-1.2 0-0.48-0.28-1.08-2.64-1.48-2.16-0.44-3.52-0.88-4.16-1.24-0.84-0.48-1.52-1.12-2-1.92s-0.72-1.68-0.72-2.68c0-1.04 0.32-2.04 0.96-2.96 0.52-0.76 1.28-1.36 2.4-1.92 0.92-0.44 1.96-0.64 3.2-0.64 0.44 0 0.88 0.04 1.28 0.08 1.76 0.28 3.52 1.04 4.96 2.16l0.6 0.48-2.84 3.28-0.56-0.44c-1.4-1.12-2.6-1.32-3.32-1.32-0.52 0-1 0.08-1.44 0.28-0.52 0.28-0.8 0.72-0.8 1 0 0.56 0.4 0.96 2.48 1.44 2.72 0.64 3.6 0.96 4.16 1.2 1.12 0.64 1.6 1.16 2 1.68 0.6 0.84 0.88 1.88 0.88 3 0 1.16-0.32 2.2-0.92 3.04s-1.4 1.56-2.56 2.12c-0.92 0.44-2.12 0.68-3.32 0.68zm19.096 0.28h-0.04c-1.16 0-2.36-0.28-3.48-0.8-1.04-0.44-2-1.16-2.88-2.08-1.4-1.52-2.24-3.52-2.44-5.6-0.04-0.36-0.08-0.72-0.08-1.12 0-0.8 0.12-1.64 0.32-2.48 0.36-1.6 1.12-3.08 2.2-4.2 0.8-0.88 1.72-1.56 2.88-2.12 1.08-0.52 2.28-0.76 3.52-0.76 1.28 0 2.44 0.24 3.52 0.76 1.2 0.56 2.16 1.28 2.88 2.12 1.04 1.12 1.84 2.56 2.24 4.2 0.2 0.76 0.28 1.56 0.28 2.48v0.92h-13.44l0.04 0.28c0.52 2.48 2.4 4.28 4.48 4.28h0.04c1.16-0.08 2.44-0.8 3.2-1.44l0.44-0.36 3.32 2.88-0.6 0.52c-0.44 0.4-1 0.88-1.6 1.2h-0.04c-1.44 0.84-3 1.28-4.76 1.32zm0-15c-1.56 0-3.12 1.08-3.96 2.76l-0.16 0.32h8.28l-0.16-0.32c-0.92-1.72-2.44-2.76-4-2.76zm30.816 14.56h-5.04v-9.8c0-2.16-1.72-3.84-3.88-3.84-2.08 0-3.88 1.72-3.88 3.84v9.8h-5v-18.32h5v1.32c1.24-1.24 2.56-1.68 3.88-1.68 2.4 0 4.64 0.92 6.32 2.56 1.68 1.72 2.6 3.96 2.6 6.32v9.8zm13.696 0.36c-2.52 0-4.92-0.96-6.76-2.76-1.8-1.84-2.8-4.24-2.8-6.76s1-4.92 2.8-6.76c1.8-1.8 4.2-2.76 6.76-2.76 1.68 0 3.2 0.6 4.52 1.8l0.2 0.16v-12.64h4.84v29.36h-4.84v-1.44l-0.2 0.2c-1.44 1.4-3.08 1.6-4.52 1.6zm0-14.36c-2.56 0-4.72 2.24-4.72 4.84 0 2.64 2.16 4.84 4.72 4.84s4.72-2.2 4.72-4.84c0-2.6-2.16-4.84-4.72-4.84zm23.456 14.44c-2.48 0-4.92-1-6.8-2.8-1.8-1.88-2.8-4.32-2.8-6.8 0-2.52 1-4.96 2.8-6.8 1.84-1.76 4.24-2.76 6.8-2.76 2.64 0 5.04 1 6.76 2.76 1.84 1.84 2.84 4.24 2.84 6.8s-1 4.96-2.84 6.8c-1.8 1.8-4.2 2.8-6.76 2.8zm0-14.6c-2.68 0-4.88 2.24-4.88 5s2.2 5 4.88 5c2.72 0 4.92-2.24 4.92-5s-2.2-5-4.92-5zm19.136 14.16h-5.04v-18.32h5.04v1.48c1.44-1.44 3.6-1.92 5.04-1.92h1.2l-1.2 5h-0.76c-2.36 0-4.28 1.84-4.28 4.04v9.72zm16.536 0h-4.84v-14.04h-2.6v-4.12h2.6v-4.72c0-1.76 0.68-3.4 1.88-4.6 1.28-1.2 2.92-1.88 4.64-1.88h4.88l-1.28 4.72h-3.52c-0.92 0-1.76 0.84-1.76 1.84v4.64h5.32v4.12h-5.32v14.04z"
                    />
                </g>
                <g
                    id="SvgjsG7196"
                    transform="matrix(.71682 0 0 .71682 44.684 152.37)"
                    featurekey="sloganFeature-0"
                >
                    <path
                        id="path17"
                        d="m13.86 5.42-5.86 14.58h-1.7l-5.86-14.58h1.68l5.04 12.86 5.06-12.86h1.64zm17.461 7.26c0 1.38-0.32 2.64-0.94 3.78-0.64 1.14-1.52 2.04-2.64 2.7-1.14 0.66-2.38 1-3.78 1-1.02 0-1.98-0.2-2.9-0.58-0.9-0.38-1.68-0.9-2.32-1.58-0.64-0.64-1.14-1.42-1.52-2.34-0.36-0.92-0.56-1.88-0.56-2.9 0-1.38 0.32-2.64 0.96-3.78 0.62-1.14 1.5-2.06 2.64-2.72 1.12-0.66 2.38-0.98 3.76-0.98 1.02 0 1.98 0.18 2.9 0.56 0.9 0.4 1.68 0.92 2.32 1.56 0.64 0.68 1.16 1.46 1.52 2.36 0.38 0.92 0.56 1.88 0.56 2.92zm-1.58 0.08c0-1.64-0.6-3.16-1.6-4.26s-2.5-1.8-4.18-1.8c-1.08 0-2.06 0.28-2.94 0.8-0.88 0.56-1.56 1.28-2.04 2.18-0.48 0.92-0.72 1.92-0.72 3 0 1.62 0.6 3.16 1.6 4.24 1 1.1 2.5 1.8 4.16 1.8 1.08 0 2.06-0.28 2.94-0.82 0.9-0.52 1.58-1.26 2.06-2.16s0.72-1.9 0.72-2.98zm5.9605 7.24v-14.58h4.34c1.12 0 2.16 0.18 3.12 0.56 0.96 0.36 1.78 0.88 2.44 1.52 1.34 1.3 2.14 3.14 2.14 5.18 0 1.06-0.2 2.06-0.6 2.98s-0.96 1.68-1.64 2.32c-1.38 1.26-3.34 2.02-5.46 2.02h-4.34zm1.54-13.14v11.7h2.74c1.22 0 2.3-0.26 3.22-0.76 0.94-0.5 1.68-1.18 2.18-2.06 0.52-0.88 0.78-1.9 0.78-3.02 0-1.66-0.62-3.14-1.68-4.2-1.04-1.04-2.66-1.66-4.5-1.66h-2.74zm25.62 13.14-1.6-3.72h-7.94l-1.6 3.72h-1.56l6.28-14.58h1.74l6.3 14.58h-1.62zm-2.18-5.12-3.4-7.88-3.38 7.88h6.78zm6.6205 0.06v-1.54h5.32v1.54h-5.32zm14.88-8.08v13.14h-1.52v-13.14h-4.88v-1.44h11.28v1.44h-4.88zm22.3 5.82c0 1.38-0.32 2.64-0.94 3.78-0.64 1.14-1.52 2.04-2.64 2.7-1.14 0.66-2.38 1-3.78 1-1.02 0-1.98-0.2-2.9-0.58-0.9-0.38-1.68-0.9-2.32-1.58-0.64-0.64-1.14-1.42-1.52-2.34-0.36-0.92-0.56-1.88-0.56-2.9 0-1.38 0.32-2.64 0.96-3.78 0.62-1.14 1.5-2.06 2.64-2.72 1.12-0.66 2.38-0.98 3.76-0.98 1.02 0 1.98 0.18 2.9 0.56 0.9 0.4 1.68 0.92 2.32 1.56 0.64 0.68 1.16 1.46 1.52 2.36 0.38 0.92 0.56 1.88 0.56 2.92zm-1.58 0.08c0-1.64-0.6-3.16-1.6-4.26s-2.5-1.8-4.18-1.8c-1.08 0-2.06 0.28-2.94 0.8-0.88 0.56-1.56 1.28-2.04 2.18-0.48 0.92-0.72 1.92-0.72 3 0 1.62 0.6 3.16 1.6 4.24 1 1.1 2.5 1.8 4.16 1.8 1.08 0 2.06-0.28 2.94-0.82 0.9-0.52 1.58-1.26 2.06-2.16s0.72-1.9 0.72-2.98zm10.6 1.54h-3.1v5.7h-1.54v-14.58h4.88c3.56-0.02 5.12 2.12 5.12 4.38 0 1.26-0.48 2.36-1.34 3.18-0.88 0.82-2.3 1.32-4.02 1.32zm0.12-7.44h-3.22v6.02h3.14c1.3 0 2.32-0.38 2.9-0.98 0.58-0.58 0.86-1.3 0.86-2.06 0-1.42-0.82-2.98-3.68-2.98zm9.2805 13.14v-14.58h9.12v1.42h-7.58v5.04h6.94v1.42h-6.94v5.28h7.66v1.42h-9.2zm24.1-14.58h1.5v14.58h-1.66l-8.7-12.4v12.4h-1.52v-14.58h1.78l8.6 12.26v-12.26zm9.0005-4.54h1.76l-2.38 3.2h-1.4zm-2.08 19.12v-14.58h1.54v14.58h-1.54zm6.3205-5.06v-1.54h5.32v1.54h-5.32zm14.74-0.64h-3.1v5.7h-1.54v-14.58h4.88c3.56-0.02 5.12 2.12 5.12 4.38 0 1.26-0.48 2.36-1.34 3.18-0.88 0.82-2.3 1.32-4.02 1.32zm0.12-7.44h-3.22v6.02h3.14c1.3 0 2.32-0.38 2.9-0.98 0.58-0.58 0.86-1.3 0.86-2.06 0-1.42-0.82-2.98-3.68-2.98zm9.2805 13.14v-14.58h1.54v13.14h6.92v1.44h-8.46zm17.12-7.6 4.66-6.98h1.74l-5.64 8.42v6.16h-1.56v-6.14l-5.64-8.44h1.84zm20.641-6.98h1.5v14.58h-1.66l-8.7-12.4v12.4h-1.52v-14.58h1.78l8.6 12.26v-12.26z"
                    />
                </g>
            </g>
        </ChakraSVG>
    );
};

export default Logo;
